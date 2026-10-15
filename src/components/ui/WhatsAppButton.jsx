import { MessageCircle } from 'lucide-react';
import { site } from '../../config/site.js';

/** Floating WhatsApp chat button — always visible, respects reduced motion. */
export default function WhatsAppButton() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label={`Chat with ${site.name} on WhatsApp (${site.phoneDisplay})`}
      className="anim-gold-ring fixed right-5 bottom-5 z-50 inline-flex min-h-[56px] min-w-[56px] items-center justify-center rounded-full bg-[#f5a623] text-[#0b1a2e] shadow-xl transition-transform hover:scale-105"
    >
      <MessageCircle size={24} aria-hidden="true" />
    </a>
  );
}
