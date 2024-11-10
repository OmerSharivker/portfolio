import React from 'react';
import SkillCard from './SkillCard';
const skillItem = [
    {
      imgSrc: '/images/c.svg',
      label: 'C',
      desc: 'Programming Language'
    },
    {
      imgSrc: '/images/cplusplus.svg',
      label: 'C++',
      desc: 'Programming Language'
    },
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Programming Language'
    },
    {
      imgSrc: '/images/java.svg',
      label: 'Java',
      desc: 'Programming Language'
    },
    {
      imgSrc: '/images/python.svg',
      label: 'Python',
      desc: 'Programming Language'
    },
    {
      imgSrc: '/images/linux.svg',
      label: 'Linux',
      desc: 'Operating System'
    },
    {
      imgSrc: '/images/git.svg',
      label: 'Git',
      desc: 'Version Control'
    },
    {
      imgSrc: '/images/react.svg',
      label: 'React',
      desc: 'JavaScript Framework'
    },
    {
      imgSrc: '/images/css3.svg',
      label: 'CSS',
      desc: 'Styling Language'
    },
    {
      imgSrc: '/images/nodejs.svg',
      label: 'Node.js',
      desc: 'JavaScript Runtime'
    },
    {
      imgSrc: '/images/mongodb.svg',
      label: 'MongoDB',
      desc: 'NoSQL Database'
    }
  ];
const Skill = () => {
    return (
       <section id='skill' className="section">
           <div className='container'>
            <h2 className='headline-2 reveal-up'>
            Skills & Technologies
            </h2>
            <p className='mb-4'>
            
            </p>
              <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({imgSrc,label,desc},key)=>(
                        <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} classes="reveal-up" />
                    ))
                }
              </div>
           </div>
       </section>
    );
};

export default Skill;