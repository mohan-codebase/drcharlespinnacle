"use client";
import { useEffect, useRef } from "react";

export function useSectionReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (node.getBoundingClientRect().top < window.innerHeight) return;
    node.classList.add("section-hidden");
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.classList.remove("section-hidden");
        node.classList.add("section-visible");
        observer.disconnect();
      }
    }, { threshold: 0.06 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return ref;
}
