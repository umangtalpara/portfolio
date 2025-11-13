import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface TimelineItemProps {
  company: string
  role: string
  period: string
  description: string[]
  tech: string[]
  metrics?: { label: string; value: string }[]
  className?: string
}

/**
 * Timeline item component for experience display
 */
export function TimelineItem({
  company,
  role,
  period,
  description,
  tech,
  metrics,
  className,
}: TimelineItemProps) {
  return (
    <Card className={cn('hover:shadow-soft-lg transition-shadow', className)}>
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
          <div>
            <CardTitle className="text-xl font-heading">{company}</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">{role}</p>
          </div>
          <span className="text-sm font-medium text-primary">{period}</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Description */}
        <ul className="space-y-2">
          {description.map((item, index) => (
            <li key={index} className="text-sm text-foreground/80 flex items-start gap-2">
              <span className="text-primary mt-1.5">•</span>
              <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
            </li>
          ))}
        </ul>

        {/* Metrics */}
        {metrics && metrics.length > 0 && (
          <div className="flex flex-wrap gap-4 pt-2 border-t">
            {metrics.map((metric, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-2xl font-bold font-heading text-primary">
                  {metric.value}
                </span>
                <span className="text-xs text-muted-foreground">{metric.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tech.map((item) => (
            <Badge key={item} variant="outline" className="text-xs">
              {item}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

