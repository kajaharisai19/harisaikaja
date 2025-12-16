export default function Skills() {
  const sections = [
    {
      title: "Programming Languages",
      items: ["C", "JavaScript", "Python", "TypeScript", "Go", "Java", "Rust"],
    },
    {
      title: "Frameworks & Libraries",
      items: [
        "React",
        "Next.js",
        "Node.js",
        "NestJS",
        "Express",
        "Django",
        "Flask",
        "FastAPI",
        "Vue",
      ],
    },
    {
      title: "Databases",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Neo4j", "Elasticsearch"],
    },
    {
      title: "DevOps & CI/CD",
      items: ["Docker", "Kubernetes", "Terraform", "Jenkins", "GitLab CI"],
    },
    {
      title: "Cloud Platforms",
      items: ["AWS EC2", "AWS S3", "Hetzner"],
    },
    {
      title: "Testing",
      items: ["Cypress", "PyTest"],
    },
    {
      title: "Data Processing",
      items: ["Pandas", "NLTK", "ETL Pipelines"],
    },
    {
      title: "Servers & Tools",
      items: ["Nginx", "Apache", "Gunicorn", "Git (GitHub/GitLab/Bitbucket)"],
    },
    {
      title: "Methodologies",
      items: ["Agile Development", "Debugging", "Problem Solving"],
    },
  ];

  return (
    <div className="mx-auto max-w-5xl p-6">
      <h2 className="text-3xl font-bold">Skills</h2>
      <p className="mt-2 text-gray-600">
        A quick overview of the technologies and tools I work with.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {sections.map((sec) => (
          <div key={sec.title} className="rounded-xl border p-5">
            <h3 className="text-lg font-semibold">{sec.title}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {sec.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border px-3 py-1 text-sm text-gray-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
