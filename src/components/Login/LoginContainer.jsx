import React from 'react';
import { connect } from 'react-redux';
import { pushLoginData } from '../../redux/authReducer';
import Login from './Login';

const mapStateToProps = state => {};

const LoginContainer = connect(mapStateToProps, { pushLoginData })(Login);

export default LoginContainer;
