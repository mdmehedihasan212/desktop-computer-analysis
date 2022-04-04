import React from 'react';
import './CustomerReview.css';

const CustomerReview = ({ review }) => {
    const { name, picture, comment, rating } = review;
    return (
        <section className='border-2 rounded p-6 mt-10 max-h-48'>
            <div className="reviews-customer">
                <div className="customer-img">
                    <img src={picture} alt="" />
                </div>
                <div className="customer-name">
                    {name}
                </div>
            </div>
            <div className="customer-reviews mt-5">
                <p className='text-justify'>{comment}</p>
                <small>Ratings : {rating} star</small>
            </div>
        </section>
    );
};

export default CustomerReview;