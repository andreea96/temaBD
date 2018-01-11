/**
 * Created by andreea.olaru on 1/11/2018.
 */

import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

export default class OrdersWineQuantity extends Component {

    constructor(props) {
        super(props);

    }

    state = {
        orderNO: [],
        winesQ: [],
    }

    componentWillMount() {
        fetch('http://192.168.33.101:3001/vinuri/ordersWineQuantity')
            .then(resp => resp.json())
            .then(result => {
                    var orders = [];
                    var quantities = [];
                    var i;
                    for (i = 0; i < result.length; i++) {
                        orders.push(result[i].comandaNO);
                        quantities.push(result[i].numWines);
                    }

                    this.setState({
                        orderNO: orders,
                        winesQ: quantities,
                    })
                }
            );
    }

    render() {

        let orders = this.state.orderNO;
        let winesQ = this.state.winesQ;
        return (
            <div>
                <Table responsive>
                    <thead>
                    <tr>
                        <th>Order Number</th>
                        <th>Nr vinuri</th>
                    </tr>
                    </thead>
                    <tbody>

                    {
                        orders.map(function (value, index) {
                            return (<tr>
                                    <td>{value}</td>
                                    <td>{winesQ[index]}</td>
                                </tr>
                            )
                        })
                    }

                    </tbody>
                </Table>
            </div>
        )
    }

}
