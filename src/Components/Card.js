const Card = props =>{
    return(
        <div className="Card">
           <h3>{props.city}</h3>
          <p>{props.country}</p>
          <p>{props.population}</p>
        </div>
    );
}

export default Card;