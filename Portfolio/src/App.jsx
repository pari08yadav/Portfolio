import About from "./components/About"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Home from "./components/Home"
import Projects from "./components/Project"
import ServicesProvide from "./components/ServicesProvide"
import Skills from "./components/Skills"
import Statistic from "./components/Statistic"

function App() {


  return (
    <>
     <Header/>
     <Home />
     <Statistic />
     <About />
    <ServicesProvide />
     <Skills />
     {/* <Projects /> */}
     <Contact />
    </>
  )
}

export default App
