'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/section-heading'
import { scaleIn, staggerContainer } from '@/lib/motion'
import skills from '@/data/skills.json'
import type { SkillCategory, TechItem } from '@/lib/types'

const techList: TechItem[] = (skills as SkillCategory[]).flatMap((category) =>
  category.skills.map((skill) => ({
    name: skill.name,
    category: category.category,
  })),
)

export function TechStack() {
  return (
    <section className="scroll-mt-20 border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Everything under one roof"
          description="Hover to explore the tools and technologies I work with day to day."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        >
          {techList.map((tech) => (
            <motion.div
              key={`${tech.category}-${tech.name}`}
              variants={scaleIn}
              className="group relative flex aspect-square flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border border-border bg-card/40 p-4 text-center transition-colors hover:border-brand/50"
            >
              <div className="absolute inset-0 -z-10 bg-brand/0 transition-colors duration-300 group-hover:bg-brand/8" />
              <span className="font-mono text-base font-semibold tracking-tight transition-colors group-hover:text-brand">
                {tech.name}
              </span>
              <span className="text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground">
                {tech.category}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
