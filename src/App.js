import { Route, Routes } from 'react-router-dom';
import './App.css';
import Account from './components/account';
import Authorization from './components/authorization';
import Registration from './components/registration';

function App() {
  return (
    <Routes>
      <Route path='/account/' element={<Account />} />
      <Route path='/authorization/' element={<Authorization />} />
      <Route path='/registration/' element={<Registration />} />
    </Routes>
  );
}

export default App;
