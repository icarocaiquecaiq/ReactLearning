import React, {useState, useEffect, useCompose ,useRef} from 'react'


function MyComponent(){
    const [mili, setMili] = useState(55)
    const [sec, setSec] = useState(58)
    const [minuto, setMinutos] = useState(0)
    const interval = useRef(0)

    useEffect(() => {
        if(!interval.current){
            console.log("looping rodando!")
            interval.current = setInterval(() => {
                lidarMudancaMili()
            },15)
    
            return () => {
                clearInterval(interval.current)
            }
        }
    },[])

    
    function lidarMudancaMili () {
        setMili(m => {
            if (m < 60){
                return m + 1
            }else{
                lidarMudancaSec()
                return m = 0
            }
        })
    }

    function lidarMudancaSec(){
        setSec(s => {
            if (s < 60){
                return s + 1
            }else{
                lidarMudancaMinuto()
                return s = 0
            }
        })
    }

    function lidarMudancaMinuto(){
        setMinutos(mi => mi + 1)
    }

    function stopTimer(){
        clearInterval(interval.current)
        interval.current = null
    }

    function startTimer(){
        if(!interval.current){
            interval.current = setInterval(() => {
                lidarMudancaMili()
            },15)
        }
        
    }

    function resetMili(){
        setMili(0)
        setMinutos(0)
        setSec(0)
        stopTimer()
        
    }

    function colocarTime(){
        return (<p>{`${padZero(minuto)}:${padZero(sec)}:${padZero(mili)}`}</p>)
    }

    function padZero(num){
        return num < 10? `0${num}`: num
    }

    return(
        <div className='timer'>
            <div className='times'>
                {colocarTime()}
            </div>
            <div className='controls'>
                <button className='button'  onClick={startTimer}>Começar</button>
                <button className='button'  onClick={stopTimer}>Parar</button>
                <button className='button'  onClick={resetMili}>Redefinir</button>
            </div>
        </div>
    )
}

export default MyComponent