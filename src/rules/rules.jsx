import React from 'react'
import rules from './../assets/rule.png'
import lens from "./../assets/lens.png";
function Rules() {
  return (
    <main className="flex sm:px-[70px] px-[20px] sm:mb-0 mb-20 sm:flex-row flex-col-reverse relative z-20 text-white h-auto  items-center w-full ">
      <div className={`absolute z-0 left-[10px] `}>
        <img src={lens} className=" sm:h-[800px] sm:w-[800px] " alt="" />
      </div>
      <div className="sm:w-[50%] sm:text-start text-center relative z-20  ">
        <div className="text-[40px] mb-8 leading-[50px] font-[700] ">
          <h1>Rules and</h1>
          <h1 className="txt">Guidelines</h1>
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

      <div className="sm:w-[50%] flex items-end justify-end  ">
        <img src={rules} className="h-[600px] " alt="" />
      </div>
    </main>
  );
}

export default Rules
