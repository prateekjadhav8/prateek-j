import {
  Award,
  Cloud,
  Database,
  Layout,
  Mail,
  Server,
  Star,
  Trophy,
  Users,
  Wrench,
} from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'
import { GithubIcon, LinkedinIcon, XIcon } from '@/components/brand-icons'

type IconType = ComponentType<SVGProps<SVGSVGElement>>

export const iconMap: Record<string, IconType> = {
  server: Server,
  database: Database,
  cloud: Cloud,
  wrench: Wrench,
  layout: Layout,
  trophy: Trophy,
  award: Award,
  star: Star,
  users: Users,
  linkedin: LinkedinIcon,
  github: GithubIcon,
  mail: Mail,
  twitter: XIcon,
}

export function getIcon(name: string): IconType {
  return iconMap[name] ?? Star
}
