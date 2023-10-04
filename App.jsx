import React from "react"
import NavBar from "./components/navBar"
import Hero from "./components/hero"
import Card from "./components/card"
import Data from "./data"


const cardData = Data.map(item => {
    return (
        <Card
        key={item.id}
        item={item}
        />

    )
});

export default function App() {
    return (
        <div>
            <NavBar />
            <Hero />
            <section className="cards-list">
                {cardData}
            </section>
            
        </div>
    )
}