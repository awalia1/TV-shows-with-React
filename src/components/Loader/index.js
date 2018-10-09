import React, { Component } from 'react';
import loaderSrc from '../../assets/loader.gif';

const Loader = props => (
        <div>
            <img 
                style = {{width:70}}
                alt="loading icon"
                src={loaderSrc} 
            />
        </div>
    )

export default Loader;