import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

const Authorization = (props) => {
  return (
    <div>
      <h1>Authorization</h1>
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
    </div>
  );
};

export default Authorization;
