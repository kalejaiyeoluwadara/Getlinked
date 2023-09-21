import React,{useRef,useEffect} from 'react'
import {motion,useInView,useAnimation} from 'framer-motion'
function Animate({children}) {
  return (
    <motion.div
    variants={{
        hidden:{
            opacity:0,
            y:75
        },
        visible:{
            opacity:1,
            y:0
        }
    }}
    initial="hidden"
    animate="visible"
    >
      {children}
    </motion.div>
  )
}

export default Animate
