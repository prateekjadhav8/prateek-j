'use client'

import { motion } from 'framer-motion'
import { BadgeCheck } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Card } from '@/components/ui/card'
import { scaleIn, staggerContainer } from '@/lib/motion'
import certifications from '@/data/certifications.json'
import type { Certification } from '@/lib/types'

const data = certifications as Certification[]

export function Certifications() {
  return (
    <section className="scroll-mt-20 border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials & training"
          description="Industry certifications that back up hands-on experience."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {data.map((cert) => (
            <motion.div key={cert.id} variants={scaleIn}>
              <Card className="flex h-full flex-col gap-4 bg-card/50 p-6 transition-colors hover:border-brand/40">
                <div className="flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-brand/12 text-brand">
                    <BadgeCheck className="size-5" />
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {cert.year}
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold leading-snug">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {cert.issuer}
                  </p>
                </div>
                <p className="mt-auto font-mono text-[0.7rem] text-muted-foreground/70">
                  ID: {cert.credentialId}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
