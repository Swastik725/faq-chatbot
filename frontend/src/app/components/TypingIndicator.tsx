import { GraduationCap } from "lucide-react";

export function TypingIndicator() {
  return (
    <div className="flex items-end gap-2">
      <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary mb-0.5">
        <GraduationCap className="w-4 h-4 text-white" />
      </div>
      <div className="px-4 py-3 bg-muted border border-border rounded-2xl rounded-bl-sm flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce [animation-delay:0ms]" />
        <span className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce [animation-delay:150ms]" />
        <span className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce [animation-delay:300ms]" />
      </div>
    </div>
  );
}
