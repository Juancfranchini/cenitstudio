import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'

type ButtonProps = {
  href: string
  children: ReactNode
  /** `solid` = azul acento · `outline` = borde sobre navy */
  variant?: 'solid' | 'outline'
  size?: 'md' | 'sm'
  withArrow?: boolean
  className?: string
} & AnchorHTMLAttributes<HTMLAnchorElement>

export default function Button({
  href,
  children,
  variant = 'solid',
  size = 'md',
  withArrow = true,
  className = '',
  ...rest
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition-colors duration-200'
  const sizes = {
    md: 'px-[30px] py-[12px] text-[14px] lg:px-[36px] lg:py-[13px] lg:text-[15px]',
    sm: 'px-[20px] py-[9px] text-[13px]',
  }
  const variants = {
    solid: 'bg-accent-bright text-white hover:bg-accent',
    outline:
      'border border-dark-border text-dark-text hover:border-accent-bright hover:text-white',
  }

  return (
    <a href={href} className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...rest}>
      {children}
      {withArrow ? <ArrowRight className="h-4 w-4" aria-hidden="true" strokeWidth={2} /> : null}
    </a>
  )
}
