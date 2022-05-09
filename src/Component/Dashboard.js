import React from "react";
import  "./Dashboard.css"
import InputSearch from "./InputSearch"
import CloudIcon from "./images/cloud.svg"
import MoonIcon from "./images/moon.svg"
import WindIcon from "./images/Vector (10).svg"
import HumIcon from "./images/Vector (11).svg"
import NextDayDetails from "./NextDayDetails";
import Arrow from "./images/Line 17.png"
import arc1 from "./images/Vector (4).svg"
import arc2 from "./images/Vector (5).svg"
import arc3 from "./images/Vector (6).svg"
import arc4 from "./images/Vector (7).svg"
import arc5 from "./images/Vector (8).svg"
import arc6 from "./images/Vector (9).svg"
import Ellipse from "./images/Ellipse 35.svg"
import moment from "moment";



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
            day : "",
            time : ""

            
        }

    }
    
    
    // getDate = () => {
    //     const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    //     const d = new Date();
    //     let name = month[d.getMonth()];
    //     console.log(name);
    
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
                date : moment().format('Do MMMM YYYY'),
                day : moment().format('dddd') ,
                time : moment().format('h:mm a')
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
                    <div className="temp">{this.state.weather}<sup>&#8451;</sup    ></div>
                    <div className="date ">{this.state.date}</div>
                    <div className="d">{this.state.day}   ||    {this.state.time}</div>
                    <div className="details">
                            <div><img src={WindIcon} alt="wind"></img></div><div>Wind</div><div>{this.state.wind}km/hr</div> <div>|</div>
                            <div><img src={HumIcon} alt="humidity"></img></div><div>Humidity</div><div> {this.state.humidity}%</div><div>|</div>
                            <div><img src={HumIcon} alt="humidity"></img></div><div>Humidity</div><div> {this.state.humidity}%</div>
                   
                </div>
                <div className="furtherDayDetail">
                   <NextDayDetails
                     day="Fri"/>
                      <NextDayDetails
                     day="Sat"/>
                      <NextDayDetails
                     day="Sun"/>
                      <NextDayDetails
                     day="Mon"/>
                     <img className= "arrow "src={Arrow} alt="arrow"></img>
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
                    <div className="line"></div>
                     <p className="i">i</p>
                     <div className="meter">
                         <span>Air Quality</span>
                        <img className="arc1"  src={arc1} alt="meter"></img>
                        <img className="arc2" src={arc2} alt="meter"></img>
                        <img className="arc3" src={arc3} alt="meter"></img>
                        <img className="arc4" src={arc4} alt="meter"></img>
                        <img className="arc5"  src={arc5} alt="meter"></img>
                        <img className="arc6" src={arc6} alt="meter"></img>
                        <img className="Pointer" src={Ellipse} alt="meter"></img> 
                        <span className="rating">2/5</span>
                        <span className="mv">Moderate</span>
                    </div>
                    <div className="meter">
                        <p>UV Index</p>
                        <img className="arc11"  src={arc1} alt="meter"></img>
                        <img className="arc21" src={arc2} alt="meter"></img>
                        <img className="arc31" src={arc3} alt="meter"></img>
                        <img className="arc41" src={arc4} alt="meter"></img>
                        <img className="arc51"  src={arc5} alt="meter"></img>
                        <img className="arc61" src={arc6} alt="meter"></img>
                        <img className="Pointer1" src={Ellipse} alt="meter"></img>
                        <span className="rating1">6/10</span>
                        <span className="mv1">High</span>
                    </div>
              </div>
              
          </div>
      )
  }
}
export default DashBoard;