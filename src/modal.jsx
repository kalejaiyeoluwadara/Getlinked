import React from 'react'
import Button from './Button'
import cancel from './assets/cancel.png'
import br from "./assets/br.svg";
function Modal({modal,setModal}) {
  return (
    <div className='flex items-center justify-center'>
      <div className="h-[500px] rounded-md px-30 bg-[#150E28] sh  z-40 text-white w-[90%]  fixed top-40 flex flex-col ">
        <div className="mb-20 flex items-end pr-12 pt-12 justify-end rb  ">
          <img onClick={() =>{setModal(false)}} src={cancel} alt="" />
        </div>
        <div className="flex px-10 capitalize flex-col text-[17px] gap-8">
          {["timeline", "overview", "faqs", "contact"].map((d, id) => {
            return <a href="">{d}</a>;
          })}
          <Button name={"Register"} />
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}

export default Modal
