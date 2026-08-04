export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-zinc-800/50 bg-[#0d0d0d]/70 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">

        {/* Logo */}
        <a
          href="#"
          className="font-mono text-lg font-semibold tracking-wide transition hover:text-white"
        >
          {"<TaHooR/>"}
        </a>

        {/* Links */}
        <ul className="hidden gap-8 text-sm text-zinc-400 md:flex">
          <li>
            <a href="#about" className="transition hover:text-white">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
          </li>

          <li>
            <a href="#experience" className="transition hover:text-white">
              Experience
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}