import React, {useState, useEffect, useCompose, createContext} from 'react'
import MyComponent2 from './MyComponent2'

export const UserContext = createContext()

function MyComponent(){
    const [user, setUser] = useState("Icaro")
    return (
        <div>
            Componente 1
            <p>{`Hello, ${user}.`}</p>
            <UserContext.Provider value={user}>
                <MyComponent2></MyComponent2>
            </UserContext.Provider>

        </div>
    )
}

export default MyComponent