import React, { Component } from 'react';
import Content from '../components/Admin/Content';
import Navbar from '../components/Admin/Navbar';
import { Route, Switch } from 'react-router-dom'
import EditPost from '../components/Admin/EditPost'
import axios from 'axios';
import newPost from '../components/Admin/newPost';

class Admin extends Component {
    _isMounted = false;
    constructor(props){
        super(props);
        this.state = { 
            posts: '',
            refresh: ''
         }
         this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this._isMounted = true;
        axios.get('/api/posts')
        .then((content => {
            if (this._isMounted) {
            this.setState({posts: content.data})}}))
    }

    componentWillUnmount() {
        this._isMounted = false; 
    }

    handleClick(e) {
        this.setState({refresh: e})
      }

    render() { 
        // console.log("Admin", this.state);
        return (
            <div>
                <Navbar handleClick={this.handleClick} />   
                <Switch >       
                    <Route path="/admin" exact render={ () =>  <Content props={this.state.posts}/>  }/>
                    <Route path="/admin/editpost" render={ () => <EditPost props={this.state}/> }/>
                    <Route path="/admin/newpost" component={ newPost }/>
                </Switch>  
                <div className="mt-4 p-4 bg-dark text-white text-center">
                    <h1>wyattmarshall.dev</h1>
                </div>
            </div>
        );
    }
}
 
export default Admin;
