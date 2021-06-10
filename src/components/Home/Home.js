import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import PopUp from '../Popup/PopUp';


const Home = (props) => {
    const [userInfo, setUserInfo] = useContext(UserContext)

    if(userInfo.firstName){
        console.log("This is Home and data is ", userInfo)
    }

    return (
        <div>
            <h1>This is Home Component</h1>
            <PopUp></PopUp>     
        </div>
    );
};

export default Home;