import React from 'react'
import { Link } from 'react-router-dom';
import Error from '../../Assets/error-404-concept-website-template-flat-design_249405-205 (1).jpg';

const NotFound = () => {
    return (
        <section className='px-4 py-32 mx-auto max-w-7xl'>
            <div className='grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32'>
                <div>
                    <h1 className='mb-6 text-2xl font-bold leading-tight tracking-tight text-left text-gray-900 md:text-4xl'>
                        <small className='text-red-600'>ERROR 404</small>
                        <br />
                        Oops! The page you're looking for isn't here.
                    </h1>
                    <Link
                        to='/'
                        className='w-full mb-2 py-2 px-3 text-white mt-4 bg-blue-600 rounded sm:w-auto sm:mb-0'
                    >
                        Back to homepage
                    </Link>
                </div>
                <div>
                    <div className='w-full h-full rounded-lg'>
                        <img
                            src={Error}
                            alt=''
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotFound;