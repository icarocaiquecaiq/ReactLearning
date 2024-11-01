import React, {useState} from "react";



function Counter(){

    const [count, setCount] = useState(0)

    const increaseCount = () => {
        setCount(count + 1)
    }

    const decreaseCount = () => {
        setCount(count - 1)
    }

    const resetCount = () => {
        setCount(0)
    }

    return(
        <div className="container-counter fs-1 d-flex align-items-center justify-content-center">
            <div className="text-center">
                <p className="counter-content">{count}</p>
                <div className="container-btn d-flex gap-2">
                    <button className="btn btn-danger decrement-btn" onClick={decreaseCount}>diminuir</button>
                    <button className="btn btn-primary reset-btn" onClick={resetCount}>redefinir</button>
                    <button className="btn btn-success increment-btn" onClick={increaseCount}>aumentar</button>
                </div>
            </div>
        </div>
    )
}

export default Counter