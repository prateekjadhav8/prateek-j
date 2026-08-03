'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/section-heading'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { getIcon } from '@/lib/icons'
import { fadeUp, scaleIn, staggerContainer } from '@/lib/motion'
import skills from '@/data/skills.json'
import type { SkillCategory } from '@/lib/types'

const data = skills as SkillCategory[]

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Skills"
          title="A backend-first toolkit"
          description="Technologies I use to design, build, and operate production systems."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {data.map((category) => {
            const Icon = getIcon(category.icon)
            return (
              <motion.div key={category.category} variants={scaleIn}>
                <Card className="h-full bg-card/50 transition-colors hover:border-brand/40">
                  <CardHeader className="flex-row items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-lg bg-brand/12 text-brand">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="text-base font-semibold">{category.category}</h3>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill.name}
                        variants={fadeUp}
                        className="rounded-lg border border-border bg-background px-2.5 py-1 font-mono text-xs text-foreground/80 transition-colors hover:border-brand/50 hover:text-brand"
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
