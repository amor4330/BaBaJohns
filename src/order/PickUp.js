import { useContext, useEffect, useState } from "react"
import UserContext from "../context/UserContext";
import KakaoMap from "./KakaoMap";
import puStyle from "./PickUp.module.css";

const {kakao} = window;

const PickUp = () => {
   
   const branchList = [
      {id: "gangnam0", branch: "개포점", tel: "02-572-4894", add: "서울특별시 강남구 개포동(개포4동) 1229-12", open:"11:00 ~ 21:30", type: "배달 + 포장 + 미니레스토랑", parking: "주차 가능"},
      {id: "gangnam1", branch: "논현점", tel: "02-511-8757", add: "서울특별시 강남구 학동로 328 1층", open:"11:00 ~ 21:30", type: "배달 + 포장", parking: "주차 가능"},
      {id: "gangnam2", branch: "대치점", tel: "02-554-8126", add: "서울특별시 강남구 대치동(대치4동) 902", open:"11:00 ~ 21:30", type: "배달 + 포장", parking: "주차 불가"},
      {id: "gangnam3", branch: "도곡점", tel: "02-2057-1076", add: "서울특별시 강남구 도곡동(도곡1동) 174-40", open:"11:00 ~ 21:30", type: "배달 + 포장", parking: "주차 가능"},
      {id: "gangnam4", branch: "세곡점", tel: "02-3412-8080", add: "서울특별시 강남구 헌릉로569길 9, 강남지웰파인즈 205호", open:"11:00 ~ 21:30", type: "배달 + 포장 + 미니레스토랑", parking: "주차 불가"},
      {id: "gangnam5", branch: "수서점", tel: "02-3414-0160", add: "서울특별시 강남구 일원동(일원본동) 722", open:"11:00 ~ 21:30", type: "배달 + 포장", parking: "주차 불가"},
      {id: "gangnam6", branch: "압구정점", tel: "02-544-0893", add: "서울특별시 강남구 신사동 590-22 선호빌딩 2층", open:"11:00 ~ 21:30", type: "배달 + 포장 + 미니레스토랑", parking: "주차 불가"},
      {id: "gangnam7", branch: "역삼점", tel: "02-3288-4382", add: "서울특별시 강남구 역삼로 246", open:"11:00 ~ 21:30", type: "배달 + 포장", parking: "주차 불가"},
      {id: "gangnam8", branch: "청담점", tel: "02-546-8763", add: "서울특별시 강남구 삼성동(삼성1동) 53-2", open:"11:00 ~ 21:30", type: "배달 + 포장", parking: "주차 불가"}
   ]
   
   const {...total} = useContext(UserContext);
   
   useEffect(()=>{
   },[total.puInfo])

   const handleChange = (e) => {
      const selectedBranch = branchList.filter((item) => {
         return item.id === e.target.id;
      })
      // setSelectBranch(selectedBranch[0]);
      total.action.setPuInfo(selectedBranch[0]);
   }
   


   /* 매장 목록 보여주는 함수 */
   
   const makeList = branchList.map((item, index) => 

      <li className={puStyle.list_container}>
         <label htmlFor={item.id}>
            {/* radio */}
            <input type="radio" name="local_address" id={item.id} className={puStyle.list_input} onChange={handleChange}/>

            {/* a태그 */}
            <div id={item.id} className={puStyle.list_a}>
               <div className={item.id}>
                  <div>
                     <span className={item.id}>{item.branch}</span>
                     <span className={item.id}>{item.tel}</span>
                  </div>
                  <div className={item.id}>{item.add}</div>
               </div>
            </div>
         </label>
      </li>
   )

   useEffect(()=>{
      let dot = document.querySelector("#gangnam0");
      dot.checked = true;
   }, [])

   return (
      <div>

         <div className={puStyle.container}> {/* 리스트, 맵을 담는 컨테이너 */}
            
            {/* 매장 리스트 */}
            <div className = {puStyle.left}>
               <h3>매장 목록</h3>
               <div className = {puStyle.list}>
                  <ul>
                     {makeList}
                  </ul>
               </div>
            </div> {/* list div */}



            {/* 지도 API */}
            <div className={puStyle.left}>
               <h3>매장 정보</h3>

               <div>

                  <div>
                     <div className = {puStyle.branch_name}>
                        <span>매장명: </span>
                        <span>{total.puInfo.branch}</span>
                     </div>
                     <ul>
                        <li>
                           <span>영업시간</span>
                           <span>{total.puInfo.open}</span>
                        </li>
                        <li>
                           <span>매장타입</span>
                           <span>{total.puInfo.type}</span>
                        </li>
                        <li>
                           <span>주차여부</span>
                           <span>{total.puInfo.parking}</span>
                        </li>
                     </ul>
                  </div>

                  <KakaoMap/>
d
               </div>

            </div> {/* map div */}




         </div> {/* container div */}
      </div> //div
   )
}

export default PickUp;