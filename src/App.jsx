import Header from './components/Header';
import { Outlet } from 'react-router-dom';

import './App.css';


function App() {
  return (
    <section className='interface'>
      <Header />
      <Outlet />
    </section>
  );
}

export default App;
