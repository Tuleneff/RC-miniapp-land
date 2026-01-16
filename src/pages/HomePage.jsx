import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import FeatureCard from '../components/FeatureCard'
import SegmentCard from '../components/SegmentCard'
import CTASection from '../components/CTASection'
import { segments, coreFeatures, stats, howItWorks } from '../data/segments'

export default function HomePage() {
  const segmentsList = Object.values(segments)

  return (
    <div className="bg-bg-50 overflow-hidden text-text-900">
      {/* Hero Section */}
      <Hero />

      {/* Stats Section - Clean Minimal Strip */}
      <section className="relative -mt-16 z-20 pb-20">
        <div className="container-wide">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 md:p-10 border border-bg-200 shadow-xl shadow-bg-200/50"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-bg-100">
              {stats.map((stat, index) => (
                <div key={index} className="text-center px-4">
                  <div className="text-3xl md:text-4xl font-display font-bold text-text-900 mb-1 tracking-tight">
                    {stat.value}
                  </div>
                  <p className="text-text-400 font-medium text-xs uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Segments Section - Bento Grid Style Light */}
      <section id="solutions" className="section-padding relative bg-white">
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-xs font-semibold mb-6 border border-primary-100 uppercase tracking-wide">
              Решения
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-text-900">
              Для кого это <span className="text-primary-600">работает</span>
            </h2>
            <p className="text-text-600 text-lg max-w-2xl mx-auto leading-relaxed">
              У каждого свои задачи. Выберите вашу роль — покажем, какие проблемы решаем и как.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {segmentsList.map((segment, index) => (
              <SegmentCard key={segment.id} segment={segment} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Bento Grid Light */}
      <section id="features" className="section-padding bg-bg-50 relative">
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-text-900">
              Всё для управления <span className="text-primary-600">сообществом</span>
            </h2>
            <p className="text-text-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Один инструмент вместо десяти. Автоматизация, CRM и аналитика в одном окне.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
            {coreFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                color={feature.color}
                index={index}
                className={index === 0 || index === 3 ? "md:col-span-2" : ""}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section-padding bg-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-text-900">
              Начните за <span className="text-primary-600">5 минут</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-10 left-0 w-full h-px bg-bg-200 z-0" />

            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative z-10 text-center group"
              >
                {/* Step number */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-xl bg-white border border-bg-200 flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 group-hover:border-primary-200 group-hover:shadow-primary-100 transition-all duration-300">
                  <span className="text-3xl">{step.icon}</span>
                </div>

                <h3 className="text-lg font-bold mb-2 text-text-900">{step.title}</h3>
                <p className="text-text-600 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Готовы создать лучшее сообщество?"
        description="Подключите бота прямо сейчас и начните объединять людей."
        ctaText="Начать бесплатно"
      />
    </div>
  )
}
