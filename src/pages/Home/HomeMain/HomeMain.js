import React from 'react';
import Banner from '../Banner/Banner';
import OfficeRelocate from '../OfficeRelocate/OfficeRelocate';
import Recommended from '../Recommended/Recommended';
import ReviewUi from '../ReviewUi/ReviewUi';

const HomeMain = () => {
    return (
        <div>
           <Banner></Banner>
           <marquee behavior="scroll" direction="left" scrollamount="12"><b>Stay aware of the latest COVID-19 information by regularly checking updates from WHO in addition to national and local public health authorities. Jinni Relocation team concern about this situation so we must maintained all requirements of COV-19 restrictions</b></marquee>
           <Recommended></Recommended>
           <OfficeRelocate></OfficeRelocate>
           <ReviewUi></ReviewUi>
        </div>
    );
};

export default HomeMain;