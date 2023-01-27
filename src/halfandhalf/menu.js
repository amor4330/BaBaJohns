import { Fragment, useRef, useState } from "react";
import menuCss from './../babacss/Menu.module.css';


const Menu = () => {

   const leftImgPizza = useRef(null);
   const rigthImgPizza = useRef(null);

   
   // 사이즈바꾸기
   const [size,setSize] = useState('large');
   const sizeChange = (e) => {
      setSize(e.target.dataset.sizeName);
   }
   console.log(size);

   // 도우바꾸기
   const [dough, setDough] = useState("10")
   const doughClick = (e) => {
      setDough(e.target.value);
   }
   
   // 피자바꾸기
   const [pizzaL, setPizzaL] = useState(`1000`);
   const [pizzaR, setPizzaR] = useState(`1000`);
   const handleChange = (e) => {
      if (e.target.name === "lefthalf") {
         setPizzaL(e.target.value);
      } else {
         setPizzaR(e.target.value);
      }
   }



   return (
      <Fragment>
         <section>
            <div className={menuCss.mainselect}>
               <div className={menuCss.detail_main_wrap}>
                  <div className={menuCss.left}>
                     <div className={menuCss.leftImgBlock}>
                        <div className={menuCss.leftImg}>
                           <img id="ImgLPizza" src={`https://imgcdn.pji.co.kr/pc/img/menu/halfL/${pizzaL}_${dough}.png`} alt="왼쪽" ref={leftImgPizza} />
                        </div>
                        <div className={menuCss.rightImg}>
                           <img id="ImgRPizza" src={`https://imgcdn.pji.co.kr/pc/img/menu/halfR/${pizzaR}_${dough}.png`} alt="오른쪽" ref={rigthImgPizza} />
                        </div>
                     </div>
                     <div className={menuCss.detailNotice}>
                        <span>*상기 이미지는 실제 제품과 다를 수 있습니다.</span>
                     </div>
                  </div>
               </div>
               <div className={menuCss.detail_main_wrap}>
                  <div className={menuCss.right}>
                     <div className={`${menuCss.rightSelect} ${menuCss.boardTest}`}>
                        <div className={menuCss.rightwrap}>
                           <h3 className={menuCss.leftMenuShow}>두가지 맛의 절묘한 조화</h3>
                           <div className={menuCss.rightMenuShow}>하프앤하프</div>
                        </div>
                        <div className={menuCss.rightwrap2}>
                           <strong>두가지 각각 다른 피자를 한판에 조합하여 주문</strong>
                        </div>
                        <div className={menuCss.selectDough}>
                           <ul className={menuCss.detail_halfnhalf_dough_wrap}>
                              <li>
                                 <label className={menuCss.custom_radio}>
                                    <input type="radio" name="dough" value="10" onChange={doughClick} />
                                    {/* <div className="img_wrap {dough === '10' ? `choosed` : ``}"> */}
                                    <div className={`${menuCss.img_wrap} ${dough === '10' ? menuCss.choosed : ''}`}>
                                       <img src="https://imgcdn.pji.co.kr/pc/img/dough_10_off.png" alt="오리지날 도우 배너" className={`${menuCss.icon} ${menuCss.off}`} />
                                       <img src="https://imgcdn.pji.co.kr/pc/img/dough_10_on.png" alt="오리지날 도우 배너" className={`${menuCss.icon} ${menuCss.on}`} />
                                    </div>
                                 </label>
                              </li>
                              <li>
                                 <label className={menuCss.custom_radio}>
                                    <input type="radio" name="dough" value="20" onChange={doughClick} />
                                    <div className={`${menuCss.img_wrap} ${dough === '20' ? menuCss.choosed : ''}`}>
                                       <img src="https://imgcdn.pji.co.kr/pc/img/dough_20_off.png" alt="씬 도우 배너"className={`${menuCss.icon} ${menuCss.off}`} />
                                       <img src="https://imgcdn.pji.co.kr/pc/img/dough_20_on.png" alt="씬 도우 배너" className={`${menuCss.icon} ${menuCss.on}`} />
                                    </div>
                                 </label>
                              </li>
                              <li>
                                 <label className={menuCss.custom_radio}>
                                    <input type="radio" name="dough" value="30" onChange={doughClick} />
                                    <div className={`${menuCss.img_wrap} ${dough === '30' ? menuCss.choosed : ''}`}>
                                       <img src="https://imgcdn.pji.co.kr/pc/img/dough_30_off.png" alt="치즈롤 도우 배너" className={`${menuCss.icon} ${menuCss.off}`} />
                                       <img src="https://imgcdn.pji.co.kr/pc/img/dough_30_on.png" alt="치즈롤 도우 배너" className={`${menuCss.icon} ${menuCss.on}`} />
                                    </div>
                                 </label>
                              </li>
                              <li>
                                 <label className={menuCss.custom_radio}>
                                    <input type="radio" name="dough" value="40" onChange={doughClick} />
                                    <div className={`${menuCss.img_wrap} ${dough === '40' ? menuCss.choosed : ''}`}>
                                       <img src="https://imgcdn.pji.co.kr/pc/img/dough_40_off.png" alt="골드링 도우 배너" className={`${menuCss.icon} ${menuCss.off}`} />
                                       <img src="https://imgcdn.pji.co.kr/pc/img/dough_40_on.png" alt="골드링 도우 배너" className={`${menuCss.icon} ${menuCss.on}`} />
                                    </div>
                                 </label>
                              </li>
                           </ul>
                        </div>
                        <div>
                           <ul className={menuCss.detail_halfnhalf_size_wrap}>
                              <li>
                                 <label className={menuCss.custom_radio2}>
                                    <input type="radio" name="size" data-size-name="large" onChange={sizeChange} defaultChecked/>
                                    <div className={menuCss.size_info}>
                                       <div>라지</div>
                                       <div><small>2-3인용(31cm)</small></div>
                                    </div>
                                 </label>
                              </li>
                              <li>
                                 <label className={menuCss.custom_radio2}>
                                    <input type="radio" name="size" data-size-name="family" onChange={sizeChange} />
                                    <div className={menuCss.size_info}>
                                       <div>패밀리</div>
                                       <div><small>3-4인용(36cm)</small></div>
                                    </div>
                                 </label>
                              </li>
                              <li>
                                 <label className={menuCss.custom_radio2}>
                                    <input type="radio" name="size" data-size-name="party" onChange={sizeChange} />
                                    <div className={menuCss.size_info}>
                                       <div>파티</div>
                                       <div><small>5-6인용(41cm)</small></div>
                                    </div>
                                 </label>
                              </li>
                           </ul>
                        </div>
                        <div className={`${menuCss.selectPizza} ${menuCss.selectPizza_left}`}>
                           <select name="lefthalf" className={`${menuCss.leftHalf} ${menuCss.selector}`} onChange={handleChange}>
                              <option value={"1002"}>가든 스페셜</option>
                              <option value={"1012"}>마가리타</option>
                              <option value={"1000"}>수퍼 파파스</option>
                              <option value={"1342"}>스파이시 이탈리안</option>
                              <option value={"1655"}>식스 치즈</option>
                              <option value={"1013"}>아이리쉬 포테이토</option>
                              <option value={"1001"}>올미트</option>
                              <option value={"1656"}>존스 페이버릿</option>
                              <option value={"1028"}>치킨 바베큐</option>
                              <option value={"1011"}>페퍼로니</option>
                              <option value={"1015"}>하와이안</option>
                              <option value={"1014"}>핫 앤 스파이시 멕시칸</option>
                           </select>
                        </div>
                        <div className={`${menuCss.selectPizza} ${menuCss.selectPizza_right}`}>
                           <select name="righthalf" className={`${menuCss.rightHalf} ${menuCss.selector}`} onChange={handleChange}>
                              <option value={"1002"}>가든 스페셜</option>
                              <option value={"1012"}>마가리타</option>
                              <option value={"1000"}>수퍼 파파스</option>
                              <option value={"1342"}>스파이시 이탈리안</option>
                              <option value={"1655"}>식스 치즈</option>
                              <option value={"1013"}>아이리쉬 포테이토</option>
                              <option value={"1001"}>올미트</option>
                              <option value={"1656"}>존스 페이버릿</option>
                              <option value={"1028"}>치킨 바베큐</option>
                              <option value={"1011"}>페퍼로니</option>
                              <option value={"1015"}>하와이안</option>
                              <option value={"1014"}>핫 앤 스파이시 멕시칸</option>
                           </select>
                        </div>
                        <div className={menuCss.order_notice}>
                           <span>하프&하프 주문시 기본/제휴 할인만 가능합니다.</span>
                           <span>하프&하프 주문 시 1,000원의 추가비용이 발생합니다.</span>
                        </div>
                     </div>
                  </div>
                  <div className={menuCss.detailNotice}>
                     <span>*상기 이미지는 실제 제품과 다를 수 있습니다.</span>
                  </div>
               </div>
            </div>
         </section>
         <section>
            <div className={menuCss.fixed_payment_wrap}></div>
         </section>
      </Fragment >
   )
}

export default Menu;