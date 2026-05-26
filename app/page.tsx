const accent = "#3b82f6";

const features = [
  "Structured intent capture",
  "Editable architecture plan",
  "Full-stack code generation",
  "Verified, runnable output",
];

export default function Home() {
  return (
    <main style={{ "--accent": accent } as React.CSSProperties}>
      <span className="pill">
        <span className="dot" /> In development
      </span>
      <h1>v1-builder</h1>
      <p className="tagline">
        An AI tool that turns a product idea into a coherent, working v1 —
        frontend, backend, database, tests, and CI, with decisions you can
        override.
      </p>
      <ul className="features">
        {features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <footer>
        <span>By Jamison Kimminau</span>
        <a href="https://github.com/jkimminau/v1-builder">View on GitHub →</a>
      </footer>
    </main>
  );
}
