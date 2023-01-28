import {createContext, useState} from 'react';



const UserContext = createContext({
})

const BabaProvider = ({children}) => {
    const [delAddr, setDelAddr] = useState({basicAddr: '', detailAddr: ''});
    const [puInfo, setPuInfo] = useState({id: "gangnam0", branch: "개포점", tel: "02-572-4894", add: "서울특별시 강남구 개포동(개포4동) 1229-12", open:"11:00 ~ 21:30", type: "배달 + 포장 + 미니레스토랑", parking: "주차 가능"
    });
    const [menuInfo, setMenuInfo] = useState();
    const [price, setPrice] = useState();

    const value = {
        delAddr : delAddr,
        puInfo : puInfo,
        menuInfo : menuInfo,
        price : price,
        action : {
            setDelAddr,
            setPuInfo,
            setMenuInfo,
            setPrice
        }
    }

    return(
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
} 
const BabaConsumer = UserContext.Consumer;

export {BabaProvider, BabaConsumer};

export default UserContext;