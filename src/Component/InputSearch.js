/* eslint-disable react/jsx-no-undef */
import React from "react";
import LocationIcon from "./images/location.svg"
import SearchIcon from "./images/search.svg"
import "./InputSearch.css"


class InputSearch extends React.Component
{
 
   render(){
       return(
           <div>
               <img className="locationIcon" src={LocationIcon} alt="location"></img>
               <input  type="text" 
               value={this.props.city} 
               onChange={(e)=>this.props.setSearchCity(e.target.value)} ></input>
                <button className="submitBtn" onClick={()=>{this.props.onClick()}}><img src={SearchIcon} alt="search"></img></button>
           </div>
       )
   }
}
export default InputSearch;