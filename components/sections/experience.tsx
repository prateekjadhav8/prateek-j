'use client'

import { motion } from 'framer-motion'
import { Briefcase, MapPin, Sparkles } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { fadeUp } from '@/lib/motion'
import experience from '@/data/experience.json'
import type { Experience as ExperienceType } from '@/lib/types'

const data = experience as ExperienceType[]

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Experience"
          title="A track record of shipping"
          description="Four years of building and scaling backend systems across fintech and commerce."
        />

        <div className="relative mt-16 pl-8 sm:pl-12">
          <div className="absolute left-2.5 top-2 bottom-2 w-px bg-gradient-to-b from-brand/60 via-border to-transparent sm:left-3.5" />

          <div className="flex flex-col gap-10">
            {data.map((job, index) => (
              <motion.div
                key={job.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: index * 0.05 }}
                className="relative"
              >
                <span className="absolute -left-[1.65rem] top-1.5 flex size-5 items-center justify-center rounded-full border border-border bg-background sm:-left-[2.4rem]">
                  <span className="size-2 rounded-full bg-brand" />
                </span>

                <Card className="bg-card/50 p-6 transition-colors hover:border-brand/40">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-semibold tracking-tight">
                          {job.role}
                        </h3>
                        {job.current && (
                          <Badge variant="brand">Current</Badge>
                        )}
                      </div>
                      <p className="mt-1 flex items-center gap-2 text-sm text-brand">
                        <Briefcase className="size-3.5" />
                        {job.company}
                        <span className="text-muted-foreground">•</span>
                        <span className="inline-flex items-center gap-1 text-muted-foreground">
                          <MapPin className="size-3.5" />
                          {job.location}
                        </span>
                      </p>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">
                      {job.duration}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {job.summary}
                  </p>

                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                        Responsibilities
                      </h4>
                      <ul className="mt-3 flex flex-col gap-2">
                        {job.responsibilities.map((item) => (
                          <li
                            key={item}
                            className="flex gap-2 text-sm leading-relaxed text-foreground/85"
                          >
                            <span className="mt-2 size-1 shrink-0 rounded-full bg-brand/70" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                        <Sparkles className="size-3.5 text-brand" />
                        Key Achievements
                      </h4>
                      <ul className="mt-3 flex flex-col gap-2">
                        {job.achievements.map((item) => (
                          <li
                            key={item}
                            className="flex gap-2 text-sm leading-relaxed text-foreground/85"
                          >
                            <span className="mt-2 size-1 shrink-0 rounded-full bg-brand" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="font-mono">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
