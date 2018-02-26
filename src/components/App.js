import React, { Component } from 'react';
import {connect} from 'react-redux'
import Landing from './Landing'
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);

  }


  render() {


    return (
      <div className="App">
        {this.props.user.username &&
            <div>
              <h1>Hiya {this.props.user.username}</h1>
              this is inside the dashboard (logged in)
            </div>

          }

          {!this.props.user.username &&
            <Landing/>
          }


      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App);
