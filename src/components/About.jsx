import React from 'react';


const aboutItems = [
    {
        label: 'Projects Completed',
        number: 5
    },
    { label: 'Programming languages learned',
        number: 5 }
  ];


const About = () => {
    return (
       <section 
       id="about"
       className='section'
       >
       <div className='container'>
        <div className='bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up'>
          <p className="text-zinc-300 mb-4 md:mg-8 md:text-xl md:max-w-[60ch]">
          Welcome! I’m Omer, a third-year computer science student passionate about building innovative and efficient software solutions. With a focus on full-stack development, I combine my knowledge of algorithms, data structures, and modern technologies to create projects that are both functional and scalable. I’m excited to continue learning and apply my skills to tackle real-world challenges.
          </p>
          <div className='flex flex-wrap items-center gap-4 md:gap-7'>
       {
        aboutItems.map(({label,number},key)=>(
            <div key={key} >
                <div className="flex items-center md:mb-2 ">
                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                </div>

                <p className="">{label}</p>
            </div>
        ))
       }
       <img src="/images/logo.svg" width={30} height={30} className='ml-auto md:w-[40px] md:h-[40px]' alt="logo" />
          </div>
        </div>
       </div>
       </section>
    );
};

export default About;