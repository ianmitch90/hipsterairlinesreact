import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Login extends Component {

  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleSubmit= () => {
    /*i want the submitbutton appears when BOTH pass and username and handle THEN handle the actual submit*/
  }
  render() {

    const actions = [
      <FlatButton label="Cancel" primary={true} onClick={this.handleClose}/>,
      <FlatButton label="Submit" primary={true} disabled={true} onClick={this.handleClose}/>
    ];

    return (
      <div>
      <RaisedButton label="Login" onClick={this.handleOpen}/>
      <Dialog title="Log into your Account" actions={actions} modal={true} open={this.state.open}>

        <TextField hintText="Enter Username" floatingLabelText="Username"/>
        <TextField hintText="Enter Password" floatingLabelText="Password" type="password"/>
      </Dialog>
    </div>
    );
  }

}

export default Login;
