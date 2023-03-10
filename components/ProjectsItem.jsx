import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const ProjectsItem = ({ title, backgroundImg, projectUrl, framework }) => {
  return (
    <div className="relative h-auto flex items-center justify-center w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden justify-center group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="uppercase pb-4 pt-2 text-white text-center">
          {framework}
        </p>
        <Link href={projectUrl}>
          <p className="text-center py-3 w-40 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer hover:scale-105 ease-in duration-150">
            More Infos
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectsItem;
