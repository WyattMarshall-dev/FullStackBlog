import React from 'react';
import Card from './Card';

const Content = ({ props }) => {     
        let card = '';
        if(props) {
            card = (props.map(post =>
                <Card 
                key={post._id}
                description={post.desc}
                category={post.category} 
                title={post.title} 
                _id={post._id}
                date={post.date}
                body={post.body}
                />))
        }

        return (
            <div className="container mb-4 mt-4">
            <div className="d-flex d-flex-row justify-content-between">
                <h1>Latest Posts</h1>
                
                <form>
                <div className="mb-3 d-flex">
                <i className="fas fa-sync-alt btn m-2" onClick={() => window.location.reload()}></i>
                {/* <select id="inputState" className="form-control">
                    <option defaultValue>Sort Month</option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                </select> */}
            </div>
                </form>
            </div>
            <hr />
            {card}
            
        </div>
        );
    
}
 
export default Content;

