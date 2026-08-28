"use client";

import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone } from 'lucide-react';

const CONTACT_EMAIL = 'ggfg.org@gmail.com';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!message.trim()) {
      setError('Please share a short message.');
      return;
    }

    const subject = encodeURIComponent(`Website inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-navy/5 text-navy">
      <section className="border-b border-navy/10 bg-[linear-gradient(135deg,_rgba(2,15,26,0.08),_rgba(3,20,33,0.98))] text-white">
        <div className="mx-auto max-w-6xl px-6 py-18 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Contact</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-gold sm:text-5xl">Let’s build the next generation of founders together.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">For partnerships, support, and strategic engagement, we welcome conversations with institutions and leaders who share our long-term vision.</p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-navy/10 bg-navy/5 p-8">
            <h2 className="text-3xl font-semibold text-gold">Connect with GGFG</h2>
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold"><Mail size={20} /></div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Email</p>
                  <p className="mt-2 text-base text-navy/80">ggfg.org@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold"><Phone size={20} /></div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Phone</p>
                  <p className="mt-2 text-base text-navy/80">+1 629 239 0929</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold"><MapPin size={20} /></div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Location</p>
                  <p className="mt-2 text-base text-navy/80">Nashville, TN, USA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-navy/10 bg-navy/5 p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Send a note</p>
            <p className="mt-3 text-sm leading-7 text-navy/80">GGFG is a Registered 501(c)(3) Organization.</p>
            {submitted ? (
              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-green/20 bg-green/5 p-5 text-navy/85">
                <CheckCircle2 size={22} className="mt-0.5 shrink-0 text-green" />
                <p className="text-sm leading-7">
                  Thanks, {name}. Your email app should have opened with your message ready to send. If it didn&apos;t,
                  email us directly at <a className="font-semibold text-gold underline underline-offset-4" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
                </p>
              </div>
            ) : (
              <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.2em] text-navy/60">Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="w-full rounded-2xl border border-navy/10 bg-navy/10 px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.2em] text-navy/60">Email</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="w-full rounded-2xl border border-navy/10 bg-navy/10 px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
                    placeholder="you@organization.com"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.2em] text-navy/60">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    className="min-h-36 w-full rounded-2xl border border-navy/10 bg-navy/10 px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
                    placeholder="Share your interest or partnership idea"
                  />
                </div>
                {error && <p className="text-sm font-medium text-red-600" role="alert">{error}</p>}
                <button type="submit" className="btn-navy">
                  Send message <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
