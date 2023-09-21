import React from 'react'
import logo from './../assets/getlinked.png'
import face from './../assets/face.png'
import linkedin from "./../assets/in.png";
import twi from "./../assets/twi.png";
import insta from "./../assets/insta.png";
import loc from "./../assets/loc.png";
import call from "./../assets/call.png";




function Footer() {
  return (
    <div className="flex foot py-[100px]  flex-wrap mt-20 text-white">
      <div className="flex w-full sm:flex-row flex-col justify-between px-[60px] sm:items-end sm:px-[80px]">
        <div className="flex sm:w-[400px] flex-col gap-12 ">
          <div className="flex flex-col items-start justify-start gap-3">
            <img className="" src={logo} alt="" />
            <p className="leading-[30px]">
              Getlinked Tech Hackathon is a technology innovation program 
              established by a group of organizations with the aim of showcasing{" "}
              young and talented individuals in the field of technology
            </p>
          </div>

          <p>
            Terms of Use <span className="txt">|</span> Privacy Policy
          </p>
        </div>

        <div className="sm:mt-0 mt-10">
          <h1 className="txt font-[600] mb-3 ">useful links</h1>
          <ul className="text-[15px]  flex gap-2 mb-4 flex-col capitalize font-[500] ">
            <li>overview</li>
            <li>timeline</li>
            <li>faqs</li>
            <li>register</li>
          </ul>
          <div className="flex sm:items-center sm:mb-0 mb-10 sm:justify-center gap-3 ">
            <h1 className="txt font-[600] ">Follow us </h1>
            <div className="flex items-center gap-3">
              <a href="">
                <img src={twi} alt="" />
              </a>
              <a href="">
                <img src={linkedin} alt="" />
              </a>
              <a href="">
                <img src={insta} alt="" />
              </a>
              <a href="">
                <img src={face} alt="" />
              </a>
            </div>
          </div>
        </div>

        <div>
          <h1 className="txt mb-3 ">Contact us</h1>
          <div className="flex flex-col gap-3">
            <p className="flex items-center gap-3">
              {" "}
              <img src={call} alt="" /> +234 679 81819
            </p>
            <p className="flex items-start gap-3">
              <img src={loc} alt="" /> 27,Alara Street <br /> Yaba 100012 <br />{" "}
              Lagos State
            </p>
          </div>
        </div>
      </div>
      <div className='flex w-full mt-20 items-center justify-center'><p>All right reserved</p></div>
    </div>
  );
}

export default Footer
