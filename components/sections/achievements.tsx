'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/section-heading'
import { Card } from '@/components/ui/card'
import { iconMap } from '@/lib/icons'
import { fadeUp, staggerContainer } from '@/lib/motion'
import achievements from '@/data/achievements.json'
import type { Achievement } from '@/lib/types'

const data = achievements as Achievement[]

export function Achievements() {
  return (
    <section className="scroll-mt-20 border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Achievements"
          title="Recognition & awards"
          description="Milestones that mark consistent, high-impact engineering."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2"
        >
          {data.map((item) => {
            const Icon = iconMap[item.icon] ?? iconMap.trophy
            return (
              <motion.div key={item.id} variants={fadeUp}>
                <Card className="group flex h-full items-start gap-5 bg-card/50 p-6 transition-colors hover:border-brand/40">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand/12 text-brand transition-transform duration-300 group-hover:scale-110">
                    <Icon className="size-6" />
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-3">
                      <h3 className="text-base font-semibold leading-snug">
                        {item.title}
                      </h3>
                      <span className="ml-auto shrink-0 font-mono text-xs text-muted-foreground">
                        {item.year}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
