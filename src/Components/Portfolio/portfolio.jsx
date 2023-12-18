import React, { useRef } from 'react'
import './Portfolio.SCSS'
import { motion,useScroll,useSpring, useTransform } from 'framer-motion'

const items=[
  {
    id:'1',
    title: 'Ecommerce App',
    img:'https://cdn.shopify.com/s/files/1/0070/7032/files/trending-products_c8d0d15c-9afc-47e3-9ba2-f7bad0505b9b.png?format=jpg&quality=90&v=1614559651',
    description:'ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock',
  },
  {
    id:'2',
    title: 'Social Media App',
    img:'https://images.pexels.com/photos/3993398/pexels-photo-3993398.jpeg?cs=srgb&dl=pexels-hana-brannigan-3993398.jpg&fm=jpg',
    description:'ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock',
  },
  {
    id:'3',
    title: 'Educational App',
    img:'https://cdn.shopify.com/s/files/1/0070/7032/files/trending-products_c8d0d15c-9afc-47e3-9ba2-f7bad0505b9b.png?format=jpg&quality=90&v=1614559651',
    description:'ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintocke',
  },
  {
    id:'4',
    title: 'Delivery App',
    img:'https://images.pexels.com/photos/3993398/pexels-photo-3993398.jpeg?cs=srgb&dl=pexels-hana-brannigan-3993398.jpg&fm=jpg',
    description:'ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock',
  },
];

//Single is component also
const Single=({item})=>{
  const reff= useRef();
  const {scrollYProgress} = useScroll({target:reff});

  const y= useTransform(scrollYProgress,[0,1],['-40%','40%'])

  return (
    <section >
      <div className="container">
        <motion.div className="wrapper"  >
        <motion.img src={item.img} ref={reff}></motion.img>
        <motion.div className="textcontainer" style={{y:y}}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <button> See Demo </button>
        </motion.div>
        </motion.div>
      </div>
      </section>
  )
}

const Portfolio = () => {
  const ref = useRef();
  const {scrollYProgress} = useScroll({target:ref, offset:['end end','start start']});
  const scaleX= useSpring(scrollYProgress, {stiffness:100 ,damping:30})

  return (
    <div className='portfolio' ref={ref}>
      <div className='progress'>
        <h1>Featured Work</h1>
        <motion.div style={{scaleX:scaleX}} className="progressbar">
        </motion.div>
      </div>
      {items.map(item=>( //map will create different components (single) for each item
        <Single item={item} key={item.id}/>

      ))}
    </div>
  )
}

export default Portfolio