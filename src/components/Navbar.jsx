export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-black text-xl font-bold">
          Portofolio
        </h1>

        <div className="hidden md:flex gap-8 text-black">
          <a href="#about">Tentang</a>
          <a href="#skills">Keahlian</a>
          <a href="#projects">Portofolio</a>
          <a href="#contact">Kontak</a>
        </div>

      </div>
    </nav>
  );
}