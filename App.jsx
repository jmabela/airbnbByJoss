import React from "react"
import NavBar from "./components/navBar"
import Hero from "./components/hero"
import Card from "./components/card"
/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {
    return (
        <div>
            <NavBar />
            <Hero />
            <Card />
        </div>
    )
}