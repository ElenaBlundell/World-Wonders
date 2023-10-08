import React from "react"
import Header from "../components/Header.jsx"
import Card from "../components/Card.jsx"
import data from "./data.js"
import './index.css'

export default function App(){
    const cards = data.map(card => {
        return (
            <Card
            {...card}
            />
        )
    })
    return (
        <div className="app">
            <Header />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}