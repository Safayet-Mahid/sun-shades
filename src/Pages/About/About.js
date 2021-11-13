import React from 'react';
import { Accordion } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div className='about container mx-auto my-5' >

            <div className='row justify-content-center'>
                <div className="about-image  col-sm-12 col-md-10 col-lg-6">
                    <img src="https://cdn.shopify.com/s/files/1/1019/3345/articles/Milan_Hat_Wheat_lifetsyle_smaller_69e44647-f7c8-4cbc-a543-0fb9a55b8ea8_2048x2048.jpg?v=1620139772" alt="" />
                </div>
                <div className="about-accordian col-sm-12 col-md-10 col-lg-6">
                    <h3 className='text-center mt-md-5' >SUN SHADES</h3>
                    <p className='my-4'>Sunglasses may just be the most important accessory you can own. Not only because they shield some of our most valuable assets from harsh UV rays, but also because they complete almost every outfit. Whether you’re after a unique statement piece or a trendy retro design, there’s a frame for every face.  </p>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header ><span className='fw-bold'>Easily Customize Your glass with the Best brand and great Deals</span></Accordion.Header>
                            <Accordion.Body>
                                From luxury leather goods to jet-set glamour and street art couture; Gucci has undergone multiple successful brand revamps throughout its longstanding history. The latest has been led Alessandro Michele, who used his quirky design ideals to infuse the maison with a new eccentric aesthetic. Within less than a year, the Italian fashion house transformed into one of the most sought-after brands on the global market – in every aspect
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><span className='fw-bold'>Dolce & Gabbana / the Top Brands</span></Accordion.Header>
                            <Accordion.Body>
                                DKNY is out to celebrate the aspirational and practical spirit that surrounds its city of birth, New York. Eclectic and yet sophisticated, the brand produces casual, cross-seasonal apparel and accessories that are easily incorporated into one’s own wardrobe and combined with other pieces.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header><span className='fw-bold'>Versace || GUCCI || Burberry || Prada || DKNY </span></Accordion.Header>
                            <Accordion.Body>
                                This Italian icon is well known for its luxurious and elaborate design contributions to the fashion sector. Prada’s sophisticated eyewear range has been a leader in the industry for many years due to impeccable make, distinctive looks, and timeless appeal.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>

    );
};

export default About;