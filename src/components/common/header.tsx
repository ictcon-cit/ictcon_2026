"use client";

import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname } from "next/navigation";

/* ============================
   TYPES
   ============================ */
interface NavItem {
  href: string;
  label: string;
  external?: boolean;
}

interface NavLink {
  href?: string;
  label: string;
  external?: boolean;
  dropdown?: boolean;
  items?: NavItem[];
}

/* ============================
   NAVIGATION DATA
   ============================ */
const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/dates", label: "Important Dates" },
  {
    dropdown: true,
    label: "Call for Papers",
    items: [
      { href: "/papers", label: "Call for Papers" },
      {
        href: "https://ictcon2025workshop.cit.ac.in/",
        label: "Workshop",
        external: true,
      },
    ],
  },
  { href: "/submission", label: "Paper Submission" },
  { href: "/committee", label: "Committee" },
  { href: "/speakers", label: "Speakers" },
  { href: "/registration", label: "Registration" },
  { href: "/schedule", label: "Program Schedule" },
  {
    dropdown: true,
    label: "Previous Editions",
    items: [
      {
        href: "https://ictcon2025.cit.ac.in/",
        label: "ICTCon 2025",
        external: true,
      },
      {
        href: "https://ictcon2024.cit.ac.in/",
        label: "ICTCon 2024",
        external: true,
      },
    ],
  },
];

/* ============================
   HEADER COMPONENT
   ============================ */
export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div>
      {/* ================= Desktop Navbar ================= */}
      <div className="sm:block hidden">
        <div className="fixed top-0 left-0 w-full z-50 h-24 bg-gradient-linear flex font-ubuntu">
          <div className="flex items-center justify-around px-3">
            <div className="flex justify-center items-center">
              <img
                src="/images/icons/ictlogo2.png"
                alt="ICTCon Logo"
                className="rounded-full overflow-hidden md:h-[5.5rem] md:w-[5.5rem] sm:h-10 sm:w-10 h-8 w-8"
              />
            </div>
            <div className="w-54 p-2 sm:text-xl md:text-xl font-bold">
              <span className="text-white">ICTCon2025</span>
            </div>
          </div>

          <div className="flex font-bold md:text-base sm:text-sm text-xs justify-between items-center gap-2">
            {navLinks.map((link, index) => {
              /* ---------- Dropdown ---------- */
              if (link.dropdown && link.items) {
                return (
                  <div key={index} className="relative group">
                    <button className="px-3 rounded-md text-white h-12 flex items-center hover:bg-blue-700 font-bold">
                      {link.label}
                      <svg
                        className="ml-1 w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    <div className="absolute left-0 top-full w-44 bg-white rounded-md shadow-lg z-50 hidden group-hover:block">
                      {link.items.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          target={item.external ? "_blank" : "_self"}
                          rel={item.external ? "noopener noreferrer" : undefined}
                          className="block px-4 py-2 text-black hover:bg-blue-100 hover:text-blue-700 rounded-md"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              /* ---------- Normal Link ---------- */
              if (link.href) {
                return (
                  <Link
                    key={index}
                    href={link.href}
                    target={link.external ? "_blank" : "_self"}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className={`px-3 rounded-md text-white h-12 flex items-center ${
                      pathname === link.href
                        ? "bg-blue-700"
                        : "hover:bg-blue-700"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              }

              return null;
            })}
          </div>
        </div>
      </div>

      {/* ================= Mobile Navbar ================= */}
      <div className="sm:hidden block">
        <div className="fixed top-0 left-0 w-full z-50 h-16 bg-gradient-linear flex justify-between px-3">
          <div className="flex items-center gap-2">
            <img
              src="/images/icons/ictlogo.png"
              alt="ICTCon Logo"
              className="rounded-full h-10 w-10"
            />
            <span className="text-white text-xl font-bold">ICTCon2025</span>
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
            {navLinks.map((link, index) => {
              if (link.dropdown && link.items) {
                return (
                  <div key={index}>
                    <p className="mb-2">{link.label}</p>
                    {link.items.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        target={item.external ? "_blank" : "_self"}
                        rel={
                          item.external ? "noopener noreferrer" : undefined
                        }
                        className="block ml-4 py-1 hover:underline"
                        onClick={() => setNavbarOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                );
              }

              if (link.href) {
                return (
                  <Link
                    key={index}
                    href={link.href}
                    target={link.external ? "_blank" : "_self"}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="py-2 hover:underline"
                    onClick={() => setNavbarOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              }

              return null;
            })}
          </div>
        )}
      </div>
    </div>
  );
}
