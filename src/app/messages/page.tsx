"use client";

import { useState, useRef } from "react";
import { Send, Mic, Paperclip, Phone, Video, MoreVertical, ChevronLeft, ShieldCheck } from "lucide-react";

const CONVOS = [
  { id: 1, name: "Jasmine Clarke", title: "Natural Hair Specialist", last: "See you tomorrow at 10 ✨", time: "2m", unread: 2, initial: "J", color: "#6BA07E", online: true },
  { id: 2, name: "Marcus Adeyemi", title: "Performance Coach", last: "Great session today!", time: "1h", unread: 0, initial: "M", color: "#C4883A", online: true },
  { id: 3, name: "Trovu Support", title: "Support Team", last: "Your booking has been confirmed", time: "2h", unread: 0, initial: "T", color: "#4A7A60", online: false },
];

const MSGS = [
  { id: 1, from: "them", text: "Hi! I saw your request for knotless braids — I'm available this Friday afternoon. Does 2pm work?", time: "10:15 AM" },
  { id: 2, from: "me", text: "That would be perfect! How long does it usually take?", time: "10:18 AM" },
  { id: 3, from: "them", text: "For medium-length knotless braids, around 3–4 hours. I'll bring everything I need.", time: "10:20 AM" },
  { id: 4, from: "me", text: "Amazing — my address is 14 Parkside, Manchester M14 7BQ. Is that within your area?", time: "10:22 AM" },
  { id: 5, from: "them", text: "Yes, that's perfect — only 1.2 miles from me! Shall I send you a booking link?", time: "10:23 AM" },
  { id: 6, from: "me", text: "Yes please!", time: "10:24 AM" },
  { id: 7, from: "them", text: "See you tomorrow at 10 ✨", time: "2:31 PM", isVoice: false },
];

export default function MessagesPage() {
  const [active, setActive] = useState(CONVOS[0]);
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState(MSGS);
  const [recording, setRecording] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const send = () => {
    if (!msg.trim()) return;
    setMessages((m) => [...m, { id: Date.now(), from: "me", text: msg, time: "Now" }]);
    setMsg("");
  };

  return (
    <div className="h-screen flex" style={{ background: "var(--bg)" }}>
      {/* Conversations list */}
      <div className="w-80 flex-shrink-0 flex flex-col" style={{ background: "var(--surface)", borderRight: "1px solid var(--border)" }}>
        <div className="p-5 border-b" style={{ borderColor: "var(--border)" }}>
          <h2 className="font-serif text-[22px] font-semibold" style={{ color: "var(--text)" }}>Messages</h2>
        </div>
        <div className="flex-1 overflow-y-auto">
          {CONVOS.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c)}
              className="w-full flex items-center gap-3 px-5 py-4 border-b text-left transition-all hover:bg-[var(--surface-2)]"
              style={{
                borderColor: "var(--border)",
                background: active.id === c.id ? "var(--green-light)" : "transparent",
              }}
            >
              <div className="relative flex-shrink-0">
                <div className="w-11 h-11 rounded-full flex items-center justify-center font-serif font-semibold text-white" style={{ background: c.color }}>
                  {c.initial}
                </div>
                {c.online && <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[var(--surface)]" style={{ background: "var(--green)" }} />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-[13px] font-semibold truncate" style={{ color: "var(--text)" }}>{c.name}</p>
                  <span className="text-[10px] flex-shrink-0 ml-2" style={{ color: "var(--muted)" }}>{c.time}</span>
                </div>
                <p className="text-[11px] truncate mt-0.5" style={{ color: "var(--muted)" }}>{c.last}</p>
              </div>
              {c.unread > 0 && (
                <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0" style={{ background: "var(--green)" }}>
                  {c.unread}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Chat panel */}
      <div className="flex-1 flex flex-col">
        {/* Chat header */}
        <div className="flex items-center justify-between px-6 py-4 border-b" style={{ background: "var(--white)", borderColor: "var(--border)" }}>
          <div className="flex items-center gap-3">
            <button className="lg:hidden mr-1" style={{ color: "var(--muted)" }}><ChevronLeft size={20} /></button>
            <div className="relative">
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-serif font-semibold text-white" style={{ background: active.color }}>
                {active.initial}
              </div>
              {active.online && <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-[var(--white)]" style={{ background: "var(--green)" }} />}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <p className="text-[14px] font-semibold" style={{ color: "var(--text)" }}>{active.name}</p>
                <ShieldCheck size={13} style={{ color: "var(--green)" }} />
              </div>
              <p className="text-[11px]" style={{ color: active.online ? "var(--green)" : "var(--muted)" }}>
                {active.online ? "Online now" : active.title}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:opacity-80" style={{ background: "var(--green-light)", color: "var(--green)" }}>
              <Phone size={16} />
            </button>
            <button className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:opacity-80" style={{ background: "var(--green-light)", color: "var(--green)" }}>
              <Video size={16} />
            </button>
            <button className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ color: "var(--muted)" }}>
              <MoreVertical size={16} />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
          {messages.map((m) => (
            <div key={m.id} className={`flex ${m.from === "me" ? "justify-end" : "justify-start"}`}>
              <div
                className="max-w-[70%] px-4 py-3 rounded-2xl text-[13px] leading-relaxed"
                style={{
                  background: m.from === "me" ? "var(--green)" : "var(--white)",
                  color: m.from === "me" ? "white" : "var(--text)",
                  borderBottomRightRadius: m.from === "me" ? 4 : undefined,
                  borderBottomLeftRadius: m.from !== "me" ? 4 : undefined,
                  border: m.from !== "me" ? "1px solid var(--border)" : "none",
                }}
              >
                {m.isVoice ? (
                  <div className="flex items-center gap-2">
                    <button className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                      <Mic size={12} />
                    </button>
                    <div className="flex gap-0.5 items-end h-5">
                      {[4, 8, 5, 10, 6, 12, 7, 9, 5, 8, 6].map((h, i) => (
                        <div key={i} className="w-1 rounded-full bg-current opacity-60" style={{ height: h }} />
                      ))}
                    </div>
                    <span className="text-[10px] opacity-60">0:12</span>
                  </div>
                ) : m.text}
                <p className={`text-[10px] mt-1 ${m.from === "me" ? "text-white/50" : "text-[var(--muted)]"}`}>{m.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="px-6 py-4 border-t" style={{ background: "var(--white)", borderColor: "var(--border)" }}>
          <div className="flex items-center gap-3">
            <button style={{ color: "var(--muted)" }}><Paperclip size={18} /></button>
            <input
              ref={inputRef}
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Type a message..."
              className="flex-1 px-4 py-2.5 rounded-xl text-[13px] outline-none"
              style={{ background: "var(--surface)", color: "var(--text)", border: "1.5px solid var(--border)" }}
            />
            {msg.trim() ? (
              <button
                onClick={send}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-all hover:opacity-90"
                style={{ background: "var(--green)" }}
              >
                <Send size={16} />
              </button>
            ) : (
              <button
                onMouseDown={() => setRecording(true)}
                onMouseUp={() => setRecording(false)}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all"
                style={{ background: recording ? "var(--error)" : "var(--green-light)", color: recording ? "white" : "var(--green)" }}
              >
                <Mic size={16} />
              </button>
            )}
          </div>
          {recording && (
            <div className="flex items-center gap-2 mt-2 px-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[11px]" style={{ color: "var(--muted)" }}>Recording... release to send</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
