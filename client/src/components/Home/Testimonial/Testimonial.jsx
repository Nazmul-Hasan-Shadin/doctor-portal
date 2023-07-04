import React from 'react';
import people1 from '../../../images/people1.png'
import people2 from '../../../images/people2.png'
import people3 from '../../../images/people3.png'
import SingleTestimonial from '../SingleTestimonial/SingleTestimonial';

const Testimonial = () => {
    const testimonialData= [
        {
            quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur minus aperiam omnis animi?',
            name: 'Wilson Harry',
            from: 'California',
            img: people1
        },
        {
            quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur minus aperiam omnis animi?',
            name: 'Ema Gomez',
            from: 'California',
            img: people2
        },
        {
            quote: 'Lorem ipsum iuiriutri r triutirtu irutir tr rit rit dolor sit amet consectetur adipisicing elit. Consectetur minus aperiam omnis animi?',
            name: 'Aliza Farari',
            from: 'California',
            img: people3
        }
    ]
    return (
      <section className='testimonials my-5 py-5'>
       <div className="container">
        <div className="section-header">
            <h5 className='text-primary'> Testiomdkj</h5>
            <h1 className=''>What Our Patients <br /> Say</h1>
        </div>

    <div className="mt-5  row">
        {
            testimonialData.map(testimonial=> <SingleTestimonial testimonialData={testimonial} > </SingleTestimonial> )
        }
    </div>





       </div>
      </section>
    );
};

export default Testimonial;