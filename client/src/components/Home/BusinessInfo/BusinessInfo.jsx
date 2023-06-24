import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faClock,faMapMarker,faPhone } from '@fortawesome/free-solid-svg-icons'
const infosDtat=[
    {
        title: 'Opening Hourse',
        description: 'We are open 7 days',
        icon:faClock,
        background:'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Broling, NewYook NY 1000 USA',
        icon:faMapMarker,
        background:'dark'
    },
    {
        title: 'Call us now',
        description: '+89756533',
        icon:faPhone,
        background:'primary'
    }
]
const BusinessInfo = () => {
    return (
     <section className='d-flex justify-content-center'>
  
 <div className="w-75 row">


 {
    infosDtat.map(info=> <InfoCard info={info}></InfoCard>)
  }
 </div>



     </section>
    );
};

export default BusinessInfo;