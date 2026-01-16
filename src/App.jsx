import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import SolutionHR from './pages/SolutionHR'
import SolutionClubs from './pages/SolutionClubs'
import SolutionEvents from './pages/SolutionEvents'
import SolutionCM from './pages/SolutionCM'

function App() {
  return (
    <div className="min-h-screen bg-bg-50 text-text-900">
      <ScrollToTop />
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/solutions/hr" element={<SolutionHR />} />
            <Route path="/solutions/clubs" element={<SolutionClubs />} />
            <Route path="/solutions/events" element={<SolutionEvents />} />
            <Route path="/solutions/cm" element={<SolutionCM />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default App
