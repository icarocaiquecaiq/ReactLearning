import React, { useState, useEffect, useCompose, useContext } from 'react'
import { UserContext } from './MyComponent'

function MyComponent4() {
    const user = useContext(UserContext)
    return (
        <div>
            <div>componente 4
                <p>{`Bye, ${user}.`}</p>
            </div>
        </div>
    )
}

export default MyComponent4