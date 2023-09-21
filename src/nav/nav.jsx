import React from 'react'
import logo from './../assets/getlinked.png'
import './nav.css'
import Button from '../Button';
function Nav() {
  return (
    <div className="glass px-[70px] py-[30px] sticky top-0 z-[100px]  flex justify-between br   w-full items-center text-white ">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="flex items-center gap-12 ">
        <div className="flex capitalize text-[17px] gap-8">
          {["timeline", "overview", "faqs", "contact"].map((d, id) => {
            return <a href="">{d}</a>;
          })}
        </div>
        <Button name={"Register"} />
      </div>
    </div>
  );
}

export default Nav
