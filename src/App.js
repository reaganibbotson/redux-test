import React, { Component } from 'react';
import { connect } from 'react-redux';
import { action, action2 } from './actions';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.theState}
        <input type="text" onChange={this.props.onInputChange} />
        {this.props.theState2}
        <input type="text" onChange={this.props.on2ndInputChange}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    theState: state.reducer.theState,
    theState2: state.reducer2.theState2
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    onInputChange: (event) => dispatch(action(event.target.value)),
    on2ndInputChange: (event) => dispatch(action2(event.target.value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
