import React from 'react';
import Header from '../Header/Header';
import Services from '../Services/Services';
import FeaturedServices from '../FeaturedServices/FeaturedServices';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Testimonial from '../Testimonial/Testimonial';
import { Outlet,Link } from 'react-router-dom';
const Home = () => {
    return (
     <div>
     <div>
           <Header></Header>
           <Services></Services>
           <FeaturedServices></FeaturedServices>
           <MakeAppointment></MakeAppointment>
           <Testimonial></Testimonial>

        </div>
        <Outlet/>
     </div>
  
    );
};


export default Home;