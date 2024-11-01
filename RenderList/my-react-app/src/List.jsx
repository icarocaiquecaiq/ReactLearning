import propTypes from 'prop-types'

function List(props){

    const categoria = props.categoria
    const listaDeItems = props.items

    const listaDeFrutas = listaDeItems.map((each)=>{
        return <tr key={each.id}>
                    <td>{each.name}</td>
                    <td>{each.caloria}</td>
                </tr>
    })

    return(
        <>
            <h2>{categoria}</h2> 
            <table>
                <thead>
                    <tr>
                        <td>nome</td>
                        <td>caloria</td>
                    </tr>
                </thead>
                <tbody>
                    {listaDeFrutas}
                </tbody>
            </table>
        </>
    )

}

List.propTypes = {
    categoria: propTypes.string,
    items: propTypes.arrayOf(propTypes.shape({id: propTypes.number,
                                            nome: propTypes.string,
                                            caloria: propTypes.number
                                            }))
}

List.defaultProps = {
    categoria: "categoria",
    items: []
}



export default List

