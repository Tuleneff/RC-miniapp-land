import { Link } from 'react-router-dom'
import { IoMail, IoHeart } from 'react-icons/io5'
import { FaTelegramPlane } from 'react-icons/fa'

const solutions = [
  { name: 'HR и Internal Comms', href: '/solutions/hr' },
  { name: 'Бизнес-клубы', href: '/solutions/clubs' },
  { name: 'Event-менеджеры', href: '/solutions/events' },
  { name: 'Комьюнити-менеджеры', href: '/solutions/cm' },
]

const resources = [
  { name: 'Документация', href: '#' },
  { name: 'FAQ', href: '#' },
  { name: 'Поддержка', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-bg-50 border-t border-bg-200">
      {/* Footer Links */}
      <div className="container-wide py-12 border-t border-bg-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img 
                src="/logo.svg" 
                alt="Random Coffee Logo" 
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-text-500 text-sm">
              Управляйте Telegram-сообществами как профи
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4 text-text-900">Решения</h4>
            <ul className="space-y-2">
              {solutions.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-text-600 hover:text-primary-600 transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-text-900">Ресурсы</h4>
            <ul className="space-y-2">
              {resources.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-text-600 hover:text-primary-600 transition-colors text-sm">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-text-900">Контакты</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://t.me/your_support" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-text-600 hover:text-primary-600 transition-colors text-sm"
                >
                  <FaTelegramPlane size={18} />
                  Telegram
                </a>
              </li>
              <li>
                <a 
                  href="mailto:hello@example.com"
                  className="flex items-center gap-2 text-text-600 hover:text-primary-600 transition-colors text-sm"
                >
                  <IoMail size={18} />
                  hello@example.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container-wide py-6 border-t border-bg-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-500 text-sm">
            © {new Date().getFullYear()} Random Coffee. Все права защищены.
          </p>
          <p className="text-text-500 text-sm flex items-center gap-1">
            Made with <IoHeart className="text-red-500" /> for Telegram communities
          </p>
        </div>
      </div>
    </footer>
  )
}
