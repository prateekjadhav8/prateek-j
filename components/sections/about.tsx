'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { CountUp } from '@/components/count-up'
import { SectionHeading } from '@/components/section-heading'
import { Card } from '@/components/ui/card'
import { fadeUp, scaleIn, staggerContainer } from '@/lib/motion'
import personal from '@/data/personal.json'
import type { Personal } from '@/lib/types'

const data = personal as Personal

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About Me"
          title="Backend engineering, done right"
          description="I design systems that stay fast, observable, and reliable as they scale."
        />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col gap-6"
          >
            <motion.p
              variants={fadeUp}
              className="text-pretty leading-relaxed text-muted-foreground"
            >
              {data.about}
            </motion.p>
            <motion.ul variants={staggerContainer} className="flex flex-col gap-3">
              {data.highlights.map((highlight) => (
                <motion.li
                  key={highlight}
                  variants={fadeUp}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                    <Check className="size-3" />
                  </span>
                  <span className="text-sm leading-relaxed text-foreground/90">
                    {highlight}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-2 gap-4"
          >
            {data.stats.map((stat) => (
              <motion.div key={stat.label} variants={scaleIn}>
                <Card className="h-full bg-card/50 p-6 transition-colors hover:border-brand/40">
                  <div className="font-mono text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                    <CountUp
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
