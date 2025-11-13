import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Download, ArrowRight } from 'lucide-react'
import { Section } from '@/components/Section'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { SkillsDonutChart } from '@/components/SkillsDonutChart'
import { siteContent } from '@/content/site'

/**
 * Home page with hero, highlights, skills chart, and featured experience
 */
export function Home() {
  const { personal, summary, experience, projects } = siteContent
  const featuredExperience = experience[1] // bigb experience with metrics
  const featuredProject = projects[0] // WMS project

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="pt-32 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading mb-4 gradient-text">
              {personal.name}
            </h1>
            <p className="text-xl sm:text-2xl font-semibold mb-2 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
              {personal.title}
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              {personal.tagline}
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Button asChild size="lg" className="group">
              <a href={personal.resumePath} download>
                <Download className="h-4 w-4" aria-hidden="true" />
                Download Resume
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="group">
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </Section>

      {/* Highlights / Summary Section */}
      <Section className="gradient-bg rounded-3xl my-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold font-heading mb-8 text-center gradient-text">
            Professional Summary
          </h2>
          <ul className="space-y-4">
            {summary.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 text-foreground/80"
              >
                <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>'),
                  }}
                />
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </Section>

      {/* Skills Chart Section */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold font-heading mb-4 gradient-text">
            Skills Distribution
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-8">
            Architecture, APIs, data, reliability first; UI when needed.
          </p>
          <SkillsDonutChart />
        </motion.div>
      </Section>

      {/* Impact Metrics */}
      {featuredExperience.metrics && (
        <Section className="gradient-bg rounded-3xl my-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold font-heading mb-8 text-center gradient-text">
              Impact Metrics
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {featuredExperience.metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center shine-effect bg-gradient-to-br from-emerald-50/50 to-teal-50/50 dark:from-emerald-950/30 dark:to-teal-950/30 border-emerald-200 dark:border-emerald-800">
                    <CardContent className="pt-6">
                      <div className="text-4xl font-bold font-heading bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent mb-2">
                        {metric.value}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                        {metric.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Section>
      )}

      {/* Featured Experience */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold font-heading gradient-text">
              Featured Experience
            </h2>
            <Button asChild variant="ghost">
              <Link to="/experience">
                View All
                <ArrowRight className="h-4 w-4 ml-2" aria-hidden="true" />
              </Link>
            </Button>
          </div>
          <Card className="hover:shadow-soft-lg transition-shadow">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <CardTitle className="text-xl font-heading">
                    {featuredExperience.company}
                  </CardTitle>
                  <CardDescription className="mt-1">
                    {featuredExperience.role}
                  </CardDescription>
                </div>
                <span className="text-sm font-medium text-primary">
                  {featuredExperience.period}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4">
                {featuredExperience.description.slice(0, 2).map((item, index) => (
                  <li
                    key={index}
                    className="text-sm text-foreground/80 flex items-start gap-2"
                  >
                    <span className="text-primary mt-1.5">•</span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'),
                      }}
                    />
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </Section>

      {/* Featured Project */}
      <Section className="gradient-bg rounded-3xl my-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold font-heading gradient-text">
              Featured Project
            </h2>
            <Button asChild variant="ghost">
              <Link to="/projects">
                View All
                <ArrowRight className="h-4 w-4 ml-2" aria-hidden="true" />
              </Link>
            </Button>
          </div>
          <Card className="hover:shadow-soft-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl font-heading">
                {featuredProject.title}
              </CardTitle>
              <CardDescription>{featuredProject.result}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/80 mb-4">
                {featuredProject.approach}
              </p>
              <Button asChild variant="outline">
                <Link to="/projects">View Details</Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </Section>
    </div>
  )
}

