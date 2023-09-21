import React from 'react'
import logo from "./../assets/getlinked.png";
import menu from "./../assets/menu.png";
import "./nav.css";
// import {BsMore} from 'react-icons/bs'
// import Button from "../Button";
function Mobile({modal,setModal}) {
  return (
    <div className="glass px-[30px] py-[30px] sticky top-0 z-40  flex justify-between br   w-full items-center text-white ">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="flex items-center gap-12 ">
      <img onClick={() =>{
        setModal(true)
        console.log(modal);
        // alert('hello')
      }} src={menu} alt="" />
      </div>
    </div>
  );
}

export default Mobile
