import React, { useEffect, useState } from 'react';
import SingleProducts from '../SingleProducts/SingleProducts';

const HomeProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://cryptic-chamber-94490.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.slice(4)));
        // .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <h3 className='text-center fw-bolder  t-color mb-3'>Our Services</h3>
            <p className='text-center t-color mb-5'>Defining and redefining the vision in its day to day process the mission was set to shift this clinic ,<br /> to a bigger and better space in view to cater some specific scarce treatment and services. </p>

            <div className='services container row mx-auto'>
                {
                    products.map(singleProduct =>
                        <SingleProducts key={singleProduct._id} singleProduct={singleProduct}></SingleProducts>
                    )
                }
            </div>
        </div>
    );
};

export default HomeProducts;