import {createContext, useState} from 'react';


const UserContext = createContext({
    address : '아무거나', 
    action : {
        setAddress : () => {

        }
    }
})

const AdsProvider = ({children}) => {
    const [address2, setAddress] = useState();

    const value = {
        address: address2,
        action : {setAddress}
    }

    return(
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
} 
const AdsConsumer = UserContext.Consumer;

export {AdsProvider, AdsConsumer};

export default UserContext;