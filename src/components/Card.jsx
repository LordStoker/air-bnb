

export default function Card(){
    return(
        <div className = "card">
            <img src="/images/Katie-Zaferes.jpeg" className="card--image"></img>
            <div className="card--stats">
                <img src="/images/star.png" className="card--star"></img>
                <span>5.0</span> 
                <span className="grey">(6) ·</span> 
                <span className="grey">USA</span> 
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p>From $136</p>
        </div>
    );
}
