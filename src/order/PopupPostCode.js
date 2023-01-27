import DaumPostcode from "react-daum-postcode";
import UserContext from './UserContext';
import { useContext, useEffect } from "react";

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
    display: "block",
    top: "10%",
    width: "600px",
    height: "600px",
    padding: "10px",
  };

  return (
    <div>
      
      <DaumPostcode style={postCodeStyle} onComplete={HandlePostCode} />

      <div>{props.data}</div>
      {<button type='button' onClick={() => { props.onClose() }} className='postCode_btn'>　X　</button>}<br/>

    </div>
  )
}

export default PopupPostCode;