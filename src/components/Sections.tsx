"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Activity, Apple, ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Bone, Brain, Check, CircleArrowRight, Dna, Droplet, Droplets, Eye, Flame, Heart, HeartPulse, Minus, MoveUpRight, Plus, RefreshCcw, ShieldCheck, Sparkles, Wind } from "lucide-react";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import { BookButton } from "./Experience";
import { Brand } from "./Navbar";

export function Hero() {
  const ref = useSectionReveal();
  return <section ref={ref} className="hero section-reveal" aria-labelledby="hero-heading">
    <div className="hero-content"><p className="eyebrow"><span className="tiny-line" /> A MORE PERSONAL APPROACH TO HEALTH</p><h1 id="hero-heading">Your health.<br />A higher<br /><em>perspective.</em></h1><p className="hero-description">Feel more like yourself. Live more of your life.<br className="desktop-break" /> Discover what’s possible with care that sees<br className="desktop-break" /> the whole of you.</p><div className="hero-actions"><BookButton /><a href="#baseline" className="text-link">Discover the Baseline <ArrowDownRight size={18} /></a></div><div className="hero-signature"><div className="portrait-mini"><Image src="/Charles-and-Glenn_Pelican-Hill-37-of-37_edited.jpg" alt="Dr. Charles Ball Bareilles" width={40} height={40} /></div><div>Expert-led. Individually designed.<span>With Dr. Charles Ball Bareilles, Founder</span></div><div className="signature-line" /></div></div>
    <div className="hero-visual" aria-hidden="true" style={{ width: '100%' }}>
      <div className="hero-photo">
        <Image src="/banner.png" alt="Hero banner" fill priority sizes="100vw" />
        <div className="orbital-mark">
          <div /><div /><div /><div /><div /><div />
        </div>
        <div className="photo-caption">
          <span>01</span>
          <span>Red to Black</span>
        </div>
        <div className="baseline-float">
          <div>
            <span>THE GOAL</span>
            <p>Sustainable vitality</p>
          </div>
          <div className="float-dot" />
        </div>
        <span className="image-coordinate">34.0202° N, 118.4907° W</span>
      </div>
    </div>
    <a href="#approach" className="hero-scroll"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
  </section>;
}

export function Ticker() {
  const words = ["More energy.", "More possibility.", "More life."];
  return <div className="ticker" aria-label={words.join(" ")}><div className="ticker-track" aria-hidden="true">{[0, 1, 2, 3].map(copy => <div className="ticker-group" key={copy}>{words.map(word => <span key={word}><Sparkles size={32} strokeWidth={1} /><em>{word}</em></span>)}</div>)}</div></div>;
}

export function RedToBlack() {
  const ref = useSectionReveal();
  return <section ref={ref} id="approach" className="section-reveal section-padding container"><div className="section-heading"><p className="eyebrow"><span className="section-number">01 /</span> THE PINNACLE PERSPECTIVE</p><div className="heading-split"><h2>There’s a difference between<br />getting by and <em>feeling alive.</em></h2><p className="body-copy">Our unique Baseline approach will determine where you stand and where you need to be. <strong>Are you in the Red or are you in the Black?</strong> We look beyond individual symptoms to understand the patterns shaping your health.</p></div></div><div className="philosophy-grid"><div className="philosophy-card deficit"><div className="card-top"><span className="eyebrow">WHERE YOU MIGHT BE</span><ArrowDownRight size={28} strokeWidth={1} /></div><div><span className="state-label">THE RED</span><h3>Running on empty.</h3><p>Low energy. Restless nights. A sense that something is off. Your body is asking for a closer look.</p></div><div className="state-tags"><span>Depletion</span><span>Imbalance</span><span>Compensation</span></div></div><div className="philosophy-bridge"><ArrowRight size={22} strokeWidth={1} /></div><div className="philosophy-card vitality"><div className="card-top"><span className="eyebrow">WHERE WE GO, TOGETHER</span><MoveUpRight size={28} strokeWidth={1} /></div><div><span className="state-label">THE BLACK</span><h3>Living with more.</h3><p>A path toward sustainable energy, better recovery, and the capacity to do more of what you love.</p></div><div className="state-tags"><span>Balance</span><span>Resilience</span><span>Vitality</span></div></div></div><div className="philosophy-note"><span>We call it <strong>Red to Black.</strong></span><span>A considered approach to a life well lived.</span></div></section>;
}

const baselinePillars = [
  {
    icon: Activity,
    tag: "CLINICAL METRICS",
    title: "Biomarker Tracking",
    desc: "Targeted clinical lab panels and continuous metabolic biomarkers to benchmark internal health."
  },
  {
    icon: Dna,
    tag: "DNA BLUEPRINT",
    title: "Genetic Tests",
    desc: "Decode your biochemical individuality and predispositions to optimize nutrition, detoxification, and methylation."
  },
  {
    icon: ShieldCheck,
    tag: "SYSTEMIC MAPPING",
    title: "Health Questionnaires",
    desc: "Comprehensive functional symptom evaluations across all 13 bodily systems to identify hidden root causes."
  },
  {
    icon: Flame,
    tag: "PHYSICAL CAPACITY",
    title: "Endurance, Strength & Mobility",
    desc: "Quantitative biomechanics, neuromuscular testing, and functional movement assessments to build lasting physical vitality."
  }
];

const steps = [
  { number: "01", label: "Discover", time: "YOUR STARTING POINT", text: "An in-depth conversation and assessment to understand your history, your habits, and your goals.", icon: Eye },
  { number: "02", label: "Connect", time: "YOUR COMPLETE PICTURE", text: "We bring your functional assessments and clinical biomarkers together to look for the connections.", icon: Dna },
  { number: "03", label: "Personalize", time: "YOUR WAY FORWARD", text: "A considered plan across nutrition, movement, and recovery, designed around your individual needs.", icon: Sparkles },
  { number: "04", label: "Evolve", time: "YOUR NEXT CHAPTER", text: "Track your progress, refine your plan, and build a foundation that supports the life you want to live.", icon: RefreshCcw },
];

export function FourSteps() {
  const ref = useSectionReveal();
  return (
    <section ref={ref} id="baseline" className="baseline-section section-reveal section-padding">
      <div className="container">
        <div className="baseline-heading">
          <div>
            <p className="eyebrow"><span className="section-number">02 /</span> THE 12-WEEK BASELINE PROGRAM</p>
            <h2>Join the 12-week Baseline program that will<br />transform your <em>health</em> and transform your <em>life.</em></h2>
          </div>
          <div className="baseline-intro">
            <p className="body-copy">
              Our unique Baseline approach will determine where you stand and where you need to be. <strong>Are you in the Red or are you in the Black?</strong>
            </p>
            <p className="body-copy" style={{ marginTop: '12px' }}>
              This comprehensive health program is designed to make you proactive about your health. Leverage the power of Functional Medicine through Baseline so you can achieve <em>YOUR Pinnacle</em>.
            </p>
            <BookButton className="text-link" interest="12-Week Baseline Program">Find your starting point</BookButton>
          </div>
        </div>

        <div className="baseline-pillars">
          <div className="pillars-intro">
            <span className="eyebrow">THE 4 PILLARS OF FUNCTIONAL MEDICINE ASSESSMENT</span>
            <h3>Leverage the power of Functional Medicine through Baseline</h3>
          </div>
          <div className="pillars-grid">
            {baselinePillars.map(pillar => (
              <article key={pillar.title} className="pillar-card">
                <div className="pillar-header">
                  <span className="pillar-tag">{pillar.tag}</span>
                  <pillar.icon size={22} strokeWidth={1.2} />
                </div>
                <h4>{pillar.title}</h4>
                <p>{pillar.desc}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="steps-grid">
          {steps.map(step => (
            <article key={step.number} className="step">
              <div className="step-line">
                <span>{step.number}</span>
                <step.icon size={24} strokeWidth={1.2} />
              </div>
              <p className="eyebrow">{step.time}</p>
              <h3>{step.label}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>

        <div className="baseline-bottom">
          <span><span className="status-dot" /> Thoughtful care. Every step of the way.</span>
          <span>12 WEEKS &nbsp; / &nbsp; BUILT AROUND YOU</span>
        </div>

        <div className="baseline-cta-banner">
          <div className="baseline-cta-content">
            <p className="eyebrow">TAKE COMMAND OF YOUR HEALTH</p>
            <h3>We’ll show you exactly how. <em>Are you ready?</em></h3>
            <p className="body-copy">Shift from reactive care to proactive vitality with Dr. Charles Bareilles.</p>
          </div>
          <BookButton interest="12-Week Baseline Program" className="button">
            Begin your 12-Week Baseline
          </BookButton>
        </div>
      </div>
    </section>
  );
}

const systems = [
  { name: "Vital statistics", icon: Activity, text: "The foundational measurements that help establish your starting point and follow your progress." },
  { name: "Structural function", icon: Bone, text: "A closer look at movement, alignment, and the way your body supports your everyday activities." },
  { name: "Neurological function", icon: Brain, text: "Exploring coordination, nervous system function, and the connections between your brain and body." },
  { name: "Detoxification", icon: Droplets, text: "Understanding the systems involved in processing and clearing the substances your body encounters." },
  { name: "Eyes & ears", icon: Eye, text: "Considering your sensory health as part of a connected picture of your wellbeing." },
  { name: "Endocrine function", icon: Flame, text: "Exploring hormonal patterns in the context of your energy, metabolism, and health history." },
  { name: "Reproductive health", icon: Dna, text: "An individualized conversation about reproductive health and your current stage of life." },
  { name: "Cardiovascular", icon: Heart, text: "Looking at cardiovascular markers alongside your movement, lifestyle, and personal history." },
  { name: "Digestive function", icon: Apple, text: "Connecting your digestive experiences with your nutrition, habits, and overall health." },
  { name: "Eliminative function", icon: RefreshCcw, text: "Considering regularity and the ways your body processes and eliminates waste." },
  { name: "Immune response", icon: ShieldCheck, text: "Reviewing patterns in your immune health within the wider context of your wellbeing." },
  { name: "Respiratory function", icon: Wind, text: "Understanding breathing patterns and respiratory health in relation to activity and recovery." },
  { name: "Genito-urinary", icon: Droplet, text: "Including urinary health and related history in your whole-person assessment." },
];

export function Systems13() {
  const ref = useSectionReveal();
  const [active, setActive] = useState(0);
  const Icon = systems[active].icon;
  return <section ref={ref} id="systems" className="section-reveal section-padding container systems-section"><div className="systems-intro"><p className="eyebrow">THE WHOLE OF YOU</p><h2>Everything<br />is <em>connected.</em></h2><p className="body-copy">Thirteen functional health systems. A single, interconnected picture. Because the most useful insights often live between the lines.</p><span className="system-instruction">EXPLORE THE SYSTEMS <ArrowDownRight size={16} /></span><div className="system-detail" role="tabpanel" id="system-panel" aria-labelledby={`system-tab-${active}`} tabIndex={0}><Icon size={25} strokeWidth={1.2} /><h3>{systems[active].name}</h3><p>{systems[active].text}</p></div></div><div className="systems-grid" role="tablist" aria-label="Functional health systems">{systems.map((system, index) => <button key={system.name} id={`system-tab-${index}`} role="tab" aria-selected={active === index} aria-controls="system-panel" tabIndex={active === index ? 0 : -1} className={`system-tile ${active === index ? "active" : ""}`} onClick={() => setActive(index)} onKeyDown={event => { let next = index; if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (index + 1) % systems.length; else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (index - 1 + systems.length) % systems.length; else if (event.key === "Home") next = 0; else if (event.key === "End") next = systems.length - 1; else return; event.preventDefault(); setActive(next); document.getElementById(`system-tab-${next}`)?.focus(); }}><span className="system-index">{String(index + 1).padStart(2, "0")}</span><system.icon size={27} strokeWidth={1.1} /><span>{system.name}</span><ArrowUpRight className="system-arrow" size={14} /></button>)}<div className="system-tile system-whole"><span>13 systems.</span><em>One you.</em><CircleArrowRight size={25} strokeWidth={1} /></div></div></section>;
}

export function DrCharles() {
  const ref = useSectionReveal();
  return <section ref={ref} id="doctor" className="doctor-section section-reveal container"><div className="doctor-image"><Image src="/Charles-and-Glenn_Pelican-Hill-37-of-37_edited.jpg" alt="Dr. Charles Ball Bareilles, Chiropractic Kinesiologist and Founder" fill sizes="(max-width: 760px) 100vw, 45vw" /><div className="doctor-image-label"><span>72 PGA TOUR ATHLETES<br />17+ MAJOR TITLES</span><ArrowUpRight size={28} strokeWidth={1} /></div></div><div className="doctor-copy"><p className="eyebrow"><span className="tiny-line" /> THE VISIONARY BEHIND THE SCIENCE</p><h2>The visionary behind<br /><em>the science.</em></h2><p className="doctor-name">Dr. Charles Ball Bareilles<span>CHIROPRACTIC KINESIOLOGIST · FOUNDER OF RED TO BLACK</span></p><p className="body-copy">The visionary founder of Pinnacle Health Institute and the groundbreaking Red to Black program. With over 20 years of experience in sports medicine, sports-specific training, and Functional Medicine, Dr. Bareilles is a leading expert in Applied Kinesiology and the creator of the Neurokinetics of Golf.</p><p className="body-copy">Through dedication to finding the root causes of imbalances, whether structural, biochemical, nutritional, or emotional, Dr. Bareilles&apos; goal is to create a new and personalized path for playing your best possible Golf. This innovative approach has been utilized by 72 PGA Tour Athletes with over 17 Major Titles in addition to thousands of other athletes and individuals outside of Golf.</p><div className="doctor-signature">Charles Bareilles<span>Care begins with understanding.</span></div><div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginTop: '24px', flexWrap: 'wrap' }}><BookButton className="button">Start a conversation</BookButton><Link href="/about" className="text-link">Read full story <ArrowUpRight size={16} strokeWidth={1.2} /></Link></div></div></section>;
}

export function Champions() {
  const ref = useSectionReveal();
  return <section ref={ref} className="champions section-reveal"><div className="container"><p className="eyebrow">FOR THE LIFE YOU WANT TO LIVE</p><h2>Your next chapter doesn’t have to be<br />about doing more. <em>Just feeling more you.</em></h2></div><div className="champion-marquee" aria-label="More energy. More possibility. More life."><div aria-hidden="true">{[0, 1, 2, 3].map(i => <span key={i}>More energy.<Sparkles size={26} strokeWidth={1} />More possibility.<Sparkles size={26} strokeWidth={1} />More life.<Sparkles size={26} strokeWidth={1} /></span>)}</div></div></section>;
}

const tiers = [
  { name: "Baseline", price: "25", subtitle: "A clearer starting point.", features: ["Baseline dashboard access", "Your health, in one place"], label: "YOUR FOUNDATION" },
  { name: "Black", price: "100", subtitle: "More access. More possibility.", features: ["Baseline dashboard access", "Exclusive member pricing"], label: "YOUR NEXT LEVEL" },
  { name: "Pinnacle", price: "500", subtitle: "A more personal perspective.", features: ["Baseline dashboard access", "Exclusive member pricing", "Personalized health analysis"], label: "OUR MOST PERSONAL EXPERIENCE" },
];

export function Tiers() {
  const ref = useSectionReveal();
  return <section ref={ref} id="memberships" className="section-reveal section-padding container"><div className="membership-heading"><p className="eyebrow">CONTINUITY OF CARE</p><h2>Your health is a journey.<br /><em>Find your level of support.</em></h2><p className="body-copy">Thoughtful options for wherever you are, and wherever you want to go.</p></div><div className="tiers-grid">{tiers.map((tier, index) => <article key={tier.name} className={`tier ${index === 2 ? "tier-featured" : ""}`}><div className="tier-top"><span className="eyebrow">{tier.label}</span>{index === 2 && <Sparkles size={18} strokeWidth={1.2} />}</div><h3>{tier.name}</h3><p className="tier-subtitle">{tier.subtitle}</p><div className="tier-price"><span>$</span>{tier.price}<small>/ month</small></div><ul>{tier.features.map(feature => <li key={feature}><Check size={15} strokeWidth={1.5} />{feature}</li>)}</ul><BookButton interest={`${tier.name} Membership`} className={`button ${index === 2 ? "" : "button-outline"}`}>Explore {tier.name}</BookButton></article>)}</div><p className="membership-note">Memberships are separate from the 12-week program. We’ll help you understand what’s right for you.</p></section>;
}

const faqs = [
  ["What is the 12-Week Baseline?", "The Baseline is our signature 12-week program. It begins with a detailed look at your health history, functional systems, and relevant biomarkers. Together, we build an individualized plan for nutrition, movement, and recovery, then follow your progress and refine the approach."],
  ["What does ‘Red to Black’ mean?", "Red to Black is the philosophy behind our approach: understanding where your body may be depleted or compensating, then working toward better balance, resilience, and vitality. Your plan and progress are individual to you."],
  ["Do I need to be an athlete?", "No. Our approach is for people who want a deeper understanding of their health, whether that means supporting everyday energy, enjoying an active life, or exploring performance goals."],
  ["Can we work together virtually?", "Virtual consultations are available alongside in-person care in Santa Monica and Newport Coast. Some assessments may require an in-person visit or local testing. We’ll discuss the right setting for your needs during your consultation."],
  ["Where should I start?", "Start with a conversation. We’ll discuss what brings you here, explain the Baseline and membership options, and help you understand the next steps. You don’t need to choose a membership before talking with us."],
];

const testimonials = [
  { quote: "Dr. Charles took the time to understand my full health picture. The Baseline program gave me a clear path forward.", name: "Sarah M.", role: "Pinnacle Member" },
  { quote: "I've never experienced care this personal. The insights from the 13 functional systems completely shifted my perspective on recovery.", name: "David L.", role: "Pinnacle Member" },
  { quote: "Energy levels are up, sleep is better, and I finally feel like I have a sustainable plan. The transition from Red to Black is real.", name: "Elena R.", role: "Pinnacle Member" }
];

export function Testimonials() {
  const ref = useSectionReveal();
  return (
    <section ref={ref} id="testimonials" className="section-reveal section-padding container testimonials-section">
      <div className="section-heading">
        <p className="eyebrow">THE PINNACLE EXPERIENCE</p>
        <div className="heading-split">
          <h2>Stories of<br /><em>vitality.</em></h2>
          <p className="body-copy">Hear from members who have transformed their understanding of health and found their own path to sustainable energy.</p>
        </div>
      </div>
      <div className="testimonials-marquee" aria-label="Stories of vitality">
        <div aria-hidden="true">
          {[0, 1].map(group => (
            <div key={group} className="testimonials-track">
              {testimonials.map((t, i) => (
                <article key={`${group}-${i}`} className="testimonial-card">
                  <Sparkles size={24} strokeWidth={1} className="testimonial-icon" />
                  <blockquote>“{t.quote}”</blockquote>
                  <div className="testimonial-author">
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const ref = useSectionReveal();
  const [open, setOpen] = useState<number | null>(0);
  return <section ref={ref} id="faq" className="faq-section section-reveal section-padding"><div className="container faq-grid"><div><p className="eyebrow">A LITTLE MORE CLARITY</p><h2>Good questions.<br /><em>Thoughtful answers.</em></h2><p className="body-copy">Getting to know a new approach takes a little curiosity. We’re here for it.</p><BookButton className="text-link">Let’s talk about you</BookButton></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${open === index ? "faq-open" : ""}`} key={question}><h3><button id={`faq-button-${index}`} aria-expanded={open === index} aria-controls={`faq-answer-${index}`} onClick={() => setOpen(open === index ? null : index)}><span className="faq-number">0{index + 1}</span>{question}{open === index ? <Minus size={19} strokeWidth={1} /> : <Plus size={19} strokeWidth={1} />}</button></h3><div id={`faq-answer-${index}`} role="region" aria-labelledby={`faq-button-${index}`} hidden={open !== index}><p>{answer}</p></div></div>)}</div></div></section>;
}

export function FinalCTA() {
  const ref = useSectionReveal();
  return <section ref={ref} className="final-cta section-reveal container"><div className="cta-orbit" aria-hidden="true"><HeartPulse size={28} strokeWidth={1} /></div><p className="eyebrow">A NEW PERSPECTIVE STARTS HERE</p><h2>The best investment<br />is <em>in yourself.</em></h2><p className="body-copy">Let’s find out what feeling better could look like for you.</p><BookButton>Begin your journey</BookButton><span className="cta-note">PERSONAL CARE. LASTING POSSIBILITY.</span></section>;
}

export function Footer() {
  const ref = useSectionReveal<HTMLElement>();
  return (
    <footer ref={ref} className="footer section-reveal">
      <div className="footer-top">
        <div className="footer-brand">
          <Brand />
          <p>A higher standard of care.<br />A more personal path to wellbeing.</p>
          <span className="eyebrow"><span className="status-dot" /> SANTA MONICA · NEWPORT COAST · VIRTUAL</span>
        </div>
        <div>
          <h3>EXPLORE</h3>
          <a href="#approach">Our approach</a>
          <a href="#baseline">The 12-Week Baseline</a>
          <a href="#systems">13 functional systems</a>
          <a href="/dashboard">Member Dashboard</a>
          <a href="/science">Science & Clinical</a>
          <a href="/store">Supplement Store</a>
        </div>
        <div>
          <h3>COMPANY</h3>
          <a href="#doctor">Meet Dr. Charles</a>
          <a href="/about">About Us</a>
          <a href="/team">Our Team</a>
          <a href="/testimonials">Testimonials</a>
          <a href="#memberships">Memberships</a>
          <a href="/blog">Journal & Blog</a>
          <a href="#faq">Questions & answers</a>
        </div>
        <div className="footer-connect">
          <h3>YOUR NEXT CHAPTER</h3>
          <p>It begins with a conversation.</p>
          <BookButton className="text-link">Let’s connect</BookButton>
        </div>
      </div>
      <div className="footer-wordmark" aria-hidden="true">PINNACLE<span>®</span></div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Pinnacle Health Institute</span>
        <span>CARE WITH PERSPECTIVE.</span>
        <div style={{display: 'flex', gap: '20px'}}>
          <a href="#" style={{textDecoration: 'underline'}}>Privacy Policy</a>
          <a href="#" style={{textDecoration: 'underline'}}>Terms of Service</a>
          <a href="#" style={{textDecoration: 'underline'}}>HIPAA Notice</a>
        </div>
        <a href="#main">BACK TO TOP <ArrowUpRight size={13} /></a>
      </div>
      <p className="disclaimer">The information on this website is educational and is not a substitute for individual medical advice, diagnosis, or treatment. Consult your qualified healthcare provider about your health. Individual experiences and results vary.</p>
    </footer>
  );
}
