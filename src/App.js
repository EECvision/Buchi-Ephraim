import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Navbar from "./Components/Navbar/Navbar"
import Project from "./Pages/Project/Project"
import Text from "./Pages/Test"
import About2 from "./Pages/About/About2"

function App() {
  return (
    <div id="app" className="App">
      <Navbar />
      <About />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About2 />} />
        <Route path="project/:id" element={<Project />} />
        <Route path="test" element={<Text />} />
      </Routes>
    </div>
  )
}

export default App
