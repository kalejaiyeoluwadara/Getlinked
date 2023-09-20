import React from 'react'
import man from './../assets/man.svg'
import Button from '../Button';
import bulb from './../assets/img.png'
import chain from './../assets/chain.png'
import creative from "./../assets/creative.svg";
import light from "./../assets/light.png";
import Lens from '../Lens';
function Main() {
  return (
    <main className="w-[100%] flex relative pl-[70px] items-center h-[90vh]  text-white gap-3 ">
      <Lens r={10} />
      <div className="flex w-[50%] relative z-20 gap-5 items-start flex-col ">
        <div className="font-[800]  leading-[75px] text-[70px] ">
          <img
            src={creative}
            className="absolute -top-[60px] right-[120px] "
            alt=""
          />
          <h1>getlinkedTech</h1>
          <h1 className="flex">
            Hackaton <span className="txt">1.0</span>
            <div className="flex items-end">
              {" "}
              <img className="h-[60px]" src={chain} alt="" />
              <img className="h-[60px]" src={light} alt="" />
            </div>
          </h1>
        </div>
        <p className="w-[80%] font-[400] ">
          Participate in getlinked tech Hackathon 2023 stand a chance to win a
          Big prize
        </p>
        <Button name={"Register"} />
        <div className="flex gap-10  mt-[53px]">
          <div className="flex relative  ">
            <p className="text-[50px] font-[400] ">00</p>
            <p className="text-[10px] absolute bottom-4 -right-2 font-[400]">
              H
            </p>
          </div>
          <div className="flex relative  ">
            <p className="text-[50px] font-[400] ">00</p>
            <p className="text-[10px] absolute bottom-4 -right-2 font-[400]">
              M
            </p>
          </div>
          <div className="flex relative  ">
            <p className="text-[50px] font-[400] ">00</p>
            <p className="text-[10px] absolute bottom-4 -right-2 font-[400]">
              S
            </p>
          </div>
        </div>
      </div>

      <div className="w-[50%]  relative pr-10 h-[100%] flex flex-col">
        <div>
          <h1 className=" absolute z-20 italic text-[22px] font-[400] top-6 right-10 ">
            Igniting a Revolution in HR Innovation
          </h1>
        </div>
        <div className="relative h-[100%] ">
          <img
            className="h-[600px]  absolute bottom-1 right-1 z-10"
            src={man}
            alt=""
          />
          <img
            className="h-[600px] absolute bottom-1 right-1 z-20"
            src={bulb}
            alt=""
          />
        </div>
      </div>
    </main>
  );
}

export default Main
