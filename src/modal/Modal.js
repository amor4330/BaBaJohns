import "./Modal.css"
import  { useState } from 'react';
import Delivery2 from '../order/Delivery2';
import PickUp from '../order/PickUp';
import delivery from '../order/delivery.module.css';

const Modal = ({closeModal}) => {

   const [del_visible, setDel_visible] = useState(true);
   const [pu_visible, setPu_visible] = useState(false)

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
               <button className = {delivery.orderbtn1} id = "del_btn" type = "button" onClick={() => {setDel_visible(true)
               setPu_visible(false)}}> 
               {del_visible ? <img src="https://imgcdn.pji.co.kr/pc/img/orderway_1_on.png" /> :
               <img src = "https://imgcdn.pji.co.kr/pc/img/orderway_1_off.png" /> }
               </button>

               <button className = {delivery.orderbtn1} id = "pu_btn" type = "button" onClick={() => {setDel_visible(false)
               setPu_visible(true)}}>
               {pu_visible ? <img src="https://imgcdn.pji.co.kr/pc/img/orderway_2_on.png" /> :
               <img src = "https://imgcdn.pji.co.kr/pc/img/orderway_2_off.png" /> }
               </button>
            </div>
            <div className="footer">
               {del_visible ? <Delivery2 /> : <PickUp/>}
               <p>
               </p>
            </div>
            
            <button className="btn">진행시켜</button>
         </div>
      </div>
   )
}

export default Modal;