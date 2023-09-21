import React from 'react'
import part from './../assets/part.png'
function Partners() {
  return (
    <main className="flex flex-col items-center sm:mt-10 justify-center px-[30px] sm:px-[70px] gap-10 ">
      <div className="flex text-white sm:text-start text-center items-center flex-col">
        <h1 className="font-[700] text-[38px] leading-[40px] sm:mb-0 mb-4 mb-2 ">Partners and Sponsors</h1>
        <p className='text-center sm:w-[70%] sm:mt-3'>
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
      </div>
      <div>
        <img className="sm:h-[500px] h-[300px] " src={part} alt="" />
      </div>
    </main>
  );
}

export default Partners
