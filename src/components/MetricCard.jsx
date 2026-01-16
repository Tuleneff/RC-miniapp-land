import { motion } from 'framer-motion'

export default function MetricCard({ metric, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="text-center p-8 rounded-2xl bg-bg-50 border border-bg-200"
    >
      <div className="text-4xl md:text-5xl font-display font-bold text-primary-600 mb-2 tracking-tight">
        {metric.value}
      </div>
      <p className="text-text-600 font-medium text-sm uppercase tracking-wide">
        {metric.label}
      </p>
    </motion.div>
  )
}
