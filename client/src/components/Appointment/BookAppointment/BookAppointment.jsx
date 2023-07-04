import React from 'react';
import BookingCard from '../BookingCard/BookingCard';
const bookingData=[
    {
        _id:'394959144444',
        id:1,
        subject:'teeth orthodontics',
        visitingHour:'8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        _id:'394952944444',
        id:2,
        subject:'teeth orthodontics',
        visitingHour:'8:00 AM - 9:00 AM',
        totalSpace: 14
    },
       { _id:'39445959445444',
        id:76,
        subject:'teeth orthodontics',
        visitingHour:'8:00 AM - 9:00 AM',
        totalSpace: 10
    },
       { _id:'39445959445444',
        id:99,
        subject:'teeth orthodontics',
        visitingHour:'8:00 AM - 9:00 AM',
        totalSpace: 10
    },
       { _id:'394459500909445444',
        id:398,
        subject:'teeth orthodontics',
        visitingHour:'8:00 AM - 9:00 AM',
        totalSpace: 10
    },
       { _id:'39445959445444',
        id:9988,
        subject:'teeth orthodontics',
        visitingHour:'8:00 AM - 9:00 AM',
        totalSpace: 10
    },


]

const BookAppointment = ({date}) => {

    return (
        <section>
            <h2 className='text-brand mb-5'>Available Appointments {date.toDateString()} </h2>

            <div className="row">
                {
                    bookingData.map(booking=> <BookingCard bookingData={booking} key={booking.id} date={date}></BookingCard>)
                }
            </div>
        </section>
    );
};

export default BookAppointment;