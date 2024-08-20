import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experiance from './components/Experiance'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='overflow-hidden text-neutral-300 antialiased 
    selection:bg-cyan-300 selection:text-cyan-900'>
      <div className='fixed top-0 -z-10 h-full w-full '>
        <div class="absolute top-0 z-[-2] h-screen 
      w-screen bg-[#000000]
       bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] 
      bg-[size:20px_20px]">
        </div>
      </div>
      <div className='contaner mx-auto px-8'>
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experiance />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App