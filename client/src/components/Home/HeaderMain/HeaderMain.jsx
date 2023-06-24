import React from 'react';
import Chair from '../../../images/chair.png'
const HeaderMain = () => {
    return (
     <main style={{height:'600px' }} className='row align-items-center'>
 
 <div className="col-md-4 offset-md-1">
   <h1>Your New Smile  <br /> Start From Here</h1>
   <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum modi tenetur quae dolor nulla sapiente?</p>
   <button className="btn btn-primary">Get Appointment</button>
 </div>
 <div className="col-md-6" style={{ zIndex: "2" }}>
    <img src={Chair} alt="" className='img-fluid' />
 </div>
    



     </main>
    );
};

export default HeaderMain;