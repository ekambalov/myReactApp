import { connect } from 'react-redux';
import { login } from '../../redux/authReducer';
import Login from './Login';

const mapStateToProps = state => ({
	isAuth: state.auth.isAuth,
});

const LoginContainer = connect(mapStateToProps, { login })(Login);

export default LoginContainer;
