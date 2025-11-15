import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ContactMe from './pages/ContactMe.jsx'
import WorkPage from './pages/WorkPage.jsx'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/about" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
