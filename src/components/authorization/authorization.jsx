import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { login, test } from '../../redux/api/api';
import { Route, Routes } from 'react-router';
import Account from '../account';
import { NavLink } from 'react-router-dom';
// import Checkbox from '@mui/material/Checkbox';
import css from './authorization.module.css';
import { useDispatch } from 'react-redux';

const Authorization = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  return (
    <div className='css.authorization'>
      <h1>Authorization</h1>
      <div>
        <input
          placeholder={'Login'}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          placeholder={'Password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {/* <div>
        <Checkbox defaultChecked /> remember me
      </div> */}
      <div>
        <Button
          onClick={() => dispatch(login(email, password))}
          variant='contained'
          size='small'
        >
          Login
        </Button>
      </div>

      {/* <Routes>
        <Route
          path='/account/'
          render={(props) => (
            <Account {...props} setIsLoggedin={setIsLoggedin} />
          )}
        />
      </Routes>

      <div className={css.item}>
        <NavLink to='/account' activeClassName={css.activeLink}>
          Account
        </NavLink>
      </div> */}
    </div>
  );
};

export default Authorization;
