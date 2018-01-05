/**
 * Created by andreea.olaru on 1/5/2018.
 */

import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class AdminInsert extends Component {

    state={
        wineColor: 1,
        wineSweetness: 1,
        crama:'',
        wineName: '',
        wineCost: 0,
    };


    handleSubmit= () => {
        fetch('http://192.168.33.101:3001/admin',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                wineName: this.state.wineName,
                wineColor: this.state.wineColor,
            }),

        })
    }
    handleChange=(event,index,value)=>this.setState({wineColor: value});
    handleSweetnessChange=(event,index,value)=> this.setState({wineSweetness: value});
    handleCramaChange=(event,index,value)=>this.setState({crama: value});
    render() {
        console.log(this.state);
        return (<div>
            <MuiThemeProvider>
            <TextField
                floatingLabelText="Nume vin"
                floatingLabelFixed={true}
                fullWidth={true}
                onChange={(event)=>{this.setState({wineName: event.target.value})}}
            />
            <br />
            <TextField
                floatingLabelText="Pret vin"
                floatingLabelFixed={true}
                fullWidth={true}
                onChange={(event)=>{this.setState({wineCost: parseInt(event.target.value)})}}
            />
            <br />
            <SelectField
                floatingLabelText="Culoare"
                value={this.state.wineColor}
                onChange={this.handleChange}
                fullWidth={true}
            >
                <MenuItem value='rosu' primaryText="rosu" />
                <MenuItem value='alb' primaryText="alb" />
                <MenuItem value='rose' primaryText="rose" />
            </SelectField>
            <br />
            <SelectField
                floatingLabelTex='Tip'
                value={this.state.wineSweetness}
                onChange={this.handleSweetnessChange}
                fullWidth={true}
            >
                <MenuItem value='sec' primaryText="sec" />
                <MenuItem value='demi-sec' primaryText="demi-sec" />
                <MenuItem value='demi-dulce' primaryText="demi-dulce" />
                <MenuItem value='dulce' primaryText="dulce" />
            </SelectField>
            <SelectField
                floatingLabelTex='Crama'
                value={this.state.wineSweetness}
                onChange={this.handleCramaChange}
                fullWidth={true}
                >
                    <MenuItem value='Crama Beciul Domnesc' primaryText="Crama Beciul Domnesc" />
                    <MenuItem value='Crama Paradis' primaryText="Crama Paradis" />
                    <MenuItem value='Crama carligele' primaryText="Crama carligele" />
                </SelectField>

            <RaisedButton label="Submit" fullWidth={true} onClick={this.handleSubmit()} />
            </MuiThemeProvider>

        </div>)
    }

}
