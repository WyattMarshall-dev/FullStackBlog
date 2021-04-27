import React from 'react';
import { Link } from 'react-router-dom';

const Unauthorized = () => {
    return (
        <div className="d-flex justify-content-around unauth">
          <div className="p-4">
            <div className="text-center m-4">
              <Link to="/" ><img className="" src={process.env.PUBLIC_URL + 'JmoSnowLogo.svg'} alt="Logo"/></Link>
            </div>
            <h1>Unauthorized, Please login to view this page</h1>
            <div className="text-center display-6 mt-4">
                <Link to="/" className="text-decoration-none" >Home Page</Link>
            </div>
            
          </div>
      </div>
    );
}
 
export default Unauthorized;