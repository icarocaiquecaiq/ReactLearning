import React, {useState, UseEffect, useEffect} from 'react'

function MyComponent(){
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `MyComponent program`
    }, [])

    function addCount(){
        setCount(c => c + 1)
    }

    return (
        <div>
            <p>add {count}</p>
            <button onClick={addCount}>Add</button>
        </div>
    )
}

export default MyComponent