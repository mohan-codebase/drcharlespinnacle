"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUp, Check, MapPin, MessageCircle, Monitor, X } from "lucide-react";
import Lenis from "lenis";

const BookingContext = createContext<(interest?: string) => void>(() => {});

export function BookButton({ children = "Begin your journey", className = "button", interest = "12-Week Baseline" }: { children?: React.ReactNode; className?: string; interest?: string }) {
  const open = useContext(BookingContext);
  return <button className={className} onClick={() => open(interest)}>{children}<ArrowRight size={17} strokeWidth={1.5} /></button>;
}

export function Experience({ children }: { children: React.ReactNode }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const lenis = useRef<Lenis | null>(null);
  const [interest, setInterest] = useState("12-Week Baseline");
  const [location, setLocation] = useState("Santa Monica");
  const [showTop, setShowTop] = useState(false);
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL;
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduced) lenis.current = new Lenis({ lerp: 0.04, smoothWheel: true, anchors: { offset: -110 }, autoRaf: true });
    const update = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", update, { passive: true });
    const cursorEnabled = !reduced && window.matchMedia("(pointer: fine)").matches;
    const move = (event: PointerEvent) => {
      if (!cursorEnabled) return;
      document.documentElement.classList.add("custom-cursor");
      for (const node of [dot.current, ring.current]) {
        if (node) { node.style.left = `${event.clientX}px`; node.style.top = `${event.clientY}px`; }
      }
      ring.current?.classList.toggle("cursor-hover", Boolean((event.target as HTMLElement).closest("a, button, summary, input, select")));
    };
    const leave = () => document.documentElement.classList.remove("custom-cursor");
    window.addEventListener("pointermove", move);
    document.addEventListener("pointerleave", leave);
    return () => { lenis.current?.destroy(); window.removeEventListener("scroll", update); window.removeEventListener("pointermove", move); document.removeEventListener("pointerleave", leave); leave(); };
  }, []);

  const open = (value = "12-Week Baseline") => {
    setInterest(value);
    lenis.current?.stop();
    dialog.current?.showModal();
  };
  const close = () => { dialog.current?.close(); lenis.current?.start(); };

  return <BookingContext.Provider value={open}>
    {children}
    <div ref={dot} className="cursor-dot" aria-hidden="true" /><div ref={ring} className="cursor-ring" aria-hidden="true" />
    <div className="floating-actions">
      {showTop && <button aria-label="Back to top" className="fab fab-top" onClick={() => lenis.current ? lenis.current.scrollTo(0) : window.scrollTo({ top: 0, behavior: "smooth" })}><ArrowUp size={18} /></button>}
      {whatsapp ? <a className="fab" aria-label="Chat on WhatsApp" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer"><MessageCircle size={20} /></a> : <button className="fab" aria-label="Explore a consultation" onClick={() => open()}><MessageCircle size={20} /></button>}
    </div>
    <dialog ref={dialog} className="booking-dialog" aria-labelledby="booking-title" onClose={() => lenis.current?.start()} onClick={event => { if (event.target === event.currentTarget) close(); }}>
      <div className="dialog-content" data-lenis-prevent>
        <button className="dialog-close icon-button" aria-label="Close consultation" onClick={close}><X size={22} /></button>
        <p className="eyebrow"><span className="status-dot" /> YOUR NEXT CHAPTER</p>
        <h2 id="booking-title">It starts with<br /><em>a conversation.</em></h2>
        <p className="body-copy">A little clarity goes a long way. Explore your goals, our approach, and whether Pinnacle is the right fit for you.</p>
        <label className="field-label" htmlFor="interest">I’m interested in</label>
        <select id="interest" value={interest} onChange={event => setInterest(event.target.value)}>{["12-Week Baseline", "Baseline Membership", "Black Membership", "Pinnacle Membership"].map(value => <option key={value}>{value}</option>)}</select>
        <fieldset><legend className="field-label">Your preferred setting</legend><div className="location-options">{["Santa Monica", "Newport Coast", "Virtual"].map(value => <button key={value} aria-pressed={location === value} className={location === value ? "selected" : ""} onClick={() => setLocation(value)}>{value === "Virtual" ? <Monitor size={16} /> : <MapPin size={16} />}{value}{location === value && <Check size={14} />}</button>)}</div></fieldset>
        {bookingUrl ? <a className="button" href={bookingUrl} target="_blank" rel="noopener noreferrer">Choose a consultation time<ArrowRight size={17} /></a> : <div className="booking-notice"><p>Personal care. A thoughtful first step.</p><span>Online scheduling will be available soon. In the meantime, get to know the program and prepare your questions for your first consultation.</span><a href="#faq" className="text-link" onClick={close}>Explore common questions <ArrowRight size={15} /></a></div>}
        <p className="dialog-footnote">Explore at your pace. No commitment required.</p>
      </div>
    </dialog>
  </BookingContext.Provider>;
}
