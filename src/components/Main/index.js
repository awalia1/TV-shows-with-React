import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Shows from '../../containers/Shows';
import SingleShow from '../../containers/SingleShow';

const Main = props => (
    <Switch>
        <Route exact path="/" component={Shows} />
        <Route path="/show/:id" component={SingleShow} />
    </Switch>
)

export default Main