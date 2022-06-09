import React from "react";
import { Navigate } from "react-router-dom";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import styles from "../common/FormsControls/FormsControls.module.css";

const LoginForm = (props) => {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        {props.error ? <div className={styles.formSummaryError}>{props.error}</div> : null}
        <div>
          <Field placeholder={"login"} name='email' component={Input} validate={[required]} />
        </div>
        <div>
          <Field placeholder={"password"} type='password' name='password' component={Input} validate={[required]} />
        </div>
        <div>
          <Field type={"checkbox"} component={Input} name='remeberMe' /> remember me
        </div>

        <div>
          <button>Login</button>
        </div>
      </form>
    </>
  );
};

const LoginReduxForm = reduxForm({
  // a unique name for the form
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData);
    console.log(formData);
  };

  if (props.isAuth) {
    return <Navigate to='/profile' />;
  }
  return (
    <>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </>
  );
};

export default Login;
