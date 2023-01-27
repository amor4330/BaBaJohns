import { Fragment, useRef, useState } from "react";
import './../babacss/Menu.css';


const Menu = () => {

   const leftImgPizza = useRef();
   const rigthImgPizza = useRef();

   const handleChange = (e) => {
      if (e.target.name === "lefthalf") {
         leftImgPizza.current.src = `${e.target.value}`
      } else {
         rigthImgPizza.current.src = `${e.target.value}`
      }
   }


   const [dough, setDough] = useState("10")
   const doughClick = (e) => {   
      setDough(e.target.value);
   }

   return (
      <Fragment>
         <section>
            <div className="mainselect">
               <div className="detail_main_wrap">
                  <div className="left">
                     <div className="leftImgBlock board">
                        <div className="leftImg">
                           <img id="ImgLPizza" src="https://imgcdn.pji.co.kr/pc/img/menu/halfL/1000_10.png" alt="왼쪽" ref={leftImgPizza} />
                        </div>
                        <div className="rightImg">
                           <img id="ImgRPizza" src="https://imgcdn.pji.co.kr/pc/img/menu/halfR/1000_10.png" alt="오른쪽" ref={rigthImgPizza} />
                        </div>
                     </div>
                     <div className="detailNotice">
                        <span>*상기 이미지는 실제 제품과 다를 수 있습니다.</span>
                     </div>
                  </div>
               </div>




               <div className="right">
                  <div className="rightSelect boardTest">
                     <div className="rightwrap">
                        <h3 className="leftMenuShow">두가지 맛의 절묘한 조화</h3>
                        <div className="rightMenuShow">하프앤하프</div>
                     </div>
                     <div className="rightwrap2">
                        <strong>두가지 각각 다른 피자를 한판에 조합하여 주문</strong>
                     </div>
                     <div className="selectDough">
                        <ul className="detail_halfnhalf_dough_wrap">
                           <li>
                              <label className="custom_radio">
                                 <input type="radio" name="dough" value="10" onChange={doughClick}/>
                                 <div className={`img_wrap ${dough === '10' ? 'test' : ''}`}>
                                    <img src="https://imgcdn.pji.co.kr/pc/img/dough_10_off.png" alt="오리지날 도우 배너" className="icon off"/>
                                    <img src="https://imgcdn.pji.co.kr/pc/img/dough_10_on.png" alt="오리지날 도우 배너" className="icon on" />
                                 </div>
                              </label>
                           </li>
                           <li>
                              <label className="custom_radio">
                                 <input type="radio" name="dough" value="20" onChange={doughClick}/>
                                 <div className={`img_wrap ${dough === '20' ? 'test' : ''}`}>
                                    <img src="https://imgcdn.pji.co.kr/pc/img/dough_20_off.png" alt="씬 도우 배너" className="icon off" />
                                    <img src="https://imgcdn.pji.co.kr/pc/img/dough_20_on.png" alt="씬 도우 배너" className="icon on" />
                                 </div>
                              </label>
                           </li>
                           <li>
                              <label className="custom_radio">
                                 <input type="radio" name="dough" value="30" onChange={doughClick}/>
                                 <div className={`img_wrap ${dough === '30' ? 'test' : ''}`}>
                                    <img src="https://imgcdn.pji.co.kr/pc/img/dough_30_off.png" alt="치즈롤 도우 배너" className="icon off" />
                                    <img src="https://imgcdn.pji.co.kr/pc/img/dough_30_on.png" alt="치즈롤 도우 배너" className="icon on" />
                                 </div>
                              </label>
                           </li>
                           <li>
                              <label className="custom_radio">
                                 <input type="radio" name="dough" value="40" onChange={doughClick}/>
                                 <div className={`img_wrap ${dough === '40' ? 'test' : ''}`}>
                                    <img src="https://imgcdn.pji.co.kr/pc/img/dough_40_off.png" alt="골드링 도우 배너" className="icon off" />
                                    <img src="https://imgcdn.pji.co.kr/pc/img/dough_40_on.png" alt="골드링 도우 배너" className="icon on" />
                                 </div>
                              </label>
                           </li>

                        </ul>
                       
                     </div>
                     <div className="selectPizza selectPizza_left">
                        <select name="lefthalf" className="leftHalf selector" onChange={handleChange}>
                           <option value={"https://imgcdn.pji.co.kr/pc/img/menu/halfL/1002_10.png"}>가든 스페셜</option>
                           <option value={"https://imgcdn.pji.co.kr/pc/img/menu/halfL/1012_10.png"}>마가리타</option>
                           <option value={"https://imgcdn.pji.co.kr/pc/img/menu/halfL/1000_10.png"}>수퍼 파파스</option>
                           <option value={"https://imgcdn.pji.co.kr/pc/img/menu/halfL/1342_10.png"}>스파이시 이탈리안</option>
                           <option value={"https://imgcdn.pji.co.kr/pc/img/menu/halfL/1655_10.png"}>식스 치즈</option>
                           <option value={"https://imgcdn.pji.co.kr/pc/img/menu/halfL/1013_10.png"}>아이리쉬 포테이토</option>
                           <option value={"https://imgcdn.pji.co.kr/pc/img/menu/halfL/1001_10.png"}>올미트</option>
                           <option value={"https://imgcdn.pji.co.kr/pc/img/menu/halfL/1656_10.png"}>존스 페이버릿</option>
                           <option value={"https://imgcdn.pji.co.kr/pc/img/menu/halfL/1028_10.png"}>치킨 바베큐</option>
                           <option value={"https://imgcdn.pji.co.kr/pc/img/menu/halfL/1011_10.png"}>페퍼로니</option>
                           <option value={"https://imgcdn.pji.co.kr/pc/img/menu/halfL/1015_10.png"}>하와이안</option>
                           <option value={"https://imgcdn.pji.co.kr/pc/img/menu/halfL/1014_10.png"}>핫 앤 스파이시 멕시칸</option>
                        </select>
                     </div>
                     <div className="selectPizza selectPizza_right">
                        <select name="righthalf" className="rightHalf selector" onChange={handleChange}>
                           <option value={"https://imgcdn.pji.co.kr/pc/img/menu/halfR/1002_10.png"}>가든 스페셜</option>
                           <option value={"https://imgcdn.pji.co.kr/pc/img/menu/halfR/1012_10.png"}>마가리타</option>
                           <option value={"https://imgcdn.pji.co.kr/pc/img/menu/halfR/1000_10.png"}>수퍼 파파스</option>
                           <option value={"https://imgcdn.pji.co.kr/pc/img/menu/halfR/1342_10.png"}>스파이시 이탈리안</option>
                           <option value={"https://imgcdn.pji.co.kr/pc/img/menu/halfR/1655_10.png"}>식스 치즈</option>
                           <option value={"https://imgcdn.pji.co.kr/pc/img/menu/halfR/1013_10.png"}>아이리쉬 포테이토</option>
                           <option value={"https://imgcdn.pji.co.kr/pc/img/menu/halfR/1001_10.png"}>올미트</option>
                           <option value={"https://imgcdn.pji.co.kr/pc/img/menu/halfR/1656_10.png"}>존스 페이버릿</option>
                           <option value={"https://imgcdn.pji.co.kr/pc/img/menu/halfR/1028_10.png"}>치킨 바베큐</option>
                           <option value={"https://imgcdn.pji.co.kr/pc/img/menu/halfR/1011_10.png"}>페퍼로니</option>
                           <option value={"https://imgcdn.pji.co.kr/pc/img/menu/halfR/1015_10.png"}>하와이안</option>
                           <option value={"https://imgcdn.pji.co.kr/pc/img/menu/halfR/1014_10.png"}>핫 앤 스파이시 멕시칸</option>
                        </select>
                     </div>
                     <div className="order_notice">
                        <span>하프&하프 주문시 기본/제휴 할인만 가능합니다.</span>
                        <span>하프&하프 주문 시 1,000원의 추가비용이 발생합니다.</span>
                     </div>
                  </div>








                  <div className="detailNotice">
                     <span>*상기 이미지는 실제 제품과 다를 수 있습니다.</span>
                  </div>
               </div>
            </div>

         </section>
      </Fragment >
   )
}

export default Menu;