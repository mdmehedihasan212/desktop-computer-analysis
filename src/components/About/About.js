import React from 'react';

const About = () => {
    return (
        <section className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
            <div className='grid grid-cols-1 gap-12'>
                <h1 className='text-2xl font-light text-center md:text-3xl'>
                    Acer Aspire TC-895: Should you buy it ?
                </h1>
                <p className='mt-10 mb-3 text-justify'>
                    The Acer Aspire TC-895 comes ready to go out of the box. It's a relatively small PC with a 16L case — compared to the Dell XPS 8940 SE at 19L, it's nice and compact — that can go just about anywhere. I set my TC-895 up next to the living room TV for a media center, and it didn't look out of place. It also easily tucked under my desk as a lightweight work PC.
                    <br />
                    <br />
                    Acer's Aspire TC-895 has a clean aesthetic, it's loaded with ports, and it doesn't take up much space.
                    <br />
                    Ports are rather generous and should provide you with enough connectivity for all your accessories. The front includes a UHS-I SD card reader, USB-C 3.2, USB-A 3.2, and dual 3.5mm audio jacks for headphones and mic. There's also a vertically-aligned DVD-RW tray-load drive on the front.
                </p>
            </div>
        </section>
    );
};

export default About;