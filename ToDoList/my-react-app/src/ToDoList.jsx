import React, {useState} from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHandPointUp, faHandPointDown } from '@fortawesome/free-solid-svg-icons'


function ToDoList(){


    const [afazer, setAfazer] = useState([])
    const [inputAfazer,  setInputAfazer] = useState("")

    function lidarAddAfazer(){
        setAfazer(a => [...a, inputAfazer])
        setInputAfazer("")
    }

    function lidarRemoveAfazer(i){
        setAfazer(a => a.filter((_, index) => i != index))
    }

    function lidarSubida(i){
        const indexAcima = i - 1

        if(i != 0){
            const copia = afazer
            const aux = copia[i]
            copia[i] = copia[indexAcima]
            copia[indexAcima] = aux
            
            setAfazer((p) => p.map((each, index)=>{return each = copia[index]}))
        }

    }

    function lidarDescida(i){
        const indexAbaixo = i + 1

        if(i != afazer.length - 1){
            const copia = afazer
            const aux = copia[i]
            copia[i] = copia[indexAbaixo]
            copia[indexAbaixo] = aux

            setAfazer((p) => p.map((each, index)=>{return each = copia[index]}))
        }
    }


    function lidarMudancaInputAfazer(e){
        setInputAfazer(e.target.value)
    }

    


    return(
        <div className='container-fluid text-white vh-100 m-0 d-flex flex-column justify-content-center align-items-center'> 
            <div className='text-center row justify-content-center gap-3'>
                <h1 className='text-capitalize fs-1'>lista-de-afazeres</h1>

                <form action="#" className='text-capitalize row justify-content-center'>
                    <div className='col-9 col-md-6'>
                        <input type="text" className='form-control' value={inputAfazer} onChange={lidarMudancaInputAfazer}
                        placeholder='Caminhada'/>
                    </div>
                    <button className='col-3 col-md-1 btn btn-light' onClick={lidarAddAfazer}>Add</button>
                </form>

                <h2 className='mt-4 fw-bold '>Afazere(s) {inputAfazer}</h2>

                <table className='col-10'>
                    <tbody className=''>
                        {afazer.map((each, index) => {
                                                        return <tr key={index} className='row justify-content-center align-items-center pb-sm-2 p-md-2 bg-white mb-4 rounded'>
                                                                    <td className='col-sm-12 col-md-5 fs-5 fw-bold text-dark p-2'>{each}</td>
                                                                    <td className='col col-md-2'><button className='btn  btn-danger w-100' onClick={() => lidarRemoveAfazer(index)}>deletar</button></td>
                                                                    <td className='col col-md-2'>
                                                                        <button className='btn btn-primary w-100' onClick={() => lidarSubida(index)}>
                                                                            <FontAwesomeIcon icon={faHandPointUp} />
                                                                        </button>
                                                                    </td>
                                                                    <td className='col col-md-2'>
                                                                        <button className='btn btn-primary w-100' onClick={() => lidarDescida(index)}>
                                                                            <FontAwesomeIcon icon={faHandPointDown} />                                                                        
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                    })}
                    </tbody>
                </table>
            </div>
        </div>    
    )
}

export default ToDoList