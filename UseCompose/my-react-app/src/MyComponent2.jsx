import React, {useState, useEffect, useCompose} from 'react'
import MyComponent3 from './MyComponent3'

function MyComponent2(){
    return (
        <div>
            Componente 2
            <MyComponent3>

            </MyComponent3>
        </div>
    )
}

export default MyComponent2