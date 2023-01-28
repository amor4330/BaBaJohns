import DaumPostcode from "react-daum-postcode";
import { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";

const PopupPostCode = (props) => {
  const { ...total } = useContext(UserContext);

  //이거 이벤트핸들러에서 활용하면 됩니다
  useEffect(() => {
  }, [total.delAddr])

  // 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
  const HandlePostCode = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }
      fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
      total.action.setDelAddr(fullAddress);
    }

    // console.log(data)
    // console.log(fullAddress)
    // console.log(data.zonecode)
    // console.log(props);
    props.onClose()
  }

  const postCodeStyle = {
    border: "2px solid black",
    display: "block",
    top: "10%",
    width: "550px",
    height: "400px"
  };

  return (
    <div>
      
      <DaumPostcode style={postCodeStyle} onComplete={HandlePostCode}>
      </DaumPostcode>

      <button type='button' onClick={() => { props.onClose() }} className='postCode_btn' style={{backgroundColor: "gray",
        color: "white",
        border: "none",
        padding: "5px 0px",
        fontSize: "15px",
        position: "absolute",
        bottom: "0px",
        right: "0px",
        zIndex: "1000",
        cursor: "pointer"
        }}>　X　</button>

    </div>
  )
}

export default PopupPostCode;