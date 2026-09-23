"use client";
import { useState } from "react";
import { Menu, Mountain, X } from "lucide-react";
import { BookButton } from "./Experience";

export function Brand() { return <a className="brand" href="#" aria-label="Pinnacle Health Institute home"><Mountain size={35} strokeWidth={1.15} /><span>PINNACLE<small>HEALTH INSTITUTE</small></span></a>; }

const wixLinks = [
  { label: "Home", href: "/" },
  { label: "Health Calculator", href: "/calculator" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Golf", href: "/golf" },
  { label: "About Us", href: "/about" },
  { label: "Science", href: "/science" },
  { label: "Baseline", href: "/baseline" },
  { label: "Kitchen", href: "/kitchen" },
  { label: "Health", href: "/health" },
  { label: "Blog", href: "/blog" },
  { label: "Store", href: "/store" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar">
      <Brand />
      <nav className="desktop-nav" aria-label="Main navigation">
        {wixLinks.map(link => (
          <a key={link.label} href={link.href}>{link.label}</a>
        ))}
      </nav>
      <div className="nav-actions">
        <BookButton className="button button-small">Let’s talk</BookButton>
        <button className="menu-toggle icon-button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <nav id="mobile-nav" className={`mobile-nav ${open ? "is-open" : ""}`} aria-label="Mobile navigation" inert={!open ? true : undefined}>
        {wixLinks.map(link => (
          <a key={link.label} href={link.href} onClick={() => setOpen(false)}>{link.label}<span>↗</span></a>
        ))}
      </nav>
    </header>
  );
}
