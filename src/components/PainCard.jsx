import { motion } from 'framer-motion'

export default function PainCard({ pain, index, variant = 'pain' }) {
  // variant 'pain' is for the "Problems" section
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="p-6 rounded-2xl bg-bg-50 border border-bg-100 hover:border-accent-orange/30 hover:shadow-lg transition-all duration-300 h-full"
    >
      <div className="w-12 h-12 rounded-xl bg-white border border-bg-200 flex items-center justify-center text-2xl mb-4 shadow-sm">
        {pain.icon}
      </div>
      <h3 className="text-lg font-bold text-text-900 mb-2">{pain.title}</h3>
      <p className="text-text-600 text-sm leading-relaxed">{pain.description}</p>
    </motion.div>
  )
}
