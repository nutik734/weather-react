import React from "react";
import axios from 'axios';

export default function Weather(props){
    function handleResponse(response){
        alert (`This is degrees ${response.data.main.temp} in ${response.data.name}`)
    }
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);

    return <h2>Hello from Weather</h2>;
}
