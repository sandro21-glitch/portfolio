import React from 'react';
import TypeWriter from 'react-typewriter';
 
class Typewriter extends React.Component {
  render() {
    return (
      <TypeWriter typing={1} maxdelay='true' className='typewriter'>
        <div className='w-[98vw] max-w-maxWidth h-[20rem] mx-auto md:mb-20 text-lg md:text-xl lg:text-3xl px-3'>
          <pre>
            <span className='text-highlightRed'>const </span>
              name =
            <span className='text-highlightBlue inline-block mb-2'> 'Sandro'</span>
            ;
            <br />
            <span className='text-highlightOrange'>Developer</span>
            <span> dev =</span>
            <span className='text-highlightRed'> new </span>
            <span className='text-highlightOrange'>Developer</span>
            (name);
            <br />
            <br />
            <span className='text-highlightRed'>while</span>
            (dev.
            <span className='text-highlightPink'>isCoding</span>
            ()) &#123;
            <br />
              <p className='mt-2 inline-block'>
                  <span>       dev.</span>
                  <span className='text-highlightPink'>listenToMusic</span>
                ();
              </p>
              <br />
              <p className='mt-2 inline-block'>
                  <span>       dev.</span>
                  <span className='text-highlightPink'>openStackOverFlow</span>
                ();
              </p>
              <br />
              &#125;
          </pre>
        </div>
    </TypeWriter>
    );
  }

}

export default Typewriter