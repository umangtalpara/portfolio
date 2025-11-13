import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Section } from '@/components/Section'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { siteContent } from '@/content/site'

/**
 * Projects page with case study cards and detail dialogs
 */
export function Projects() {
  const { projects } = siteContent
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  // Trigger animation on mount
  useEffect(() => {
    setIsVisible(true)
  }, [])

  const project = selectedProject
    ? projects.find((p) => p.id === selectedProject)
    : null

  return (
    <div className="min-h-screen pt-32 pb-16">
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold font-heading mb-4 gradient-text">Projects</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-12">
            Backend-focused case studies showcasing system architecture, scalability, and impact.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
              >
                <Card className="h-full flex flex-col hover:shadow-soft-lg transition-all">
                  <CardHeader>
                    <CardTitle className="text-xl font-heading">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {project.problem}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-semibold mb-1">Approach</h4>
                        <p className="text-sm text-foreground/80 line-clamp-3">
                          {project.approach}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold mb-1">Result</h4>
                        <p className="text-sm text-foreground/80 line-clamp-2">
                          {project.result}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tech.slice(0, 4).map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.tech.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.tech.length - 4}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => setSelectedProject(project.id)}
                    >
                      View Highlights
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Project Details Dialog */}
      <Dialog
        open={selectedProject !== null}
        onOpenChange={(open) => !open && setSelectedProject(null)}
      >
        {project && (
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-heading">
                {project.title}
              </DialogTitle>
              <DialogDescription>{project.problem}</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Problem</h4>
                <p className="text-sm text-foreground/80">{project.problem}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Approach</h4>
                <p className="text-sm text-foreground/80">{project.approach}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Result</h4>
                <p className="text-sm text-foreground/80">{project.result}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Key Highlights</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="text-sm text-foreground/80 flex items-start gap-2"
                    >
                      <span className="text-primary mt-1.5">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  )
}

