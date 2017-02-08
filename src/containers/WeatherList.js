import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/Chart.js';
import GoogleMap from '../components/GoogleMap';

class WeatherList extends Component {

    renderWeather(cityData) {
        const name = cityData.city.name;
        const temp = cityData.list.map(weather => weather.main.temp *9/5 -459.67);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const {lat, lon} = cityData.city.coord;
        // console.log(temp, humidity, pressure);

        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat}/></td>
              <td><Chart data={temp} color='orange' units='F'/></td>
                <td><Chart data={humidity} color='green' units='hPa'/></td>
                <td><Chart data={pressure} color='black' units='%'/></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Humidity</th>
                        <th>Pressure</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

// note the es6 syntax here is the same as the commented out version
// function mapStateToProps(state) {
//   return { weather: state.weather };
// }
function mapStateToProps({weather}) {
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);
