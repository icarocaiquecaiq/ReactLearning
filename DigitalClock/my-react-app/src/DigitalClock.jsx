import React, {useState, UseEffect, useEffect} from 'react'

function DigitalClock(){

    const [relogio, setRelogio] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRelogio(new Date())

            return () => {
                clearInterval(intervalId)
            }

        }, 1000)
    }, [])

function formatTime(){
    const horas = relogio.getHours()
    const minutos = relogio.getMinutes()
    const segundos = relogio.getSeconds()

    return (<span>{`${padzero(horas)}:${padzero(minutos)}:${padzero(segundos)}`}</span>)
}


function padzero(number){
    return number < 10? `0${number}`: number
}

    return (
        <div className='background-general container-fluid'>
            <div className='row align-items-center align-center vh-100 text-white p-0 text-center'>
                <div className='blur-space col-12 text-dark d-flex justify-content-center align-items-center p-4'>
                    {formatTime()}
                </div>
            </div>
        </div>

    )
}

export default DigitalClock