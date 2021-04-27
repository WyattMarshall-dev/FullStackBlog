import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class EditPost extends Component {
    url = window.location.href.split('/')
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            desc: '',
            category: '',
            _id: this.url[5],
            tags: ''
        }
    }

    componentDidMount() {
        console.log(this.url[5]);
        axios.get(`/api/posts/${this.url[5]}`, this.state, { withCredentials: true })
        .then(res => {
            // console.log(res);
            this.setState( {
                title: res.data.title,
                desc: res.data.desc,
                body: res.data.body,
                category: res.data.category,
                tags: res.data.tags,
                redirect: false
            })
        })
        .catch(err =>{
            console.log(err)
        })

    }

    changeHandler = (e) => {
        this.setState( { [e.target.id]: e.target.value } )
        console.log("Edit", this.state);

    }

    submitHandler = (e) => {
        e.preventDefault();

        axios.put(`/api/posts/${this.state._id}`, this.state, { withCredentials: true })
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
        if(this.state){
        return (
            <div> 
        <form className="container" onSubmit={this.submitHandler}>
            <h1 className="mb-4 mt-4">Edit Post:</h1>
            <hr />
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title: </label>
                <input type="text" className="form-control" id="title"  defaultValue={`${this.state.title}`}  onChange={this.changeHandler}/> 
                <p className="text-end">{this.state.title.length} / 30</p>
            </div>
            <div className="mb-3">
                <label htmlFor="desc" className="form-label">Subtitle:</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="desc" 
                    defaultValue={this.state.desc}  
                    onChange={this.changeHandler} />
                <p className="text-end">{this.state.desc.length} / 140</p>
            </div>
            <div className="mb-3">
                <label htmlFor="body">Blog Post: </label>
                <textarea 
                    className="form-control" 
                    id="body" 
                    defaultValue={`${this.state.body}`} 
                    rows="6"  
                    onChange={this.changeHandler}>
                </textarea>
                <p className="text-end">{this.state.body.length} / 4096</p>
            </div>
            <div className="mb-3">
                <label htmlFor="category">Category:</label>
                <select id="category" className="form-control" defaultValue={this.state.category}  onChange={this.changeHandler}>
                    <option>Select One</option>
                    <option>Snow</option>
                    <option>Summer</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="tags" className="form-label">Tags: (Seperate tags with commas) </label>
                <input type="text" defaultValue={this.state.tags}  placeholder="tag1, tag2, tag3, ..." className="form-control" id="tags" onChange={this.changeHandler}/> 
            </div>
            <button type="submit" className="btn btn-primary">Update</button>
        </form>
        </div>
        )}
        else {
            return (
                <h1>Not Found</h1>
            )
        };
    }
}
 
export default EditPost;

