import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { registration } from '../../redux/api/api';
// const selectedData = useSelector(email, password, name);

const Registration = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  return (
    <div>
      <h1>Registration</h1>
      <div>
        <input
          placeholder={'Name'}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          placeholder={'login'}
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

      <div>
        <Checkbox defaultChecked /> remember me
      </div>
      <div>
        <Button
          variant='contained'
          size='small'
          onClick={() => registration(email, password, name)}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Registration;
