import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Phone, Copy, Check } from 'lucide-react'
import { Section } from '@/components/Section'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { siteContent } from '@/content/site'
import { copyToClipboard } from '@/lib/utils'

/**
 * Contact page with form and direct contact links
 */
export function Contact() {
  const { personal } = siteContent
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validate()) {
      return
    }

    setIsSubmitting(true)

    // Simulate form submission (in production, this would call an API)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', message: '' })

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleCopyEmail = async () => {
    const success = await copyToClipboard(personal.email)
    if (success) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="min-h-screen pt-32 pb-16">
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold font-heading mb-4 gradient-text">Get in Touch</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-12">
            Have a project in mind or want to collaborate? Let's connect!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-heading">Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you soon.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="text-primary text-4xl mb-4">✓</div>
                    <h3 className="text-lg font-semibold mb-2">Message Sent!</h3>
                    <p className="text-sm text-muted-foreground">
                      Thank you for reaching out. I'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? 'border-destructive' : ''}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && (
                        <p
                          id="name-error"
                          className="text-sm text-destructive mt-1"
                          role="alert"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? 'border-destructive' : ''}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <p
                          id="email-error"
                          className="text-sm text-destructive mt-1"
                          role="alert"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={errors.message ? 'border-destructive' : ''}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                      />
                      {errors.message && (
                        <p
                          id="message-error"
                          className="text-sm text-destructive mt-1"
                          role="alert"
                        >
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Direct Contact Links */}
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-heading">Direct Contact</CardTitle>
                  <CardDescription>
                    Reach out through your preferred channel.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start"
                          asChild
                        >
                          <a href={`mailto:${personal.email}`}>
                            <Mail className="h-4 w-4 mr-2" aria-hidden="true" />
                            {personal.email}
                          </a>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Click to open email client</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start"
                          onClick={handleCopyEmail}
                        >
                          {copied ? (
                            <>
                              <Check className="h-4 w-4 mr-2" aria-hidden="true" />
                              Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="h-4 w-4 mr-2" aria-hidden="true" />
                              Copy Email
                            </>
                          )}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Copy email to clipboard</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    asChild
                  >
                    <a
                      href={`https://${personal.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 w-4 mr-2" aria-hidden="true" />
                      LinkedIn
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    asChild
                  >
                    <a href={`tel:${personal.phone.replace(/\s/g, '')}`}>
                      <Phone className="h-4 w-4 mr-2" aria-hidden="true" />
                      {personal.phone}
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-heading">Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {personal.location}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </Section>
    </div>
  )
}

