import React from 'react'
import main from './../assets/main.png'
import Button from '../Button';
import bulb from './../assets/img.png'
import chain from './../assets/chain.png'
import line from "./../assets/line.svg";
import creative from "./../assets/creative.svg";
import light from "./../assets/light.png";
import Lens from '../Lens';
function Main() {
  return (
    <main className="w-[100%] sm:flex-row flex-col flex sm:mt-[100px]   mt-[120px] relative sm:pl-[70px] px-[30px] items-center sm:h-[90vh] h-[auto] mb-20  text-white gap-3 ">
      <Lens r={10} />
      <div className="flex sm:w-[50%] w-[100%] relative z-20 gap-5 sm:items-start items-center flex-col ">
        <div className="sm:font-[800] font-[800] sm:px-0   sm:leading-[75px]  sm:text-start text-center sm:text-[70px] text-[35px] ">
          <img
            src={creative}
            className="absolute sm:h-auto h-[50px]  sm:-top-[60px] -top-[40px] sm:right-[120px] right-[60px] "
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
        <p className="sm:w-[80%] w-[85%] sm:leading-[30px] sm:text-[14px]  text-[17px] sm:text-start text-center font-[400] ">
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

      <div className="sm:w-[50%] w-[100%]   pr-10 h-[100%] flex flex-col">
        <div className="absolute  -top-[80px] right-10">
          <h1 className="   text-center z-20 italic sm:text-[22px] font-[600] text-[17px] sm:font-[400] ">
            Igniting a Revolution in HR Innovation
          </h1>
          <img className="absolute -bottom-1 right-0" src={line} alt="" />
        </div>
        <div className="relative flex items-center justify-center h-[100%] ">
          <img
            className="sm:h-[600px] w-[100%] h-[500px] relative bottom-1 right-1 z-10"
            src={main}
            alt=""
          />
        </div>
      </div>
    </main>
  );
}

export default Main
