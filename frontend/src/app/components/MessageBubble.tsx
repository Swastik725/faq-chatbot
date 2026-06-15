import type { Message } from "../App";
import { GraduationCap } from "lucide-react";

export function MessageBubble({ message }: { message: Message }) {
  const isUser = message.role === "user";

  return (
    <div className={`flex items-end gap-2 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
      {!isUser && (
        <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary mb-0.5">
          <GraduationCap className="w-4 h-4 text-white" />
        </div>
      )}
      <div
        className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed break-words ${
          isUser
            ? "bg-primary text-primary-foreground rounded-br-sm"
            : "bg-muted text-foreground rounded-bl-sm border border-border"
        }`}
      >
        {message.text}
      </div>
    </div>
  );
}
