import { useContext } from "react";
import UserContext from "../context/UserContext";
import Pm from './Payment.module.css';

const Payment = () => {
    const {...total} = useContext(UserContext);

    return(
        <>
        <h2 style={{textAlign: 'center', marginBottom: '10px'}}>주문 결제</h2>
        <p style={{textAlign: 'center', marginBottom: '30px'}}>수령정보</p>
        
        <center>
        <img src="https://imgcdn.pji.co.kr/pc/img/order_step_1_off.png"></img>
        <img src="https://imgcdn.pji.co.kr/pc/img/order_step_2_on.png"></img>
        <img src="https://imgcdn.pji.co.kr/pc/img/order_step_3_off.png"></img>
        </center>
        
        
        <center>
        <table>
            <tr className={Pm.table_top}>
            <td className={Pm.table}>수령인:  주영재</td>
            <td className={Pm.table}>전화번호:  010-1234-5678</td>
            </tr>
            <tr className={Pm.table_top}>
            <td className={Pm.table}>수령 주소: {total.delAddr}</td>
            <td className={Pm.table}>매장: {total.puInfo.branch} </td>
            </tr>
        </table>
        </center>

        <div style={{textAlign: 'center'}}>
            <input type="radio" name="test" className={Pm.ordertime}/> 배달시간(40 ~ 50분 예상) 
            <input type="radio" name="test" className={Pm.ordertime}/> 예약 주문
            <select className={Pm.ordertime}>
                <option>11시</option>
                <option>12시</option>
                <option>13시</option>
                <option>14시</option>
                <option>15시</option>
                <option>16시</option>
            </select>
            <select>
                <option>00분</option>
                <option>10분</option>
                <option>20분</option>
                <option>30분</option>
                <option>40분</option>
                <option>50분</option>
            </select>
            <br/>
        <span>※ 고객님께 최고의 품질 및 서비스를 제공해 드리기 위해 당일 예약주문이 불가하니 양해바랍니다.</span>
        </div>
      
        <h2 style={{textAlign: 'center', paddingTop: '50px'}}>주문 상품</h2>
        <div className={Pm.result}>
        <img src={`https://imgcdn.pji.co.kr/pc/img/menu/halfL/1000_20.png`}/>
        <img src={`https://imgcdn.pji.co.kr/pc/img/menu/halfR/1013_20.png`}/><br/>
        </div>
        <div style={{textAlign: 'center', borderBottom: '1px solid black', paddingBottom: '10px'}}>
        <span>수퍼 파파스 + 아이리쉬 포테이토 씬</span><br/>
        <span>39000원</span>
        </div>
        
        <div className={Pm.resultbtn}>
        <button type="button" className={Pm.resultbtn}>메뉴 추가</button>
        <button type="button" className={Pm.resultbtn}>주문 하기</button>
        </div>
        </>

    )
}

export default Payment;