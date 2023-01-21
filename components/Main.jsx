import React from 'react';
import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';

export default function Main() {
  return (
    <div id="main" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase tracking-widest text-gray-600">
            Let's build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#6fa2c7]">Gwen</span>
          </h1>
          <h1 className="py-2 text-gray-700">
            I'm a Fullstack Developper Junior
          </h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
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
              href="https://online.flippingbook.com/view/1070624447"
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
  );
}
