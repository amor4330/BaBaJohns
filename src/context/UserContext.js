import {createContext, useState} from 'react';



const UserContext = createContext({
})

const BabaProvider = ({children}) => {
    const [delAddr, setDelAddr] = useState();
    const [puInfo, setPuInfo] = useState();
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