import React from 'react';
import treatment from '../../../images/treatment.png'
const FeaturedServices = () => {
    return (
        <div>
            <section className='feature-service pb-md-5 pb-0 my-5 '>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <img className='img-fluid' src={treatment} alt="" />
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1> Exceptional Dental Services</h1>
                        <p className='text-secondary my-5'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, a possimus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita deserunt beatae voluptates repellendus totam itaque aperiam, nisi commodi cumque harum nulla libero quibusdam, laborum sapiente sed. Maiores dignissimos dolorum ab nemo sapiente harum unde iste eveniet voluptates ipsa necessitatibus optio error, nesciunt id accusantium nostrum tempore consequuntur ad, iure eos. Quo ex modi debitis.
                        </p>
                <button className="btn btn-success">
                    Get started
                </button>
                    </div>
                </div>
            </div>
            </section>
        </div>
    );
};

export default FeaturedServices;