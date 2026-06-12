export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <div className="text-lg font-semibold text-white">
          Shriyash Tad
        </div>

        <nav className="flex gap-6 text-sm text-white/70">
          <a href="#projects" className="hover:text-white">
            Projects
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}