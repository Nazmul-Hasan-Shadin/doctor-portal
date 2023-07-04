import React from 'react';
import Appointment from '../Appointment/Appointment';

const BookingCard = ({bookingData}) => {
    return (
        <div className='col-md-4 mb-5'>
            <div className="card">
                <div className="card-body">
                    <h5 className='card-title ' style={{color:' #19D3AE'}}>{bookingData.subject}</h5>
                    <h6>{bookingData.visitinghour}</h6>
                    <p>{bookingData.totalSpace} SPACES AVAILABLE</p>
                    <button className="btn btn-brand text-uppercase">book Appointment</button>
                    <Appointment></Appointment>
                </div>
            </div>
              
        </div>
    );
};

export default BookingCard;