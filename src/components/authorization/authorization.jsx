import React, { useState } from 'react';
import Button from '@mui/material/Button';
// import Checkbox from '@mui/material/Checkbox';

const Authorization = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
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
        <Button variant='contained' size='small'>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Authorization;
