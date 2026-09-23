"use client";

import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Sections";
import { BookButton } from "@/components/Experience";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import styles from "./about.module.css";

export default function AboutPage() {
  const ref = useSectionReveal();
  
  return (
    <main>
      <Navbar />
      <section ref={ref} className={`section-reveal container ${styles.aboutSection}`}>
        <p className="eyebrow">ABOUT US</p>
        <h2 style={{ fontSize: 'clamp(48px, 6vw, 72px)', lineHeight: '1.05', marginBottom: '40px' }}>
          About <br /><em>Dr. Charles Bareilles.</em>
        </h2>
        
        <div className={styles.content}>
          <p className="body-copy">
            “After an extensive 20-year career working with a diverse range of patients, including Olympic athletes, professional sports figures, USA Cycling teams, and PGA Tour golfers, I have come to the conclusion of the baseline study. This study, purposefully designed to propel athletes to their pinnacle of achievement, now serves as the foundation for our program.
          </p>
          
          <p className="body-copy">
            The goal of this program is to help you discover your own baseline, providing you with a clear understanding of your current standing. Drawing from my deep experience of working with world-class athletes, this program has been tailored specifically for you.
          </p>
          
          <p className="body-copy">
            Through our book, website, and program, our aim is to elevate your fitness, health, and aspirations to new heights. Our comprehensive approach covers essential aspects such as goal setting, time management, proper nutrition, biochemistry, biomechanics, and targeted training to address your unique needs.”
          </p>
          
          <div className={styles.signature}>
            Charles Bareilles
            <span>Founder of the Red-to-Black program<br/>and author of the best selling book Red to Black.</span>
          </div>
          
          <div className={styles.cta}>
            <BookButton className="button">Begin your journey</BookButton>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
