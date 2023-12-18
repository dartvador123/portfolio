import Contact from './Components/Contact/Contact'
import Cursor from './Components/Cursor/cursor'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar'
import Parallex from './Components/Parallex/Parallex'
import Portfolio from './Components/Portfolio/portfolio'
import Services from './Components/Services/Services'
import './app.scss'



function App() {
 
  return (
    <>
    <Cursor/>
    <div>
      <section id='HomePage'>
      <Navbar/>
      <Hero/>
      </section>
      <section id='Services'><Parallex type='services'/></section>
      <section id='Services'><Services/></section>
      <section id='Portfolio'><Parallex type='portfolio'/></section>
      <Portfolio/>
      <section id='Contact'><Contact/></section>
      <section id='About'>About</section>
      
    </div>
    </>
  )
}

export default App
