import personal from '@/data/personal.json'
import socialLinks from '@/data/socialLinks.json'
import { navSections } from '@/lib/sections'
import { getIcon } from '@/lib/icons'
import type { SocialLink } from '@/lib/types'

const links = socialLinks as SocialLink[]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <a
              href="#hero"
              className="flex items-center gap-2 font-mono text-sm font-semibold"
            >
              <span className="flex size-8 items-center justify-center rounded-lg bg-brand text-brand-foreground">
                {personal.initials}
              </span>
              {personal.name}
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {personal.role} building scalable backend systems. {personal.availability}.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Navigate
            </h3>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
              {navSections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Connect
            </h3>
            <div className="flex gap-3">
              {links.map((link) => {
                const Icon = getIcon(link.icon)
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-brand/50 hover:text-brand"
                  >
                    <Icon className="size-4" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {year} {personal.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs">Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
