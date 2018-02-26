import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import Login from './Login'


class Baselayout extends Component {

  render() {
    return (

      <div>

      <nav>
        <Login/>
      </nav>

      {this.props.children}


      <footer >
        TheShadyGaymer© 2017 Copyright Holder All Rights Reserved.
      </footer>

    </div>

    );
  }

}

export default Baselayout;
