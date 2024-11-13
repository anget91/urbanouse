import { useState } from "react";
import { Menu, X } from "lucide-react";
import UrbanouseIcon from "../assets/urbanouse.svg";

export function Nav() {
  // Estado para controlar el menú móvil
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="flex justify-between px-10 py-7 items-center w-full z-20">
      {/* Logo */}
      <a href="/" className="flex items-center gap-2">
        <img src={UrbanouseIcon} alt="Urbanouse logo" loading="eager" width={30} height={30} title="Urbanouse" />
        <strong className="text-2xl flex">Urbanouse</strong>
      </a>

      {/* Menú de navegación para pantallas grandes */}
      <nav className="hidden lg:flex gap-6 text-black/60 font-medium">
        <a href="/" className="text-black">
          Home
        </a>
        <a href="/about" className="hover:text-black">
          About Us
        </a>
        <a href="/agents" className="hover:text-black">
          Agents
        </a>
        <a href="/collection" className="hover:text-black">
          Collection
        </a>
        <a href="/building" className="hover:text-black">
          Building
        </a>
        <a href="/services" className="hover:text-black">
          Services
        </a>
      </nav>

      {/* Botón de Contacto para pantallas grandes */}
      <button className="px-5 py-3 bg-primary text-white rounded-full hidden lg:block">
        Contact Us
      </button>

      {/* Menú móvil */}
      <div className="lg:hidden">
        <button
          className="focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {/* Alternar entre ícono de menú y cerrar */}
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú desplegable para pantallas móviles */}
      {isMobileMenuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-white text-black/60 p-5 flex flex-col gap-6 items-center shadow-md lg:hidden font-medium">
          <a href="/" className="text-black">
            Home
          </a>
          <a href="/about" className="hover:text-black">
            About Us
          </a>
          <a href="/agents" className="hover:text-black">
            Agents
          </a>
          <a href="/collection" className="hover:text-black">
            Collection
          </a>
          <a href="/building" className="hover:text-black">
            Building
          </a>
          <a href="/services" className="hover:text-black">
            Services
          </a>
          <button className="px-5 py-3 bg-primary text-white rounded-full text-sm">
            Contact Us
          </button>
        </nav>
      )}
    </header>
  );
}
