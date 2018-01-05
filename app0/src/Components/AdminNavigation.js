/**
 * Created by andreea.olaru on 1/5/2018.
 */

import React, {Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import AdminInsert  from './AdminInsert';
import AdminDelete from './AdminDelete';
import AdminUpdate from './AdminUpdate';
import AdminView from './AdminView';

export default class AdminNavigation extends Component {

    constructor(props)
    {
        super(props);
    }

    render() {
        return(
                <Switch>
                    <Route path={`${this.props.url}/insert`} component={AdminInsert} />
                    <Route path={`${this.props.url}/update`} component={AdminUpdate} />
                    <Route path={`${this.props.url}/delete`} component={AdminDelete} />
                    <Route path={`${this.props.url}/view`} component={AdminView} />
                </Switch>
        );
    }

}
