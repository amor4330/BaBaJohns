import { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";

const { kakao } = window;

const DeliveryMap = () => {

  const { ...total } = useContext(UserContext);

  let calMin = 100;

  //거리 구하는 함수
  function getDistance(lat1, lon1, lat2, lon2) {
    if ((lat1 === lat2) && (lon1 === lon2))
      return 0;

    var radLat1 = Math.PI * lat1 / 180;
    var radLat2 = Math.PI * lat2 / 180;
    var theta = lon1 - lon2;
    var radTheta = Math.PI * theta / 180;
    var dist = Math.sin(radLat1) * Math.sin(radLat2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radTheta);
    if (dist > 1)
      dist = 1;

    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515 * 1.609344 * 1000;
    if (dist < 100) dist = Math.round(dist / 10) * 10;
    else dist = Math.round(dist / 100) * 100;

    return dist;
  }


  const tmp = 0;
  useEffect(() => {

    const requestAddr = new kakao.maps.services.Geocoder();

    requestAddr.addressSearch(total.delAddr.basicAddr, function (result, status) {

      if (status === kakao.maps.services.Status.OK) {

        var reqCoords = new kakao.maps.LatLng(result[0].y, result[0].x);

        const branchList = [
          { branch: "개포점", addr: "서울특별시 강남구 개포동(개포4동) 1229-12" },
          { branch: "논현점", addr: "서울특별시 강남구 학동로 328 1층" },
          { branch: "대치점", addr: "서울특별시 강남구 대치동(대치4동) 902" },
          { branch: "도곡점", addr: "서울특별시 강남구 도곡동(도곡1동) 174-40" },
          { branch: "세곡점", addr: "서울특별시 강남구 헌릉로569길 9, 강남지웰파인즈 205호" },
          { branch: "수서점", addr: "서울특별시 강남구 일원동(일원본동) 722" },
          { branch: "압구정점", addr: "서울특별시 강남구 신사동 590-22 선호빌딩 2층" },
          { branch: "역삼점", addr: "서울특별시 강남구 역삼로 246" },
          { branch: "청담점", addr: "서울특별시 강남구 삼성동(삼성1동) 53-2" }
        ]
        let distance = 0;
        branchList.forEach((item) => {
          let branchAddr = new kakao.maps.services.Geocoder();

          branchAddr.addressSearch(item.addr, function (result, status) {
            if (status === kakao.maps.services.Status.OK) {
              var tmpCoords = new kakao.maps.LatLng(result[0].y, result[0].x);

              distance = getDistance(reqCoords.La, reqCoords.Ma, tmpCoords.La, tmpCoords.Ma) / 1000;

              if (calMin > distance) {
                calMin = distance;
                total.action.setCloseBranch({branch: item.branch, addr: item.addr});
              }
            }
          })
        })
      }
    })

    
  },[tmp])


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

    geocoder.addressSearch(total.closeBranch.addr, function (result, status) {

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
          content: '<div style="width:100%;text-align:center;padding:6px 0;">바바존스 ' + total.closeBranch.branch + '</div>'
        });
        infowindow.open(map, marker);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
      }
    })



  }, [total.closeBranch])

  return <div id="map" style={{ 
    marginLeft: "55px", width: "740px", height: "245px" }}></div>

}

export default DeliveryMap;