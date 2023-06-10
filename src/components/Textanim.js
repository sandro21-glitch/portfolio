import { useTypewriter } from 'react-simple-typewriter'

const Textanim = () => {
  const [text] = useTypewriter({
    words: ['Sandro','Developer', 'Coder'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (
    <div className='mt-16 mb-5 md:mb-0 px-3 mx-auto w-[98vw] max-w-maxWidth text-[4.5rem] md:text-[5rem] flex flex-col md:block -space-y-5'>
      <h1>Hello.</h1>
      <span>I'm </span>
      <span className='text-[#ef5350] font-semibold h-[5rem]'>{text}</span>
    </div>
  );
}
export default Textanim