

export default function Card(props){    
    return(
        <div className = "card" key={props.key}>
            {props.openSpots == 0 && <div className ="card--badge">SOLD OUT</div>}
            <img src={props.imgSrc} className="card--image"></img>
            <div className="card--stats">
                <img src={props.starIcon}className="card--star"></img>
                <span>{props.rating}</span> 
                <span className="gray">({props.reviews}) ·</span> 
                <span className="gray">{props.location}</span> 
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--title"><span className="bold">{props.price} </span>/ person</p>
        </div>
    );
}
