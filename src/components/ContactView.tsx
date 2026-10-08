import React, { useState } from 'react';
import { STUDIO_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, RotateCcw, CheckCircle2, Copy, Check, ExternalLink, Camera } from 'lucide-react';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    genre: 'Automotive',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [copiedEmailDirect, setCopiedEmailDirect] = useState(false);
  const [draftedPayload, setDraftedPayload] = useState<{
    subject: string;
    body: string;
    mailtoUrl: string;
    gmailUrl: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (submitted) setSubmitted(false);
    if (errorMsg) setErrorMsg('');
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      genre: 'Automotive',
      message: '',
    });
    setSubmitted(false);
    setErrorMsg('');
    setDraftedPayload(null);
  };

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !validateEmail(formData.email)) {
      setErrorMsg('Please enter a valid email address (e.g. name@domain.com).');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMsg('Please enter your project message or inquiry details.');
      return;
    }

    const emailSubject = `[35mm Production] ${formData.genre} Inquiry: ${formData.subject || 'New Shoot'} - ${formData.name || 'Client'}`;
    const emailBody = `Hello Skifter,\n\nName: ${formData.name || 'N/A'}\nClient Email: ${formData.email}\nProject Genre: ${formData.genre}\nSubject: ${formData.subject || 'General Inquiry'}\n\nMessage:\n${formData.message}\n\n---\nSent via 35mm Photography Portfolio (${window.location.origin})`;

    const mailtoUrl = `mailto:${STUDIO_INFO.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${STUDIO_INFO.email}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    setDraftedPayload({
      subject: emailSubject,
      body: emailBody,
      mailtoUrl,
      gmailUrl,
    });

    // Save inquiry to localStorage for user history
    try {
      const existing = JSON.parse(localStorage.getItem('35mm_inquiries') || '[]');
      existing.unshift({
        ...formData,
        date: new Date().toISOString(),
      });
      localStorage.setItem('35mm_inquiries', JSON.stringify(existing.slice(0, 10)));
    } catch {
      // LocalStorage fallback
    }

    setSubmitted(true);
    setErrorMsg('');

    // Trigger user mail client automatically
    const link = document.createElement('a');
    link.href = mailtoUrl;
    link.click();
  };

  const copyDraftToClipboard = () => {
    if (!draftedPayload) return;
    const fullText = `To: ${STUDIO_INFO.email}\nSubject: ${draftedPayload.subject}\n\n${draftedPayload.body}`;
    navigator.clipboard.writeText(fullText).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    });
  };

  const copyDirectEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(STUDIO_INFO.email).then(() => {
      setCopiedEmailDirect(true);
      setTimeout(() => setCopiedEmailDirect(false), 2000);
    });
  };

  return (
    <div className="py-12 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="text-center mb-14 sm:mb-20">
        <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-poppins">
          Commission & Consultation
        </span>
        <h1 className="font-aktura text-6xl sm:text-8xl md:text-9xl text-white mt-2">
          Contact us
        </h1>
        <p className="mt-4 text-xs sm:text-sm text-neutral-400 font-poppins max-w-lg mx-auto">
          Inquire about commercial automotive shoots, landscape print editions, architectural documentation, or private editorial portraiture.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* Contact Form */}
        <div className="md:col-span-7 bg-neutral-950/80 border border-neutral-900 rounded-2xl p-6 sm:p-8 shadow-2xl">
          {submitted && draftedPayload ? (
            <div className="py-6 text-center animate-fade-in space-y-6">
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="font-aktura text-3xl text-white">Inquiry Prepared</h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-poppins max-w-md mx-auto mt-2">
                  Your message has been addressed directly to <span className="font-mono text-white underline">{STUDIO_INFO.email}</span>. Your mail client was automatically launched.
                </p>
              </div>

              {/* Direct Dispatch Options */}
              <div className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-4 text-left space-y-3 font-poppins">
                <p className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium">
                  Dispatch & Send Options:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <a
                    href={draftedPayload.gmailUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-3.5 py-2.5 text-xs text-white bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-lg transition-colors font-medium text-center"
                  >
                    <span>Open in Gmail</span>
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
                  </a>

                  <a
                    href={draftedPayload.mailtoUrl}
                    className="flex items-center justify-center gap-2 px-3.5 py-2.5 text-xs text-white bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-lg transition-colors font-medium text-center"
                  >
                    <Mail className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Default Mail App</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={copyDraftToClipboard}
                  className="w-full flex items-center justify-center gap-2 px-3.5 py-2 text-xs text-neutral-300 hover:text-white bg-neutral-950 hover:bg-neutral-900 border border-neutral-800 rounded-lg transition-colors"
                >
                  {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-neutral-400" />}
                  <span>{isCopied ? 'Message Copied to Clipboard!' : 'Copy Pre-composed Message'}</span>
                </button>
              </div>

              {/* Message Summary Preview */}
              <div className="bg-neutral-900/30 border border-neutral-800/80 rounded-lg p-3 text-left text-xs font-mono text-neutral-400 max-h-36 overflow-y-auto">
                <p className="text-neutral-500 text-[10px] uppercase font-sans mb-1">Preview of drafted email:</p>
                <p className="text-neutral-300 font-medium whitespace-pre-wrap">{draftedPayload.body}</p>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="px-5 py-2 text-xs font-poppins uppercase tracking-wider text-neutral-400 hover:text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg border border-neutral-800 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 text-xs text-rose-300 bg-rose-950/50 border border-rose-900/60 rounded-md animate-fade-in">
                  {errorMsg}
                </div>
              )}

              <div>
                <label className="block text-xs font-poppins text-neutral-400 mb-1.5 uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. Alex Henderson"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-sm font-poppins bg-neutral-900/90 border border-neutral-800 rounded-lg text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-poppins text-neutral-400 uppercase tracking-wider">
                    Your Email Address *
                  </label>
                  {formData.email && !validateEmail(formData.email) && (
                    <span className="text-[11px] text-amber-400 font-poppins">Enter valid email</span>
                  )}
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="e.g. client@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3.5 py-2.5 text-sm font-poppins bg-neutral-900/90 border rounded-lg text-white placeholder-neutral-600 focus:outline-none transition-colors ${
                      formData.email && validateEmail(formData.email)
                        ? 'border-emerald-600/70 focus:border-emerald-500'
                        : 'border-neutral-800 focus:border-neutral-500'
                    }`}
                  />
                  {formData.email && validateEmail(formData.email) && (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-400 text-xs">
                      <Check className="w-4 h-4" />
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-poppins text-neutral-400 mb-1.5 uppercase tracking-wider">
                    Genre / Project
                  </label>
                  <select
                    name="genre"
                    value={formData.genre}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-sm font-poppins bg-neutral-900 border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-neutral-500 cursor-pointer"
                  >
                    <option value="Automotive">Automotive</option>
                    <option value="Land-scape">Land-scape</option>
                    <option value="Architectural">Architectural</option>
                    <option value="Street">Street / Documentary</option>
                    <option value="Fine Art Print">Fine Art Print Order</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-poppins text-neutral-400 mb-1.5 uppercase tracking-wider">
                    Subject / Title
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="e.g. Commercial Shoot"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-sm font-poppins bg-neutral-900/90 border border-neutral-800 rounded-lg text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-poppins text-neutral-400 mb-1.5 uppercase tracking-wider">
                  Inquiry Description *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Describe your project vision, timeline, location, or requested prints..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-sm font-poppins bg-neutral-900/90 border border-neutral-800 rounded-lg text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-poppins uppercase tracking-wider text-neutral-400 hover:text-white bg-transparent border border-neutral-800 hover:border-neutral-700 rounded-md transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Clear</span>
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 text-xs font-poppins uppercase tracking-wider text-black bg-white hover:bg-neutral-200 rounded-md font-medium transition-colors shadow-lg cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Studio Direct Info Column */}
        <div className="md:col-span-5 flex flex-col justify-between space-y-6">
          <div className="bg-neutral-950/80 border border-neutral-900 rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="font-aktura text-3xl text-white">
              Studio Details
            </h3>

            <div className="space-y-4">
              <div className="group relative flex items-start justify-between p-3 rounded-xl bg-neutral-900/40 border border-neutral-850 hover:border-neutral-700 transition-colors">
                <a
                  href={`mailto:${STUDIO_INFO.email}`}
                  className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-neutral-400 mt-0.5 group-hover:text-white" />
                  <div>
                    <p className="text-[11px] text-neutral-500 uppercase tracking-wider">Email</p>
                    <p className="break-all font-mono text-neutral-200 group-hover:text-white">{STUDIO_INFO.email}</p>
                  </div>
                </a>

                <button
                  onClick={copyDirectEmail}
                  className="p-1.5 text-neutral-500 hover:text-white rounded hover:bg-neutral-800 transition-colors"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmailDirect ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              <div className="flex items-start justify-between p-3 rounded-xl bg-neutral-900/40 border border-neutral-850 hover:border-neutral-700 transition-colors">
                <a
                  href={`tel:${STUDIO_INFO.phone}`}
                  className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300 hover:text-white group transition-colors"
                >
                  <Phone className="w-4 h-4 text-neutral-400 mt-0.5 group-hover:text-white" />
                  <div>
                    <p className="text-[11px] text-neutral-500 uppercase tracking-wider">Phone</p>
                    <p className="font-mono text-neutral-200 group-hover:text-white">{STUDIO_INFO.phone}</p>
                  </div>
                </a>
              </div>

              <div className="flex items-start gap-3 p-3 text-xs sm:text-sm text-neutral-300">
                <MapPin className="w-4 h-4 text-neutral-400 mt-0.5" />
                <div>
                  <p className="text-[11px] text-neutral-500 uppercase tracking-wider">Studio Base</p>
                  <p>{STUDIO_INFO.location}</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-900">
              <p className="text-xs text-neutral-400 font-poppins mb-3">Live Profiles:</p>
              <div className="flex flex-col gap-2">
                <a
                  href={STUDIO_INFO.flickrUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-neutral-900 text-xs font-poppins text-neutral-200 hover:text-white hover:bg-neutral-850 border border-neutral-800 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Camera className="w-3.5 h-3.5 text-neutral-400" />
                    Flickr Archive (flic.kr/ps/46iTo7)
                  </span>
                  <ExternalLink className="w-3 h-3 text-neutral-500" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

