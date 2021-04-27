import React from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const AboutPage = () => {
    return (
        <div className="container-fluid">
            <Nav />
            <hr />
            <div className="container marketing">
                <div className="row featurette">
                    <div className="col-md-5">
                        <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas illum nihil in consequatur corrupti perferendis aspernatur culpa iusto sequi nobis. Ratione excepturi voluptas perspiciatis dolorum laboriosam totam veritatis saepe sed.</p>
                    </div>
                    <div className="col-md-7">
                        <div className="aboutImg">
                            <img src="/dinoHands.jpg" alt="..." ></img>
                        </div>
                    </div>
                </div>
                    
                <hr className="featurette-divider" />
                    
                <div className="row featurette">
                    <div className="col-md-5 order-md-2">
                        <h2 className="featurette-heading">Oh yeah, it’s that good. <span className="text-muted">See for yourself.</span></h2>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos perspiciatis molestias, autem sunt quis voluptatum recusandae mollitia cumque quam culpa! Error nulla tempora expedita eos optio rerum dolor dolorum reiciendis!</p>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos perspiciatis molestias, autem sunt quis voluptatum recusandae mollitia cumque quam culpa! Error nulla tempora expedita eos optio rerum dolor dolorum reiciendis! Quos perspiciatis molestias, autem sunt quis voluptatum recusandae mollitia cumque quam culpa! Error nulla tempora expedita eos optio rerum dolor dolorum reiciendis!</p>
                    </div>
                    <div className="col-md-7 order-md-1">
                        <div className="aboutImg">
                            <img src="/dinoHands.jpg" alt="..." ></img>
                        </div>
                    </div>
                </div>

                <hr className="featurette-divider" />

                <div className="row featurette">
                    <div className="col-md-5">
                        <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
                        <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium neque iure quibusdam pariatur autem aliquid corporis quae deleniti, sint accusamus sequi molestiae? Necessitatibus quisquam ipsa delectus accusamus distinctio dicta voluptates!</p>
                    </div>
                    <div className="col-md-7">
                    <div className="aboutImg">
                            <img src="/dinoHands.jpg" alt="..." ></img>
                        </div>
                        </div>
                </div>

                <hr className="featurette-divider" />

            </div>
            <Footer />
        </div>
    );
}
 
export default AboutPage;