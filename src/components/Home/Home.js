import React from 'react';
import './Home.css';
import image from '../../Assets/computer.webp';
import { Link } from 'react-router-dom';
import useReview from '../../hooks/useReview';
import CustomerReview from '../CustomerReview/CustomerReview';

const Home = () => {
    const [reviews, setReviews] = useReview();
    return (
        <section>
            <div className="product-container">
                <div className="product-img">
                    <img src={image} alt="" />
                </div>
                <div className="product-details">
                    <h1 className='text-6xl font-bold'>The best desktop <br />
                        <span className='text-blue-600'>under $500</span>
                    </h1>
                    <p>When buying a desktop computer, you'll need to consider all the usual things that you would consider for any other computer purchase. A solid processor (CPU) will keep everything you can throw at it running smoothly without stutters or crashes. Memory, also known as RAM, also plays a big role, especially if you plan on running several apps at the same time and gaming, where a computer needs to store and quickly access files associated with those apps. Last but not least is storage and if you want to keep lots of games or files on your computer, you'll need plenty of it.
                    </p>
                    <Link className='px-6 py-2 rounded bg-blue-600 text-white' to={'/'}>Details</Link>
                </div>
            </div>
            <div className="review-container">
                <div className="">
                    <h1 className='text-5xl text-center font-bold mt-24'>Customer Reviews (6)</h1>
                    <div className="p-10 grid sm:grid-cols- gap-6 md:grid-cols-3 gap-6">
                        {
                            reviews.map(review => <CustomerReview
                                key={review._id}
                                review={review}
                            ></CustomerReview>)
                        }
                    </div>
                </div>
                <div className="review-btn text-center m-6">
                    <Link className='px-32 py-1 rounded-lg bg-blue-600 text-white' to={'/customrreview'}>See All Reviews</Link>
                </div>
            </div>
        </section>
    );
};

export default Home;