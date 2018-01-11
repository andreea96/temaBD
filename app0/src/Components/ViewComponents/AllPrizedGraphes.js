/**
 * Created by andreea.olaru on 1/11/2018.
 */

import React, {Component} from 'react';
import {Table} from 'react-bootstrap';



export default class AllPrizedGraphes extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        graphes: []
    }

    componentWillMount() {
        fetch('http://192.168.33.101:3001/vinuri/AllPrizedGraphes')
            .then(resp => resp.json())
            .then(result => {
                    var graphes = [];

                    var i;

                    for (i = 0; i < result.length; i++) {
                        graphes.push(result[i].Denumire);
                    }

                    this.setState({
                        graphes: graphes,
                    })
                }
            );
    }


    render() {
        let graphes=this.state.graphes;
        return (
            <Table responsive>
                <thead>
                <tr>
                    <th>Struguri din Vinuri premiate </th>
                </tr>
                </thead>
                <tbody>
                {
                    graphes.map(function (value) {
                        return (<tr>
                                <td>{value}</td>
                            </tr>
                        )
                    })
                }

                </tbody>
            </Table>
        )
    }

}
