import { getAuth, signOut } from 'firebase/auth';

const HandleLogout = async () => {
    const auth = getAuth();
    signOut(auth)
    .then(() => {
        console.log('User signed out successfully');
    })
    .catch(error => {
        console.error('Error signing out:', error.message);
    });
  };

export default HandleLogout;