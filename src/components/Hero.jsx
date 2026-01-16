import { motion } from 'framer-motion'
import { IoArrowForward } from 'react-icons/io5'
import { FaTelegramPlane } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Hero({ 
  title, 
  subtitle, 
  description,
  primaryCTA = { text: 'Начать бесплатно', href: 'https://t.me/your_bot' },
  secondaryCTA = { text: 'Как это работает', to: '/#how-it-works' },
  badge = { text: 'New: AI Agents for Slack', icon: '✨' },
  showDecoration = true
}) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background - Very subtle light gradient */}
      <div className="absolute inset-0 bg-hero-gradient -z-10" />
      
      {/* Grid pattern - subtle on light mode */}
      <div 
        className="absolute inset-0 opacity-[0.4] -z-10"
        style={{
          backgroundImage: `linear-gradient(#f4f4f5 1px, transparent 1px), linear-gradient(90deg, #f4f4f5 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container-wide relative z-10">
        <div className="max-w-3xl mx-auto text-center px-4">
          {/* Badge - Linear/Notion style: small, pill, subtle */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 flex justify-center"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-bg-100 border border-bg-200 text-text-600 hover:border-primary-200 hover:text-primary-600 transition-colors cursor-default">
                {badge.icon && <span>{badge.icon}</span>}
                {badge.text}
                <IoArrowForward className="text-text-400" size={12} />
              </span>
            </motion.div>
          )}

          {/* Title - Compact, High Contrast */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6 leading-[1.1] tracking-tight text-text-900"
          >
            {title || (
              <>
                Ваше сообщество <br className="hidden md:block"/>
                <span className="text-primary-600">на автопилоте</span>
              </>
            )}
          </motion.h1>

          {/* Description - Smaller, readable, focused */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-text-600 mb-10 max-w-xl mx-auto leading-relaxed"
          >
            {description || "Автоматизация встреч, CRM участников и аналитика в одном Telegram-боте. Забудьте о рутине и сфокусируйтесь на людях."}
          </motion.p>

          {/* CTAs - Compact buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center"
          >
            <a
              href={primaryCTA.href}
              target={primaryCTA.href.startsWith('http') ? '_blank' : undefined}
              rel={primaryCTA.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="btn-primary"
            >
              <FaTelegramPlane size={16} className="mr-2" />
              {primaryCTA.text}
            </a>
            
            {secondaryCTA && (
              secondaryCTA.to ? (
                <Link
                  to={secondaryCTA.to}
                  className="btn-secondary"
                >
                  {secondaryCTA.text}
                </Link>
              ) : (
                <a
                  href={secondaryCTA.href}
                  className="btn-secondary"
                >
                  {secondaryCTA.text}
                </a>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
