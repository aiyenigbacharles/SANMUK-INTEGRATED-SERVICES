import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/2349078254973"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-[#25D366] text-white rounded-full w-14 h-14 shadow-[0_0_20px_4px_rgba(37,211,102,0.55)] hover:scale-110 hover:shadow-[0_0_28px_8px_rgba(37,211,102,0.7)] transition-all duration-300"
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      <MessageCircle className="h-7 w-7" fill="white" strokeWidth={0} />
    </a>
  );
}
