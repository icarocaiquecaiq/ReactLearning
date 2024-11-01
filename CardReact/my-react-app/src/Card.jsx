function Card(){

    const styles = {
        border: "1px solid black",
        width: "300px",
        maxWidth: "350px",
        borderRadius: "10px",
        padding: "10px",
        display: "inline-block",
        margin: "10px",
        textLign: "center",
        boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.1)"
    }

    return (
        <div style={styles}>
            <img src="https://via.placeholder.com/150" alt="" className="card-image"/>
            <h2>Icaro Caique</h2>
            <p>I play video games and study</p>
        </div>
    )
}

export default Card