import React, {useState} from 'react' 

function Counter(){
    const[counter, setCounter] = useState(0)
    
    function increaseCounter(){
        //setCounter(counter + 1)
        //setCounter(counter + 1)

        setCounter((c)=> c+1)
        setCounter((c)=> c+1)
    }

    function decreaseCounter(){
        setCounter((c) => c-1)
    }

    function resetCounter(){
        setCounter(0)
    }
    
    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={increaseCounter}>aumentar</button> 
            <button onClick={decreaseCounter}>diminuir</button> 
            <button onClick={resetCounter}>reset</button>
            
        </div>
        
    )
}


export default Counter