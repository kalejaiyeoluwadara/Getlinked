import React from 'react'
import lens from './assets/lens.png'
function Lens({r}) {
  return (
    <div className={`absolute z-10 left-[200px] -translate-y-[300px] `}>
      <img src={lens} className=' h-[700px] w-[700px] ' alt="" />
    </div>
  )
}

export default Lens
