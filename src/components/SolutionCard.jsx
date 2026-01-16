import { motion } from 'framer-motion'

export default function SolutionCard({ solution, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="flex gap-6 p-6 rounded-2xl bg-white border border-bg-200 hover:border-primary-200 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center text-2xl">
        {solution.icon}
      </div>
      <div>
        <h4 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-1">
          {solution.job}
        </h4>
        <p className="text-text-900 font-medium leading-relaxed">
          {solution.feature}
        </p>
      </div>
    </motion.div>
  )
}
