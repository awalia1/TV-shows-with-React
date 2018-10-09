import React, { Component } from 'react';
import ShowsList from '../../components/ShowsList';
import Intro from '../../components/Intro';
import Loader from '../../components/Loader';

class Shows extends Component {

    state = {
        shows: [],
        showName: '',
        isFetching: false
    }
   
    onShowInputChange = e => {
        this.setState({showName: e.target.value, isFetching: true})
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
          .then(response => response.json())
          .then(json => this.setState({ shows: json, isFetching: false }))
    } 

    render() {
        const {shows, showName, isFetching} = this.state;
        return (
            <div> 
                <Intro message = "Here you can find your favorite shows."/>
                <div>
                    <input 
                        value= {showName}
                        type="text" 
                        onChange={this.onShowInputChange} 
                    />
                </div>
                {
                    shows.length === 0 && showName.trim() === ''
                    &&
                    <p>Please enter show name into the input</p>
                }
                {
                    !isFetching && shows.length === 0 && showName.trim() !== ''
                    &&
                    <p>No TV shows have been found with this name</p>
                }
                {
                    isFetching && <Loader />
                }
                {
                    !isFetching && <ShowsList list = {this.state.shows} />
                }
                
            </div>
        )
    }
}

export default Shows