import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Menu from './halfandhalf/Menu';
import Delivery from './order/Delivery';
import PickUp from './order/PickUp';

function App() {
  return (
    <Routes>
      <Route path = "/" element={<Home/>}>Home</Route>
      <Route path-="/menu" element={<Menu/>}>메뉴</Route>
      <Route path = "/delivery" element={<Delivery/>}>배달 주문</Route>
      <Route path = "/pickUp" element={<PickUp/>}>포장 주문</Route>
    </Routes>
  );
}

export default App;
