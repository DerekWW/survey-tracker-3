import firebase from 'firebase';
import firebaseui from 'firebaseui'; /* eslint no-unused-vars: 0 */
/*eslint-disable*/
const user = {
  displayName: '',
  email: '',
  emailVerified: false,
  photoURL: '',
  uid: '',
};


const getUser = () => {
  console.log('getting user');
  return user;
}



const authUser = () => {
  return new Promise((resolve, reject) => {
    firebase.auth()
      .onAuthStateChanged((theUser) => {
        _checkUser(theUser)
        resolve(theUser)
      }, (error) => {
        console.log(error)
        reject(error);
      })
  })
}

const logout = () => {
  firebase.auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
      window.location.reload()
    }, (error) => {
      console.log('error in logout'); // An error happened.
      console.log(error);
      window.location.reload();
    });
};

const _initAuthUI = () => {
  const uiConfig = {
    callbacks: {
      signInSuccess: function(currentUser, credential, redirectUrl) {
        // user = currentUser;
        console.log('adding creds');
        user.google = credential
        return true
      },
    },
    signInSuccessUrl: '/#/dashboard',
    signInOptions: [{
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets.readonly',
      ],
    }, ],
    // Terms of service url.
    tosUrl: '/',
  };

  // Initialize the FirebaseUI Widget using Firebase.
  const ui = new firebaseui.auth.AuthUI(firebase.auth());
  // The start method will wait until the DOM is loaded.
  ui.start('#firebaseui-auth-container', uiConfig);
};

const _checkUser = (theUser) => {
  if (theUser) {
    console.log(theUser);
    user.displayName = theUser.displayName;
    user.email = theUser.email;
    user.emailVerified = theUser.emailVerified;
    user.photoURL = theUser.photoURL;
    user.uid = theUser.uid;
    user.isLogged = true;
    user.providerData = theUser.providerData;
    user.apiKey = theUser.apiKey;
    theUser.getToken()
      .then((token) => {
        user.accessToken = token;
      })
    console.log('The User: ' ,theUser);
  } else {
    console.log('NOT LOGGED IN checkUser function');
    user = {}
    user.displayName = '';
    user.email = '';
    user.emailVerified = false;
    user.photoURL = '';
    user.uid = '';
    user.isLogged = false;
    user.providerData = '';
    user.accessToken = '';
    _initAuthUI();
  };
};

export default {
  getUser,
  logout,
  authUser,
};
