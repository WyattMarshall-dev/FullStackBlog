import React, { Component } from 'react';
import axios from 'axios';

class SnowReport extends Component {
    _isMounted = false;
    constructor(props){
        super(props);
        this.state = {
            timestamp: '',
            timezone: '',
            temp: '',
            location: '',
            text: '',
            clouds: '',
            windSpeed: '',
            windDeg: '',
            sunrise: '',
            sunset: '',
            iconClass: '',
            locationClass: '',
            containerClass: ''
        }
    }

    getTime(x) {
        return Number(new Date(x * 1000)
        .toLocaleString('en-GB', { 
            timeZone: 'America/Chihuahua', 
            timeStyle: 'short', 
            hour12: false 
        })
        .toString()
        .split(':')
        .join("")); 
    } 

    componentDidMount() {
        this._isMounted = true;
        axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=99001,us&units=imperial&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`)
        .then(content => {
            if (this._isMounted) {
            this.setState({
                timestamp: content.data.dt,
                timezone: content.data.timezone,
                temp: content.data.main.temp,
                location: content.data.name,
                text: content.data.weather[0].description,
                clouds: content.data.clouds.all,
                windSpeed: content.data.wind.speed,
                windDeg: content.data.wind.deg,
                sunrise: content.data.sys.sunrise,
                sunset: content.data.sys.sunset 
            })}});
    }

    componentWillUnmount() {
        this._isMounted = false; 
    }

    render() {
        // Set time Variables
        let time = this.getTime(this.state.timestamp); 
        let sunrise = this.getTime(this.state.sunrise); 
        let sunset = this.getTime(this.state.sunset);

        let containerClass = " p-4 p-md-3 mb-4 text-light rounded container ";
        let iconClass = ' weather-icon ';

        if (time > sunrise && time < sunset) {
            containerClass += " bg-primary ";
            iconClass += ' text-warning far fa-sun ';
         } 
         else {
            containerClass += " bg-dark ";
            iconClass += ' text-muted far fa-moon ';
         }  

        // Format State Variables...
        let wind = Math.floor(Number(this.state.windSpeed));
        let temp = this.state.temp.toString().slice(0, 2);
        let text = this.state.text.charAt(0).toUpperCase() + this.state.text.slice(1);

        return (
            <div className={containerClass}>
                <div><p className={`text-light display-6 text-center `}><strong>{this.state.location}</strong></p></div>
                <div className="row">
                    <div className="col-lg-6 p-4">
                        <p className="display-1">{temp}&deg;<span className="display-6">f</span></p>  
                        <p className="display-6">{text}</p>
                        <hr />
                        <p className="">Wind: {wind} mph</p>
                    </div>
                    <div className="col-lg-6">
                        <div className="p-4 d-flex flex-column text-light align-items-center justify-content-around h-100 ">
                        <i className={iconClass}></i>                            
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}
 
export default SnowReport;

//////////////////////////////////////////////////////////////////////

// content.data                 = prefix all
// .dt                          = timestamp
// .timezone                    = timezone
// .main.temp                   = tempurature (f)
// .name                        = location (city/zipcode)
// .weather[0].description      = text 
// .clouds.all                  = cloud (1-100)
// .wind.speed                  = wind speed (mph)
// .wind.deg                    = wind direction (deg)
// .sys.sunrise                 = sunrise time
// .sys.sunset                  = sunset time

