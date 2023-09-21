import React from 'react'
import lens from './assets/lens.png'
function Lens({r}) {
  return (
    <div className={`absolute z-10 left-[200px] -translate-y-[300px] `}>
      <img src={lens} className=' sm:h-[700px] h-[300px] ' alt="" />
    </div>
  )
}

export default Lens
