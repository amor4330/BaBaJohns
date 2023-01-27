import DaumPostcode from "react-daum-postcode";
import {useContext}  from "react";
import UserContext from "../context/UserContext";

const PopupPostCode = (props) => {
  const {address, action} = useContext(UserContext);
  console.log(address);

  // 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
  const handlePostCode = (data) => {
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
    }
    console.log(data)
    console.log(fullAddress)
    console.log(data.zonecode)
    console.log(props);
    action.setAddress(fullAddress);
    props.onClose()

    

  }

  const postCodeStyle = {
    display: "block",
    top: "10%",
    width: "600px",
    height: "600px",
    padding: "10px",
  };

  return (
    <div>
      <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} />
      <div>{props.data}</div>

      <button type='button' onClick={() => { props.onClose() }} className='postCode_btn'>닫기</button>

    </div>
  )
}

export default PopupPostCode;