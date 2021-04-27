import './App.css';
import ScrollToTop from './components/ScrollToTop';
import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from './pages/homePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import Admin from './pages/Admin';
import Login from './components/Admin/Login';
import ProtectedRoute from './components/ProtectedRoutes'
// import axios from 'axios';
import React, { Component } from 'react';
import Unauthorized from './pages/Unauthorized';
import NotFoundPage from "./pages/NotFoundPage";
import Cookies from 'universal-cookie'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const cookies = new Cookies();
    let cook = cookies.get('mycat');
    // console.log(cook);
    this.setState({user: cook})
  }

  handleClick(e) {
    this.setState({user: e})
  }

  render() { 

    if(this.state.user){
      <Redirect from="/login" to='/admin'/>
    }
    const cookies2 = new Cookies();
    let cook = cookies2.get('mycat');
    return (
      <div className="App">
        <ScrollToTop />
  
                  <main className="">
                    {/* <button onClick={() => this.handleClick(true) } >click</button> */}
                    <Switch>
                      <Route path="/" exact component={HomePage}/>
                      <Route path="/about" component={AboutPage}/>
                      <Route path="/blog" component={BlogPage}/>
                      <Route path="/unauthorized" component={Unauthorized}/>
                      <Route path="/login" render={() => <Login handleClick={this.handleClick} user={cook} />} />
                      <ProtectedRoute path="/admin" user={cook} component={Admin}/>
                      <ProtectedRoute path="/admin/editpost" user={cook} component={Admin}/>
                      <ProtectedRoute path="/admin/newpost" user={cook} component={Admin}/>
                      <Route component={NotFoundPage}/>
                    </Switch>
                  </main>
      </div>
    );
  }
}
 
export default App;

