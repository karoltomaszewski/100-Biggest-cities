const Card = props =>{
    return(
        <div className="Card">
            <p><strong>#{props.cardId}</strong></p>
            <h3>{props.city}</h3>
            <p>{props.country}</p>
            <p>{props.population}</p>
        </div>
    );
}

export default Card;