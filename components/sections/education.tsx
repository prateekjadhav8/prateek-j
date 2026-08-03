'use client'

import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { fadeUp, staggerContainer } from '@/lib/motion'
import education from '@/data/education.json'
import type { Education as EducationType } from '@/lib/types'

const data = education as EducationType[]

export function Education() {
  return (
    <section id="education" className="scroll-mt-20 border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Education"
          title="Academic background"
          description="A foundation in engineering fundamentals, applied to software."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto mt-16 flex max-w-3xl flex-col gap-6"
        >
          {data.map((edu) => (
            <motion.div key={edu.id} variants={fadeUp}>
              <Card className="bg-card/50 p-6 transition-colors hover:border-brand/40 sm:p-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand/12 text-brand">
                    <GraduationCap className="size-6" />
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-lg font-semibold tracking-tight">
                          {edu.degree}
                        </h3>
                        <p className="text-sm text-brand">{edu.field}</p>
                      </div>
                      <span className="font-mono text-xs text-muted-foreground">
                        {edu.duration}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {edu.institution} • {edu.location}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {edu.description}
                    </p>
                    <div className="mt-4">
                      <Badge variant="brand" className="font-mono">
                        {edu.grade}
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
