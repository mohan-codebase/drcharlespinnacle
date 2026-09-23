"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Sections";
import { BookButton } from "@/components/Experience";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import { ArrowDownRight, ArrowUpRight, Sparkles } from "lucide-react";
import styles from "./about.module.css";

export default function AboutPage() {
  const ref = useSectionReveal();

  return (
    <main>
      <Navbar />
      <section ref={ref} className={`section-reveal container ${styles.aboutSection}`}>
        <div className={styles.header}>
          <p className="eyebrow">
            <span className="tiny-line" /> THE VISIONARY BEHIND THE SCIENCE
          </p>
          <h1 className={styles.title}>
            The Visionary Behind <br />
            <em>the Science.</em>
          </h1>
        </div>

        <div className={styles.grid}>
          {/* Left Column: Doctor Portrait & Credentials */}
          <div className={styles.imageContainer}>
            <div className={styles.imageFrame}>
              <Image
                src="/Charles-and-Glenn_Pelican-Hill-37-of-37_edited.jpg"
                alt="Dr. Charles Ball Bareilles, Chiropractic Kinesiologist and Founder"
                fill
                priority
                sizes="(max-width: 960px) 100vw, 45vw"
              />
              <div className={styles.imageOverlay}>
                <div className={styles.imageBadgeList}>
                  <div className={styles.imageBadge}>
                    <strong>72</strong>
                    <span>PGA Tour Athletes</span>
                  </div>
                  <div className={styles.imageBadge}>
                    <strong>17+</strong>
                    <span>Major Titles</span>
                  </div>
                </div>
                <div className={styles.locationTag}>
                  <span>PELICAN HILL · NEWPORT COAST</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Doctor Bio & Detailed Story */}
          <div className={styles.bioContent}>
            <div>
              <span className={styles.roleTag}>
                <Sparkles size={13} strokeWidth={1.5} /> Chiropractic Kinesiologist
              </span>
            </div>

            <div>
              <h2 className={styles.doctorHeading}>Dr. Charles Ball Bareilles</h2>
              <p className={styles.doctorRoleSubtitle}>
                Founder, Pinnacle Health Institute · Creator of Red to Black & Neurokinetics of Golf
              </p>
            </div>

            <p className="body-copy" style={{ fontSize: "16px", lineHeight: "1.75" }}>
              The visionary founder of Pinnacle Health Institute and the groundbreaking Red to Black program. With over 20 years of experience in sports medicine, sports-specific training, and Functional Medicine, Dr. Bareilles is a leading expert in Applied Kinesiology and the creator of the Neurokinetics of Golf.
            </p>

            <p className="body-copy" style={{ fontSize: "16px", lineHeight: "1.75" }}>
              Through dedication to finding the root causes of imbalances, whether structural, biochemical, nutritional, or emotional, Dr. Bareilles&apos; goal is to create a new and personalized path for playing your best possible Golf. This innovative approach has been utilized by 72 PGA Tour Athletes with over 17 Major Titles in addition to thousands of other athletes and individuals outside of Golf.
            </p>

            {/* Key Accomplishment Stats */}
            <div className={styles.statsBar}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>20+</span>
                <span className={styles.statLabel}>Years Sports Medicine</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>72</span>
                <span className={styles.statLabel}>PGA Tour Athletes</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>17+</span>
                <span className={styles.statLabel}>Major Championship Titles</span>
              </div>
            </div>

            {/* Root-cause focus pillars */}
            <div className={styles.fourPillars}>
              <span className={styles.pillarsTitle}>Root Cause Analysis & Restoration</span>
              <div className={styles.pillarsList}>
                <span className={styles.pillarPill}>Structural Alignment</span>
                <span className={styles.pillarPill}>Biochemical Health</span>
                <span className={styles.pillarPill}>Targeted Nutrition</span>
                <span className={styles.pillarPill}>Emotional Balance</span>
                <span className={styles.pillarPill}>Neurokinetics of Golf</span>
              </div>
            </div>

            {/* Personal Baseline Philosophy Quote */}
            <blockquote className={styles.quoteBlock}>
              “Drawing from more than two decades of working with elite athletes and everyday individuals, our mission is to help you discover your own baseline and create a personalized path toward sustainable vitality and peak performance.”
            </blockquote>

            {/* Signature Block */}
            <div className={styles.signatureArea}>
              <span className={styles.signatureName}>Charles Bareilles</span>
              <span className={styles.signatureRole}>
                Chiropractic Kinesiologist · Founder of Pinnacle Health Institute & Red to Black
              </span>
            </div>

            {/* CTAs */}
            <div className={styles.actions}>
              <BookButton className="button">
                Begin your journey <ArrowUpRight size={16} strokeWidth={1.2} />
              </BookButton>
              <Link href="/baseline" className="text-link">
                Discover the 12-Week Baseline <ArrowDownRight size={16} strokeWidth={1.2} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
