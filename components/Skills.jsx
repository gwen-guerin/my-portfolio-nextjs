import Image from 'next/image';
import React from 'react';
import SkillsItem from './SkillsItem';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Js from '../public/assets/skills/javascript.png';
import ReactLogo from '../public/assets/skills/react.png';
import NodeLogo from '../public/assets/skills/node.png';
import NextLogo from '../public/assets/skills/nextjs.png';
import Github from '../public/assets/skills/github1.png';
import Mongo from '../public/assets/skills/mongo.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import reduxLogo from '../public/assets/skills/redux.png'

export default function Skills() {
  return (
    <div id='skills' className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full ">
        <p className="text-xl tracking-widest uppercase text-[#6fa2c7]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillsItem urlImg={Html} framework="html" />
          <SkillsItem urlImg={Css} framework="css" />
          <SkillsItem urlImg={Js} framework="javascript" />
          <SkillsItem urlImg={ReactLogo} framework="react js" />
          <SkillsItem urlImg={NodeLogo} framework="node js" />
          <SkillsItem urlImg={NextLogo} framework="next js" />
          <SkillsItem urlImg={reduxLogo} framework="Redux" />
          <SkillsItem urlImg={Github} framework="github" />
          <SkillsItem urlImg={Mongo} framework="mongodb" />
          <SkillsItem urlImg={Tailwind} framework="tailwind" />
        </div>
      </div>
    </div>
  );
}
