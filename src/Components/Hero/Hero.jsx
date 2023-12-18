import React from 'react'
import './hero.scss'
import { motion } from 'framer-motion'

const textVarients={
  initials:{
    x:-500, //text will come from left side 
    opacity:0 
  },
  animate:{
    x:0, //will come to set position
    opacity:1,
    transition:{duration:1, staggerChildren:0.1,}
  },
  scrollbutton:{
    opacity:0,
    y:10,
    transition:{duration:2, repeat:Infinity}
  }
}

const sliderVarients={
  initial:{
    x:0, //text will start from set position 
  },
  animat:{
    x:'-220%', 
    transition:{duration:20,repeat:Infinity,repeatType:'mirror'}
  }
}




function Hero() {
  return (
    <div className='hero'>
      <div className="wrapper">
      <motion.div className="textcontainer" variants={textVarients} initial='initials' animate='animate' >
        <motion.h2 variants={textVarients}>AQIB AKHTAR</motion.h2>
        <motion.h1 variants={textVarients}>Web developer and UI designer</motion.h1>
        <motion.div variants={textVarients} className="buttons">
        <motion.button variants={textVarients}>See the latest Works</motion.button>
        <motion.button variants={textVarients}>Contact Me</motion.button>
        </motion.div>
        <motion.img variants={textVarients} animate='scrollbutton' src='.\Media\scroll.png'></motion.img>
      </motion.div>
      <motion.div className="slidingtextcontainer" variants={sliderVarients} initial='initial' animate='animat'>
        Developer Content Creator Influencer 
      </motion.div>
      </div>
      <div className="imagecontainer">
        <img src='.\Media\round pic.png' alt=''></img>
      </div>
    </div>
  )
}

export default Hero