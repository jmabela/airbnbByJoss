import React from "react"
import NavBar from "./components/navBar"
import Hero from "./components/hero"
import Card from "./components/card"


export default function App() {
    return (
        <div>
            <NavBar />
            <Hero />
            <Card 
            img = "../images/image12.png"
            star= "../images/Star.png"
            rating ="5.0"
            reviewCount = {6}
            country= "USA"
            title="Life Lessons with Katie Zaferes"
            price= {136}
            />
        </div>
    )
}