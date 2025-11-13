import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface StatProps {
  icon: ReactNode
  value: string
  label: string
  className?: string
}

/**
 * Stat component displaying an icon, value, and label
 */
export function Stat({ icon, value, label, className }: StatProps) {
  return (
    <div className={cn('flex flex-col items-center gap-2', className)}>
      <div className="text-primary" aria-hidden="true">
        {icon}
      </div>
      <div className="text-3xl font-bold font-heading">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  )
}

