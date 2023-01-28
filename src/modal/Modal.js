import "./Modal.css"
import  { useContext, useState } from 'react';
import Delivery2 from '../order/Delivery2';
import PickUp from '../order/PickUp';
import delivery from '../order/delivery.module.css';
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

const Modal = ({closeModal, value}) => {

   const [showModal, setShowModal] = useState(value);
   const {...total} = useContext(UserContext);

   const navigate = useNavigate();
   const navigateToMenu = () => {
      navigate("/menu");
   }
   const toMenuClick = () => {
      if(total.delAddr.basicAddr.length <= 1){
         alert("주소를 입력하세요.")
         return;
      }
      navigateToMenu();
   }

   return (
      <div className="modalBackground">
         <div className="modalContainer">
            <div className="titleCloseBtn">
            <button onClick={() => closeModal(false)}> X </button>
            </div>
            <div className="title">
               <h2>주문 방법 선택</h2><br/>
               <h4>주문 방법을 선택해주세요.</h4>
            </div>
            <div className="body">
               <button className = {delivery.orderbtn1} id = "del_btn" type = "button" name="btn_del" onClick={() => {setShowModal("btn_del")}}> 
               {showModal === 'btn_del' ? <img src="https://imgcdn.pji.co.kr/pc/img/orderway_1_on.png" alt="" /> :
               <img src = "https://imgcdn.pji.co.kr/pc/img/orderway_1_off.png" alt="" /> }
               </button>

               <button className = {delivery.orderbtn1} id = "pu_btn" type = "button" name="btn_pu" onClick={() => {setShowModal("btn_pu");}}>
               {showModal !== 'btn_del' ? <img src="https://imgcdn.pji.co.kr/pc/img/orderway_2_on.png" alt="" /> :
               <img src = "https://imgcdn.pji.co.kr/pc/img/orderway_2_off.png" alt="" /> }
               </button>
            </div>
            <div className="footer">
               {showModal === 'btn_del' ? <Delivery2 /> : <PickUp/>}
               <p>
               </p>
            </div>
            
            <button className="btn" onClick = {toMenuClick}>진행시켜</button>
         </div>
      </div>
   )
}

export default Modal;