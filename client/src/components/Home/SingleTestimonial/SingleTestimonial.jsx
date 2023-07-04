import React from 'react';

const SingleTestimonial = ({testimonialData}) => {
    console.log(testimonialData);
    return (
        <div className='container col-md-4  card '>
            <div className="card-body">
                <p className='card-text'>{testimonialData.quote}</p>
           

           <div className='d-flex justify-content-around'>
           <img src={testimonialData.img} alt="" />
             <div>
             <h5> {testimonialData.name}</h5>
            <p>{testimonialData.from}</p>
             </div>
           </div>


            </div>
        </div>
    );
};

export default SingleTestimonial;