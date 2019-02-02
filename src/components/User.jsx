import React from 'react';
import {Link} from 'react-router-dom';
import Paper from 'material-ui/Paper';
import {Toolbar} from 'material-ui/Toolbar';
import {Route, Router} from 'react-router-dom';
import {indigo50} from 'material-ui/styles/colors';
import Login from './Login';
import Register from './Register';
import sideImg from '../assets/images/small_bg.jpg';

const style = {
  toolbar: {
    background: '#fff',
    height:'auto'
  },
  main: {
    background: indigo50,
    height: '100%',
  },
  box: {
    marginTop: 50,
  },
};

export default class User extends React.Component {
  render () {
    return (
      <div style={style.main}>
        <Toolbar style={style.toolbar}>
          <div className="warpper">
            <Link to="/">
              <svg width="160" height="70" viewBox="0 0 160 70">
                <use xlinkHref = "#logo"/>
              </svg>
            </Link>
          </div>
        </Toolbar>
        <Paper className="warpper flex" style={style.box}>
          <img src={sideImg} alt="" />
          <Route path={`${this.props.match.url}/login`} component={Login} />
          <Route path={`${this.props.match.url}/register`} component={Register} />
        </Paper>
      </div>
    );
  }
}
