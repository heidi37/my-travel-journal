import React from "react"
import Header from "./components/Header.js"
import Cards from "./components/Cards.js"
import data from "./data.js"

export default function App() {
const arrayOfCards = data.map(item => {
   return (
       <Cards
       key = {item.id}
       item = {item}
       />
   ) 
})
    return (
        <div>
        <Header />
        {arrayOfCards}
        </div>
    )
}