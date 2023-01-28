import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Delivery from './order/delivery';
import PickUp from './order/PickUp';
import Menu from './halfandhalf/menu';
import {BabaProvider } from './context/UserContext';
import Payment from './payment/Payment';


function App() {

  return (
    
    <BabaProvider>
    
      <Routes>
          <Route path = "/" element={<Home/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path = "/delivery" element={<Delivery/>}/>
          <Route path = "/pickUp" element={<PickUp/>}/>
          <Route path = "/payment" element={<Payment/>}/>
      </Routes>
    </BabaProvider>



  );
}

export default App;