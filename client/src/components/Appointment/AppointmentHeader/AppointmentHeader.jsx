import React from 'react';
import Chair from '../../../images/chair.png'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
const AppointmentHeader = ({handleDateChange}) => {
  
    return (
        <main style={{height:'600px' }} className='row align-items-center'>
 
        <div className="col-md-4 offset-md-1">
          <h1>Appointment</h1>

          <Calendar onChange={handleDateChange} value={new Date()} />



        </div>
        <div className="col-md-6" style={{ zIndex: "2" }}>
           <img src={Chair} alt="" className='img-fluid' />
        </div>
           
       
       
       
            </main>
    );
};

export default AppointmentHeader;