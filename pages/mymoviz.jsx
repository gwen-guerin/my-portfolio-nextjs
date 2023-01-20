import Image from 'next/image';
import React from 'react';
import mymovizImg from '../public/assets/projects/mymoviz.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const mymoviz = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          objectFit="cover"
          fill
          src={mymovizImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">My Moviz</h2>
          <h3>Next JS / Node JS / Express</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This app was built with Next JS. It's
            getting the latest movies with the TMDB Api. You can see the global
            rate of each movie, add your favorites in your fav list, and check
            the ones that you've seen.
          </p>
          <a
            href="https://github.com/gwen-guerin/MyMoviz-Next-JS"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
        </div>

        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Next
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Node
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Express
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                TMDB API
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
            <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default mymoviz;
