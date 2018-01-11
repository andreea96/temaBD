/**
 * Created by andreea.olaru on 1/5/2018.
 */

import React, {Component} from 'react';
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';


export default class AdminMenu extends Component {


    render(){
        return(
            <Navbar inverse collapseOnSelect>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="/admin/insert">
                            <Link to={`${this.props.url}/insert`}> Insert <span className="glyphicon glyphicon-send" /></Link>
                        </NavItem>
                        <NavItem href="/admin/delete">
                            <Link to={`${this.props.url}/delete`}>Delete<span className="glyphicon glyphicon-scissors" /></Link>
                        </NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="/admin/view">
                            <Link to={`${this.props.url}/view`}> View wines <span class="glyphicon glyphicon-th-list" /></Link>
                        </NavItem>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }



}
