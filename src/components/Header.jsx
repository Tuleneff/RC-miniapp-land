import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { IoMenu, IoClose } from 'react-icons/io5'

const allSolutions = [
  { name: 'Сообществам', href: '/solutions/clubs', icon: '👑' },
  { name: 'Для HR', href: '/solutions/hr', icon: '🏢' },
  { name: 'Для ивентов', href: '/solutions/events', icon: '🎪' },
  { name: 'Для CM', href: '/solutions/cm', icon: '💼' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md border-b border-bg-200 py-3 shadow-sm' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-wide">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group flex-shrink-0">
             <img 
               src="/logo.svg" 
               alt="Random Coffee Logo" 
               className="h-10 md:h-12 w-auto object-contain group-hover:opacity-80 transition-opacity duration-200"
             />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <Link to="/" className="px-3 py-2 text-sm font-medium text-text-600 hover:text-text-900 hover:bg-bg-50 rounded-md transition-all">
              Главная
            </Link>
            
            {allSolutions.map((solution) => (
              <Link 
                key={solution.href}
                to={solution.href} 
                className="px-3 py-2 text-sm font-medium text-text-600 hover:text-text-900 hover:bg-bg-50 rounded-md transition-all"
              >
                {solution.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/login" className="text-sm font-medium text-text-600 hover:text-text-900 transition-colors">
              Войти
            </Link>
            <a
              href="https://t.me/your_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-2 px-4 text-sm"
            >
              Начать
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-text-600 hover:text-text-900 hover:bg-bg-50 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-bg-200 overflow-hidden shadow-lg"
          >
            <div className="container-wide py-4 space-y-1">
              <Link to="/" className="block px-4 py-3 text-base font-medium text-text-600 hover:text-text-900 hover:bg-bg-50 rounded-lg">
                Главная
              </Link>
              
              {allSolutions.map((solution) => (
                <Link 
                  key={solution.href}
                  to={solution.href} 
                  className="flex items-center gap-3 px-4 py-3 text-base font-medium text-text-600 hover:text-text-900 hover:bg-bg-50 rounded-lg"
                >
                  <span className="text-lg">{solution.icon}</span>
                  <span>{solution.name}</span>
                </Link>
              ))}

              <div className="pt-4 mt-2 border-t border-bg-100 px-4 pb-4">
                <Link to="/login" className="block w-full text-center py-2.5 text-text-600 font-medium mb-2 hover:bg-bg-50 rounded-lg">
                    Войти
                </Link>
                <a
                  href="https://t.me/your_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center"
                >
                  Начать знакомиться
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
