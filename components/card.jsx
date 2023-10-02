import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.img} className="card--photo"></img>
            <div className="class--stats">
                <img src={props.star} className="card--star"></img>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
            
        
    )
}