import React, { useState } from 'react';
import { Mail, CheckCircle, Send, MessageSquare, GraduationCap, Building, Sparkles } from 'lucide-react';
import { PERENNIAL_BRAND } from '../data/perennialFilmsData';

export const ContactView: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Speaking Engagement');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#121212] text-[#E4E4E7] py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="border-b border-[#27272a] pb-8 space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C29B38]">
            Get In Touch
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-normal text-[#F4F4F5] tracking-tight">
            Contact Joanne Hershfield
          </h1>
          <p className="text-sm sm:text-base text-[#D4D4D8] font-light leading-relaxed">
            Joanne is available for virtual and in-person speaking engagements, university classroom discussions, and institutional licensing inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Contact Details & Channels */}
          <div className="md:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#18181b] border border-[#27272a] space-y-4">
              <h3 className="font-serif text-xl text-[#F4F4F5]">Direct Communication</h3>
              
              <div className="space-y-3 text-xs">
                <div>
                  <span className="font-mono text-[#71717A] uppercase text-[10px] block">
                    Email Address
                  </span>
                  <a
                    href={`mailto:${PERENNIAL_BRAND.email}`}
                    className="text-sm text-[#C29B38] hover:underline font-mono"
                  >
                    {PERENNIAL_BRAND.email}
                  </a>
                </div>

                <div>
                  <span className="font-mono text-[#71717A] uppercase text-[10px] block">
                    Inquiries Welcomed
                  </span>
                  <ul className="text-[#D4D4D8] space-y-1.5 pt-1">
                    <li>• University & college speaking engagements</li>
                    <li>• Classroom Zoom / in-person discussions</li>
                    <li>• Purchase Orders (P.O.) for libraries</li>
                    <li>• Community and film festival screenings</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#141416] border border-[#27272a] text-xs text-[#A1A1AA] space-y-1 font-light">
              <p className="font-serif text-[#F4F4F5] italic text-sm">
                "documentaries can help fill that gap by giving pupils a visual context"
              </p>
              <p className="text-[11px] font-mono text-[#71717A]">
                Director Joanne Hershfield · Stanford Alumna · UNC Prof. Emerita
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-7">
            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#18181b] border border-emerald-500/30 text-center space-y-4 animate-in fade-in">
                <CheckCircle className="w-12 h-12 text-[#C29B38] mx-auto" />
                <h3 className="font-serif text-2xl text-[#F4F4F5]">
                  Thank you for your response. ✨
                </h3>
                <p className="text-xs text-[#D4D4D8] max-w-sm mx-auto leading-relaxed">
                  Your message has been dispatched to {PERENNIAL_BRAND.email}. Director Joanne Hershfield or our distribution team will reply promptly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setMessage('');
                  }}
                  className="mt-2 text-xs font-mono text-[#C29B38] hover:underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-2xl bg-[#18181b] border border-[#2e2e33] space-y-5"
              >
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1AA] mb-1.5">
                    Name (Required)
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#121212] border border-[#2e2e33] text-sm text-[#F4F4F5] focus:border-[#C29B38] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1AA] mb-1.5">
                    Email Address (Required)
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@institution.edu"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#121212] border border-[#2e2e33] text-sm text-[#F4F4F5] focus:border-[#C29B38] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1AA] mb-1.5">
                    Nature of Inquiry
                  </label>
                  <select
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#121212] border border-[#2e2e33] text-sm text-[#F4F4F5] focus:border-[#C29B38] focus:outline-none"
                  >
                    <option value="Speaking Engagement">Speaking Engagement (In-person or Virtual)</option>
                    <option value="Institutional License / PO">Institutional Streaming License / Purchase Order</option>
                    <option value="Classroom Screening">Classroom Screening & Study Discussion</option>
                    <option value="General Film Inquiry">General Documentary Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1AA] mb-1.5">
                    Message (Required)
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Please specify your course, institution, proposed date, or license inquiry..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#121212] border border-[#2e2e33] text-sm text-[#F4F4F5] focus:border-[#C29B38] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-lg bg-[#C29B38] hover:bg-[#d6ac42] text-black font-semibold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message to Joanne Hershfield</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
