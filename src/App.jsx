import { Navbar } from './components/Navbar'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Skills } from './sections/Skills'
import { Experience } from './sections/Experience'
import { Education } from './sections/Education'
import { Contact } from './sections/Contact'
import { CustomCursor } from './components/CustomCursor'
import { Background } from './components/Background'

function App() {
  return (
    <div className="app">
      <Background />
      <CustomCursor />
      <div className="noise-overlay"></div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
    </div>
  )
}

export default App

