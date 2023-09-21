import React from 'react'
import idea from './../assets/idea.png'
function Intro() {
  return (
    <main className="flex sm:flex-row flex-col sm:mb-0 mb-20 sm:px-[70px] px-[20px] text-white h-auto items-center w-full ">
      <div className="sm:w-[50%] sm:block flex items-center justify-center w-[100%] ">
        <img src={idea} className="sm:h-[500px] h-[400px] " alt="" />
      </div>
      <div className="sm:w-[50%] sm:text-start text-center sm:mt-0 mt-10 ">
        <div className='sm:text-[40px] text-[30px] mb-8 leading-[50px] font-[700] '>
          <h1>Introduction to getlinked</h1>
          <h1 className="txt">tech Hackathon 1.0</h1>
        </div>
        <p className='leading-[30px]'>
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
    </main>
  );
}

export default Intro
