import React, {useState} from "react";
import {axiosWithAuth} from '../utils/axiosWIthAuth'
import {useHistory} from 'react-router-dom'

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
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <form onSubmit={onSubmit}>
        <input name='username' placeholder= 'username' onChange={handleChange} value={user.username}/>
        <input name='password' placeholder= 'password' onChange={handleChange} value={user.password} type='password'/>
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
