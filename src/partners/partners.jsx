import React from 'react'
import part from './../assets/part.png'
function Partners() {
  return (
    <main className="flex flex-col items-center justify-center px-[70px] gap-10 ">
      <div className="flex text-white items-center flex-col">
        <h1 className="font-[700] text-[38px] mb-2 ">Partners and Sponsors</h1>
        <p className='text-center'>
          Getlinked Hackathon 1.0 is honored to have the following major <br />
          companies as its partners and sponsors
        </p>
      </div>
      <div>
        <img className="h-[500px]" src={part} alt="" />
      </div>
    </main>
  );
}

export default Partners
