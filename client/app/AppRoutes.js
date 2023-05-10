import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AuthForm from '../features/auth/AuthForm';
import Home from '../features/home/Home';
import About from '../component/About';
import Guide from '../component/Guide';
import Chat from '../features/chat/Chat';
import SettingSelect from '../features/settings/SettingSelect';
import ClassSelect from '../features/class/class';
import { me } from './store';

/**
 * COMPONENT
 */

const AppRoutes = () => {
  const isLoggedIn = useSelector(state => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div id='routes'>
      {isLoggedIn ? (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/guide' element={<Guide />} />
          <Route path='/settings' element={<SettingSelect />} />
          <Route path='/class' element={<ClassSelect />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/*' element={<Home />} />
        </Routes>
      ) : (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/guide' element={<Guide />} />
          <Route path='/settings' element={<SettingSelect />} />
          <Route path='/class' element={<ClassSelect />} />
          <Route path='/chat' element={<Chat />} />

          <Route
            path='/login'
            element={<AuthForm name='login' displayName='Login' />}
          />
          <Route
            path='/signup'
            element={<AuthForm name='signup' displayName='Sign Up' />}
          />

          <Route
            path='/*'
            element={<AuthForm name='login' displayName='Login' />}
          />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
