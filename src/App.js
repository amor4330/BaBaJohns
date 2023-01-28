import './App.css';
import { Route, Routes } from 'react-router-dom';
import Delivery from './order/delivery';
import PickUp from './order/PickUp';
import Menu from './halfandhalf/menu';
import { BabaProvider } from './context/UserContext';
import Payment from './payment/Payment';
import Home from './Home/Home';
import Header from './Home/Header';


function App() {

  return (

    <BabaProvider>

      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/payment" element={<Payment />} />
        </Route>
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/pickUp" element={<PickUp />} />
      </Routes>
    </BabaProvider>



  );
}

export default App;