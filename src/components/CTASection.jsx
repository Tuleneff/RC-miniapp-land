import { motion } from 'framer-motion'
import { FaTelegramPlane } from 'react-icons/fa'

export default function CTASection({ 
  title = 'Готовы начать?',
  description = 'Создайте своё сообщество и начните управлять им как профи',
  ctaText = 'Начать в Telegram',
  ctaHref = 'https://t.me/your_bot'
}) {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-primary-600 p-8 md:p-12 lg:p-16 text-center shadow-2xl shadow-primary-600/30"
        >
          {/* Background decoration - subtle patterns on solid blue */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat opacity-20 mix-blend-overlay"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white leading-tight">
              {title}
            </h2>
            <p className="text-lg text-primary-100 mb-8 leading-relaxed font-medium">
              {description}
            </p>
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-lg font-bold 
                       text-primary-700 bg-white rounded-xl shadow-lg
                       hover:bg-bg-50 transform transition-all duration-200 hover:scale-105"
            >
              <FaTelegramPlane size={20} />
              {ctaText}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
