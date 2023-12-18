import React, { useState } from 'react'
import './app.scss'
import { motion } from 'framer-motion'

function Test() {
  let i;
  const variant={ visible:(i) => ({opacity:1, transition:{delay:i * 0.2}}),hidden:{opacity:0}} 
  const items=['item1','item2','item3','item4','item5','item6']
  return (
    <div className="course">
      <motion.ul initial='hidden' animate='visible'  variants={variant}>
        {items.map((item,i)=>(
          <motion.li  variants={variant} custom={i}>{item}</motion.li>
        ))}
  
  </motion.ul>
    </div>
  )
}
export default Test