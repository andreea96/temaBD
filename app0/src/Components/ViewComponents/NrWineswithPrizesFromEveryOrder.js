/**
 * Created by andreea.olaru on 1/11/2018.
 */

import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
export default class NrWineswithPrizesFromEveryOrder extends Component {

    constructor(props) {
        super(props);
    }


    state = {

        nrVinuriPremiate: [],
        orderNO: [],

    }

    componentWillMount() {
        fetch('http://192.168.33.101:3001/vinuri/NrWineswithPrizesFromEveryOrder')
            .then(resp => resp.json())
            .then(result => {
                    var vinuriPremiate = [];
                    var orders = [];

                    var i;

                    for (i = 0; i < result.length; i++) {
                        vinuriPremiate.push(result[i].vinuri_premiate);
                        orders.push(result[i].comandaNo);
                    }

                    this.setState({

                        nrVinuriPremiate: vinuriPremiate,
                        orderNO: orders,
                    })
                }
            );
    }

    render() {

        let orders = this.state.orderNO;
        let vinuri = this.state.nrVinuriPremiate;

        return (
            <Table responsive>
                <thead>
                <tr>
                    <th>Comanda</th>
                    <th>Nr Vinuri premiate</th>
                </tr>
                </thead>
                <tbody>

                {
                    orders.map(function (value, index) {
                        return (<tr>
                                <td>{value}</td>
                                <td>{vinuri[index]}</td>
                            </tr>
                        )
                    })
                }

                </tbody>
            </Table>
        )

    }

}
