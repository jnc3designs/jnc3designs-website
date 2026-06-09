const projects = [
  {
    title: "Bridge Plug Keychain",
    category: "CAD File to Finished Product",
    image: "/bridge-plug-flyer.jpg",
    description:
      "Customer-provided SolidWorks files were converted into a detailed 3D printed promotional keychain.",
  },
  {
    title: '2" NPT Adapter',
    category: "Custom Part Recreation",
    image: "/npt-adapter-flyer.jpg",
    description:
      "A customer supplied an existing part sample, and JNC3Designs recreated it as a functional printed replacement.",
  },
];

export default function Projects() {
  return (
    <main>
      <section className="section">
        <h1>Customer Projects</h1>

        <p style={{ opacity: 0.8, maxWidth: "900px" }}>
          See how JNC3Designs turns ideas, CAD files, sketches, and existing
          parts into finished products.
        </p>
      </section>

      <section className="section">
        <div className="project-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <img
                src={project.image}
                alt={project.title}
                className="project-img"
              />

              <div className="project-content">
                <p className="project-category">{project.category}</p>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
