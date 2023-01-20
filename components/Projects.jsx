import React from 'react';
import mymoviz from '../public/assets/projects/mymoviz.png';
import newsImg from '../public/assets/projects/morningnews.png';
import pokedexImg from '../public/assets/projects/pokedex.png';
import shifoumiImg from '../public/assets/projects/rockpapercisors.png';
import locapicImg from '../public/assets/projects/locapic.png';
import wannaplayImg from '../public/assets/projects/wannaplay.png';
import ProjectsItem from './ProjectsItem';

const Projects = () => {
  return (
    <div id='projects' className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#6fa2c7]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectsItem
            title="My Moviz"
            backgroundImg={mymoviz}
            projectUrl="/mymoviz"
            framework="Next js"
          />
          <ProjectsItem
            title="Morning News"
            backgroundImg={newsImg}
            projectUrl="/morningnews"
            framework="Next js"
          />
          <ProjectsItem
            title="Pokedex"
            backgroundImg={pokedexImg}
            projectUrl="/pokedex"
            framework="Next js"
          />
            <ProjectsItem
              title="Wannaplay"
              backgroundImg={wannaplayImg}
              projectUrl="/wannaplay"
              framework="react native"
            />
          <ProjectsItem
            title="Rock Paper Cisors"
            backgroundImg={shifoumiImg}
            projectUrl="/shifoumi"
            framework="react native"
          />
          <ProjectsItem
            title="Locapic"
            backgroundImg={locapicImg}
            projectUrl="/locapic"
            framework="react native"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
