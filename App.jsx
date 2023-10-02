import React from "react"
import NavBar from "./components/navBar"
import Hero from "./components/hero"
import Card from "./components/card"
import Data from "./data"

console.log(Data)

const cardData = Data.map(item => {
    return (
        <Card
        img = {item.coverImg}
        star= {"../images/Star.png"}
        rating = {item.stats.rating}
        reviewCount = {item.stats.reviewCount}
        location= {item.location}
        title= {item.title}
        price= {item.price} 
        />

    )
});

export default function App() {
    return (
        <div>
            <NavBar />
            <Hero />
            {cardData}
        </div>
    )
}