import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <div id='about' className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className='uppercase text-xl tracking-widest text-[#6fa2c7]'>About</p>
          <h2 className='py-4' >Who I Am</h2>
          <p className='py-2 text-gray-600'>I'm the special buddy you need</p>
          <p className='py-2 text-gray-600'>
            Hi, I'm Gwen, I'm 27. I've had a lot of different jobs experiences.
            Lately i've discovered programming. I fell in love and now i know
            what I want to do of my life.
          </p>
          <p className='py-2 text-gray-600'>
            I've started to learn HTML & CSS on my own, pushed by a family
            member. He is a developper and helped me a lot to start, to know
            where to go and what this was about. With the Covid, I struggled to
            find a job with nearly no experience and no degree. So I decided to
            turn to an intensive course. That's when I was accepted to the
            Bootcamp La Capsule.
          </p>
          <p className='py-2 text-gray-600'>
            Freshly graduated, I am now, looking for a job, and keen as ever !
          </p>
            <Link href='/#projects'> 
            <p className='py-2 text-gray-600 underline cursor-pointer'>Checkout my last projects !</p>
            </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-150'>
          <img className='rounded-xl' src="https://source.unsplash.com/vXInUOv1n84" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
