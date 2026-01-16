import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { IoArrowForward } from 'react-icons/io5'

export default function SegmentCard({ segment, index = 0 }) {
  const { icon, shortTitle, headline, pains, slug, color } = segment
  // Simplification: Not using complicated gradients for texts in light mode for cleaner look
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Link 
        to={`/solutions/${slug}`}
        className="bento-card block group h-full bg-white hover:bg-white border border-bg-200 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-500/5 overflow-hidden relative"
      >
        {/* Hover subtle background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`} />
        
        {/* Icon and Title */}
        <div className="flex items-center gap-3 mb-5 relative z-10">
          <div className={`w-12 h-12 rounded-xl bg-bg-50 border border-bg-100 flex items-center justify-center text-xl
                         group-hover:scale-105 transition-transform duration-300`}>
            {icon}
          </div>
          <h3 className="text-xl font-bold text-text-900 group-hover:text-primary-600 transition-colors">
            {shortTitle}
          </h3>
        </div>

        {/* Headline */}
        <p className="text-base text-text-600 mb-6 font-medium relative z-10 leading-relaxed">
          {headline}
        </p>

        {/* Pain points preview */}
        <div className="space-y-2 mb-6 relative z-10">
          {pains.slice(0, 3).map((pain, i) => (
            <div key={i} className="flex items-start gap-2 text-text-500 text-sm group-hover:text-text-600 transition-colors">
              <span className="mt-0.5 text-base opacity-70 grayscale">{pain.icon}</span>
              <span className="leading-tight">{pain.title}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="absolute bottom-6 left-6 flex items-center gap-1.5 text-primary-600 text-sm font-semibold group-hover:text-primary-700 transition-colors z-10">
          Узнать больше
          <IoArrowForward className="group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
    </motion.div>
  )
}
