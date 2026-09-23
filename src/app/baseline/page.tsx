"use client";

import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Sections";
import { BookButton } from "@/components/Experience";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import { Activity, ArrowDownRight, Check, Dna, Flame, MoveUpRight, ShieldCheck, Sparkles } from "lucide-react";
import styles from "./baseline.module.css";

const pillars = [
  {
    icon: Activity,
    tag: "CLINICAL METRICS",
    title: "Biomarker Tracking",
    desc: "Targeted clinical lab panels and continuous metabolic biomarker tracking to benchmark your internal biological status and optimize systemic function.",
    points: ["Metabolic & inflammatory markers", "Cardiovascular & lipid dynamics", "Hormonal & endocrine balance"]
  },
  {
    icon: Dna,
    tag: "DNA BLUEPRINT",
    title: "Genetic Tests",
    desc: "Precision genomic sequencing and actionable DNA tests to decode individual methylation, detoxification pathways, and micronutrient utilization.",
    points: ["Individual biochemical individuality", "Nutrient absorption & metabolism", "Detoxification & longevity predispositions"]
  },
  {
    icon: ShieldCheck,
    tag: "SYSTEMIC MAPPING",
    title: "Health Questionnaires",
    desc: "Comprehensive functional medicine symptom profiling across all 13 bodily systems to identify hidden compensatory patterns.",
    points: ["Whole-person symptom analysis", "Environmental & lifestyle inputs", "Nervous system & stress load"]
  },
  {
    icon: Flame,
    tag: "PHYSICAL CAPACITY",
    title: "Endurance / Strength / Mobility Assessments",
    desc: "Quantitative biomechanical, structural, and endurance evaluations to establish your physical baseline and build resilient athletic longevity.",
    points: ["Applied kinesiology & movement screen", "Postural alignment & joint mobility", "Cardiorespiratory & muscular stamina"]
  }
];

const curriculum = [
  {
    phase: "Phase 01",
    weeks: "Weeks 1–3",
    title: "Discover Your Baseline",
    text: "Comprehensive diagnostic intake, advanced biomarker lab work, genetic testing, and full functional health questionnaires to map your starting point."
  },
  {
    phase: "Phase 02",
    weeks: "Weeks 4–6",
    title: "Connect the Dots",
    text: "Dr. Charles Bareilles synthesizes your laboratory findings and physical assessments across all 13 systems to determine whether you are in the Red or the Black."
  },
  {
    phase: "Phase 03",
    weeks: "Weeks 7–9",
    title: "Personalize the Protocol",
    text: "Implementation of your customized functional roadmap spanning precision nutrition, targeted supplementation, movement protocols, and restorative sleep."
  },
  {
    phase: "Phase 04",
    weeks: "Weeks 10–12",
    title: "Evolve & Transcend",
    text: "Follow-up biomarker re-testing, measurable outcome quantification, and long-term sustainable blueprint so you can achieve and maintain YOUR Pinnacle."
  }
];

export default function BaselinePage() {
  const refHero = useSectionReveal();
  const refManifesto = useSectionReveal();
  const refPillars = useSectionReveal();
  const refCurriculum = useSectionReveal();
  const refCta = useSectionReveal();

  return (
    <>
      <Navbar />
      <main id="main">
        <section ref={refHero} className={`container section-reveal ${styles.baselinePage}`}>
          <div className={styles.heroContent}>
            <p className="eyebrow">
              <span className="tiny-line" /> THE 12-WEEK BASELINE PROGRAM
            </p>
            <h1 className={styles.mainTitle}>
              Join the 12-week Baseline program that will transform your <em>HEALTH</em> and transform your <em>LIFE.</em>
            </h1>
            <p className={styles.leadText}>
              Our unique Baseline approach will determine where you stand and where you need to be. 
              <strong> Are you in the Red or are you in the Black?</strong>
            </p>
            <p className="body-copy">
              This comprehensive health program is designed to make you proactive about your health. 
              Leverage the power of Functional Medicine through Baseline Biomarker Tracking, Genetic Tests, 
              Health Questionnaires, and Endurance/Strength/Mobility Assessments so you can achieve <em>YOUR Pinnacle</em>.
            </p>
            <div className={styles.heroActions}>
              <BookButton interest="12-Week Baseline Program" className="button">
                Take command of your Health
              </BookButton>
              <a href="#pillars" className="text-link">
                Explore the 4 Pillars <ArrowDownRight size={17} />
              </a>
            </div>
          </div>

          <section ref={refManifesto} className={`section-reveal ${styles.manifestoGrid}`}>
            <article className={`${styles.manifestoCard} ${styles.manifestoCardRed}`}>
              <div>
                <div className={styles.cardHeader}>
                  <span className={styles.cardStatus}>STARTING POINT · THE RED</span>
                  <ArrowDownRight size={26} color="var(--terracotta)" />
                </div>
                <h2 className={styles.cardTitle}>Where you might be standing.</h2>
                <p className={styles.cardBody}>
                  Fatigue that sleep doesn&apos;t fix, subtle hormonal shifts, persistent inflammation, or compensatory physical strain. Operating in the Red means your body is drawing on reserves rather than thriving on abundance.
                </p>
              </div>
              <div className={styles.cardTags}>
                <span>Depletion</span>
                <span>Compensation</span>
                <span>Reactive Care</span>
              </div>
            </article>

            <article className={`${styles.manifestoCard} ${styles.manifestoCardBlack}`}>
              <div>
                <div className={styles.cardHeader}>
                  <span className={styles.cardStatus}>TARGET OBJECTIVE · THE BLACK</span>
                  <MoveUpRight size={26} color="var(--sage)" />
                </div>
                <h2 className={styles.cardTitle}>Where you need to be.</h2>
                <p className={styles.cardBody}>
                  Sustainable daily energy, mental sharpness, metabolic flexibility, and rapid physical recovery. Crossing into the Black means your physiology is fortified, balanced, and operating with true vitality.
                </p>
              </div>
              <div className={styles.cardTags}>
                <span>Metabolic Reserve</span>
                <span>Vitality</span>
                <span>Proactive Health</span>
              </div>
            </article>
          </section>

          <section id="pillars" ref={refPillars} className={`section-reveal ${styles.sectionHeader}`}>
            <p className="eyebrow">FUNCTIONAL MEDICINE LEVERAGE</p>
            <h3>Leverage the power of Functional Medicine through Baseline.</h3>
            <p className="body-copy" style={{ maxWidth: "680px", marginTop: "12px" }}>
              We don&apos;t guess; we test. By evaluating multiple interconnected biological signals simultaneously, we build an unassailable baseline of your total health.
            </p>
          </section>

          <div className={styles.pillarsGrid}>
            {pillars.map(pillar => (
              <article key={pillar.title} className={styles.pillarCard}>
                <div className={styles.pillarTop}>
                  <span className={styles.pillarTag}>{pillar.tag}</span>
                  <pillar.icon size={26} strokeWidth={1.2} className={styles.pillarIcon} />
                </div>
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarDesc}>{pillar.desc}</p>
                <ul className={styles.pillarList}>
                  {pillar.points.map(point => (
                    <li key={point}>
                      <Check size={14} strokeWidth={2} />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <section ref={refCurriculum} className={`section-reveal ${styles.curriculumSection}`}>
            <p className="eyebrow">THE 12-WEEK ROADMAP</p>
            <h2 style={{ fontSize: "clamp(30px, 3.5vw, 44px)", letterSpacing: "-1.2px", marginTop: "14px" }}>
              How we guide your transformation.
            </h2>
            <div className={styles.curriculumGrid}>
              {curriculum.map(step => (
                <div key={step.phase} className={styles.curriculumStep}>
                  <span className={styles.curriculumStepNumber}>{step.phase}</span>
                  <span className={styles.curriculumStepTime}>{step.weeks}</span>
                  <h3 className={styles.curriculumStepTitle}>{step.title}</h3>
                  <p className={styles.curriculumStepText}>{step.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section ref={refCta} className={`section-reveal ${styles.ctaBanner}`}>
            <div className={styles.ctaText}>
              <p className="eyebrow">
                <Sparkles size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: "6px" }} />
                TAKE COMMAND OF YOUR HEALTH
              </p>
              <h3>We’ll show you exactly how.<br /><em>Are you ready?</em></h3>
              <p>
                Join the 12-week Baseline program designed by Dr. Charles Bareilles. Schedule your initial consultation to discover where you stand and begin your transition into the Black.
              </p>
            </div>
            <BookButton interest="12-Week Baseline Program" className="button">
              Begin your 12-Week Baseline
            </BookButton>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
