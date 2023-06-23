import React from 'react'
import {BsFillPersonFill} from 'react-icons/bs'
import {AiOutlineAppstore} from 'react-icons/ai'
import {FaReact} from 'react-icons/fa'
import {SiSecurityscorecard} from 'react-icons/si'
const Projects = () => {
  return (
    <section className='w-[98vw] max-w-maxWidth mx-auto mb-20 px-3'
    data-aos="fade-up"
    // data-aos-offset="200"
    // data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
    // data-aos-anchor-placement="top-center"
    >
      <h2 className='text-5xl font-light mb-5'>Projects</h2>
      <article className='grid place-items-center grid-cols-1 md:grid-cols-2 gap-3'>
        {/* project boxes */}
        <a href='https://github.com/sandro21-glitch/portfolio' target='_blank' className="group transition-colors ease-in duration-750 w-full p-5 border-2 border-[rgba(0,0,0,.125)] bg-[#f8f9fa] cursor-pointer">
            <div className='flex items-center gap-2 text-xl group-hover:text-redHover transition-colors ease-in duration-75150'>
                <BsFillPersonFill />
                Portfolio
            </div>
            <p className='font-thin'>
                My Portfolio Website
            </p>
        </a>
        <a href='https://github.com/sandro21-glitch' target='_blank' className="group transition-colors ease-in duration-duration-75 w-full p-5 border-2 border-[rgba(0,0,0,.125)] bg-[#f8f9fa] cursor-pointer">
             <div className='flex items-center gap-2 text-xl group-hover:text-redHover transition-colors ease-in duration-duration-75'>
                <FaReact />
                Quiz App
            </div>
            <p className='font-thin'>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
        </a>
        <a href='https://github.com/sandro21-glitch' target='_blank' className="group transition-colors ease-in duration-duration-75 w-full p-5 border-2 border-[rgba(0,0,0,.125)] bg-[#f8f9fa] cursor-pointer">
             <div className='flex items-center gap-2 text-xl group-hover:text-redHover transition-colors ease-in duration-duration-75'>
                <AiOutlineAppstore />
                Entertainment web app
            </div>
            <p className='font-thin'>Entertainment web app made with ReactJS AND TailwindCSS</p>
        </a>
        <a href='https://github.com/sandro21-glitch/comfy-sloth-store' target='_blank' className="group transition-colors ease-in duration-duration-75 w-full p-5 border-2 border-[rgba(0,0,0,.125)] bg-[#f8f9fa] cursor-pointer">
             <div className='flex items-center gap-2 text-xl group-hover:text-redHover transition-colors ease-in duration-duration-75'>
                <SiSecurityscorecard />
                Comfy Sloth
            </div>
            <p className='font-thin'>E-Commerce website</p>
        </a>
      </article>
    </section>
  )
}

export default Projects
