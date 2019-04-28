import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import Main from './Main';
import User from './User';
import { setName } from './store/actions/userActions'
function App(props) {
  const [name, setStateName] = useState('');
  const handleOnchange = (e) => {
    const apptext = e.target.value ? `From app ${e.target.value}` : ''
    setStateName(e.target.value);
    props.setName(apptext);
  }
  const changeOtherName = (name, e) => {
    props.setName(name);
  }
  return (
    <div className="App">
      <h1>Try App input</h1>
      <input type="text" onChange={handleOnchange} value={name} />
      <Main
      changeUserName={(name) => props.setName(name)}
      changeOtherName={changeOtherName}
      />
      <User name={props.user.name}/>
      Math reducer props : {props.math.result}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
    math: state.math
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch(setName(name));
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
