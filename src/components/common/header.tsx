"use client";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/dates", label: "Important Dates" },
  { href: "/papers", label: "Call for Papers" },
  { href: "/submission", label: "Paper Submission" },
  { href: "/committee", label: "Committee" },
  { href: "/speakers", label: "Speakers" },
  { href: "/registration", label: "Registration" },
  { href: "/schedule", label: "Program Schedule" },
  {
    href: "https://ictcon2021.cit.ac.in/",
    label: "ICTCon 2021",
    external: true,
  },
];

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div>
      <div className="sm:block hidden">
        <div className="fixed top-0 left-0 w-full z-50 h-24 bg-gradient-linear flex font-ubuntu">
          <div className="flex items-center justify-around px-3">
            <div className="flex justify-center items-center">
              <img
                src="/images/icons/ictlogo2.png"
                alt="MapleTree"
                className="rounded-full overflow-hidden md:h-[5.5rem] md:w-[5.5rem] sm:h-10 sm:w-10 h-8 w-8"
              />
            </div>
            <div className="w-54 p-2 sm:text-xl md:text-xl font-bold">
              <span className="text-white font-ubuntu">ICTCon2025</span>
            </div>
          </div>

          <div className="flex font-bold md:text-base sm:text-sm text-xs justify-between items-center gap-2 justify-self-end">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                className={`px-3 rounded-md text-white w-fit h-12 flex items-center justify-center ${
                  pathname === link.href
                    ? "bg-blue-700 border-white"
                    : "hover:bg-blue-700 hover:border-white"
                }`}
                href={link.href}
                target={link.external ? "_blank" : "_self"}
                onClick={() => link.external && setNavbarOpen(!navbarOpen)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="sm:hidden block">
        <div className="fixed top-0 left-0 w-full z-50 h-16 bg-gradient-linear flex justify-between font-ubuntu px-3">
          <div className="flex items-center justify-around p-3">
            <div className="flex justify-center items-center">
              <img
                src="/images/icons/ictlogo.png"
                alt="MapleTree"
                className="rounded-full overflow-hidden h-10 w-10"
              />
            </div>
            <div className="w-54 p-1 text-xl font-bold">
              <span className="text-white font-ubuntu">ICTCon2025</span>
            </div>
          </div>

          <button
            className="text-3xl text-white"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <GiHamburgerMenu />
          </button>
        </div>
        {navbarOpen && (
          <div className="bg-gradient-linear flex flex-col fixed top-16 w-full p-5 font-bold z-50 text-white">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                className={`mx-1 p-2 rounded-md text-white ${
                  pathname === link.href
                    ? "border-b-2 border-white"
                    : "hover:border-b-2 hover:border-white"
                }`}
                href={link.href}
                target={link.external ? "_blank" : "_self"}
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
