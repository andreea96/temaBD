/**
 * Created by andreea.olaru on 1/11/2018.
 */

import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

export default class Top3MostOrderedWine extends Component {


    constructor(props) {
        super(props);
    }

    state = {
        wine: [],
        quantity: [],
    }

    componentWillMount() {
        fetch('http://192.168.33.101:3001/vinuri/Top3MostOrderedWine')
            .then(resp => resp.json())
            .then(result => {
                    var wines = [];
                    var quantity=[];
                    var i;
                    console.log(result);
                    for (i = 0; i < result.length; i++) {
                        wines.push(result[i].nume);
                        quantity.push(result[i].cantiate);
                    }

                    this.setState({
                        wine: wines,
                        quantity: quantity,

                    });
                }
            );
    }

    render() {

        let wines=this.state.wine;
        let quantity=this.state.quantity;

        return (
            <Table responsive>
                <thead>
                <tr>
                    <th>Vin</th>
                    <th>Cantitate Comandata in toate comenziile</th>
                </tr>
                </thead>
                <tbody>

                {
                    wines.map(function (value, index) {
                        return (<tr>
                                <td>{value}</td>
                                <td>{quantity[index]}</td>
                            </tr>
                        )
                    })
                }

                </tbody>
            </Table>
        )

    }

}
