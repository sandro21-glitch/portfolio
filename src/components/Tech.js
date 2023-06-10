import React from 'react'

const Tech = () => {
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
        <h2 className='text-5xl font-light mb-5'>Tech-Stack</h2>
        <article className='w-full columns-1 md:columns-2 text-lg md:text-xl lg:text-3xl'>
            <div>
                <pre className="">
                    <span className="text-highlightRed">let</span> languages = [<br />
                    <span className="text-highlightBlue">         'HTML'</span>,<br />
                    <span className="text-highlightBlue">         'CSS/SCSS'</span>,<br />
                    <span className="text-highlightBlue">         'JavaScript'</span>]<br />
                </pre>
            </div>
            <div className="mt-5 md:mt-0">
                <pre className="">
                    <span className="text-highlightRed">let</span> frameworks = [<br />
                    <span className="text-highlightBlue">         'TailwindCSS'</span>,<br />
                    <span className="text-highlightBlue">         'React'</span>,<br />
                    <span className="text-highlightBlue">         'styled-components'</span>]
                </pre>
                <pre className="mt-5">
                    <span className="text-highlightRed">let</span> other = [
                    <span className="text-highlightBlue">'git,GitHub'</span>]
                </pre>
            </div>
        </article>
    </section>
  )
}

export default Tech
