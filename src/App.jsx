import { useState } from 'react'
import './App.css'
import Herosection from './pages/Herosection'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="bg-[#0A0018] overflow-x-hidden">
      <Herosection />
      <About />
      <Skills />
      <Projects></Projects>
      <Contact></Contact>
    </div>
    </>
  )
}

export default App
