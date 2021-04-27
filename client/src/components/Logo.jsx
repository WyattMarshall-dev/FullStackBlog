import React from 'react';

const Logo = () => {
    return (
        <div className="container-fluid row flex-nowrap justify-content-around align-items-center">
            <div className="col-4 text-center mt-2 mb-2">
                <img src={process.env.PUBLIC_URL + 'JmoSnowLogo.svg'} alt=""/>
            </div>
        </div>
    );
}
 
export default Logo;