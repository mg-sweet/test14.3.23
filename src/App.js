import React from "react";
import Navbar from "./components/Navbar";
import Hero from './components/Hero'
import Cards from "./components/Cards";
import Dates from "./components/Dates"
import data from './data'
function App() {
  let datas = data.map( value => {
    return (
      <Cards
        image = {value.coverimg}
        rating = {value.status.rating}
        count = {value.status.viewcount}
        title = {value.title}
        price = {value.price}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Cards 
        image="../images/carton2.jpeg"
        rating='5'
        count='6'
        title='No pain no gain'
        country='Myanmar'
        price='1000'
        /> */}
      {/* <Dates/> */}

      {datas}

    </div>
  )
}

export default App;
