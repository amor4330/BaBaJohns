import { useContext, useState } from 'react';
import PopupDom from './PopupDom';
import PopupPostCode from './PopupPostCode';
import delivery from './delivery.module.css';
import UserContext from '../context/UserContext';

const Delivery2 = () => {

    //팝업창 상태 관리
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    //팝업창 열기
    const openPostCode = () => {
        setIsPopupOpen(true);
    }

    //팝업창 닫기
    const closePostCode = () => {
        setIsPopupOpen(false);
    }

    
    const {...total} = useContext(UserContext);
    
    const handleChange = (e) => {
        total.action.setDelAddr(total.delAddr, total.delAddr.detailAddr = e.target.value )
        console.log(e.target.value)
    }
    //이거 이벤트핸들러에서 활용하면 됩니다
    // useEffect(()=> {
    //     total.action.setDelAddr("test");
    // }, [total.delAddr])

    return (
        <>
            <div className={delivery.search}>
                <div>
                    <button type="button" onClick={openPostCode} className = "add_btn">주소검색</button>

                </div>

                <div id='popupDom' className={delivery.popupDom}>
                    {isPopupOpen && (
                        <PopupDom>
                            <PopupPostCode onClose={closePostCode} />
                        </PopupDom>
                    )}
                </div>
            </div>

            <div className={delivery.input_container}>
                <p className={delivery.address}>배달 가능 매장 : </p>
                <input type="text" className={delivery.address} placeholder="기본 주소" value = {total.delAddr.basicAddr}/>
                <input type="text" className={delivery.address} placeholder="상세 주소" onChange = {handleChange} value = {total.delAddr.detailAddr}/>
            </div>

        </>
    )
}

export default Delivery2;