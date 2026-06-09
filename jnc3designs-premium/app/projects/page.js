export default function Projects() {
  return (
    <main>
      <section className="section">
        <h1>Featured Customer Projects</h1>

        <p style={{ opacity: 0.8 }}>
          Real customer projects designed, prototyped, and produced by
          JNC3Designs.
        </p>
      </section>

      <section className="section">
        <h2>Bridge Plug Keychain</h2>

        <img
          src="/bridge-plug-flyer.jpg"
          alt="Bridge Plug Keychain Project"
          style={{
            width: "100%",
            maxWidth: "700px",
            borderRadius: "12px",
            marginBottom: "20px"
          }}
        />

        <p>
          Composite Systems LLC provided engineering files for an existing
          bridge plug design. JNC3Designs converted the CAD files into a
          printable model and created a detailed promotional keychain replica.
        </p>

        <ul className="feature-list">
          <li>Customer supplied CAD files</li>
          <li>3D model conversion</li>
          <li>Prototype development</li>
          <li>Production-ready promotional item</li>
          <li>Fast local turnaround</li>
        </ul>
      </section>
    </main>
  );
}
