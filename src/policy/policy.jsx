import React from 'react'
import policy from "./../assets/policy.png";
import list from "./../assets/list.svg";
import Button from '../Button';
function Policy() {
  return (
    <div className="flex text-white items-center justify-center flex-wrap mt-20 gap-6">
      <div>
        <h1 className="font-[600] text-[35px] ">
          Privacy Policy and <br /> <span className="txt">Terms</span>
        </h1>
        <p className="font-[300] text-[13px] mt-4  ">
          Last updated on September 12, 2023
        </p>
        <p className="font-[300] text-[13px] mt-6  ">
          Below are our privacy & policy, which outline a lot of goodies. it’s{" "}
          <br />
          our aim to always take of our participant
        </p>
        <div className="box mt-12 h-auto w-[500px] px-12 py-12  ">
          <p className='text-[14px] leading-[30px] font-[400] '>
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </p>
          <div className="mt-[30px] ">
            <div className='font-[600] flex flex-col gap-1 '>
              <h2 className="txt">Licensing Policy</h2>
              <h3>Here are terms of our Standard License:</h3>
            </div>
            <div className="flex mt-4 text-[14px] flex-col gap-3">
              <p className='flex gap-2 items-start '><img src={list} className='' alt="" />
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </p>
              <p className='flex gap-2 items-start '><img src={list} className='' alt="" />
                You are licensed to use the item available at any free source
                sites, for your project developement
              </p>
            </div>
            <div className='w-full mt-6 flex items-center justify-center '>
                <Button name={'Register'}/>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img className="h-[900px]" src={policy} alt="" />
      </div>
    </div>
  );
}

export default Policy
