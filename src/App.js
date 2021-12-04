import { Route, Routes } from 'react-router-dom';
import './App.css';
import Account from './components/account';
import Authorization from './components/authorization';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Registration from './components/registration/registration';

function App() {
  return (
    <div className='app'>
      <Header />
      <Navbar />
      <div className='app-content'>
        <Routes>
          <Route path='/account/' element={<Account />} />
          <Route path='/authorization/' element={<Authorization />} />
          <Route path='/registration/' element={<Registration />} />
        </Routes>
      </div>
      <div className={'footer'}>© 2021 Smolin I.S.</div>
    </div>
  );
}

export default App;
