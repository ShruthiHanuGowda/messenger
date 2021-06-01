import React from 'react';
import { FacebookOutlined, GoogleOutlined } from '@ant-design/icons';
import 'firebase/app';
import { auth } from '../firebase';
import firebase from 'firebase/app';

const Login = () => {
  return (
    <div className='login-page'>
      <div className='login-card'>
        <h2>Welcom to Unichat</h2>
        <div
          className='login-button google'
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <GoogleOutlined />
          Sign In with Google
        </div>
        <br /> <br />
        <div
          className='login-button facebook'
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())
          }
        >
          <FacebookOutlined />
          Sign In with Facebook
        </div>
      </div>
    </div>
  );
};

export default Login;
