import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class newPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            desc: '',
            category: '',
            _id: '',
            tags: '',
            redirect: false
        }
    }

    changeHandler = (e) => {
        this.setState( { [e.target.id]: e.target.value } )
    }
    submitHandler = (e) => {
        e.preventDefault();

        axios.post(`/api/posts`, this.state, { withCredentials: true })
        .then(res => {
            console.log(res);
            this.setState({redirect: true})
        })
        .catch(err =>{
            console.log(err)
        })
    }

    render() { 
        if(this.state.redirect){
            return <Redirect to="/admin"/>
        }

        return (
            <div> 
        <form className="container" onSubmit={this.submitHandler}>
            <h1 className="mb-4 mt-4">New Post:</h1>
            <hr />
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title: </label>
                <input type="text" className="form-control" id="title" onChange={this.changeHandler}/> 
                <p className="text-end">{this.state.title.length} / 30</p>
            </div>
            <div className="mb-3">
                <label htmlFor="desc" className="form-label">Subtitle:</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="desc"  
                    onChange={this.changeHandler} />
                <p className="text-end">{this.state.desc.length} / 140</p>

            </div>
            <div className="mb-3">
                <label htmlFor="body">Blog Post: </label>
                <textarea 
                    className="form-control" 
                    id="body" 
                    rows="6"  
                    onChange={this.changeHandler}>
                </textarea>
                <p className="text-end">{this.state.body.length} / 4096</p>

            </div>
            <div className="mb-3">
                <label htmlFor="category">Category:</label>
                <select id="category" className="form-control" onChange={this.changeHandler}>
                    <option defaultValue>Select One</option>
                    <option>Snow</option>
                    <option>Summer</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="tags" className="form-label">Tags: (Seperate tags with commas) </label>
                <input type="text" placeholder="tag1, tag2, tag3, ..." className="form-control" id="tags" onChange={this.changeHandler}/> 
            </div>
            <button type="submit" className="btn btn-primary">Create post</button>
        </form>
        </div>
        );
    }
}
 
export default newPost;




