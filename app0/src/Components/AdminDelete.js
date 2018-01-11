/**
 * Created by andreea.olaru on 1/5/2018.
 */

import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
export default class AdminDelete extends Component {

    constructor(props){
        super(props)
    }
    state={
        nume:[],
        cost:[],
        culoare:[],
        tip:[],
        id:[]
    }
    componentWillMount() {
        fetch('http://192.168.33.101:3001/vinuri')
            .then(resp => resp.json())
            .then(result => {
                    var numes = [];
                    var costs=[];
                    var culoares=[];
                    var tips =[];
                    var ids=[];
                    var i;
                    for (i = 0; i < result.length; i++) {
                        numes.push(result[i].nume);
                        costs.push(result[i].cost);
                        culoares.push(result[i].Culoare);
                        tips.push(result[i].Tip);
                        ids.push(result[i].vinId);
                    }

                    this.setState({
                        nume:numes,
                        cost:costs,
                        culoare:culoares,
                        tip:tips,
                        id:ids,
                    });
                }
            );
    }


    render() {



        let nume=this.state.nume;
        let cost=this.state.cost;
        let culoare=this.state.culoare;
        let tips=this.state.tip;
        let ids=this.state.id;

        const handleDelete=(e)=>{
            console.log(e.target);
            let id=e.target.id;
            fetch('http://192.168.33.101:3001/vinuri/delete/'+id)
                .then(res=>(res)=>{
                    console.log(res);
                })
        }

        return( <Table responsive>
            <thead>
            <tr>
                <th>Vin</th>
                <th>Pret</th>
                <th>Culoare</th>
                <th>Dulceata</th>
            </tr>
            </thead>
            <tbody>

            {
                nume.map(function (value, index) {
                    return (<tr>
                            <td>{value}</td>
                            <td>{cost[index]}</td>
                            <td>{culoare[index]}</td>
                            <td>{tips[index]}</td>
                            <td><span id={ids[index]} class="glyphicon glyphicon-remove" onClick={(e)=>handleDelete(e)}  /></td>
                        </tr>
                    )
                })
            }
            </tbody>
        </Table>);
    }

}
