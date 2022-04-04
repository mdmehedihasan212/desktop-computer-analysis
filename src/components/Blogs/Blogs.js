import React from 'react';

const Blogs = () => {
    return (
        <section className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
            <div className='grid grid-cols-1 gap-12 md:grid-cols-3'>
                <div>
                    <h1 className='mb-6 text-2xl font-light md:text-3xl'>
                        What is Context API ?
                    </h1>
                    <p className='mt-10 mb-3'>
                        Context api is powerful api for data passing. It's create global variable react app component and pass data around and solving prop-drilling.
                    </p>
                </div>
                <div>
                    <h1 className='mb-6 text-2xl font-light md:text-3xl'>
                        What is Semantic tag ?
                    </h1>
                    <p className='mt-10 mb-3'>
                        Semantic tag declare meaningful element in code and semantic tag like table, form etc. It's tag very helpful for read and write.
                    </p>
                </div>
                <div>
                    <h1 className='mb-6 text-2xl font-light md:text-3xl'>
                        Inline Blog vs Inline Element ?
                    </h1>
                    <p className='mt-10 mb-3'>
                        1. Inline element don't start new line || Blog element always start new line.
                        2. Inline allow others inline element to sit behind || Blog element doesn't allow other elements to sit behind.
                        3. Inline element don't have top and bottom margin || Blog element have top and bottom margin.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Blogs;