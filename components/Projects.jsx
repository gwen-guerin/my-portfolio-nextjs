import React from 'react';
import mymoviz from '../public/assets/projects/mymoviz.jpeg'
import newsImg from '../public/assets/projects/morningnews.jpeg';
import myPicsImg from '../public/assets/projects/myPics.jpg';
import shifoumiImg from '../public/assets/projects/rockpapercisors.jpeg';
import locapicImg from '../public/assets/projects/locapic.jpeg';
import wannaplayImg from '../public/assets/projects/wannaplay.jpeg';
import eshopImg from '../public/assets/projects/eshop.jpeg'
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
            title="E-Shop"
            backgroundImg={eshopImg}
            projectUrl="/eshop"
            framework="Next js"
          />
          <ProjectsItem
            title="Morning News"
            backgroundImg={newsImg}
            projectUrl="/morningnews"
            framework="Next js"
          />
          <ProjectsItem
            title="My Pics"
            backgroundImg={myPicsImg}
            projectUrl="/mypics"
            framework="Next js"
          />
            <ProjectsItem
              title="Wannaplay"
              backgroundImg={wannaplayImg}
              projectUrl="/wannaplay"
              framework="react native"
            />
          <ProjectsItem
            title="Shi-Fou-Mi"
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
