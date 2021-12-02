import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import registration from './components/registration';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Route path='/account/' render={() => <account />} />
        <Route path='/authorization/' render={() => <authorization />} />
        <Route path='/registration/' render={() => <registration />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
