/**
 * Created by andreea.olaru on 1/11/2018.
 */

import React, {Component} from 'react';
import {Table} from 'react-bootstrap';


export default class AllGraphesinCramas extends Component {

    constructor(props)
    {
        super(props);
    }

    state={
        graphes:[],
        cramas: [],
    }

    componentWillMount() {
        fetch('http://192.168.33.101:3001/vinuri/AllGraphesinCramas')
            .then(resp => resp.json())
            .then(result => {
                    var graphes = [];
                    var cramas = [];
                    var i;
                    for (i = 0; i < result.length; i++) {
                        graphes.push(result[i].Denumire);
                        cramas.push(result[i].denumire);
                    }

                    this.setState({
                        graphes: graphes,
                        cramas: cramas,
                    })
                }
            );
    }


    render() {

        let cramas=this.state.cramas;
        let graphes=this.state.graphes;

        return (
            <Table responsive>
                <thead>
                <tr>
                    <th>Tip Strugure</th>
                    <th>Crama</th>

                </tr>
                </thead>
                <tbody>

                {
                    cramas.map(function (value, index) {
                        return (<tr>
                                <td>{graphes[index]}</td>
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
