import { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { Plus } from "lucide-react";
import "./ActionAccordion.css";

export default function ActionAccordion({ items, className = "" }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [pinnedIndex, setPinnedIndex] = useState(null);
  const contentRefs = useRef([]);
  const activeIndex = hoveredIndex ?? pinnedIndex;
  const reducedMotion = useMemo(
    () => window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false,
    [],
  );

  useEffect(() => {
    contentRefs.current.forEach((node, index) => {
      if (!node) return;
      const expanded = index === activeIndex;
      gsap.killTweensOf(node);
      gsap.to(node, {
        height: expanded ? "auto" : 0,
        opacity: expanded ? 1 : 0,
        duration: reducedMotion ? 0 : 0.42,
        ease: "power3.out",
        overwrite: true,
      });
    });
  }, [activeIndex, reducedMotion]);

  useEffect(
    () => () => {
      contentRefs.current.forEach((node) => {
        if (node) gsap.killTweensOf(node);
      });
    },
    [],
  );

  const toggleItem = (index) => {
    setPinnedIndex((current) => (current === index ? null : index));
    setHoveredIndex(null);
  };

  return (
    <div
      className={`action-accordion ${className}`.trim()}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {items.map((item, index) => {
        const expanded = index === activeIndex;
        const panelId = `action-panel-${index}-${item.title.replace(/\s+/g, "-")}`;

        return (
          <article
            className={`action-accordion-item${expanded ? " is-expanded" : ""}`}
            key={item.title}
            onMouseEnter={() => setHoveredIndex(index)}
          >
            <button
              className="action-accordion-trigger"
              type="button"
              aria-expanded={expanded}
              aria-controls={panelId}
              onClick={() => toggleItem(index)}
              onFocus={() => setHoveredIndex(index)}
              onBlur={() => setHoveredIndex(null)}
            >
              <span className="action-accordion-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="action-accordion-title">{item.title}</span>
              <span className="action-accordion-icon" aria-hidden="true">
                <Plus size={20} />
              </span>
            </button>
            <div
              className="action-accordion-content"
              id={panelId}
              ref={(node) => { contentRefs.current[index] = node; }}
              aria-hidden={!expanded}
            >
              <p>{item.detail}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
