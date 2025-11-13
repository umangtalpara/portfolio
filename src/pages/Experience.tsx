import { motion } from 'framer-motion'
import { Section } from '@/components/Section'
import { TimelineItem } from '@/components/TimelineItem'
import { siteContent } from '@/content/site'

/**
 * Experience page with timeline of work experience
 */
export function Experience() {
  const { experience } = siteContent

  return (
    <div className="min-h-screen pt-32 pb-16">
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold font-heading mb-4 gradient-text">Experience</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-12">
            Timeline of my professional journey with impact metrics and achievements.
          </p>

          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <TimelineItem
                  company={exp.company}
                  role={exp.role}
                  period={exp.period}
                  description={exp.description}
                  tech={exp.tech}
                  metrics={exp.metrics}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>
    </div>
  )
}

