import React from 'react'
import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai'
import {SiFrontendmentor} from 'react-icons/si'
const Footer = () => {
  return (
    <footer className='bg-navCl'>
        <section className='w-[98vw] max-w-maxWidth mx-auto py-10 px-3'>
            <ul className='flex items-start flex-col md:flex-row md:space-y-0 md:space-x-5 md:justify-center space-y-5'>
                <li className='p-2 bg-black  cursor-pointer hover:opacity-70 transition-opacity ease-in duration-200'>
                   <a href="https://github.com/sandro21-glitch" className='flex items-center' target='_blank'>
                    <AiFillGithub className='text-white text-2xl' />
                    <p className='text-white ml-2 font-bold'>
                        GitHub
                    </p>
                   </a>
                </li>
                <li className='p-2 bg-highlightBlue cursor-pointer hover:opacity-70 transition-opacity ease-in duration-200'>
                    <a href="https://www.linkedin.com/in/sandro-19929a1b7/" className='flex items-center ' target='_blank'>
                    <AiFillLinkedin className='text-white text-2xl' />
                    <p className='text-white ml-2 font-bold'>
                    Linkedin
                    </p>
                    </a>
                </li>
                <li className='p-2 bg-[#6ABECD] cursor-pointer hover:opacity-70 transition-opacity ease-in duration-200'>
                  <a href="https://www.frontendmentor.io/profile/sandro21-glitch" className='flex items-center ' target='_blank'>
                    <SiFrontendmentor className='text-white text-2xl' />
                    <p className='text-white ml-2 font-bold'>
                    FrontendMentor
                    </p>
                  </a>
                </li>
            </ul>
        </section>
    </footer>
  )
}

export default Footer
