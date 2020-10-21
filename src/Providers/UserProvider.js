import React, { createContext, useEffect, useState } from 'react'
import { auth, generateUserDocument } from '../firebaseconfig/firebase';


export const UserContext = createContext({ user: null });

function UserProvider({ children }) {

    const [user, setUser] = useState(null)
    useEffect(() => {
        auth.onAuthStateChanged(async userAuth => {
            const user = await generateUserDocument(userAuth);
            setUser({ user });
        });
    })
   
    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider


