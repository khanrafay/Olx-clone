import React, { createContext, useEffect, useContext, useReducer } from 'react'
import { auth, generateUserDocument } from '../firebaseconfig/firebase';


export const UserContext = createContext();

export default function UserProvider({ reducer, initialState, children }) {

    // useEffect(() => {
    //     auth.onAuthStateChanged(async userAuth => {
    //         const user = await generateUserDocument(userAuth);
    //         setUser({ user });
    //     });
    // })

    return (
        <UserContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </UserContext.Provider>
    )
}

export const useStateValue = () => useContext(UserContext);


