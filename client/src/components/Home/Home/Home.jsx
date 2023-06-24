import React from 'react';
import Header from '../Header/Header';
import Services from '../Services/Services';
import FeaturedServices from '../FeaturedServices/FeaturedServices';
import MakeAppointment from '../MakeAppointment/MakeAppointment';

const Home = () => {
    return (
        <div>
           <Header></Header>
           <Services></Services>
           <FeaturedServices></FeaturedServices>
           <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;