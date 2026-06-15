import { GraduationCap } from "lucide-react";

export function ChatHeader() {
  return (
    <div className="flex items-center gap-3 px-5 py-4 bg-primary text-primary-foreground shadow-sm shrink-0">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/15 shrink-0">
        <GraduationCap className="w-5 h-5 text-white" />
      </div>
      <div>
        <h1 className="text-white leading-tight">University FAQ Assistant</h1>
        <p className="text-white/65 text-sm leading-tight mt-0.5">Ask me anything about your university</p>
      </div>
      <div className="ml-auto flex items-center gap-1.5">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
        <span className="text-white/70 text-xs">Online</span>
      </div>
    </div>
  );
}
