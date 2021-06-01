import React, { useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase';

import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';

const Chats = () => {
  const history = useHistory();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  const handleLogout = async () => {
    await auth.signOut();
    history.push('/');
  };

  useEffect(() => {
    if (!user) {
      history.push('/');
      return;
    }

    //get already created user
    axios
      .get('https://api.chatengine.io/users/me', {
        headers: {
          'project-id': '12078e74-17af-48eb-a171-636534d7214a',
          'user-name': user.email,
          'user-secret': user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formData = new FormData();
        formData.append('email', user.email);
        formData.append('username', user.displayName);
        formData.append('secret', user.uid);
      });
  }, [user, history]);

  return (
    <div className='chats-page'>
      <div className='nav-bar'>
        <div className='logo-tab'>Unichat</div>
        <div onClick={handleLogout} className='logout-tab'>
          Logout
        </div>
      </div>
      <ChatEngine
        height='calc(100vh-66px)'
        projectId='12078e74-17af-48eb-a171-636534d7214a'
        userName='.'
        userSecret='.'
      />
    </div>
  );
};

export default Chats;
