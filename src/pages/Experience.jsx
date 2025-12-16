export default function Experience() {
  return (
    <div className="mx-auto max-w-4xl p-6">
      <h2 className="text-3xl font-bold">Experience</h2>

      <div className="mt-6 space-y-8 text-gray-700">
        {/* GVSU */}
        <section>
          <h3 className="text-xl font-semibold">
            Graduate Assistant — Grand Valley State University
          </h3>
          <p className="text-sm text-gray-500">
            Jan 2025 – Present · Grand Rapids, MI
          </p>
          <ul className="mt-3 list-disc pl-6 text-gray-600 space-y-1">
            <li>
              Researched secure authentication protocols for IoHT devices using
              blockchain concepts.
            </li>
            <li>
              Built lightweight authentication algorithms and a simulator to
              evaluate performance.
            </li>
            <li>
              Designed continuous authentication flow to maintain sessions
              during data transfer.
            </li>
            <li>
              Presented findings to academic stakeholders and documented results
              clearly.
            </li>
          </ul>
        </section>

        {/* Candy Technologies */}
        <section>
          <h3 className="text-xl font-semibold">
            Senior Software Developer & Team Lead — Candy Technologies Pvt Ltd
          </h3>
          <p className="text-sm text-gray-500">
            Aug 2021 – Aug 2024 · Hyderabad, India
          </p>
          <ul className="mt-3 list-disc pl-6 text-gray-600 space-y-1">
            <li>
              Built backend microservices and scalable APIs supporting
              client-facing applications.
            </li>
            <li>
              Implemented session management + OAuth to improve authentication
              security.
            </li>
            <li>
              Redesigned backend using NestJS to improve performance and
              maintainability.
            </li>
            <li>Developed responsive front-end apps using Next.js.</li>
            <li>
              Automated deployments with CI/CD and improved reliability with
              backup workflows.
            </li>
          </ul>
        </section>

        {/* Newsclick */}
        <section>
          <h3 className="text-xl font-semibold">
            Data Engineer & Team Lead — Newsclick.in
          </h3>
          <p className="text-sm text-gray-500">
            Oct 2019 – Aug 2021 · New Delhi, India
          </p>
          <ul className="mt-3 list-disc pl-6 text-gray-600 space-y-1">
            <li>
              Built real-time dashboards (COVID-19) by integrating APIs and
              optimizing pipelines.
            </li>
            <li>
              Developed ETL pipelines and analytics dashboards to support
              decision-making.
            </li>
            <li>
              Led election maps initiative and improved site performance and
              delivery workflows.
            </li>
            <li>
              Improved database design and tuning using PostgreSQL and Python.
            </li>
          </ul>
        </section>

        {/* Vitwit */}
        <section>
          <h3 className="text-xl font-semibold">
            Software Development Engineer — Vitwit Technologies Pvt Ltd
          </h3>
          <p className="text-sm text-gray-500">
            Aug 2018 – Oct 2019 · Hyderabad, India
          </p>
          <ul className="mt-3 list-disc pl-6 text-gray-600 space-y-1">
            <li>
              Developed backend APIs with Node.js and Python for data-heavy
              applications.
            </li>
            <li>
              Implemented sentiment analysis using NLTK and improved results
              (60% → 85%).
            </li>
            <li>
              Led DevOps work: Docker, Jenkins CI/CD, and AWS-based deployments.
            </li>
          </ul>
        </section>

        {/* Jochebed */}
        <section>
          <h3 className="text-xl font-semibold">
            Trainee Engineer — Jochebed Tech Solutions
          </h3>
          <p className="text-sm text-gray-500">
            Nov 2017 – Aug 2018 · Hyderabad, India
          </p>
          <ul className="mt-3 list-disc pl-6 text-gray-600 space-y-1">
            <li>
              Built an inventory monitoring system using Django and MySQL.
            </li>
            <li>
              Improved data integrity and operational efficiency through
              automation.
            </li>
            <li>
              Used Docker for deployments and supported SDLC best practices.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
