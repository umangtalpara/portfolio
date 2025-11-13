import { Link } from 'react-router-dom'
import { Linkedin, Mail, Phone } from 'lucide-react'
import { siteContent } from '@/content/site'
import { getCurrentYear } from '@/lib/utils'

/**
 * Footer component with social links and copyright
 */
export function Footer() {
  const { personal } = siteContent

  return (
    <footer className="border-t border-emerald-200/50 dark:border-emerald-800/30 bg-gradient-to-br from-emerald-50/30 via-teal-50/20 to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
              {personal.name}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {personal.title}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              {personal.location}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4 text-slate-800 dark:text-slate-200">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              <Link
                to="/"
                className="text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors focus:outline-none focus:ring-2 focus:ring-ring rounded px-1"
              >
                Home
              </Link>
              <Link
                to="/experience"
                className="text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors focus:outline-none focus:ring-2 focus:ring-ring rounded px-1"
              >
                Experience
              </Link>
              <Link
                to="/projects"
                className="text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors focus:outline-none focus:ring-2 focus:ring-ring rounded px-1"
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors focus:outline-none focus:ring-2 focus:ring-ring rounded px-1"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4 text-slate-800 dark:text-slate-200">
              Connect
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors focus:outline-none focus:ring-2 focus:ring-ring rounded px-1"
                aria-label="Send email"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {personal.email}
              </a>
              <a
                href={`https://${personal.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors focus:outline-none focus:ring-2 focus:ring-ring rounded px-1"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                LinkedIn
              </a>
              <a
                href={`tel:${personal.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors focus:outline-none focus:ring-2 focus:ring-ring rounded px-1"
                aria-label="Call phone"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {personal.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-emerald-200/50 dark:border-emerald-800/30 text-center text-sm text-slate-600 dark:text-slate-400">
          <p>
            © {getCurrentYear()} {personal.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

