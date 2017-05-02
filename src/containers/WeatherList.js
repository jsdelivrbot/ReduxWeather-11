import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;

        return (
            <tr key={name}>
                <td>{name}</td>
            </tr>
        )
    }
    render() {
        return (
            <table className="table table-head">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                {/* map over each individual city*/}
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}
// without destructuring
// function mapStateToProps(state) {
//     return {
//         weather: state.weather
//     };
// }

// with desetructuring 
function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);