import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

const Registration = (props) => {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

const LoginForm = (props) => {
  return (
    <form>
      <div>
        <input placeholder={'Login'} />
      </div>
      <div>
        <input placeholder={'Password'} />
      </div>
      <div>
        <Checkbox defaultChecked /> remember me
      </div>
      <div>
        <Button variant='contained' size='small'>
          Login
        </Button>
      </div>
    </form>
  );
};

export default Registration;
