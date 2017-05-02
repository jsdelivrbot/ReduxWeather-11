import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange(event) {
        console.log(event.target.value);
        this.setState({ term: event.target.value });
    }
    onFormSubmit(event) {
        // When you use a form tag, use event.PreventDefault to stop page reload
        event.preventDefault();

        // go and fetch weather data
        
    }
    render() {
        return (
            <form onSubmit={this.onFormSubmit}className="input-group">
                <input 
                    placeholder="Get a five day forecast in your favourite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-button">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

export default SearchBar;