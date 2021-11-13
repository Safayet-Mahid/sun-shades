import React from 'react';
// import Services from '../../Services/Services';
// import About from '../About/About';
import Banner from '../Banner/Banner';
import HomeProducts from '../HomeProducts/HomeProducts';
import Homereview from '../HomeReview/Homereview';
// import HomeDoctor from '../HomeDoctor/HomeDoctor';
// import HomePageService from '../HomePageService/HomePageService';
// import HomeTeamMember from '../HomeTeamMember/HomeTeamMember';

const Home = () => {
    return (
        <div >

            <Banner></Banner>
            <HomeProducts></HomeProducts>
            <Homereview></Homereview>
            {/* <About></About> */}
            {/* <HomePageService></HomePageService> */}
            {/* <HomeDoctor></HomeDoctor> */}
            {/* <HomeTeamMember></HomeTeamMember> */}

        </div>
    );
};

export default Home;