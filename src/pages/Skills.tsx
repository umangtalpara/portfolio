import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { Section } from '@/components/Section'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { siteContent } from '@/content/site'

/**
 * Skills page with grouped skills and search functionality
 */
export function Skills() {
  const { skills } = siteContent
  const [searchQuery, setSearchQuery] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  // Trigger animation on mount
  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Filter skills based on search query
  const filteredSkills = skills.map((category) => ({
    ...category,
    skills: category.skills.filter((skill) =>
      skill.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) => category.skills.length > 0)

  return (
    <div className="min-h-screen pt-32 pb-16">
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold font-heading mb-4 gradient-text">Skills & Tools</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            Technologies and tools I work with, organized by category.
          </p>

          {/* Search Input */}
          <div className="relative mb-8 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
              aria-label="Search skills"
            />
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSkills.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full hover:shadow-soft-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl font-heading">
                      {category.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="default"
                          className="text-sm"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredSkills.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No skills found matching "{searchQuery}"
              </p>
            </div>
          )}
        </motion.div>
      </Section>
    </div>
  )
}

