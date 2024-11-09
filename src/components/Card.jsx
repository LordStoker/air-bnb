

export default function Card(props){  
    
    let badgeText;
    if(props.item.openSpots === 0){
        badgeText = "SOLD OUT";
    }
    else if(props.item.location === "Online"){
        badgeText = "ONLINE";
    }//Opcion de ternaria dentro del mismo return con && en vez de lógica fuera del return.
    //{props.openSpots === 0 &&<div className="card--badge">SOLD OUT</div>}
    //{props.openSpots === 0 ? <div className="card--badge">SOLD OUT</div> : props.location === "Online" && <div className="card--badge">Online</div> null}
    return(
        <div className = "card" key={props.item.key}>
            {badgeText != null &&<div className ="card--badge">{badgeText}</div>}
            <img src={"images/" + props.item.coverImg} className="card--image" alt = {"images/" + props.item.coverImg}></img>
            <div className="card--stats">
                <img src="images/star.png" className="card--star" alt = "images/star.png"></img>
                <span>{props.item.stats.rating}</span> 
                <span className="gray">({props.item.stats.reviews}) ·</span> 
                <span className="gray">{props.item.location}</span> 
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--title"><span className="bold">{"From " + props.item.price + "$"} </span>/ person</p>
        </div>
    );
}
