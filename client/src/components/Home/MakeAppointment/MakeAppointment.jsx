import React from 'react';
import doctor from '../../../images/doctor.png'
import './MakeAppointment.css'
const MakeAppointment = () => {
    return (
<section className='make-appointment'>
<div className="container">
<div className="row">
 
 <div className="col-md-5 d-md-block">
    <img src={doctor} className='' alt="" />
 </div>
 <div className="col-md-7  text-white p-5  " style={{zIndex:1}}>
    <h1 className=''>Make a AppointMent</h1> <br />
    <p className='my-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati cupiditate tempora fugiat quo nisi!</p>
    <button className="btn btn-success">Appointment</button>
 </div>



</div>
</div>
</section>
    );
};

export default MakeAppointment;