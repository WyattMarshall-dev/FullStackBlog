import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Card = (props) => {
    let urlId = props._id;
    let date = props.date.split('T');

    const handleDelete = () =>{
        axios.delete(`/api/posts/${props._id}`, {id: props._id}, { withCredentials: true })
        .then(res => {
            console.log(res);
        })
        .catch(err =>{
            console.log(err);
        })
    }   

    return (
        <div className="card mt-2">
            <div className="card-header text-end">Posted: {date[0]}</div>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <p className="card-text">{props.body.slice(0,140) + "....."}</p>
                <Link to={`/admin/editpost/${urlId}`} className="btn btn-primary m-2">Edit</Link>
                <Link to="/admin" className="btn btn-primary" onClick={handleDelete}>Delete</Link>
            </div>
        </div>
    );
}
 

export default Card; 