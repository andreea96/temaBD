/**
 * Created by andreea.olaru on 1/11/2018.
 */

import React, {Component} from 'react';
import {Table} from 'react-bootstrap';




export default class FullOrderPrice extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        orders: [],
        cost: [],
    }

    componentWillMount() {
        fetch('http://192.168.33.101:3001/vinuri/FullOrderPrice')
            .then(resp => resp.json())
            .then(result => {
                    var orders = [];
                    var cost = [];

                    var i;
                    console.log(result);
                    for (i = 0; i < result.length; i++) {
                        orders.push(result[i].comandaNO);
                        cost.push(result[i].suma);

                    }

                    this.setState({
                        orders: orders,
                        cost: cost,
                    })
                }
            );
    }




    render() {

        let orders=this.state.orders;
        let cost = this.state.cost;

        return (
            <Table responsive>
                <thead>
                <tr>
                    <th>Comenzi</th>
                    <th>Pret Total</th>
                </tr>
                </thead>
                <tbody>

                {
                    orders.map(function (value, index) {
                        return (<tr>
                                <td>{value}</td>
                                <td>{cost[index]} lei</td>

                            </tr>
                        )
                    })
                }

                </tbody>
            </Table>);
    }

}
