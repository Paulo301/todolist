import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import userApi from '../../services/userApi';

import stylesMaterial from './stylesMaterial';

function Login(props) {
  const classes = stylesMaterial();

  const handleSubmit = (event) =>{
    event.preventDefault();
    userApi.login(event.target[0].value, event.target[1].value);
    // props.handleCurrentUser(event.target[0].value);
    // console.log(event.target[0].value);
  }
  
  return (
    <form onSubmit={handleSubmit} className={classes.form} > 
      <TextField id="email-field" label="Email" className={classes.email} />
      <TextField id="password-field" label="Password" type="password" className={classes.password} />
      <Button variant="contained" color="primary" type='submit' style={{ width: 500, height: 40, marginTop: 20 }} >
        Entrar
      </Button>
    </form>
  );
}

export default Login;