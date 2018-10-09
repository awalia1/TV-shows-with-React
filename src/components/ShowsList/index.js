import React, { Component } from 'react'
import './index.css'
import {Link} from 'react-router-dom'

const ShowsListItem = ({shows}) => (
    <li>
        <Link to = {`/show/${shows.show.id}`}>
            {shows.show.name}
        </Link>
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