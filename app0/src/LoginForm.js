/**
 * Created by andreea.olaru on 12/11/2017.
 */

import React,{Component}  from 'react';
import {FormGroup,FormControl,ControlLabel,HelpBlock,ButtonGroup,Button } from 'react-bootstrap';
import {Link,Route, Redirect,HashRouter,BrowserRouter } from 'react-router-dom';


export default class LoginForm extends Component {

    constructor(props){
        super(props);
        this.state={
            mail: '',
            pass: '',
            validPass: false,
            validEmail: false,
            isButtonDisabled: true,
            redirect: false,
        };
    }

    getValidationStateMail()  {
        const mail=this.state.mail;
        let isEmail=require('isemail');
        let pass=this.state.validEmail;

        if(isEmail.validate(mail) && !pass) {

            this.setState({
                validEmail: true
            });
            return 'success';
        }

        if(!isEmail.validate(mail) && pass) {
            this.setState({
                validEmail: false
            });
            return 'warning';
        }
        if(pass)
            return 'success';
        return 'warning';
    }

    getValidationStatePassword() {
        let pass = this.state.pass;
        if (pass.length < 8 || !pass)
            return 'error';

        else {
            if(!this.state.validPass) //make sure that the state is not updated too many times, otherwise the state change limits will be met
                this.setState({
                validPass: true
                });
        }
        return 'success';
    }
    handleChange(e){
      this.setState({
          mail: e.target.value
      });

    }
    changePass(e){
        this.setState({
            pass: e.target.value
        });
    }

    onLogInClick(){

       if(!this.state.isButtonDisabled)
       {
           this.props.onLogin(this.state)
           // firebase.createUserWithEmailAndPassword(this.state.mail,this.state.pass);
           this.setState({
               redirect: true,
           })
       }
    }


    componentDidUpdate() {

        if(this.state.validEmail && this.state.validPass) {
            if(this.state.isButtonDisabled)
            //console.log('passed that if');
                this.setState({
                    isButtonDisabled: false
                });
        }
        else {
            //console.log(this.state.isButtonDisabled);
            ///UN MIC BUG AICI ...emailul sau parola redevin invalide butonul nu se mai disable
            if (!this.state.isButtonDisabled) {
                //console.log('the state should be modified');
                this.setState({
                    isButtonDisabled: true,
                });
            }
        }
    }

    render() {

        if(this.state.redirect)
        {
            return (<Redirect to={{pathname: '/admin' }}/> );
        }

        return(
            <BrowserRouter>
            <div className="container">
                <form>
                <FormGroup controlID="formBasicText"
                validationState={this.getValidationStateMail()}
                >
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                    type="text"
                    value={this.state.value}
                    placeholder="Enter email"
                    onChange={this.handleChange.bind(this)}
                    />
                    <FormControl.Feedback />
                    <HelpBlock>Email Validation</HelpBlock>
                </FormGroup>
                    <FormGroup controlID="formControlsPassword"
                              validationState={this.getValidationStatePassword()}
                    >
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            type="Password"
                            placeholder="Password"
                            onChange={this.changePass.bind(this)}
                        />
                        <FormControl.Feedback/>
                        <HelpBlock>Length Validation</HelpBlock>
                    </FormGroup>
                    <ButtonGroup vertical block>
                        <Button bsStyle="primary" bsSize="large" id="btnLogin" onClick={this.onLogInClick.bind(this)} disabled={this.state.isButtonDisabled} >Log in</Button>
                    </ButtonGroup>
                </form>
            </div>
            </BrowserRouter>
        )
    }
}