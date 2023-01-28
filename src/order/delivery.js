import  { useState } from 'react';
import Delivery2 from './Delivery2';
import PickUp from './PickUp';

//CSS파일 경로 링크
import delivery from './delivery.module.css';

const Delivery = () => {

   const [del_visible, setDel_visible] = useState(true);
   const [pu_visible, setPu_visible] = useState(false)

   return (
      <>
         {/* 주문방법 선택 상단 */}
         <div className={delivery.selectOrder}>
         <h2>주문 방법 선택</h2><br/>
         <h4>주문 방법을 선택해주세요.</h4>
         </div>
         {/* 주문방법 선택 버튼 */}
         <div className={delivery.orderbtn}>
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
            {del_visible ? <Delivery2 /> : <PickUp/>}

            <button>진행시켜</button>

         </div>
      </>
   )
}

export default Delivery;