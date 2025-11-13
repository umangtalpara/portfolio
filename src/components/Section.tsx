import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
}

/**
 * Section container component with consistent max-width and padding
 */
export function Section({ children, className, id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24', className)}
    >
      {children}
    </section>
  )
}

