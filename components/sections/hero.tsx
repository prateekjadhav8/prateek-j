'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Download } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { getIcon } from '@/lib/icons'
import { fadeUp, staggerContainer } from '@/lib/motion'
import personal from '@/data/personal.json'
import socialLinks from '@/data/socialLinks.json'
import type { Personal, SocialLink } from '@/lib/types'

const data = personal as Personal
const links = socialLinks as SocialLink[]

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center overflow-hidden pt-24 pb-16"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,color-mix(in_oklch,var(--brand)_18%,transparent),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_oklch,var(--foreground)_5%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklch,var(--foreground)_5%,transparent)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-6"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 font-mono text-xs text-muted-foreground"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-brand" />
            </span>
            {data.availability}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            {data.name}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-mono text-sm text-brand"
          >
            {'> '}
            {data.role}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground"
          >
            {data.tagline}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="max-w-xl text-pretty leading-relaxed text-muted-foreground/80"
          >
            {data.intro}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
            {/* <Button
              size="lg"
              className="h-11 bg-brand px-5 text-brand-foreground [a]:hover:bg-brand/90"
              render={<a href={data.resumeUrl} download />}
            >
              <Download className="size-4" />
              Download Resume
            </Button> */}
            <Button
              size="lg"
              variant="outline"
              className="h-11 px-5"
              render={<a href="#contact" />}
            >
              Contact Me
              <ArrowUpRight className="size-4" />
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center gap-3 pt-2">
            {links.map((link) => {
              const Icon = getIcon(link.icon)
              return (
                <a
                  key={link.id}
                  href={link.href}
                  target={link.icon === 'mail' ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex size-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-brand/50 hover:text-brand"
                >
                  <Icon className="size-4" />
                </a>
              )
            })}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-brand/15 blur-2xl" />
          <div className="glass overflow-hidden rounded-3xl border border-border p-2">
            <div className="relative aspect-4/5 overflow-hidden rounded-2xl">
              <Image
                src={data.avatar || '/placeholder.svg'}
                alt={`Portrait of ${data.name}`}
                fill
                priority
                sizes="(max-width: 1024px) 20rem, 26rem"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-4">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-foreground">{data.location}</span>
                  <span className="rounded-full bg-brand/15 px-2 py-0.5 text-brand">
                    4+ yrs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
