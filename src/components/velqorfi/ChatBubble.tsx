import { MessageSquare } from "lucide-react";

export function ChatBubble() {
  return (
    <button
      type="button"
      aria-label="Support chat"
      className="fixed bottom-6 right-[max(1.25rem,calc((100vw-430px)/2+1.25rem))] z-50 flex h-14 w-14 items-center justify-center rounded-full bg-ramp-primary shadow-card transition-transform hover:scale-105"
    >
      <MessageSquare className="h-6 w-6 text-brand-foreground" fill="currentColor" strokeWidth={1.5} />
    </button>
  );
}