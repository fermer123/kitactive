import { BrowserRouter } from 'react-router-dom';
import './App.css';
import account from './redux/account';
import authorization from './redux/authorization';
import registration from './redux/registration';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Route path='/account/' render={() => <account />} />
        <Route path='/authorization/' render={() => <authorization />} />
        <Route path='/account/' render={() => <registration />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
