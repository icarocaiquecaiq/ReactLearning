import React, {useState} from 'react'

function MyArray(){
    const [foods, setFoods] = useState(['banana', 'maça', 'tomate', 'melancia'])

    function addFood(e){
        const comidaInputValue = document.getElementById("addComida").value
        setFoods(f => [...f, comidaInputValue])

        document.getElementById("addComida").value = ''
        
    }

    function removerComida(index){
        setFoods(f => f.filter((_, i) => i != index))
    }

    return(
        <div className='row vh-100 align-items-center justify-content-center m-0'>
            <div className='col-auto d-flex  flex-column gap-3'>
            <h2 className='text-capitalize text-center' >food list</h2>
            <ul className='fs-4 text-capitalize list-group list-unstyled'> 
                {foods.map((each, index)=>{
                                        return <div key={each} className='mb-2 d-flex justify-content-between'>
                                                    <li>
                                                        {each}
                                                    </li> 
                                                    <button className='btn btn-danger btn-sm' onClick={() => {removerComida(index)}}>
                                                        remover
                                                    </button>
                                                </div>
                                    })}
            </ul>
                <input type="text" className=' p-1' id='addComida' placeholder='insira uma comida' maxLength={50}/>
                <button  className='btn btn-success' onClick={addFood}>send me</button>
            </div>
        </div>
    )
}

export default MyArray