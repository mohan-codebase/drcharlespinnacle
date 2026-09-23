import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Sections";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="main">
        <section className="section-padding container" style={{ 
          minHeight: "85vh", 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center", 
          justifyContent: "center", 
          textAlign: "center", 
          paddingTop: "160px" 
        }}>
          <div style={{ marginBottom: "28px", color: "var(--sage)" }}>
            <Compass size={48} strokeWidth={1} />
          </div>
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            404 / PAGE NOT FOUND
          </p>
          <h2 style={{ marginTop: "20px", marginBottom: "24px" }}>
            We couldn’t find<br /><em>that path.</em>
          </h2>
          <p className="body-copy" style={{ maxWidth: "420px", marginInline: "auto", marginBottom: "45px" }}>
            The page you’re looking for might have been moved, or perhaps you&apos;ve taken a slight detour from the baseline. Let’s get you back on track.
          </p>
          <Link href="/" className="button">
            <ArrowLeft size={18} strokeWidth={1.5} /> Return to Homepage
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
