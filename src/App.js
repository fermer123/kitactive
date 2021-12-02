import { Route, Routes } from 'react-router-dom';
import './App.css';
import Account from './components/account';
import Authorization from './components/authorization';
import Header from './components/header';
import Registration from './components/registration';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/account/' element={<Account />} />
        <Route path='/authorization/' element={<Authorization />} />
        <Route path='/registration/' element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
