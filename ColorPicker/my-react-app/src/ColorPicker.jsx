import React, {useState} from 'react'

function ColorPicker(){
    
    const [color, setColor] = useState("#a81010")

    function atualizarMudancaCor(event){
        setColor(event.target.value)
    }
    
    
    return(
        <div className='color-container text-center d-flex flex-column justify-content-center align-items-center gap-3 m-5'>
            <h2>Color Picker</h2>
            <div className='color-picked' style={{backgroundColor: color}}>
                <p>Color:{color}</p>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center gap-2'>
                <label htmlFor="color">selecione uma cor: </label>
                <input type="color" id='color' value={color} onChange={(e) => {atualizarMudancaCor(e)}}/>
            </div>
        </div>
    )
}

export default ColorPicker