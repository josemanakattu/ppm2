import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppWidget() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappNumber = '97430066220'; // Qatar number format
  const defaultMessage = 'Hello Premier Plus, I am interested in ISO Certification services.';

  const handleOpenWhatsApp = () => {
    const encodedText = encodeURIComponent(defaultMessage);
    const url = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Simple Tooltip / Greeting Pill */}
      {showTooltip && (
        <div className="bg-[#182229] border border-[#25D366]/30 text-white rounded-full py-2 px-4 shadow-xl flex items-center gap-3 backdrop-blur-md animate-bounce duration-1000">
          <div className="flex items-center gap-2 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span>Chat with us on WhatsApp</span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Direct WhatsApp Floating Button */}
      <button
        onClick={handleOpenWhatsApp}
        className="group relative flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold py-3.5 px-5 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 border border-white/20"
        aria-label="Chat on WhatsApp"
      >
        {/* Glow backdrop */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 blur-md group-hover:opacity-80 transition-opacity -z-10" />

        {/* WhatsApp Icon */}
        <svg
          className="w-7 h-7 fill-black"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.157 4.228 4.223-1.111zm12.505-6.611c-.08-.133-.294-.213-.615-.373-.32-.16-1.895-.935-2.188-1.041-.293-.107-.507-.16-.72.16-.213.32-.828 1.041-1.015 1.254-.187.213-.373.24-.694.08-.32-.16-1.352-.498-2.576-1.59-.953-.85-1.596-1.9-1.783-2.22-.187-.32-.02-.493.14-.652.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.734-.987-2.374-.26-.624-.524-.539-.72-.549l-.614-.01c-.213 0-.56.08-.854.4-.294.32-1.12 1.094-1.12 2.668 0 1.574 1.147 3.094 1.307 3.307.16.213 2.257 3.447 5.469 4.834.764.33 1.36.528 1.826.675.767.243 1.465.209 2.017.13.616-.088 1.895-.774 2.162-1.52.267-.747.267-1.387.187-1.52z" />
        </svg>

        <span className="text-sm tracking-wide font-extrabold uppercase">WhatsApp</span>
      </button>
    </div>
  );
}
