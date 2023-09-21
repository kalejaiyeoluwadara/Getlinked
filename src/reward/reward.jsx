import React from 'react'
import cup from './../assets/cup.png'
import lens from "./../assets/lens.png";
import reward from "./../assets/rewards.png";
function Reward() {
  return (
    <main className="flex flex-col sm:mb-10 w-full items-center sm:mb-0 mb-20 justify-center relative sm:h-[100vh] h-auto px-[70px] text-white  gap-20  ">
      <div className='sm:text-start text-center'>
        <h1 className="font-[600] leading-[35px] mb-3 text-[35px] ">
          Prizes and <br />
          <span className="txt">Rewards</span>
        </h1>
        <p className=''>
          Highlight of the prizes or rewards for winners and <br /> for
          participants.
        </p>
      </div>
      <aside className="relative flex  sm:flex-row flex-col gap-12  ">
        <div className={`absolute -top-[200px] z-10 -left-[200px] `}>
          <img src={lens} className=" h-[800px] w-[800px] " alt="" />
        </div>

        <img className="h-[400px] relative z-20" src={cup} alt="" />
        <img className="sm:h-[400px] h-[300px] relative z-20 " src={reward} alt="" />

        <div
          className={`absolute  z-10 top-3 translate-x-[630px] -translate-y-[130px] `}
        >
          <img src={lens} className=" h-[800px] w-[800px] " alt="" />
        </div>
      </aside>
    </main>
  );
}

export default Reward