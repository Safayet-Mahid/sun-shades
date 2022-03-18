import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner mb-5'>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image img-fluid"
                        src="https://images.unsplash.com/photo-1551281812-f1e0aabc4650?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='banner-title'>Enjoy Wonderful Experiences In All Around The World</h3>
                        <p className='w-75 mx-auto'>The first sunglasses, made from flat panes of smoky quartz called Ai Tai, meaning ‘dark clouds' which offered no corrective powers but did protect the eyes from glare, were used in China in the 12th century or possibly earlier. Documents describe the use of such crystal sunglasses by judges in ancient Chinese courts to conceal their facial expressions while questioning witnesses</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image img-fluid"
                        src="https://images.unsplash.com/photo-1608539733292-190446b22b83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3VuZ2xhc3Nlc3xlbnwwfHwwfHw%3D&w=1000&q=80"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='banner-title'>Get More Of What You've Been Missing.</h3>
                        <p className='w-75 mx-auto'> It is said that the Roman emperor Nero liked to watch gladiator fights using cut emeralds. These, however, appear to have worked rather like mirrors</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image img-fluid"
                        src="https://parade.com/wp-content/uploads/2018/06/national-sunglasses-day-2018-ftr.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='banner-title'> Coming soon: Endless travel savings. One simple membership.</h3>
                        <p className='w-75 mx-auto'>Get member-only rates on your favorite hotels. Instant savings on tours, theme parks, attractions, and more. With member discounts, Plus pays for itself. Cancel within 90 days and get your money back. </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;