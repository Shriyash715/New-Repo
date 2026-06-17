
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
   <main className="min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-8 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
          Java Full Stack Developer • Spring Boot • React • MySQL
        </div>

        <h1 className="text-5xl font-bold md:text-7xl">
         <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold">
  Shriyash Tad
</span>
        </h1>

        <h2 className="mt-6 text-3xl font-bold text-cyan-400 md:text-5xl">
        Aspiring Java Full Stack Developer
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-white/70">
          Java Full Stack Developer with strong knowledge of Core Java, JDBC, Spring Boot,
Hibernate, MySQL, React.js, HTML, CSS, and JavaScript. Developed full-stack web
applications and REST APIs using Spring Boot, React.js, and MySQL through academic and
personal projects. Skilled in OOP concepts, database management, and problem-solving.
Passionate about building scalable applications and eager to contribute to a dynamic
software development team.
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
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills</h2>

        <div className="mt-8 flex flex-wrap gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 transition-all duration-300 hover:scale-105 hover:border-cyan-400"
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
          <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]">
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

          <div className="rounded-3xl border border-purple-500/20 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]">
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
            Contact Information
          </h2>

          <p className="text-white/70">
            tadshriyash6@gmail.com
          </p>

          <p className="text-white/70">
            +91 9665811404
          </p>

           <p className="mt-4 text-white/70">
            Pune, Maharashtra, India
          </p>
        </div>
      </section>
    </main>
  );
}