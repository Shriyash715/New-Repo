import Navbar from "@/components/Navbar";

export default function Home() {
  const coreSkills = [
    "Java",
    "Spring Boot",
    "React.js",
    "Angular",
    "JWT / RBAC",
    "MySQL",
    "Docker",
    "JUnit 5",
  ];

  return (
    <main className="min-h-screen bg-black text-white bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.15),transparent_25%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.15),transparent_25%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.10),transparent_30%)]">
      <Navbar />

      <section className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10">
        <div className="mb-8 inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur">
          Java Full Stack Developer • Spring Boot • React • Angular
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Shriyash Tad
            </h1>

            <h2 className="mt-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
              Building secure, scalable full stack applications.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
              Java Full Stack Developer with 2.1+ years of experience in banking
              and financial applications. I build secure REST APIs, responsive UI
              screens, and reliable backend systems using Spring Boot, React.js,
              Angular, JWT authentication, and MySQL.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#experience"
                className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:scale-[1.02]"
              >
                View Experience
              </a>

              <a
                href="#projects"
                className="rounded-full border border-white/20 px-6 py-3 font-medium text-white transition hover:bg-white/10"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 font-medium text-cyan-300 transition hover:bg-cyan-500/20"
              >
                Download Resume
              </a>

              <a
                href="https://github.com/Shriyash715"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-6 py-3 font-medium text-white transition hover:bg-white/10"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-sm uppercase tracking-[0.3em] text-white/50">
              Core Skills
            </h3>

            <div className="mt-5 flex flex-wrap gap-3">
              {coreSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/80"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5">
              <div className="text-sm text-cyan-200/80">Current Focus</div>
              <p className="mt-2 text-sm leading-6 text-white/80">
                Secure REST APIs, role-based access control, database optimization,
                and clean frontend integration for enterprise-grade web apps.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10">
        <h2 className="text-4xl font-bold">Skills</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-xl font-semibold text-cyan-300">Backend</h3>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Java, Spring Boot, Spring MVC, Spring Data JPA, Hibernate, REST APIs
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-xl font-semibold text-purple-300">Frontend</h3>
            <p className="mt-3 text-sm leading-6 text-white/70">
              React.js, Angular, HTML5, CSS3, Bootstrap 5, TypeScript
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-xl font-semibold text-blue-300">Security</h3>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Spring Security, JWT Authentication, OAuth2, RBAC
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-xl font-semibold text-cyan-300">Database</h3>
            <p className="mt-3 text-sm leading-6 text-white/70">
              MySQL, PostgreSQL, Redis, Schema Design, Query Optimization
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-xl font-semibold text-purple-300">DevOps</h3>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Docker, Git, GitHub, Jenkins, Maven
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-xl font-semibold text-blue-300">
              Testing &amp; Tools
            </h3>
            <p className="mt-3 text-sm leading-6 text-white/70">
              JUnit 5, Mockito, Postman, Swagger/OpenAPI, IntelliJ IDEA, VS Code
            </p>
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10"
      >
        <h2 className="text-4xl font-bold">Experience</h2>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-semibold">
                Java Full Stack Developer
              </h3>
              <p className="text-white/60">
                Sofrego Pvt. Ltd. • Pune, Maharashtra
              </p>
            </div>
            <p className="text-white/50">April 2024 – Present</p>
          </div>

          <ul className="mt-6 space-y-3 text-white/70">
            <li>• Designed and developed modular backend services using Spring Boot.</li>
            <li>• Built secure REST APIs with validation and centralized exception handling.</li>
            <li>• Implemented JWT authentication and RBAC using Spring Security.</li>
            <li>• Developed frontend modules using React.js and Angular.</li>
            <li>• Worked on transaction management, query optimization, Docker, and testing.</li>
          </ul>
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10"
      >
        <h2 className="text-4xl font-bold">Projects</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-2xl font-semibold">NexLedger</h3>
            <p className="mt-3 text-white/70">
              Core Banking Account &amp; Transaction Management System
            </p>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Secure banking project with account creation, fund transfer,
              balance inquiry, transaction history, JWT-based authentication,
              RBAC, React dashboard, MySQL schema, Docker, JUnit 5, and Mockito.
            </p>
          </div>

          <div className="rounded-3xl border border-purple-500/20 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-2xl font-semibold">StudyHive</h3>
            <p className="mt-3 text-white/70">
              Online Study Discussion &amp; Knowledge Sharing Platform
            </p>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Knowledge-sharing platform built with Spring Boot and Angular,
              featuring login, role-based access, posts, comments, upvoting,
              tags, pagination, and reactive UI components.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10">
        <h2 className="text-4xl font-bold">Education</h2>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h3 className="text-xl font-semibold">
            Bachelor of Technology (B.Tech)
          </h3>

          <p className="mt-2 text-white/70">
            Punyashlok Ahilyadevi Holkar Solapur University
          </p>

          <p className="mt-2 text-white/50">2021 – 2025</p>

          <div className="mt-5 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            Certified Java Full Stack Developer
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10"
      >
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <h2 className="text-3xl font-semibold">Contact</h2>
          <p className="mt-4 text-white/70">
            Pune, Maharashtra • tadshriyash19@gmail.com • +91 77209 14917
          </p>
        </div>
      </section>
    </main>
  );
}