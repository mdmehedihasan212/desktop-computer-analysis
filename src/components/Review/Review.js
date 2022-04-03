import React from 'react';
import './Review.css';

const Review = (props) => {
    const { name, picture, review, rating } = props.review;
    return (
        <section className='border-2 p-3'>
            <div className="review-customer">
                <div className="customer-img">
                    <img src={picture} alt="" />
                </div>
                <div className="customer-name">
                    {name}
                </div>
            </div>
            <div className="customer-reviews">
                <div className="reviews">
                    <small className='text-justify'>{review}</small>
                </div>
                <div className="rating">
                    <p>Ratings: {rating}</p>
                </div>
            </div>
        </section>
    );
};

export default Review;