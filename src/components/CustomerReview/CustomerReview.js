import React from 'react';
import './CustomerReview.css';

const CustomerReview = ({ review }) => {
    return (
        <section className='border-2 rounded p-6 mt-10 max-h-48'>
            <div className="reviews-customer">
                <div className="customer-img">
                    <img src={review?.picture} alt="" />
                </div>
                <div className="customer-name">
                    {review?.name}
                </div>
            </div>
            <div className="customer-reviews mt-5">
                <p className='text-justify'>{review?.comment}</p>
                <small>Ratings : {review?.rating} star</small>
            </div>
        </section>
    );
};

export default CustomerReview;