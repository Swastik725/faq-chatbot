import { useState, type KeyboardEvent } from "react";
import { SendHorizontal } from "lucide-react";

type Props = {
  onSend: (text: string) => void;
  disabled: boolean;
};

export function ChatInput({ onSend, disabled }: Props) {
  const [value, setValue] = useState("");

  const handleSend = () => {
    if (!value.trim() || disabled) return;
    onSend(value);
    setValue("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="px-4 py-3 border-t border-border bg-card shrink-0">
      <div className="flex items-center gap-2 bg-muted rounded-xl px-4 py-2.5 focus-within:ring-2 focus-within:ring-primary/30 transition-shadow">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          placeholder="Ask a question…"
          className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground text-sm outline-none disabled:opacity-50"
        />
        <button
          onClick={handleSend}
          disabled={disabled || !value.trim()}
          aria-label="Send message"
          className="shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white disabled:opacity-40 hover:bg-primary/90 active:scale-95 transition-all"
        >
          <SendHorizontal className="w-4 h-4" />
        </button>
      </div>
      <p className="text-center text-muted-foreground mt-2" style={{ fontSize: "11px" }}>
        Press Enter to send · Responses are AI-generated
      </p>
    </div>
  );
}
