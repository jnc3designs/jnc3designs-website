"use client";

import { useMemo, useState } from "react";

export default function GalleryPage() {
  const [active, setActive] = useState(null);

  // ✅ Update these lists any time you add more photos in /public
  const categories = useMemo(
    () => [
      {
        title: "Keychains",
        items: [
          { src: "/keychain1.jpeg", alt: "Custom keychain" },
          { src: "/keychain2.jpeg", alt: "Custom keychain" },
          // If you have /keychain.jpeg and want it shown, add it back:
          // { src: "/keychain.jpeg", alt: "Custom keychain" },
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
        ],
      },
      // Add more categories anytime:
      // { title: "Bulk Orders", items: [{ src:"/bulk1.jpeg", alt:"Bulk order" }]},
    ],
    []
  );

  return (
    <main style={{ padding: "40px", maxWidth: "1000px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>Gallery</h1>
      <p style={{ opacity: 0.8, marginBottom: "18px" }}>
        More examples of our work — click any photo to enlarge.
      </p>

      <a
        href="/"
        style={{
          display: "inline-block",
          marginBottom: "28px",
          textDecoration: "underline",
          color: "white",
          opacity: 0.9,
        }}
      >
        ← Back to Home
      </a>

      {categories.map((cat) => (
        <section key={cat.title} style={{ marginBottom: "44px" }}>
          <h2 style={{ fontSize: "22px", marginBottom: "14px" }}>
            {cat.title}
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
            }}
          >
            {cat.items.map((img) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setActive(img)}
                style={{
                  padding: 0,
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                }}
                aria-label={`Enlarge image: ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{
                    width: "100%",
                    borderRadius: "12px",
                    display: "block",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </section>
      ))}

      {/* Lightbox */}
      {active && (
        <div
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            zIndex: 9999,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "1100px",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <div style={{ opacity: 0.9, fontSize: "14px" }}>{active.alt}</div>

              <button
                type="button"
                onClick={() => setActive(null)}
                style={{
                  background: "rgba(255,255,255,0.12)",
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.18)",
                  borderRadius: "10px",
                  padding: "8px 12px",
                  cursor: "pointer",
                }}
              >
                Close ✕
              </button>
            </div>

            <img
              src={active.src}
              alt={active.alt}
              style={{
                width: "100%",
                maxHeight: "80vh",
                objectFit: "contain",
                borderRadius: "14px",
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.04)",
              }}
            />
          </div>
        </div>
      )}
    </main>
  );
}

