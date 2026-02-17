"use client";

import { useMemo, useState } from "react";

export default function GalleryPage() {
  const [active, setActive] = useState(null);
  const [filter, setFilter] = useState("All");

  // ✅ Add new photos here anytime (they must exist in /public)
  const categories = useMemo(
    () => [
      {
        title: "Keychains",
        items: [
          { src: "/keychain.jpeg", alt: "Custom keychain" },
          { src: "/keychain1.jpeg", alt: "Custom keychain" },
          { src: "/keychain2.jpeg", alt: "Custom keychain" },
        ],
      },
      {
        title: "Tumbler Toppers",
        items: [
          { src: "/tumbler-topper.jpeg", alt: "Tumbler topper" },
          { src: "/tumbler-topper2.jpeg", alt: "Tumbler topper" },
        ],
      },
      {
  title: "Custom Prints",
  items: [
    { src: "/custom.jpeg", alt: "Custom 3D print" },
    { src: "/custom1.jpeg", alt: "Custom 3D print" },
    { src: "/custom3.jpeg", alt: "Custom 3D print" },
    { src: "/custom4.jpeg", alt: "Custom 3D print" },

    // 🔥 New Branded Utility Pens
    { src: "/ultralite-pen.jpeg", alt: "Ultralite Solutions custom branded utility pen case" },
    { src: "/inspatial-pen.jpeg", alt: "InSpatial custom branded utility pen case" },
    { src: "/military-set.jpeg", alt: "USMC, US Army, US Air Force custom utility pen cases" },
    { src: "/exxon-pen.jpeg", alt: "ExxonMobil custom logo utility pen case" },
    { src: "/frye-ret.jpeg", alt: "Custom sheriff retirement utility pen case" },
    { src: "/navy-pen.jpeg", alt: "US Navy custom utility pen case" },
    { src: "/kgm-repair.jpeg", alt: "KGM Repair custom branded utility pen case" },
    { src: "/pen-case-open.jpeg", alt: "Custom 3D printed utility pen case interior" },
  ],
},

    ],
    []
  );

  const allItems = useMemo(() => {
    return categories.flatMap((c) =>
      c.items.map((i) => ({ ...i, category: c.title }))
    );
  }, [categories]);

  const filters = useMemo(
    () => ["All", ...categories.map((c) => c.title)],
    [categories]
  );

  const visible = useMemo(() => {
    if (filter === "All") return allItems;
    return allItems.filter((i) => i.category === filter);
  }, [allItems, filter]);

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 20px" }}>
      <h1 style={{ fontSize: 42, marginBottom: 10 }}>Full Gallery</h1>
      <p style={{ opacity: 0.7, marginBottom: 24 }}>
        Browse by category and click any photo to enlarge.
      </p>

      {/* Filter buttons */}
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 22 }}>
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              padding: "10px 14px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.25)",
              background: filter === f ? "white" : "transparent",
              color: filter === f ? "black" : "white",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 18,
        }}
      >
        {visible.map((img, idx) => (
          <button
            key={`${img.src}-${idx}`}
            onClick={() => setActive(img)}
            style={{
              padding: 0,
              border: "none",
              background: "transparent",
              cursor: "pointer",
            }}
            aria-label={`Open ${img.alt}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              style={{
                width: "100%",
                height: 240,
                objectFit: "cover",
                borderRadius: 18,
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            />
            <div style={{ marginTop: 8, opacity: 0.7, fontSize: 13 }}>
              {img.category}
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active && (
        <div
          onClick={() => setActive(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
            zIndex: 9999,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: 1000,
              width: "100%",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
              <div style={{ opacity: 0.8 }}>{active.category}</div>
              <button
                onClick={() => setActive(null)}
                style={{
                  border: "1px solid rgba(255,255,255,0.35)",
                  background: "transparent",
                  color: "white",
                  padding: "8px 12px",
                  borderRadius: 10,
                  cursor: "pointer",
                }}
              >
                Close
              </button>
            </div>

            <img
              src={active.src}
              alt={active.alt}
              style={{
                width: "100%",
                maxHeight: "80vh",
                objectFit: "contain",
                borderRadius: 18,
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.03)",
              }}
            />
          </div>
        </div>
      )}
    </main>
  );
}

