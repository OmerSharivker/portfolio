import React from 'react';
import ProjectCard from './ProjectCard';

const works = [
    {
      imgSrc: '/images/project-1.png',
      title: 'Scrabble Book Game',
      tags: [ 'JAVA', 'Development'],
      projectLink: 'https://github.com/OmerSharivker/Book-Scrabble'
    },
    {
      imgSrc: '/images/project-5.png',
      title: 'eCommerce website',
      tags: ['socketIO','Stripe','Cloudinary','Development'],
      projectLink: 'https://shariv-shop.netlify.app/'
    },
    {
      imgSrc: '/images/project-6.png',
      title: 'Simon Game',
      tags: ['Java-Script', 'Development'],
      projectLink: 'https://omersharivker.github.io/Simon/'
    },
  ];


const Work = () => {
    return (
        <section id="work" className='section'>
          <div className="container">
            <h2 className="headline-2 mb-4 reveal-up">
            My Portfolio Highlights
            </h2>
            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
               {works.map(({imgSrc,title,tags,projectLink},key)=>(
                <ProjectCard key={key} imgSrc={imgSrc} projectLink={projectLink} classes="reveal-up" title={title} tag={tags} />
               ))}
            </div>
          </div>
        </section>
    );
};

export default Work;