import Image from 'next/image';
import React from 'react';
import eshopImg from '../public/assets/projects/eshop1.jpeg';
import eshopImg2 from '../public/assets/projects/eshop2.jpeg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const eshop = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute left-[50%] z-1 w-[50%] h-[50vh]"
          src={eshopImg}
          alt="/"
        />
        <Image
          className="absolute z-1 w-[50%] h-[50vh]"
          src={eshopImg2}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">E-Shop</h2>
          <h3>Next JS / Tailwind CSS / MongoDB / Stripe</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            I've built a e-commerce website, where you can add items to your cart, withdraw them, leave the page and come back with the same cart saved. There are three categories of items, and you can search by name which ever you want. When you go on the cart's page you have a sum up of what you've selected with the total cost with the delivery. If you wanna order just click the button and thanks to Stripe it brings you to a page where you can finalize your buyings.
          </p>
          <a
            href="https://github.com/gwen-guerin/eshop-nextjs"
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
                Tailwind CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Stripe
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Mongoose
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

export default eshop;
