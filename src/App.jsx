import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

import profile from "./assets/profile.jpeg";

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        {/* Profile Image */}
        <img
          src={profile}
          alt="Hari Sai Kaja"
          className="mx-auto mb-6 h-40 w-40 rounded-full object-cover shadow-md"
        />

        {/* Name */}
        <h1 className="text-4xl font-bold tracking-tight">Hari Sai Kaja</h1>

        {/* Title */}
        <p className="mt-3 text-lg text-gray-600">
          Software Engineer | Graduate Student – Applied Computer Science
        </p>

        {/* Contact Info */}
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

        {/* Links */}
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
            href="https://<YOUR_PORTFOLIO_LINK>"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 border rounded-md hover:bg-gray-100"
          >
            Portfolio
          </a>
        </div>

        {/* Achievements */}
        <div className="mt-10 text-left">
          <h2 className="text-xl font-semibold text-center">Achievements</h2>

          <ul className="mt-4 list-disc pl-6 text-gray-600 space-y-2">
            <li>
              <strong>Winner – Consensus 2.0 Hackathon (2019):</strong> Built a
              blockchain-based solution focused on secure and scalable systems.
            </li>
            <li>
              <strong>
                Special Appreciation Award – Vitwit Technologies (2019):
              </strong>{" "}
              Recognized for impactful contributions to production systems.
            </li>
            <li>
              <strong>Tech Speaker:</strong> Delivered talks at 20+ national and
              international conferences on full-stack, DevOps, and open-source.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </>
  );
}
