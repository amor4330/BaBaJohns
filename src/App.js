import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path = "/">Home</Route>
      <Route path-="/halfandhalf/menu">메뉴</Route>
      <Route path = "/order/delivery">배달 주문</Route>
      <Route path = "/order/pickUp">포장 주문</Route>
    </Routes>
  );
}

export default App;
