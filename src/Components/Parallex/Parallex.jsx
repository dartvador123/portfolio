import React, { useRef } from 'react'
import './parallex.scss'
import { motion, useScroll, useTransform } from 'framer-motion'

function Parallex({type}) {
  const refOne = useRef();
  const {scrollYProgress} = useScroll({target:refOne,
  offset:['start start','end start']})
  const Ytext=useTransform(scrollYProgress, [0,1],['0%','250%']);
  const Ybg=useTransform(scrollYProgress, [0,1],['0%','50%']);
  return (
    <div className='parallex' ref={refOne} style={{background: type ==='services'? "linear-gradient(180deg,#111132,#0c0c1d" : 'linear-gradient(180deg,#111132,#505064'}}>
      <motion.h1 style={{y:Ytext}}>
      {(type === 'services')? 'What we Do?': 'What we Did?'}
      </motion.h1>
      <motion.div className='mountains'>  </motion.div>
      <motion.div  className='planets' style={{y:Ybg,backgroundImage: `url(${type ==='services'? '../../../Media/planets.png' : '../../../Media/sun.png'})`}}></motion.div>
      <motion.div style={{x:Ybg}} className='stars'></motion.div>
      </div>

  )
}

export default Parallex