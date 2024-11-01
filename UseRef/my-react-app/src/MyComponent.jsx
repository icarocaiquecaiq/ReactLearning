import React, {useState, useEffect, useCompose ,useRef} from 'react'

function MyComponent(){
    const ref = useRef(0)
    const inputValue = useRef(null)
    const inputValue2 = useRef(null)
    const inputValue3 = useRef(null)
    
    useEffect(()=>{
        console.log("new re-render")
        console.log(inputValue)
    })

    function addNumber (){
        ref.current = ref.current + 1
        console.log(ref)
    }

    function lidarInput(){
        inputValue.current.focus()
        if(inputValue.current.style.backgroundColor === "yellow"){ 
            inputValue.current.style.backgroundColor = 'white'
        }else{
            inputValue.current.style.backgroundColor = 'yellow'
            inputValue2.current.style.backgroundColor = 'white'
            inputValue3.current.style.backgroundColor = 'white'
        }
        

        
    }

    function lidarInput2(){
        inputValue2.current.focus()
        if (inputValue2.current.style.backgroundColor === "yellow") {
            inputValue2.current.style.backgroundColor = 'white'
        } else {
            inputValue.current.style.backgroundColor = 'white'
            inputValue2.current.style.backgroundColor = 'yellow'
            inputValue3.current.style.backgroundColor = 'white'
        }
        
        
    }

    function lidarInput3(){
        inputValue3.current.focus()
        if (inputValue3.current.style.backgroundColor === "yellow") {
            inputValue3.current.style.backgroundColor = 'white'
        } else {
            inputValue.current.style.backgroundColor = 'white'
            inputValue2.current.style.backgroundColor = 'white'
            inputValue3.current.style.backgroundColor = 'yellow'
        }
    }


    return (
        <div>
            <button onClick={addNumber}>click-me</button>


            <input ref={inputValue}/>
            <button onClick={lidarInput}>click-me 1</button>

            <input ref={inputValue2}/>
            <button onClick={lidarInput2}>click-me 2</button>
            
            <input ref={inputValue3}/>
            <button onClick={lidarInput3}>click-me 3</button>
        </div>
    )
}

export default MyComponent