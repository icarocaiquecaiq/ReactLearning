import React, {useState} from 'react'

function MyAandO(){
    const [cars, setCars] = useState([])
    const [carYear, setCarYear] = useState(new Date().getFullYear())
    const [carMake, setCarMake] = useState()
    const [carModel, setCarModel] = useState()

    function lidarAddCars(){
        const newCar = {year: carYear,
                        make: carMake,
                        model: carModel}
        setCars(c => [...c, newCar]) 
        
        setCarYear(new Date().getFullYear())
        setCarMake("")
        setCarModel("")
    }


    function lidarRemoveCars(i){
        setCars(c => c.filter((_, index) => i != index))
    }

    
    function lidarMudancaYear(e){
        setCarYear(y => y = e.target.value)
    }

    
    function lidarMudancaMake(e){
        setCarMake(m => m = e.target.value)
    }

    
    function lidarMudancaModel(e){
        setCarModel(mo => mo = e.target.value)
    }

    return(
        <div>
            <h2 className='text-capitalize'>lista de carros</h2>
            <ul>
                {cars.map((each, i) =>   
                                <li key={i} onClick={() => lidarRemoveCars(i)} className='text-capitalize'>
                                    {each.year} {each.make} {each.model}
                                </li> 
                        )}
            </ul>

            <input type="number" value={carYear} onChange={lidarMudancaYear}/><br/>

            <input type="text" onChange={lidarMudancaMake}
                placeholder='insira nome do fabricante'/> <br />

            <input type="text" onChange={lidarMudancaModel}
                placeholder='insira nome do modelo'/> <br />

            <p>ano do carro: {carYear}</p>
            <p>fabricante: {carMake}</p>
            <p>modelo: {carModel}</p>

            <button onClick={lidarAddCars}>add car</button>
        </div>
    )
}

export default MyAandO