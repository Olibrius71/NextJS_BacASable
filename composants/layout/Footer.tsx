import Link from "next/link";
import Logo from "../ui/Logo";

export default function Footer() {
  return (
    <footer className="px-6 py-12">
      <Logo />
      <nav className="mt-8">
        <ul className="flex flex-col gap-2 text-button">
          <li>
            <Link href="/websites">Voir les sites web</Link>
          </li>
          <li>
            <Link href="/pages/mentionss">Mentions Légales</Link>
          </li>
          <li>
            <Link href="/pages/contacts">Contact</Link>
          </li>
          <li>
            <button>Gestion des cookies</button>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
