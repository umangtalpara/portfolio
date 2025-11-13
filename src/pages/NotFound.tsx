import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home } from 'lucide-react'
import { Section } from '@/components/Section'
import { Button } from '@/components/ui/button'

/**
 * 404 Not Found page
 */
export function NotFound() {
  return (
    <div className="min-h-screen pt-32 pb-16 flex items-center">
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h1 className="text-6xl font-bold font-heading mb-4">404</h1>
          <h2 className="text-3xl font-semibold font-heading mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild size="lg">
            <Link to="/">
              <Home className="h-4 w-4 mr-2" aria-hidden="true" />
              Go Home
            </Link>
          </Button>
        </motion.div>
      </Section>
    </div>
  )
}

