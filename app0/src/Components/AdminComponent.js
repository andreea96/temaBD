/**
 * Created by andreea.olaru on 12/15/2017.
 */

import React, {Component} from 'react';
import AdminMenu from "./AdminMenu";
import AdminNavigation from "./AdminNavigation";
import '../styles/admin.css';

export default class AdminComponent extends Component {

    render() {
        return(<div className="margine">
            <br />

            <h3>Admin page</h3>
            <AdminMenu {... this.props.match} />
            <AdminNavigation {...this.props.match }/>


        </div>);
    }

}
