import React, {useState} from 'react'


function MyObject(){
    const [car, setCar] = useState({year:1970,
                                    make:'Pantera', 
                                    model:'Tomaso'})
    

    function lidarMudancaAno(e){
        setCar(c => ({...c, year: e.target.value}))
    }

    function lidarMudancaFabricante(e){
        setCar(c => ({...c, make: e.target.value}))
    }

    function lidarMudancaModelo(e){
        setCar(c => ({...c, model: e.target.value}))
    }


    return (
        <div>
            <p>Seu carro favorito é o {car.year} {car.make} {car.model} </p>

            <input type="number" value={car.year} onChange={lidarMudancaAno} placeholder='ano do carro'/>
            <input type="text"  value={car.make} onChange={lidarMudancaFabricante} placeholder='nome do fabricante'/>
            <input type="text" value={car.model}  onChange={lidarMudancaModelo} placeholder='nome do modelo'/>
        </div>
    )
}

export default MyObject