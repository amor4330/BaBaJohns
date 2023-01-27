import  { useState } from 'react';
import PopupDom from './PopupDom';
import PopupPostCode from './PopupPostCode';
import Delivery2 from './Delivery2';

//CSS파일 경로 링크
import './delivery.css'; 

const Delivery = () => {

   const [visible, setVisible] = useState(false);

   return (
      <>
         {/* 주문방법 선택 상단 */}
         <div className="selectOrder">
         <h2>주문 방법 선택</h2>
         <h4>주문 방법을 선택해주세요.</h4>
         </div>
         {/* 주문방법 선택 버튼 */}
         <div className="orderbtn">
            <button className = "orderbtn1" type = "button" onClick={() => {setVisible(!visible)}}> 
            {visible ? <img src="https://imgcdn.pji.co.kr/pc/img/orderway_1_on.png" /> :
            <img src = "https://imgcdn.pji.co.kr/pc/img/orderway_1_off.png" /> }
            </button>

            <button className = "orderbtn1" type = "button" onClick={() => {setVisible(visible)}}>
            {visible ? <img src="https://imgcdn.pji.co.kr/pc/img/orderway_2_off.png" /> :
            <img src = "https://imgcdn.pji.co.kr/pc/img/orderway_2_on.png" /> }
            </button>
            {visible ? <Delivery2 /> : null}
         </div>
      </>
   )
}

export default Delivery;