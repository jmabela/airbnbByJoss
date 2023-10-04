import React from "react"

export default function Card(props) {
    let badgeText

    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "Online"
    }

    return (
        
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../public/images/${props.item.coverImg}`} className="card--image"></img>
            <div className="class--stats">
                <img src="../images/Star.png"className="card--star"></img>
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
            
        
    )
}