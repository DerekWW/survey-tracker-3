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
  return user;
};

const authUser = () => {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged((theUser) => {
      _checkUser(theUser);
      resolve(theUser);
    }, (error) => {
      console.log(error);
      reject(error);
    });
  });
};

const logout = () => {
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
    window.location.reload();
  }, (error) => {
    // An error happened.
    console.log(error);
    window.location.reload();
  });
};

const _initAuthUI = () => {
  const uiConfig = {
    signInSuccessUrl: '/#/dashboard',
    signInOptions: [
      {
        provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        scopes: [
          'https://www.googleapis.com/auth/spreadsheets.readonly',
        ],
      },
      // Leave the lines as is for the providers you want to offer your users.
    ],
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
    user.displayName = theUser.displayName;
    user.email = theUser.email;
    user.emailVerified = theUser.emailVerified;
    user.photoURL = theUser.photoURL;
    user.uid = theUser.uid;
    user.isLogged = true;
    user.providerData = theUser.providerData;
    theUser.getToken().then((token) => {
      user.accessToken = token;
    })
  } else {
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

export default { getUser, logout, authUser };
