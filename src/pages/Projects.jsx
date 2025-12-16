export default function Projects() {
  return (
    <div className="mx-auto max-w-4xl p-6">
      <h2 className="text-3xl font-bold">Projects & Experience</h2>

      <div className="mt-6 space-y-6 text-gray-600">
        <div>
          <h3 className="text-xl font-semibold">
            IoHT Lightweight Authentication Research
          </h3>
          <p>
            Designed and simulated lightweight and continuous authentication
            protocols for IoHT devices using blockchain concepts under Dr. Samah
            Mansour.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">
            Fintech Microservices Platform (Candy Technologies)
          </h3>
          <p>
            Built scalable backend services with NestJS and OAuth-based
            authentication, optimized SQL queries, and implemented CI/CD
            pipelines for production systems.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">
            Real-Time Data Dashboards (Newsclick)
          </h3>
          <p>
            Developed ETL pipelines and real-time dashboards for COVID-19 and
            election data using Python, PostgreSQL, and API integrations.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">
            Sentiment Analysis Platform (Vitwit Technologies)
          </h3>
          <p>
            Implemented NLP-based sentiment analysis using NLTK, improving model
            performance from 60% to 85%.
          </p>
        </div>
      </div>
    </div>
  );
}
