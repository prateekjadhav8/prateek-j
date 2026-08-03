'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Star } from 'lucide-react'
import Image from 'next/image'
import { GithubIcon } from '@/components/brand-icons'
import { SectionHeading } from '@/components/section-heading'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { scaleIn, staggerContainer } from '@/lib/motion'
import projects from '@/data/projects.json'
import type { Project } from '@/lib/types'

const data = projects as Project[]

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Systems I've built"
          description="A selection of backend-heavy products spanning fintech, commerce, and internal platforms."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {data.map((project) => (
            <motion.div key={project.id} variants={scaleIn}>
              <Card className="group h-full overflow-hidden bg-card/50 p-0 transition-all duration-300 hover:border-brand/40 hover:shadow-[0_0_0_1px_color-mix(in_oklch,var(--brand)_25%,transparent)]">
                <div className="relative aspect-16/10 overflow-hidden">
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={`${project.title} interface`}
                    fill
                    sizes="(max-width: 768px) 100vw, 40rem"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  {project.featured && (
                    <Badge
                      variant="brand"
                      className="absolute left-4 top-4 backdrop-blur"
                    >
                      <Star className="size-3" />
                      Featured
                    </Badge>
                  )}
                </div>

                <div className="flex flex-col gap-4 p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold tracking-tight">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1.5">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} source on GitHub`}
                        className="flex size-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-brand/50 hover:text-brand"
                      >
                        <GithubIcon className="size-4" />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live demo`}
                        className="flex size-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-brand/50 hover:text-brand"
                      >
                        <ArrowUpRight className="size-4" />
                      </a>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-4 border-y border-border/60 py-3">
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <p className="font-mono text-sm font-semibold text-brand">
                          {metric.value}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="font-mono">
                        {tech}
                      </Badge>
                    ))}
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
