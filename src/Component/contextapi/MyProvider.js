import React, { useState } from 'react'
import MyContext from '../contextapi/MyContext';

export default function MyProvider(props) {
    const [contextUser, setContextUser] = useState(JSON.parse(localStorage.getItem("userinfo")));
    return (
        <MyContext.Provider
            value={{
                Contextuser: { ...contextUser },
                setContextUser: userinfo => {                   
                    setContextUser(userinfo)
                }
            }}
        >
            {props.children}
        </MyContext.Provider>
    )
}
