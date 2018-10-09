import React, { Component } from 'react';
import ShowsList from '../ShowsList'

class Shows extends Component {

    state = {
        shows: [],
        showName: '',
        isFetching: false
    }
   
    onShowInputChange = e => {
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
          .then(response => response.json())
          .then(json => this.setState({ shows: json }));
    }

    render() {
        return (
            <div>
                The length of shows array - {this.state.shows.length}
                <div>
                    <input type="text" onChange={this.onShowInputChange} />
                </div>
                <ShowsList list = {this.state.shows} />
            </div>
        )
    }
}

export default Shows