import React from 'react';
import { Link } from 'react-router-dom';

const Featured = (props) => {
  // console.log(props);
  let date = props.date.slice(5, 10)
    return (
        <div className="col-lg-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row shadow-sm h-md-250 position-relative bg-light">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-success">{props.category}</strong>
              <h3 className="mb-0">{props.title}</h3>
              <div className="mb-1 text-muted">{date}</div>
              <p className="mb-auto">{props.description}</p>
              <Link to="/blog" className="stretched-link">Continue reading</Link>
            </div>
            <div className="col-auto d-lg-block">
              <div className="feature-img">
                <img className="feat-img" src={props.img} alt="" />
              </div>
            </div>
          </div>
        </div>
    );
}
 
export default Featured; 