import React, { useRef } from 'react'
import './services.scss'
import {  motion, useInView } from 'framer-motion'

const varients={
  initials:{
    x:-100,
    y:100,
    opacity:0,

    
  },
  animator:{
    x:0,
    y:0,
    opacity:1,
    transition:{duration:1, staggerChildren:0.1}
  }
}


const Services = () => {
  const ref=useRef();
  const isinview = useInView(ref, {margin:'-100px'});


  return (
    <motion.div className='services' variants={varients} 
    initial='initials' 
    //whileInView='animator'
    ref={ref}
    animate={isinview && 'animator'}
     >
    <motion.div className="textcontainer"  variants={varients}>
      <p> I focus on helping your brand  <br/>  grow and move forward</p>
      <hr></hr>
      </motion.div>
      <motion.div className="titlecontainer"  variants={varients}>
        <div className='title'>
          <img src='.\Media\people.webp'></img>
          <h1> <motion.b whileHover={{color:'orange'}}>Unique</motion.b> Ideas </h1>
        </div>
        <div className='title'>
          <h1> <motion.b whileHover={{color:'orange'}}>For Your</motion.b> business. </h1>
          <button>What we do?</button>
        </div>
        </motion.div>
        <motion.div className="listcontainer"  variants={varients}>
          <motion.div className="box" whileHover={{background:'lightgray' , color:'black'}}> <h2>Branding</h2>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </p>
          <button> GO </button>
          </motion.div>
          <motion.div className="box" whileHover={{background:'lightgray', color:'black'}}> <h2>Branding</h2>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </p>
          <button> GO </button>
          </motion.div>
          <motion.div className="box" whileHover={{background:'lightgray', color:'black'}}> <h2>Branding</h2>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </p>
          <button> GO </button>
          </motion.div>
          <motion.div className="box" whileHover={{background:'lightgray', color:'black'}}> <h2>Branding</h2>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </p>
          <button> GO </button>
          </motion.div>
    </motion.div>
    </motion.div>
  )
}

export default Services