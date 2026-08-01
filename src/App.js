import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { honors } from './portfolio'
import './App.css'

const Honors = () => {
  if (!honors.length) return null

  return (
    <section className='section honors' id='honors'>
      <h2 className='section__title'>Honors & Awards</h2>
      <div className='honors__grid'>
        {honors.map((honor) => (
          <div key={honor} className='honors__item'>
            {honor}
          </div>
        ))}
      </div>
    </section>
  )
}

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Experience />
        <Projects />
        <Honors />
        <Skills />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
