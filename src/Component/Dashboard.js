import React from "react";
import  "./Dashboard.css"
import InputSearch from "./InputSearch"
import CloudIcon from "./images/cloud.svg"
import MoonIcon from "./images/moon.svg"
import WindIcon from "./images/Vector (10).svg"
import HumIcon from "./images/Vector (11).svg"



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
            searchCity : "",
            
            
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
                  <div className="date ">{this.state.date}</div>
                  <div className="details">
                  <div><img src={WindIcon} alt="wind"></img>Wind     {this.state.wind}</div>
                  <div><img src={HumIcon} alt="humidity"></img>Humidity {this.state.humidity}</div>
                  <div><img src={HumIcon} alt="humidity"></img>Humidity {this.state.humidity}</div>
                </div>
                   
                                       
              </div>
              <div className="form">
                  <InputSearch
                   value = {this.state.searchCity}
                   setSearchCity = {this.getCity}
                   onClick={() => this.getWeather()}/>
                   <div className="climate">
                        <div> <div className="specification sunrise">Sunrise</div>
                            <div  className="time"> </div> 
                        </div>
                        <div> <div className="specification ghour">Golden Hour</div>
                            <div  className="time ghourbox"> </div> 
                        </div>
                        <div> <div className="specification sunrise">Sunset</div>
                              <div  className="time"> </div> 
                        </div>
                    </div>
                    <div className="airQuality"> </div>
                    <p>i</p>
                    <div>
                    
                    </div>
                        
              </div>
              
          </div>
      )
  }
}
export default DashBoard;