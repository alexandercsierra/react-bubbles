import React, {useState} from "react";
import {axiosWithAuth} from '../utils/axiosWIthAuth'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const Form = styled.form`
    width: 80%;
    margin: 4% auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Input = styled.input`
    width: 100%;
`;

const Button = styled.button`
    width: 35%;
    margin-top: 4%;
    padding: 2%;
    border: none;
    background: #6ACFF7;

`;



const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const history = useHistory();
  const [user, setUser] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth().post('/api/login', user)
      .then(res=>{
        localStorage.setItem('token', res.data.payload);
        history.push('/bubblepage');
      })
      .catch(err=>console.log(err))

    
  }


  return (
    <Container>
      <h1>Welcome to the Bubble App!</h1>
      {/* <p>Build a login page here</p> */}
      <Form onSubmit={onSubmit}>
        <Input name='username' placeholder= 'username' onChange={handleChange} value={user.username}/>
        <Input name='password' placeholder= 'password' onChange={handleChange} value={user.password} type='password'/>
        <Button>Login</Button>
      </Form>
    </Container>
  );
};

export default Login;
