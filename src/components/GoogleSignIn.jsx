import React from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// Initialize Firebase app with your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyDbcIjPmpMo0Q7WQ9nqDzmz0sEsBU2efFU",
  authDomain: "labhigh-enrollment-portal.firebaseapp.com",
  projectId: "labhigh-enrollment-portal",
  storageBucket: "labhigh-enrollment-portal.appspot.com",
  messagingSenderId: "220920558934",
  appId: "1:220920558934:web:3662a391aad581aae812f7",
  measurementId: "G-7XFM6D5BE7"
};

const firebaseApp = initializeApp(firebaseConfig);

// Get the auth instance and GoogleAuthProvider
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

const GoogleSignInButton = () => {
  
  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user.email;
      if(user === "amuinharniel.2003@gmail.com") {
        // Redirect to dashboard after successful sign-in
        window.location.href = '/dashboard';
      } else {
        console.error('Admin Login Only!');
        alert('You are not AUTHORIZED!')
      }
    } catch (error) {
      window.location.href = '/login';
      console.error('Error signing in with Google:', error.message);
    }
  };

  return (
    <button className=' rounded-full border border-solid border-white hover:bg-gray-800 bg-opacity-10 transition hover:shadow-lg' onClick={handleSignIn}>
      <div className='flex justify-center items-center gap-1 px-5 py-1'>
        <img src='google-icon.png' alt='google-icon' width={40} />
        <span className='text-white'>Sign in with Google</span>
      </div>
    </button>
  );
};

// Here we export the Sign-in button
export default GoogleSignInButton