import React from 'react';
import GoogleSignInButton from '../components/GoogleSignIn';

function Login() {
    return(
        <div className='flex justify-center align-middle items-center h-screen '>
            <div className='flex justify-center flex-col items-center px-10 py-20 rounded-lg' style={{ backgroundImage: "url(https://www.minsu.edu.ph/template/images/slides/slides_1.jpg)" }}>
                <img src='https://www.minsu.edu.ph/template/images/logo.png' alt='MinSU logo1' width={150} />
                <h2 className=' font-semibold text-white m-1'>WELCOME, ADMIN!</h2>
                <GoogleSignInButton />
            </div>
        </div>
    );
}

export default Login;