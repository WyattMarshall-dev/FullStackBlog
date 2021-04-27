import React from 'react';


const Hero = () => {
    return (
        <div className="hero-banner p-4 p-md-5 mb-4 text-white rounded bg-light">
            <div className="col-md-6 px-0">
                <h1 className="display-4 fst-italic">Title of a longer featured blog post</h1>
                <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
                {/* <p className="lead mb-0"><a href="www.facebook.com" className="text-white fw-bold">Continue reading...</a></p> */}
            </div>
        </div>
    );
}
 
export default Hero;