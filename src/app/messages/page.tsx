"use client";

import { useState } from "react";

const conversations = [
  { id: 1, name: "Elena Vance", role: "Hair Colorist", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80", lastMessage: "See you on Monday!", time: "2 min ago", unread: 2 },
  { id: 2, name: "Marcus Thorne", role: "Performance Coach", avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&q=80", lastMessage: "Your session is confirmed for Wednesday at 10am.", time: "1h ago", unread: 0 },
  { id: 3, name: "David Chen", role: "Private Tutor", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80", lastMessage: "Thanks for the great session!", time: "Yesterday", unread: 0 },
];

const messages = [
  { id: 1, sender: "Elena Vance", text: "Hi! Looking forward to seeing you on Monday for your balayage appointment.", time: "10:24 AM", mine: false },
  { id: 2, sender: "Me", text: "Can't wait! Should I come with dry or washed hair?", time: "10:32 AM", mine: true },
  { id: 3, sender: "Elena Vance", text: "Dry hair is best so I can see your natural texture. See you on Monday!", time: "10:35 AM", mine: false },
];

export default function MessagesPage() {
  const [activeConv, setActiveConv] = useState(conversations[0]);
  const [draft, setDraft] = useState("");

  return (
    <div className="min-h-screen bg-surface-container-low">
      <div className="px-[80px] max-w-[1440px] mx-auto py-8">
        <h1 className="font-playfair text-[32px] font-semibold text-on-background mb-8">Messages</h1>

        <div className="flex gap-6 h-[680px]">
          {/* Conversation List */}
          <div className="w-80 bg-white rounded-xl editorial-shadow border border-outline-variant/10 overflow-hidden flex flex-col">
            <div className="p-4 border-b border-outline-variant/20">
              <div className="flex items-center gap-2 bg-surface-container-low rounded-full px-4 py-2">
                <span className="material-symbols-outlined text-on-surface-variant text-sm">search</span>
                <input type="text" placeholder="Search messages" className="flex-1 bg-transparent font-manrope text-[14px] outline-none" />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              {conversations.map((conv) => (
                <button
                  key={conv.id}
                  onClick={() => setActiveConv(conv)}
                  className={`w-full flex items-center gap-4 p-4 border-b border-outline-variant/10 hover:bg-surface-container-low transition-colors text-left ${activeConv.id === conv.id ? "bg-primary/5" : ""}`}
                >
                  <div className="relative">
                    <img src={conv.avatar} alt={conv.name} className="w-12 h-12 rounded-full object-cover" />
                    {conv.unread > 0 && (
                      <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center font-manrope text-[10px] font-bold text-on-primary">
                        {conv.unread}
                      </span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <p className="font-manrope text-[14px] font-semibold text-on-surface truncate">{conv.name}</p>
                      <p className="font-manrope text-[11px] text-on-surface-variant shrink-0 ml-2">{conv.time}</p>
                    </div>
                    <p className="font-manrope text-[12px] text-on-surface-variant truncate">{conv.lastMessage}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Chat Window */}
          <div className="flex-1 bg-white rounded-xl editorial-shadow border border-outline-variant/10 flex flex-col">
            <div className="flex items-center gap-4 p-6 border-b border-outline-variant/20">
              <img src={activeConv.avatar} alt={activeConv.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <p className="font-playfair text-[20px] font-semibold">{activeConv.name}</p>
                <p className="font-manrope text-[14px] text-on-surface-variant">{activeConv.role}</p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.mine ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-md px-5 py-3 rounded-2xl ${msg.mine ? "bg-primary text-on-primary" : "bg-surface-container-low text-on-surface"}`}>
                    <p className="font-manrope text-[15px] leading-relaxed">{msg.text}</p>
                    <p className={`font-manrope text-[11px] mt-1 ${msg.mine ? "text-on-primary/70" : "text-on-surface-variant"}`}>{msg.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-outline-variant/20">
              <div className="flex items-center gap-3">
                <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">attach_file</button>
                <input
                  type="text"
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder="Write a message..."
                  className="flex-1 bg-surface-container-low rounded-full px-5 py-3 font-manrope text-[15px] outline-none"
                />
                <button className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-on-primary-container transition-all">
                  <span className="material-symbols-outlined text-on-primary text-sm">send</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
