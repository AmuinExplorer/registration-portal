import React, { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import HandleLogout from './Logout';

function Dashboard() {
  const [currentUser, setCurrentUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const icon = ['menu-icon.png', 'close-icon.png']

  // Toggle the menu button
  const toggleMenu = () => {
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
  };

  const changeIcon = () => {
    if(menuOpen) {
      return icon[1];
    } else {
      return icon[0];
    }
  }

  // Make sure that the user confirm logout first
  const confirmLogout = () => {
    const isOkay = prompt("Type \"yes\" to confirm");
    if(isOkay === "yes") {
      HandleLogout()
    } else {
      return false;
    }
  }

  // This will check if the user is already signed in
  useEffect(() => {
    const auth = getAuth();
    // Monitor authentication state changes
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        if (user.email === "amuinharniel.2003@gmail.com") {
          setCurrentUser(user);
        } else {
          // Redirect to login if user email is not authorized
          window.location.href = '/login';
        }
      } else {
        // Redirect to login if no user is signed in
        window.location.href = '/login';
      }
      setLoading(false);
    });

    // Clean up subscription
    return () => unsubscribe();
  }, []);

  // Render loading indicator until authentication state is determined
  if (loading) {
    return <div className=' h-screen flex justify-center items-center'><div><img width={50} src='loading-icon.gif' alt='loading...' /></div></div>;
  }

  return (
    <div className='relative'>
      <div className='flex justify-between mx-5 my-2 p-3 rounded-lg' style={{ backgroundImage: "url(https://www.minsu.edu.ph/template/images/about-bg.jpg)" }}>
        <div className='flex justify-center items-center gap-2'>
          <div>
            <img src='https://www.minsu.edu.ph/template/images/logo.png' alt='MinSU logo' width={100} />
          </div>
          <div>
            <p className=' text-2xl font-bold text-white'>DASHBOARD</p>
            <p className='text-1xl text-white'>Welcome, <span className='font-bold text-orange-600'>{currentUser && currentUser.displayName}</span></p>
          </div>
        </div>

        <div className='flex justify-center items-center mx-7'>
          <button onClick={toggleMenu}><img className=' hover:cursor-pointer menu-button' src={changeIcon()} alt='menu open' /></button>
        </div>

        {menuOpen && (
          <div className='absolute top-[100%] right-5 bg-gray-100 rounded-lg my-3'>
          <div className='w-[200px] h-[400px] p-5 flex flex-col'>
            <button className=' bg-slate-300 p-2 rounded-lg hover:shadow-md transition hover:bg-slate-200 text-red-700 font-extrabold' onClick={confirmLogout}>Logout</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
