    
import React, { useState } from "react";
import axios from 'axios';
import { Button, FormGroup, FormControl, FormLabel} from "react-bootstrap";
import { Redirect } from "react-router-dom";

const Login = (props) => {
	// make a post request to retrieve a token from the api
	// when you have handled the token, navigate to the BubblePage route
	const [login, setLogin] = useState({
		username: "",
		password: "",
  })
  

	const onChange = e => {
		setLogin({ ...login, [e.target.name]: e.target.value });
  }
  
	const onSubmit = (e) => {
		e.preventDefault();
		axios.post(`http://localhost:5000/api/login`, login)
		.then(response => {
			localStorage.setItem('token', response.data.payload);
			props.history.push('/bubbles')
		})
		.catch(error => console.log(error));
  }

  if (localStorage.getItem("token")) return <Redirect to="/bubble" />;

  
	return (
		<div>
			<h1>Welcome to the Bubble App!</h1>
			<form onSubmit={onSubmit}>
        <FormGroup controlId="username" bsSize="large">
          <FormLabel>username</FormLabel>
          <FormControl
            id="username"
						name="username"
						type="text"
						onChange={onChange}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            id="password"
            name="password"
            type="password"
            onChange={onChange}
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </form>
		</div>
	);
};

export default Login;

