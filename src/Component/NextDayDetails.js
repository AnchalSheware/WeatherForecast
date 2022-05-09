import React from "react"
import "./NextDayDetails.css"
import CloudIcon1 from "./images/cloud-7.png"


class NextDayDetails extends React.Component
{
    render()
    {
        return(
            <div className="nextDayDetail"> 
             <div className="temperature">24 deg</div>
             <img className="cloud" src={CloudIcon1} alt= "cloud"></img>
           
             <div className="day">{this.props.day}</div>
            
            </div>
        )
    }
}
export default NextDayDetails