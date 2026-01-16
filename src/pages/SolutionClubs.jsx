import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { IoArrowBack, IoCheckmarkCircle } from 'react-icons/io5'
import Hero from '../components/Hero'
import PainCard from '../components/PainCard'
import SolutionCard from '../components/SolutionCard'
import MetricCard from '../components/MetricCard'
import CTASection from '../components/CTASection'
import { segments } from '../data/segments'

export default function SolutionClubs() {
  const segment = segments.clubs

  return (
    <div className="bg-bg-50">
      <Hero
        badge={{ icon: segment.icon, text: segment.shortTitle }}
        title={segment.headline}
        subtitle={segment.subheadline}
        description={segment.context}
        primaryCTA={{ text: 'Попробовать бесплатно', href: 'https://t.me/your_bot' }}
        secondaryCTA={{ text: 'Назад к решениям', to: '/' }}
        showDecoration={false}
      />

      {/* Pain Points */}
      <section className="section-padding bg-white relative -mt-20 pt-32 rounded-t-[3rem] shadow-xl shadow-bg-200/50 z-20 border-t border-bg-100">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent-orange/10 text-accent-orange text-xs font-semibold uppercase tracking-wide mb-4">
              Знакомые проблемы?
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-text-900">
              С чем сталкиваются клубы
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {segment.pains.map((pain, index) => (
              <PainCard key={index} pain={pain} index={index} variant="pain" />
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-padding bg-bg-50">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-600 text-xs font-semibold uppercase tracking-wide mb-4">
              Как мы решаем
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-text-900">
              От задачи к <span className="text-primary-600">решению</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {segment.solutions.map((solution, index) => (
              <SolutionCard key={index} solution={solution} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary-50 text-primary-600 text-xs font-semibold uppercase tracking-wide mb-4">
              Результаты
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-text-900">
              Метрики, которые <span className="text-primary-600">повышают LTV</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {segment.metrics.map((metric, index) => (
              <MetricCard key={index} metric={metric} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Triggers */}
      <section className="section-padding bg-bg-50">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-text-900">
              Когда пора действовать?
            </h2>
          </motion.div>

          <div className="space-y-4">
            {segment.triggers.map((trigger, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-5 rounded-xl bg-bg-50 border border-bg-200 hover:border-primary-200 hover:shadow-md transition-all"
              >
                <IoCheckmarkCircle className="text-primary-500 text-xl flex-shrink-0" />
                <span className="text-text-700 font-medium">{trigger}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-primary-50 border border-primary-100"
            >
              <div className="text-4xl mb-4">😌</div>
              <h3 className="text-xl font-bold mb-3 text-primary-900">Как вы будете себя чувствовать</h3>
              <p className="text-primary-700">{segment.emotionalBenefit}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-2xl bg-bg-50 border border-bg-200"
            >
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold mb-3 text-text-900">Как вас будут воспринимать</h3>
              <p className="text-text-600">{segment.socialBenefit}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Back to Solutions */}
      <section className="py-8 bg-bg-50 border-t border-bg-200">
        <div className="container-wide">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-text-500 hover:text-primary-600 transition-colors font-medium"
          >
            <IoArrowBack />
            Все решения
          </Link>
        </div>
      </section>

      <CTASection
        title="Готовы оживить ваше сообщество?"
        description="Подключите бота и начните управлять клубом эффективно"
        ctaText="Попробовать бесплатно"
      />
    </div>
  )
}
