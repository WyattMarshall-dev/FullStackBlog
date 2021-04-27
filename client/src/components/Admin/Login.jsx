import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: '',
        user: true,
        redirect: false,
        error: ''
    }
}

changeHandler = (e) => {
  this.setState( { [e.target.id]: e.target.value } )
}
  
submitHandler = (e) => {
  e.preventDefault();
  //console.log("Handler", this.state);

  axios.post('/api/login', {email: this.state.email, password: this.state.password}, { withCredentials: true })
  .then(res => {
    if(res.status === 200){
      const cookies = new Cookies();
      cookies.set('mycat', 'true', { path: '/'});
      this.props.handleClick(true);
    }
  })
  .catch(res =>{
      console.log("Error: ", res);
      this.setState({error: <div className="text-center text-light bg-danger rounded"><p>Incorrect Username or Password</p></div> })
  })
}

  render() { 
    if(this.props.user) {
      return <Redirect to="/admin" />
  }
    return (
      <div className="login-form">
        <main className="form-signin">
          <form onSubmit={this.submitHandler}>
            <div className="text-center m-4">
              <Link to="/" ><img className="mr-4" src={process.env.PUBLIC_URL + 'Logo.svg'} alt=""/></Link>
            </div>

            <div className="text-center m-4">
                <h1 className="h3 m-4 fw-normal">Admin Login</h1>
            </div>

            {this.state.error}

            <div className="form-floating">
              <input type="email" className="form-control" id="email" placeholder="name@example.com" onChange={this.changeHandler}/>
              <label htmlFor="email">Email address</label>
            </div>

            <div className="form-floating">
              <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.changeHandler}/>
              <label htmlFor="password">Password</label>
            </div>

            {/* <Link to="/admin" ><button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button></Link> */}
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            <p className="mt-5 mb-3 text-muted">&copy; 2021 wyattmarshall.dev</p>
          </form>
        </main>
      </div>
  );
  }
}
 
export default Login;
