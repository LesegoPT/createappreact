import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";
import axios from "axios";

export default function WeatherForecast(props){
    function handleResponse(response) {
        console.log(response.data);
      }
    
      let apiKey = "50c2acd53349fabd54f52b93c8650d37";
      let longitude = props.coordinates.lon;
      let latitude = props.coordinates.lat;
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
      axios.get(apiUrl).then(handleResponse);
    
    return(
        <div className="WeatherForecast">
            <div className="row">
                <div className="WeatherForecast-Daily">
                    Thurs
                </div>
                <div>
                    <WeatherIcon code="01d" size={36}/>
                </div>
                <div className="WeatherForecast-temperature">
                   <span className="maxTemperature">19°</span> 
                   <span className="minTemperature">11°</span> 
                </div>

            </div>
        </div>
    )
}