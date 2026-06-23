import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import PushPinIcon from "@mui/icons-material/PushPin";

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full bg-white px-6 py-3 border-b border-gray-200">

      {/* 1. GAUCHE : Logo .COM + Texte */}
      <div className="flex items-center gap-4">
        {/* Ton image située dans public/thumbnail.png */}
        <Image
          src="/thumbnail.png"
          alt="Logo .COM"
          width={80}
          height={30}
          className="object-contain"
          priority
        />
        <span className="text-sm font-bold text-gray-900 whitespace-nowrap">
          Site web
        </span>
      </div>

      {/* 2. MILIEU : Barre de recherche */}
      <div className="flex-grow max-w-4xl mx-6">
        <div className="flex items-center gap-2 bg-[#f3f3f3] px-3 py-2 rounded-lg text-gray-500 w-full">
          <SearchIcon style={{ fontSize: "20px" }} className="text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher par tags"
            className="bg-transparent border-none outline-none w-full text-sm text-gray-700 placeholder-gray-400"
          />
        </div>
      </div>

      {/* 3. DROITE : Compteur Épingles + Langues */}
      <div className="flex items-center gap-4 text-gray-700">

        {/* Compteur et icône Pin */}
        <div className="flex items-center gap-1 text-sm font-medium">
          <span>13</span>
          <PushPinIcon style={{ fontSize: "18px" }} className="text-gray-600" />
        </div>

        {/* Bouton de Langue (EN | FR) */}
        <div className="border border-gray-900 rounded px-2 py-1 text-xs font-semibold cursor-pointer tracking-wider">
          <span>EN</span>
          <span className="text-gray-300 mx-1">|</span>
          <span className="text-gray-400">FR</span>
        </div>

      </div>

    </header>
  );
}