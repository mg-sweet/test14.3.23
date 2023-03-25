import React from "react";
import Navbar from "./components/Navbar";
import Hero from './components/Hero'
import Cards from "./components/Cards";
import Dates from "./components/Dates"
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards 
        image="../images/carton2.jpeg"
        rating='5'
        count='6'
        title='No pain no gain'
        country='Myanmar'
        price='1000'
        />
      {/* <Dates/> */}

    </div>
  )
}

export default App;
