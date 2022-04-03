import React from 'react';
import './Home.css';
import image from '../../Assets/computer.webp';
import { Link } from 'react-router-dom';

const Home = () => {
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
                    <Link className='px-8 py-3 rounded bg-blue-600 text-white' to={'/'}>Details</Link>
                </div>
            </div>
            <div className="review-container">
                <div className="review-cart">
                    <h1>Review Cart</h1>
                </div>
                <div className="review-btn">
                    <h1>See all review</h1>
                </div>
            </div>
        </section>
    );
};

export default Home;