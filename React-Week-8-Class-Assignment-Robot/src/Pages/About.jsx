import React from 'react'
import robotAbout from '../assets/icons/about-Robot.png'

export const About = () => {
  return (
    <div className='text-white flex p-5 h-[90vh] md:w-[80%] place-self-center '>
      <div className="p-5 flex flex-col  md:w-[50%]">
        <h2 className='text-2xl '>About Us</h2>
        <p className='text-[12px] my-3 '>
          At [Your Company Name], we are passionate about bridging the gap between creativity and technology to empower businesses. As a dynamic provider of Creative and Technical IT solutions, we specialize in crafting innovative strategies that elevate business operations and enhance digital experiences. With a blend of cutting-edge technology and creative problem-solving, we design tailored solutions that optimize performance, streamline workflows, and foster growth. <br /><br />
          Whether you’re seeking software development, digital transformation, IT infrastructure, or custom web design, our team of experts combines technical proficiency with artistic vision to bring your ideas to life. Our approach is rooted in collaboration and a deep understanding of your business goals, ensuring that every solution is not only functional but also future-proof. <br /> <br />
          We are committed to helping businesses navigate the ever-evolving tech landscape and achieve measurable success through creative, sustainable, and scalable IT strategies. Let us be your partner in innovation—turning complex challenges into seamless solutions that drive your business forward.
        </p>
      </div>
      <div className="md:w-[50%]  hidden md:flex md:h-[80vh] overflow-hidden ">
        <img src={robotAbout} alt="" className='object-contain translate-y-10 '/>
      </div>

    </div>
  )
}
