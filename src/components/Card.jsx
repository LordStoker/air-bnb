

export default function Card(props){
    return(
        <div className = "card">
            <img src={props.imgSrc} className="card--image"></img>
            <div className="card--stats">
                <img src={props.starIcon}className="card--star"></img>
                <span>{props.rating}</span> 
                <span className="grey">{props.reviews} ·</span> 
                <span className="grey">{props.location}</span> 
            </div>
            <p>{props.title}</p>
            <p>{props.price}</p>
        </div>
    );
}
