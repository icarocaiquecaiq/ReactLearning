import React, {useState} from "react"


function MyComponent(){

    let [nome, setNome] = useState()

    const updateNome = () => {
        setNome("icaro") 
    }


    return(
        <>
            <div>
                <p>Name: </p>
                <button onClick={updateNome}>set nome</button>
            </div>
        </> 
    )
}

export default MyComponent