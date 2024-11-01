import React, {useState, useEffect, useCompose, useContext} from 'react'
import MyComponent4 from './MyComponent4'
import { UserContext } from './MyComponent'

function MyComponent3(){
    const user = useContext(UserContext)
    return (
        <div>
            Componente 3
            <p>
                Hello, again {user}.
            </p>
            <MyComponent4></MyComponent4>
        </div>
    )
}

export default MyComponent3