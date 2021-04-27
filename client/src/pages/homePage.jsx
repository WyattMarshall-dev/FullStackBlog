import React, { Component } from 'react';
import Featured from '../components/Featured';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import JumboDark from '../components/JumbotronDark';
import JumboLight from '../components/JumbotronLight';
import Nav from '../components/Nav';
import SnowReport from '../components/SnowReport'
import axios from "axios";

class HomePage extends Component {
    _isMounted = false;
    constructor (props){
        super(props);
        this.state = { 
            posts: ""
         }
    }
    
    componentDidMount() {
      this._isMounted = true;
    //   this.getPosts();
    axios.get(`/api/posts`, { withCredentials: true })
        .then(res => { this.setState({ posts: res.data}) } )
        .catch(err =>{
            console.log("Error", err)
        })
    }
        
    componentWillUnmount() {
      this._isMounted = false; 
    }

    // async getPosts() {
    //     await fetch('/api/posts').then(content => console.log("content: ", content))
    // }

    FeaturedPost() {
        if(this.state.posts){
            // console.log(this.state.posts);
        return this.state.posts.slice(0, 2).map(post =>
          <Featured
            key={post._id}
            description={post.desc}
            category={post.category} 
            title={post.title} 
            _id={post._id}
            date={post.date}
            img={"dinoHands.jpg"}
          />)} else {
            // console.log(this.state.posts);
              return <Featured
                  key={"NULL"}
                  description={"NULL"}
                  category={"NULL"} 
                  title={"NULL"} 
                  _id={"NULL"}
                  date={"NULL"}
                  img={"dinoHands.jpg"}
                />
          }
      }
    
    
    render() { 
        return (
            <div className="container-fluid">
                <Nav />
                <div className="container m-auto">
                    <Hero />
                    <hr />
                    <h1 className="mb-4 text-center w-100">Latest Posts</h1>
                    <div className="row g-4 mb-4">
                        {this.FeaturedPost()}
                    </div>
                    <hr />
                    <h1 className="text-center w-100">Local Weather</h1>
                    <div className="mb-4 mt-4" id="snow-report">
                        <SnowReport />
                    </div>
                    
                    <div className="row gy-4 ">
                        <JumboDark />
                        <JumboLight />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
 
export default HomePage;
