import { useState } from "react";
import { Link } from "react-router-dom";
import HootLogo from "./HootLogo";

export default function NavBar() {
  const [mobMenuOpen, setMobMenuOpen] = useState(false);

  return (
    <div className="flex justify-center mt-4 mb-10">
      <nav className="flex justify-between items-end w-10/12 rounded-lg">
        <div className="flex items-center gap-3">
          <HootLogo />
        </div>

        {/*  Desktop nav items */}
        <div className="hidden md:flex gap-6  [&>a]:text-text-primary [&>a]:hover:text-primary [&>a]:font-medium">
          <Link to="/">
            <a>Home</a>
          </Link>
          <a href="">Games</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </div>

        {/* Hamburger */}
        <div
          className="md:hidden px-4"
          onClick={() => {
            setMobMenuOpen(!mobMenuOpen);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </div>

        {/* Mob menu */}
        {mobMenuOpen && (
          <div className="absolute w-10/12 min-h-screen top-15 bg-background md:hidden">
            <div className="flex flex-col gap-4 py-4 [&>a]:hover:text-primary [&>a]:font-medium">
              <a href="">Games</a>
              <a href="">About</a>
              <a href="">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
