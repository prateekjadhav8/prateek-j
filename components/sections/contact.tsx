'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { motion } from 'framer-motion'
import { MapPin, Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { iconMap } from '@/lib/icons'
import { fadeUp, staggerContainer } from '@/lib/motion'
import { submitContact, type ContactState } from '@/app/actions/contact'
import personal from '@/data/personal.json'
import socialLinks from '@/data/socialLinks.json'
import type { SocialLink } from '@/lib/types'

const socials = socialLinks as SocialLink[]
const initialState: ContactState = { status: 'idle', message: '' }

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" size="lg" disabled={pending} className="w-full gap-2">
      {pending ? (
        'Sending...'
      ) : (
        <>
          Send message
          <Send className="size-4" />
        </>
      )}
    </Button>
  )
}

export function Contact() {
  const [state, formAction] = useActionState(submitContact, initialState)

  const details = [
    { icon: iconMap.mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: Phone, label: 'Phone', value: personal.phone, href: `tel:${personal.phone.replace(/[^+\d]/g, '')}` },
    { icon: MapPin, label: 'Location', value: personal.location, href: undefined },
  ]

  return (
    <section id="contact" className="scroll-mt-20 border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something reliable"
          description="Have a role or project in mind? I'd love to hear about it."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col gap-4 lg:col-span-2"
          >
            <motion.p variants={fadeUp} className="text-pretty text-muted-foreground">
              {personal.availability}. The fastest way to reach me is email, but
              any of the channels below works.
            </motion.p>

            <div className="flex flex-col gap-3">
              {details.map((d) => {
                const Icon = d.icon
                const content = (
                  <Card className="flex items-center gap-4 bg-card/50 p-4 transition-colors hover:border-brand/40">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand/12 text-brand">
                      <Icon className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">
                        {d.label}
                      </p>
                      <p className="truncate text-sm font-medium">{d.value}</p>
                    </div>
                  </Card>
                )
                return (
                  <motion.div key={d.label} variants={fadeUp}>
                    {d.href ? (
                      <a href={d.href} className="block">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </motion.div>
                )
              })}
            </div>

            <motion.div variants={fadeUp} className="mt-2 flex gap-3">
              {socials.map((s) => {
                const Icon = iconMap[s.icon] ?? iconMap.mail
                return (
                  <a
                    key={s.id}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={s.label}
                    className="flex size-11 items-center justify-center rounded-lg border border-border bg-card/50 text-muted-foreground transition-colors hover:border-brand/40 hover:text-brand"
                  >
                    <Icon className="size-5" />
                  </a>
                )
              })}
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-3"
          >
            <Card className="bg-card/50 p-6 sm:p-8">
              <form action={formAction} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" name="name" placeholder="Jane Doe" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jane@company.com"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about the role or project..."
                    rows={5}
                    required
                  />
                </div>

                {state.status !== 'idle' && (
                  <div
                    role="status"
                    className={`flex items-center gap-2 rounded-lg border p-3 text-sm ${
                      state.status === 'success'
                        ? 'border-brand/40 bg-brand/10 text-brand'
                        : 'border-destructive/40 bg-destructive/10 text-destructive'
                    }`}
                  >
                    {state.status === 'success' ? (
                      <CheckCircle2 className="size-4 shrink-0" />
                    ) : (
                      <AlertCircle className="size-4 shrink-0" />
                    )}
                    <span>{state.message}</span>
                  </div>
                )}

                <SubmitButton />
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
