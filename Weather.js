import React, { useState,useEffect } from 'react'
import axios from 'axios'
function Weather() {


    const APP_Key = "0dc6b79ee309555a24b5cb5dc781a068"


    const[city,setCity] = useState(null)
    const[search,setSearch] = useState("")
    const [query,setQuery]  = useState(" ")

   

    
    useEffect(() =>{
            getData()
    },[query])

    const getData = async () =>{
        await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${APP_Key}`)
        .then(response => {
            console.log(response)
            setCity(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    const searchHandler = (event) => {
        setSearch(event.target.value)
    }

    const getSearch = (event) => { // onclicking the Search button 
        event.preventDefault()
        setQuery(search)
        setSearch(" ")
      }

    return (

        <div className="container">
            <form className="search-form" onSubmit={getSearch}>
            <div className="search-bar">
                <label><b> City </b> </label>
                <input type="text" 
                placeholder="Search" 
                onChange={searchHandler} />
            </div>
            <button className="search-button" type="submit">Submit</button>
            </form>

    { !city ? (
            <p> <b>Enter city's name </b></p>
           ) : (
                <div className="display">
                <h2  className="location">Location: {query}
                </h2>   
                <h3 className="temperature">
                Temperature :{city.main.temp} Fahrenheit
                </h3>   
            </div>
                )} 

            
        </div>
    )
}

export default Weather
