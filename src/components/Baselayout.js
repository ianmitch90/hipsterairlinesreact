import React, {Component} from 'react';

class Baselayout extends Component {

  render() {
    return (

      <div>

      <nav>

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
