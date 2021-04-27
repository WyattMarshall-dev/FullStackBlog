import React, { Component } from 'react';
import BlogPost from '../components/BlogPost';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Blog extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = { 
      posts: '',
      pCount: 10
   }
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

  blogPost() {
    if(this.state.posts){
    return this.state.posts.slice(0, this.state.pCount).map(post =>
      <BlogPost
        key={post._id}
        description={post.desc}
        category={post.category} 
        title={post.title} 
        _id={post._id}
        date={post.date}
        body={post.body}
      />)}
  }

  render() { 
    // console.log("BlogPage", this.state.posts)
    return (
      
      <div className="container-fluid">
        <Nav />
        <div className="container">
          <hr />
          <div className="row">
            <div className="col-md-8">
              <h3 className="pb-4 mb-4 fst-italic border-bottom">
                From the Mountain
              </h3>
              
              {this.blogPost()}

              <hr />
              
              
            </div>

            <div className="col-md-4">
              <div className="p-4 mb-3 bg-light rounded">
                <h4 className="fst-italic">Welcome to the Blog</h4>
                <p className="mb-0">Stay up to date here with the latest posts and news!</p>
              </div>

            <div className="p-4">
              <h4 className="fst-italic">Archives</h4>
              <ol className="list-unstyled mb-0">
                <li><Link href="/">March 2021</Link></li>
                <li><Link href="/">February 2021</Link></li>
                <li><Link href="/">January 2021</Link></li>
                <li><Link href="/">December 2020</Link></li>
                <li><Link href="/">November 2020</Link></li>
                <li><Link href="/">October 2020</Link></li>
                <li><Link href="/">September 2020</Link></li>
                <li><Link href="/">August 2020</Link></li>
                <li><Link href="/">July 2020</Link></li>
                <li><Link href="/">June 2020</Link></li>
                <li><Link href="/">May 2020</Link></li>
                <li><Link href="/">April 2020</Link></li>
              </ol>
            </div>

            <div className="p-4">
              <h4 className="fst-italic">Socials</h4>
              <ol className="list-unstyled">
                <li><a href="http://www.Youtube.com">Youtube</a></li>
                <li><a href="http://www.Twitter.com">Twitter</a></li>
                <li><a href="http://www.Facebook.com">Facebook</a></li>
              </ol>
            </div>
            </div>

          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
 
export default Blog;





