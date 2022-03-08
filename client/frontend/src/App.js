import './App.css';
import {Routes, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AddTransactions from './components/AddTransactions';
import PayerList from './components/PayerList';

function App() {
  return (
    <Routes>
      <Route path ="/" element={<LandingPage/>}/>
      <Route path ="/transactions" element={<AddTransactions/>}/>
      <Route path ="/payer" element={<PayerList/>}/>
    </Routes>
  );
}

export default App;
