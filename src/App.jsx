import Navbar from "./components/Navbar";
import profile from "./assets/profile.jpeg";

import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Publications from "./pages/Publications";

function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`scroll-mt-24 ${className}`}>
      {children}
    </section>
  );
}

function HomeSection() {
  return (
    <div className="min-h-[65vh] flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <img
          src={profile}
          alt="Hari Sai Kaja"
          className="mx-auto mb-6 h-40 w-40 rounded-full object-cover shadow-md"
        />

        <h1 className="text-4xl font-bold tracking-tight">Hari Sai Kaja</h1>
        <p className="mt-3 text-lg text-gray-600">
          Software Engineer | Graduate Student – Applied Computer Science
        </p>

        <div className="mt-4 text-sm text-gray-600 space-y-1">
          <p>📍 Grand Rapids, Michigan</p>
          <p>📞 (616) 228-3449</p>
          <p>
            📧{" "}
            <a
              href="mailto:kaja.harisai19@gmail.com"
              className="text-blue-600 hover:underline"
            >
              kaja.harisai19@gmail.com
            </a>
          </p>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm font-medium">
          <a
            href="https://www.linkedin.com/in/kajaharisai/"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 border rounded-md hover:bg-gray-100"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/kajaharisai19"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 border rounded-md hover:bg-gray-100"
          >
            GitHub
          </a>

          <a
            href="https://harisaikaja.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 border rounded-md hover:bg-gray-100"
          >
            Portfolio
          </a>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Navbar />

      <Section id="home">
        <HomeSection />
      </Section>

      <Section id="about" className="py-12">
        <About />
      </Section>

      <Section id="skills" className="py-12">
        <Skills />
      </Section>

      <Section id="experience" className="py-12">
        <Experience />
      </Section>

      <Section id="projects" className="py-12 min-h-[60vh]">
        <Projects />
      </Section>

      <Section id="publications" className="py-12 min-h-[70vh]">
        <Publications />
      </Section>
    </div>
  );
}
