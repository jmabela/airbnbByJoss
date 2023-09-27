import React from "react"

export default function Card() {
    return (
        <div className="card">
            <img src="../images/image12.png" className="card--photo"></img>
            <div className="class--stats">
                <img src="../images/Star.png" className="card--star"></img>
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
            
        
    )
}