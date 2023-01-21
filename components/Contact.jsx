import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl -tracking-widest uppercase text-[#6fa2c7]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div className="rounded-xl hover:scale-105 ease-in duration-150">
                <img className='rounded-xl' src="https://source.unsplash.com/-0xCCPIbl3M" alt="/" />
              </div>
              <div>
                <h2 className="py-2">Gwénaël Guérin</h2>
                <p>Fullstack Developper Junior</p>
                <p className="py-4">
                  I am available for full-time positions. Contact me and let the
                  magic happen !
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect with me !</p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/gw%C3%A9na%C3%ABl-gu%C3%A9rin-0636901a7/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-150">
                      <AiFillLinkedin />
                    </div>
                  </a>
                  <a
                    href="https://github.com/gwen-guerin"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-150">
                      <AiFillGithub />
                    </div>
                  </a>
                  <a href="mailto:gwenael.guerin@protonmail.com">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-150">
                      <AiOutlineMail />
                    </div>
                  </a>
                  <Link
                    href="https://online.flippingbook.com/view/1070624447/"
                    target="_blank"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-150">
                      <BsFillPersonLinesFill />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    rows="10"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-150">
              <HiOutlineChevronDoubleUp
                className="m-auto text-[#6fa2c7]"
                size={30}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
