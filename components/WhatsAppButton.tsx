import { ArrowRight } from 'lucide-react'
import { brand } from '@/lib/content'
import WhatsAppIcon from './icons/WhatsAppIcon'

export default function WhatsAppButton({ className = '' }: { className?: string }) {
  return (
    <a
      href={brand.whatsapp.href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`Escribinos por WhatsApp al ${brand.whatsapp.label}`}
      className={`inline-flex items-center justify-center gap-2.5 rounded-full bg-accent-bright px-[24px] py-[11px] text-[14px] font-semibold text-white transition-colors duration-200 hover:bg-accent ${className}`}
    >
      <WhatsAppIcon className="h-[17px] w-[17px]" />
      WhatsApp
      <ArrowRight className="h-4 w-4" aria-hidden="true" strokeWidth={2} />
    </a>
  )
}
