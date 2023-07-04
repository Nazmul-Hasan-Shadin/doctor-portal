import React, { useState } from 'react';
import Navbar from '../../Navbar/Navbar'
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';
const Appointment = () => {
    const [selectedDate, setSelectedDate]= useState(new Date())
    const handleDateChange= fuck=> {
        setSelectedDate(fuck);
    }
    return (
        <div>
          <Navbar></Navbar>
          <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
          <BookAppointment date={selectedDate}></BookAppointment>
        </div>
    );
};

export default Appointment;