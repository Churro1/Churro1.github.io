import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ContactMe from './pages/ContactMe.jsx'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/work" element={<HomePage />} />
          <Route path="/about" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
