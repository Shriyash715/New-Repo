
import Navbar from "@/components/Navbar";

export default function Home() {
  const skills = [
    "Java",
    "Spring Boot",
    "React.js",
    "MySQL",
    "JDBC",
    "HTML",
    "CSS",
    "JavaScript",
    "Git",
    "GitHub",
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-8 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
          Java Full Stack Developer • Spring Boot • React • MySQL
        </div>

        <h1 className="text-5xl font-bold md:text-7xl">
          Shriyash Tad
        </h1>

        <h2 className="mt-6 text-3xl font-bold text-cyan-400 md:text-5xl">
          Java Full Stack Developer Fresher
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-white/70">
          Passionate Java Full Stack Developer with hands-on experience
          building web applications using Java, Spring Boot, MySQL,
          React, HTML, CSS, and JavaScript. Developed projects including
          a Bank Management System and Study Forum application to gain
          practical full stack development experience.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-white px-6 py-3 font-medium text-black"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-cyan-500 px-6 py-3 text-cyan-300"
          >
            Download Resume
          </a>

          <a
            href="https://github.com/Shriyash715"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/20 px-6 py-3"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-4xl font-bold">Skills</h2>

        <div className="mt-8 flex flex-wrap gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 px-4 py-2"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="mx-auto max-w-6xl px-6 py-20"
      >
        <h2 className="text-4xl font-bold">Projects</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-cyan-500/20 p-6">
            <h3 className="text-2xl font-semibold">
              Bank Management System
            </h3>

            <p className="mt-3 text-white/70">
              Java, JDBC, MySQL
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-white/70">
              <li>Account Creation</li>
              <li>Deposit & Withdrawal</li>
              <li>Balance Inquiry</li>
              <li>Transaction History</li>
              <li>Database Integration using JDBC</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-purple-500/20 p-6">
            <h3 className="text-2xl font-semibold">
              Study Forum
            </h3>

            <p className="mt-3 text-white/70">
              React, Spring Boot, MySQL
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-white/70">
              <li>User Registration & Login</li>
              <li>Discussion Posts</li>
              <li>Knowledge Sharing Platform</li>
              <li>Responsive User Interface</li>
              <li>Database Management</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-4xl font-bold">Education</h2>

        <div className="mt-8 rounded-3xl border border-white/10 p-6">
          <h3 className="text-xl font-semibold">
            Bachelor of Technology (B.Tech)
          </h3>

          <p className="mt-2 text-white/70">
            Punyashlok Ahilyadevi Holkar Solapur University, Solapur.
          </p>

          <p className="mt-2 text-white/50">
            2021 - 2025
          </p>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="mx-auto max-w-6xl px-6 py-20"
      >
        <div className="rounded-3xl border border-white/10 p-8">
          <h2 className="text-3xl font-semibold">
            Contact
          </h2>

          <p className="mt-4 text-white/70">
            Pune, Maharashtra
          </p>

          <p className="text-white/70">
            tadshriyash6@gmail.com
          </p>

          <p className="text-white/70">
            +91 XXXXX XXXXX
          </p>
        </div>
      </section>
    </main>
  );
}