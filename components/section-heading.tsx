'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/motion'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={cn(
        'flex max-w-2xl flex-col gap-4',
        align === 'center' ? 'mx-auto items-center text-center' : 'items-start',
      )}
    >
      <motion.span
        variants={fadeUp}
        className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand"
      >
        <span className="h-px w-6 bg-brand" />
        {eyebrow}
      </motion.span>
      <motion.h2
        variants={fadeUp}
        className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className="text-pretty leading-relaxed text-muted-foreground"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}
