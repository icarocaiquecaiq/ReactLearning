import React, {useState} from 'react'


function Form(){
    const [nome, setNome] = useState("guest")
    const [quantidade, setQuantidade] = useState(0)
    const [comentario, setComentario] = useState("vazio")
    const [pagamento, setPagamento] = useState("boleto")
    const [deliver, setDeliver] = useState()

    function lidarComMudancaNome(event) {
        setNome(event.target.value)
    } 

    function lidarComMudancaQuantidade(event){
        setQuantidade(event.target.value)
    }

    function lidarComMudancaComentario(event){
        setComentario(event.target.value)
    }

    function lidarComMudancaPagamento(event){
        setPagamento(event.target.value)
    }

    function lidarComMudancaDeliver(event){
        setDeliver(event.target.value)
    }



    
    return (
        <div className=' p-5'>
            <div className='mb-2'>
                <input type="text" value={nome} onChange = {(e) => {lidarComMudancaNome(e)}}/>
                <p className='d-inline-block ms-2'>Nome: {nome}</p>
            </div>

            <div>
                <input type="number" value={quantidade} onChange = {(e) => {lidarComMudancaQuantidade(e)}}/>
                <p className='d-inline-block ms-2'>Quantidade: {quantidade}</p>
            </div>
            
            <div className='d-flex mb-3'>
                <textarea value={comentario} onChange = {(e) => {lidarComMudancaComentario(e)}}/>
                <div className='text-area'>
                    <p className='ms-2'>Comentário: {comentario}</p>
                </div>
            </div>

            <div>
                <select value={pagamento} onChange={(e) => {lidarComMudancaPagamento(e)}}>
                    <option value="">selecione uma opcao</option>
                    <option value="boleto">boleto</option>
                    <option value="credito">credito</option>
                    <option value="debito">debito</option>
                </select>
                <p>pagamento: {pagamento}</p>
            </div>

            <div>
                <div className='d-flex gap-2'>
                    <label htmlFor="input-radio-pegar">
                        pegar
                        <input id="input-radio-pegar" className='m-1'  type="radio" name="deliver" value="pegar" onChange = {(e)=> {lidarComMudancaDeliver(e)}}/>
                    </label>

                    <label htmlFor="input-radio-moto">
                        moto
                        <input id="input-radio-moto" type="radio" className='m-1' name="deliver" value="moto" onChange = {(e)=> {lidarComMudancaDeliver(e)}}/>
                    </label>

                    <label htmlFor="input-radio-carro">
                        carro
                        <input id='input-radio-carro' type="radio" className='m-1' name="deliver" value="carro"onChange = {(e)=> {lidarComMudancaDeliver(e)}} />
                    </label>
                </div>

                <p>Deliver: {deliver}</p>
            </div>
        </div>
    )
}

export default Form