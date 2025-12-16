export default function About() {
  return (
    <div className="mx-auto max-w-4xl p-6">
      <h2 className="text-3xl font-bold">About Me</h2>

      <p className="mt-4 text-gray-600">
        I am a Software Engineer and Graduate Student in Applied Computer
        Science at Grand Valley State University with experience building
        full-stack applications, microservices, and data-driven systems.
      </p>

      <p className="mt-4 text-gray-600">
        My background includes backend development, cloud infrastructure,
        DevOps, and security-focused research in IoT and IoHT systems. I have
        worked in production environments across fintech, data engineering, and
        research domains.
      </p>

      <h3 className="mt-8 text-2xl font-semibold">Education</h3>
      <ul className="mt-3 list-disc pl-6 text-gray-600">
        <li>
          <strong>M.S. Applied Computer Science</strong>, Grand Valley State
          University (GPA: 3.85)
        </li>
        <li>
          <strong>B.Tech Electronics & Communication Engineering</strong>, JNTU
          Hyderabad
        </li>
      </ul>

      <h3 className="mt-8 text-2xl font-semibold">Technical Skills</h3>
      <p className="mt-3 text-gray-600">
        JavaScript, Python, TypeScript, React, Node.js, NestJS, Django, AWS,
        Docker, Kubernetes, PostgreSQL, MongoDB, CI/CD, DevOps
      </p>

      <h3 className="mt-10 text-2xl font-semibold">
        Volunteering & Community Involvement
      </h3>

      <div className="mt-4 space-y-6 text-gray-600">
        <div>
          <h4 className="text-lg font-semibold">
            Python Software Foundation — Managing Member
          </h4>
          <p className="text-sm text-gray-500">Mar 2021 – Present</p>
          <p className="mt-2">
            Contributed to the Python open-source ecosystem by validating
            upstream contributions into pip packages and supporting
            community-driven development initiatives.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold">
            Free Software Movement of India (Swecha) — Executive Committee
            Member
          </h4>
          <p className="text-sm text-gray-500">May 2014 – Aug 2024</p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>
              Led major tech events including PyConf Hyderabad and Full Stack
              Developer Meetups.
            </li>
            <li>
              Organized workshops and hackathons engaging 300+ participants.
            </li>
            <li>
              Guided open-source projects such as Fake News Detection, AgriTech
              platforms, CoWIN Translator, and Telugu LLM (Swecha Gonthuka).
            </li>
            <li>
              Mentored students and developers, fostering collaboration across
              2,000+ members.
            </li>
            <li>
              Spoke at national and international conferences on open-source and
              full-stack topics.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
