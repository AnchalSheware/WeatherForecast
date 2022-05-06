import React from "react";
import  "./Dashboard.css"
import InputSearch from "./InputSearch"
import CloudIcon from "./images/cloud.svg"
import MoonIcon from "./images/moon.svg"
class DashBoard extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            wind : "",
            humidity : "" ,
            weather : "",
            date : "",
            searchCity : ""
        }

    }
    getWeather = async() => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.searchCity}&appid=7abb3ff2fe622c01deee6a69267d9acf `;
        const response = await fetch(url);
        const responseJson = await response.json();
        console.log(responseJson);
        this.setState(
            {
                wind : responseJson.wind.speed,
                humidity : responseJson.main.humidity,
                weather : (responseJson.main.temp-273.15).toFixed(2),
                date : new Date().toLocaleString() + ""
            }
        )
    }
    getCity = (e) => {
                console.log(e);
                this.setState({searchCity:e})
        }  
  render()
  {
      return (
          <div className="container">
              <div className="content">
                  <img className="MoonIcon" src={MoonIcon} alt="icon"></img>
                  <img className="cloudIcon" src={CloudIcon} alt="icon"></img>
                  <div className="temp">{this.state.weather}</div>
                   
                    <h1>{this.state.wind}</h1>
                    <h1>{this.state.humidity}</h1>
                    
                    <h1>{this.state.date}</h1>
                                       
              </div>
              <div className="form">
                  <InputSearch
                   value = {this.state.searchCity}
                   setSearchCity = {this.getCity}
                   onClick={() => this.getWeather()}/>
              </div>
          </div>
      )
  }
}
export default DashBoard;