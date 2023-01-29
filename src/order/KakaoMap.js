import { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";

const { kakao } = window;

const KakaoMap = () => {

   const {...total} = useContext(UserContext);

   useEffect(() => {
      const mapContainer = document.getElementById('map'), // 지도를 표시할 div 
      mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
      };

      // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
      const map = new kakao.maps.Map(mapContainer, mapOption); 

      // 주소-좌표 변환 객체를 생성합니다
      const geocoder = new kakao.maps.services.Geocoder();

      geocoder.addressSearch(total.puInfo.add, function(result, status) {

         // 정상적으로 검색이 완료됐으면 
          if (status === kakao.maps.services.Status.OK) {
     
             var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
     
             // 결과값으로 받은 위치를 마커로 표시합니다
             var marker = new kakao.maps.Marker({
                 map: map,
                 position: coords
             });
     
             // 인포윈도우로 장소에 대한 설명을 표시합니다
             var infowindow = new kakao.maps.InfoWindow({
                 content: '<div style="width:100%;text-align:center;padding:6px 0;">바바존스 '+ total.puInfo.branch +'</div>'
             });
             infowindow.open(map, marker);
     
             // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
             map.setCenter(coords);
         } 
     })


      
   })

   return <div id="map" style={{width:"350px", height:"245px"}}></div>

}

export default KakaoMap;