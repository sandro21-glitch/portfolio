import React,{useEffect} from 'react'
import image from '../images/img.png';
// aos
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {

    useEffect(() => {
        AOS.init();
      }, [])

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
        <h2 className=' text-5xl font-light'>About</h2>
        <article className='flex flex-col md:flex-row items-center '>
            {/* img wrapper */}
            <div className='flex-1 flex items-end justify-center'>
                <img src={image} alt="coding image" className='h-[30rem] max-w-full' loading='lazy' />
            </div>
            {/* content wrapper */}
            <div className='flex-1 flex items-end justify-center'>
                <pre className="text-lg md:text-xl lg:text-4xl">
                    <span className="text-highlightRed">let</span> Developer = &#123;<br />
                        <span className="text-highlightBlue">        name</span>: 'Sandro',<br />
                        <span className="text-highlightBlue">        location</span>: 'Georgia',<br />
                        <span className="text-highlightBlue">        isCoding</span>: true,<br />
                        <span className="text-highlightBlue">        drink</span>: ['Coffee',<br />
                        <span>                'Tea',</span><br />
                        <span>                'Water']&#125;</span>
                </pre>
            </div>
        </article>
    </section>
  )
}

export default About
