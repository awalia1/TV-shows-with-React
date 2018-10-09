import React, { Component } from 'react';
import ShowsList from '../ShowsList'

class Shows extends Component {

    state = {
        shows: []
      }
    
      componentDidMount() {
        fetch('http://api.tvmaze.com/search/shows?q=avatar-the-last-airbender')
          .then(response => response.json())
          .then(json => this.setState({ shows: json }));
      }

    render() {
        return (
            <div>
                The length of shows array - {this.state.shows.length}
                <ShowsList list = {this.state.shows} />
            </div>
        )
    }
}

export default Shows