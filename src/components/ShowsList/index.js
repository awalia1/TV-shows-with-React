import React, { Component } from 'react';
import './index.css'

const ShowsListItem = ({shows}) => (
    <li>
        {shows.show.name}
    </li>
)

const ShowsList = (props) => {
    return (
        <div>
            <ul className="showList">
                {props.list.map(shows => (
                    <ShowsListItem shows = {shows} key={shows.show.id} />
                ))}
            </ul>
        </div>
    )
}

export default ShowsList