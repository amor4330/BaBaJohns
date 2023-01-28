import { Fragment, useContext, useState } from "react";
import UserContext from "../context/UserContext";
import Pm from './Payment.module.css';

const Payment = () => {
    const { ...total } = useContext(UserContext);

    //가격
    const totalPrice = total.price * total.menuInfo.count;



    let result1 = "";
    let result2 = "";
    let result3 = "";
    let result4 = "";

    if (total.menuInfo.pizzaL === "1002") {
        result1 = "가든스페셜 +";
    } else if (total.menuInfo.pizzaL === "1012") {
        result1 = '마가리타 +';
    } else if (total.menuInfo.pizzaL === "1000") {
        result1 = '수퍼 파파스 +';
    } else if (total.menuInfo.pizzaL === "1342") {
        result1 = '스파이시 이탈리안 +';
    } else if (total.menuInfo.pizzaL === "1655") {
        result1 = '식스 치즈 +';
    } else if (total.menuInfo.pizzaL === "1013") {
        result1 = '아이리쉬 포테이토 +';
    } else if (total.menuInfo.pizzaL === "1001") {
        result1 = '올미트 +';
    } else if (total.menuInfo.pizzaL === "1656") {
        result1 = '존스 페이버릿 +';
    } else if (total.menuInfo.pizzaL === "1028") {
        result1 = '치킨 바베큐 +';
    } else if (total.menuInfo.pizzaL === "1011") {
        result1 = '페퍼로니 +';
    } else if (total.menuInfo.pizzaL === "1015") {
        result1 = '하와이안 +';
    } else if (total.menuInfo.pizzaL === "1014") {
        result1 = '핫 앤 스파이시 멕시칸 +';
    }
    //오른쪽피자
    if (total.menuInfo.pizzaR === "1002") {
        result2 = "가든스페셜";
    } else if (total.menuInfo.pizzaR === "1012") {
        result2 = '마가리타';
    } else if (total.menuInfo.pizzaR === "1000") {
        result2 = '수퍼 파파스';
    } else if (total.menuInfo.pizzaR === "1342") {
        result2 = '스파이시 이탈리안';
    } else if (total.menuInfo.pizzaR === "1655") {
        result2 = '식스 치즈';
    } else if (total.menuInfo.pizzaR === "1013") {
        result2 = '아이리쉬 포테이토';
    } else if (total.menuInfo.pizzaR === "1001") {
        result2 = '올미트';
    } else if (total.menuInfo.pizzaR === "1656") {
        result2 = '존스 페이버릿';
    } else if (total.menuInfo.pizzaR === "1028") {
        result2 = '치킨 바베큐';
    } else if (total.menuInfo.pizzaR === "1011") {
        result2 = '페퍼로니';
    } else if (total.menuInfo.pizzaR === "1015") {
        result2 = '하와이안';
    } else if (total.menuInfo.pizzaR === "1014") {
        result2 = '핫 앤 스파이시 멕시칸';
    }
    //도우
    if (total.menuInfo.dough === '10') {
        result3 = ' 오리지널';
    } else if (total.menuInfo.dough === '20') {
        result3 = ' 씬';
    } else if (total.menuInfo.dough === '30') {
        result3 = ' 치즈롤';
    } else if (total.menuInfo.dough === '40') {
        result3 = ' 골드링';
    }
    //사이즈
    if (total.menuInfo.size === 'large') {
        result4 = '라지';
    } else if (total.menuInfo.size === 'family') {
        result4 = '패밀리';
    } else if (total.menuInfo.size === 'party') {
        result4 = '파티';
    }


    const orderdPizzaInfo = result1 + result2 + result3;


    return (
        <Fragment>
            <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>주문 결제</h2>
            <p style={{ textAlign: 'center', marginBottom: '30px' }}>수령정보</p>

            <center>
                <img src="https://imgcdn.pji.co.kr/pc/img/order_step_1_off.png" alt="장바구니"></img>
                <img src="https://imgcdn.pji.co.kr/pc/img/order_step_2_on.png" alt="주문결제"></img>
                <img src="https://imgcdn.pji.co.kr/pc/img/order_step_3_off.png" alt="주문완료"></img>
            </center>
            <center>
                <table>
                    <thead >
                        <tr>
                            <td className={Pm.table_head}>수령정보</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={Pm.table_top}>
                            <td className={`${Pm.table} ${Pm.table_rigth}`}>수령인: 강민정</td>
                            <td className={Pm.table}>전화번호:  010-1234-5678</td>
                        </tr>
                        <tr className={Pm.table_top}>
                            <td className={`${Pm.table} ${Pm.table_rigth}`}>수령 주소: {total.delAddr}</td>
                            <td className={Pm.table}>매장: {total.puInfo.branch} </td>
                        </tr>
                    </tbody>
                </table>
            </center>
            <section style={{width:"80%", margin:"0 auto"}}>
                <div className={Pm.order_time_wrap}>
                    <input type="radio" name="test" className={Pm.ordertime} defaultChecked /> 배달시간(40 ~ 50분 예상)
                    <input type="radio" name="test" className={Pm.ordertime} /> 예약 주문
                    <select className={Pm.ordertime}>
                        <option>11시</option>
                        <option>12시</option>
                        <option>13시</option>
                        <option>14시</option>
                        <option>15시</option>
                        <option>16시</option>
                        <option>17시</option>
                        <option>18시</option>
                        <option>19시</option>
                        <option>20시</option>
                        <option>21시</option>
                    </select>
                    <select>
                        <option>00분</option>
                        <option>10분</option>
                        <option>20분</option>
                        <option>30분</option>
                        <option>40분</option>
                        <option>50분</option>
                    </select>
                    <br />
                    <span>※ 고객님께 최고의 품질 및 서비스를 제공해 드리기 위해 당일 예약주문이 불가하니 양해바랍니다.</span>
                </div>

                <h2 style={{ textAlign: 'center', paddingTop: '50px' }}>주문 상품</h2>
                <div className={Pm.result}>
                    <img src={`https://imgcdn.pji.co.kr/pc/img/menu/halfL/${total.menuInfo.pizzaL}_${total.menuInfo.dough}.png`} alt="왼쪽피자" />
                    <img src={`https://imgcdn.pji.co.kr/pc/img/menu/halfR/${total.menuInfo.pizzaR}_${total.menuInfo.dough}.png`} alt="오른쪽피자" /><br />
                </div>
                <div style={{ textAlign: 'center', borderBottom: '1px solid black', paddingBottom: '10px' }}>
                    <span>{orderdPizzaInfo}</span>
                    <span> X {total.menuInfo.count}</span>
                    <div className={Pm.size_box}><span>{result4}</span></div>
                    <div>
                        <span>{[totalPrice].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</span>
                    </div>
                </div>

                <div className={Pm.resultbtn}>
                    <button type="button" className={Pm.resultbtn}>메뉴 추가</button>
                    <button type="button" className={Pm.resultbtn}>주문 하기</button>
                </div>
            </section>
        </Fragment>

    )
}

export default Payment;