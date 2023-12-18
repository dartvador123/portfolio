import React from 'react'
import './navbar.scss'
import { motion } from 'framer-motion'
import Sidebar from './Sidebar/Sidebar'


const Navbar = () => {
  return (
    <div className='navbar'>
      {/*sidebar*/}
      <Sidebar/>
      <div className='wrapper'>
        <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>
          Aqib Akhtar
        </motion.span>
        <div className='social'>
          <a href='#'><img src="..\Media\facebook.png" alt=''></img> </a>
          <a href='#'><img src="..\Media\instagram.png" alt=''></img> </a>
          <a href='#'><img src="..\Media\youtube.png" alt=''></img> </a>
          <a href='#'><img src="..\Media\dribbble.png" alt=''></img> </a>
        </div>
      </div>
    </div>
  )
}
export default Navbar