/**
 * Created by andreea.olaru on 1/11/2018.
 */

import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Table} from 'react-bootstrap';
export default class WinesWithPrizes extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        wines: [],
        prizes: [],
        year: [],
        competition: [],
    }

    componentWillMount() {
        fetch('http://192.168.33.101:3001/vinuri/winesWithPrizes')
            .then(resp => resp.json())
            .then(result => {
                    var wines = [];
                    var prizes = [];
                    var years = [];
                    var competitions = [];
                    var i;
                    console.log(result);
                    for (i = 0; i < result.length; i++) {
                        wines.push(result[i].nume);
                        prizes.push(result[i].Denumire);
                        years.push(result[i].an);
                        competitions.push(result[i].concurs);
                    }

                    this.setState({
                        wines: wines,
                        prizes: prizes,
                        year: years,
                        competition: competitions,
                    })
                }
            );
    }


    render() {
        let wines = this.state.wines;
        let prizes = this.state.prizes;
        let year = this.state.year;
        let competition = this.state.competition;

        return (
            <Table responsive>
                <thead>
                <tr>
                    <th>Vin</th>
                    <th>Premiu</th>
                    <th>Concurs</th>
                    <th>An</th>
                </tr>
                </thead>
                <tbody>

                    {
                        wines.map(function (value, index) {
                            return (<tr>
                                    <td>{value}</td>
                                    <td>{prizes[index]}</td>
                                    <td>{year[index]}</td>
                                    <td>{competition[index]}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>
        )
    }

}
