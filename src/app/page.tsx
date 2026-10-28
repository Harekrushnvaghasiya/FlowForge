export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
        minHeight: "100vh",
      }}
      className="flex flex-col"
    >
      {/* Top Navigation Bar */}
      <header
        style={{
          borderColor: "var(--border-primary)",
          backgroundColor: "var(--bg-white-60)",
        }}
        className="w-full border-b backdrop-blur-md sticky top-0 z-50 px-6 py-4 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <div
            style={{ backgroundColor: "var(--bg-wine-red)" }}
            className="w-8 h-8 rounded-md flex items-center justify-center text-white font-bold text-sm tracking-wider"
          >
            FF
          </div>
          <span
            style={{ color: "var(--text-wine-red)" }}
            className="font-bold text-xl tracking-tight"
          >
            FlowForge
          </span>
        </div>

        <div className="flex items-center gap-4 text-sm font-medium">
          <span className="flex items-center gap-2 px-3 py-1 rounded-full text-xs" style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border-primary)" }}>
            <span
              style={{ backgroundColor: "var(--status-dot)" }}
              className="w-2 h-2 rounded-full inline-block animate-pulse"
            />
            v0.1.0 • Ready
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <main
        style={{
          paddingLeft: "var(--horizontal-padding)",
          paddingRight: "var(--horizontal-padding)",
          paddingTop: "var(--vertical-half-padding)",
          paddingBottom: "var(--vertical-padding)",
        }}
        className="flex-1 flex flex-col items-center justify-center text-center max-w-6xl mx-auto w-full"
      >
        {/* Status Badge */}
        <div
          style={{
            backgroundColor: "var(--bg-secondary)",
            borderColor: "var(--border-primary)",
            color: "var(--text-secondary)",
          }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border mb-8 shadow-xs"
        >
          <span
            style={{ color: "var(--orange)" }}
            className="font-semibold"
          >
            Full-Stack Next.js Application
          </span>
          <span>•</span>
          <span>Turbopack & TypeScript</span>
        </div>

        {/* Main Heading */}
        <h1
          style={{
            fontSize: "var(--font-size-h1)",
            lineHeight: "var(--line-height-h1)",
            fontWeight: "var(--font-weight-bold)",
            color: "var(--text-primary)",
          }}
          className="tracking-tight max-w-4xl"
        >
          Welcome to{" "}
          <span style={{ color: "var(--text-wine-red)" }}>FlowForge</span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "var(--font-size-body-lg)",
            lineHeight: "var(--line-height-body-lg)",
            color: "var(--text-secondary)",
          }}
          className="mt-6 max-w-2xl font-normal"
        >
          A full-stack project built with Next.js App Router, TypeScript, Yarn,
          and a customized design token system ready for scalable development.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#features"
            style={{
              backgroundColor: "var(--wine-red)",
              color: "var(--text-white)",
              borderRadius: "var(--radius-4)",
            }}
            className="px-6 py-3.5 text-base font-medium shadow-sm transition-opacity hover:opacity-90 cursor-pointer"
          >
            Explore Architecture
          </a>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "var(--bg-secondary)",
              borderColor: "var(--border-primary)",
              color: "var(--text-primary)",
              borderRadius: "var(--radius-4)",
            }}
            className="px-6 py-3.5 text-base font-medium border transition-colors hover:bg-black/5"
          >
            Next.js Documentation →
          </a>
        </div>

        {/* Architecture Highlights Grid */}
        <section id="features" className="mt-20 w-full grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div
            style={{
              backgroundColor: "var(--bg-secondary)",
              borderColor: "var(--border-primary)",
              borderRadius: "var(--radius-8)",
              boxShadow: "var(--box-shadow)",
            }}
            className="p-6 border transition-shadow hover:shadow-[var(--box-shadow-secondary)]"
          >
            <div
              style={{ backgroundColor: "var(--bg-linen-white)", color: "var(--wine-red)" }}
              className="w-10 h-10 rounded-md flex items-center justify-center font-bold text-lg mb-4"
            >
              ⚡
            </div>
            <h2
              style={{
                fontSize: "var(--font-size-h5)",
                lineHeight: "var(--line-height-h5)",
                fontWeight: "var(--font-weight-semibold)",
                color: "var(--text-primary)",
              }}
            >
              Frontend Experience
            </h2>
            <p
              style={{
                fontSize: "var(--font-size-body-xs)",
                lineHeight: "var(--line-height-body-xs)",
                color: "var(--text-secondary)",
              }}
              className="mt-2"
            >
              Interactive and responsive UI powered by React 19, Tailwind CSS v4, and Figtree typography.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "var(--bg-secondary)",
              borderColor: "var(--border-primary)",
              borderRadius: "var(--radius-8)",
              boxShadow: "var(--box-shadow)",
            }}
            className="p-6 border transition-shadow hover:shadow-[var(--box-shadow-secondary)]"
          >
            <div
              style={{ backgroundColor: "var(--bg-linen-white)", color: "var(--wine-red)" }}
              className="w-10 h-10 rounded-md flex items-center justify-center font-bold text-lg mb-4"
            >
              🛠️
            </div>
            <h2
              style={{
                fontSize: "var(--font-size-h5)",
                lineHeight: "var(--line-height-h5)",
                fontWeight: "var(--font-weight-semibold)",
                color: "var(--text-primary)",
              }}
            >
              Full-Stack Backend
            </h2>
            <p
              style={{
                fontSize: "var(--font-size-body-xs)",
                lineHeight: "var(--line-height-body-xs)",
                color: "var(--text-secondary)",
              }}
              className="mt-2"
            >
              App Router server actions, route handlers, and API endpoints with zero-config TypeScript strictness.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "var(--bg-secondary)",
              borderColor: "var(--border-primary)",
              borderRadius: "var(--radius-8)",
              boxShadow: "var(--box-shadow)",
            }}
            className="p-6 border transition-shadow hover:shadow-[var(--box-shadow-secondary)]"
          >
            <div
              style={{ backgroundColor: "var(--bg-linen-white)", color: "var(--wine-red)" }}
              className="w-10 h-10 rounded-md flex items-center justify-center font-bold text-lg mb-4"
            >
              🎨
            </div>
            <h2
              style={{
                fontSize: "var(--font-size-h5)",
                lineHeight: "var(--line-height-h5)",
                fontWeight: "var(--font-weight-semibold)",
                color: "var(--text-primary)",
              }}
            >
              Tokenized Design
            </h2>
            <p
              style={{
                fontSize: "var(--font-size-body-xs)",
                lineHeight: "var(--line-height-body-xs)",
                color: "var(--text-secondary)",
              }}
              className="mt-2"
            >
              Comprehensive style guide with wine-red accents, responsive layout tokens, and accessibility standards.
            </p>
          </div>
        </section>

        {/* Tech Stack Footer Pills */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-2">
          {["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Yarn", "Turbopack"].map((tech) => (
            <span
              key={tech}
              style={{
                backgroundColor: "var(--bg-secondary)",
                borderColor: "var(--border-secondary)",
                color: "var(--text-secondary)",
                borderRadius: "var(--radius-4)",
              }}
              className="px-3 py-1 text-xs font-mono border"
            >
              {tech}
            </span>
          ))}
        </div>
      </main>
    </div>
  );
}
