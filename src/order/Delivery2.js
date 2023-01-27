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
    
    //이거 이벤트핸들러에서 활용하면 됩니다
    // useEffect(()=> {
    //     total.action.setDelAddr("test");
    // }, [total.delAddr])

    return (
        <>
            <div className={delivery.search}>
                <h3>배달 주소 검색</h3><br/>
                <button type="button" onClick={openPostCode} className={delivery.regist}>검색</button>

                <div id='popupDom' className={delivery.popupDom}>
                    {isPopupOpen && (
                        <PopupDom>
                            <PopupPostCode onClose={closePostCode} />
                        </PopupDom>
                    )}
                </div>
            </div>

            <div>
                <p>배달 가능 매장 : </p>
                <input type="text" className={delivery.address} placeholder="기본 주소" value = {total.delAddr}/><br />
                <input type="text" className={delivery.address} placeholder="상세 주소" />
            </div>

                <button type = "button" className={delivery.regist}>주문 진행</button>

        </>
    )
}

export default Delivery2;