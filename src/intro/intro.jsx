import React from 'react'
import idea from './../assets/idea.png'
function Intro() {
  return (
    <main className="flex px-[70px] text-white h-auto items-center w-full ">
      <div className="w-[50%]  ">
        <img src={idea} className="h-[500px] " alt="" />
      </div>
      <div className="w-[50%]  ">
        <div className='text-[40px] mb-8 leading-[50px] font-[700] '>
          <h1>Introduction to getlinked</h1>
          <h1 className="txt">tech Hackathon 1.0</h1>
        </div>
        <p>
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
