import { motion } from 'framer-motion'

const colorClasses = {
  blue: 'from-primary-50 to-primary-100 text-primary-600',
  purple: 'from-purple-50 to-purple-100 text-purple-600',
  orange: 'from-orange-50 to-orange-100 text-orange-600',
  emerald: 'from-emerald-50 to-emerald-100 text-emerald-600',
  pink: 'from-pink-50 to-pink-100 text-pink-600',
  cyan: 'from-cyan-50 to-cyan-100 text-cyan-600',
}

export default function FeatureCard({ 
  title, 
  description, 
  icon, 
  color = 'blue',
  index = 0,
  className = ''
}) {
  const styleClass = colorClasses[color] || colorClasses.blue

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`bento-card group flex flex-col h-full bg-white hover:bg-white border border-bg-200 hover:border-bg-300 hover:shadow-lg ${className}`}
    >
      {/* Icon */}
      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${styleClass.split(' ')[0]} ${styleClass.split(' ')[1]} flex items-center justify-center text-xl mb-5 
                      shadow-sm group-hover:scale-105 transition-transform duration-300`}>
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold text-text-900 mb-2 group-hover:text-primary-600 transition-colors">
        {title}
      </h3>
      <p className="text-text-600 leading-relaxed text-sm flex-grow">
        {description}
      </p>
    </motion.div>
  )
}
