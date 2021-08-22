import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const links = [
  { text: "FAQ", to: "/faq" },
  { text: "Feedback", to: "/feedback" },
  { text: "Explore", to: "/explore" },
];

const NavBar: React.FC = () => {
  const [showMenu, setShowMenu] = React.useState<boolean>(false);
  const router = useRouter();

  const activeClass = "text-white bg-gray-900";
  const inactiveClass = "text-black hover:text-white hover:bg-iris";

  return (
    <nav className="bg-light dark:bg-dark">
      <div className="max-w-5xl mx-auto pr-4 sm:pr-6 lg:pr-8 py-0 shadow rounded border border-gray-stroke">
        <div className="flex items-center justify-between h-20">
          <div className="w-48 flex-col justify-center flex-shrink-0 px-8 py-4 h-20 bg-iris rounded">
            <h2 className="self-center text-lg text-white">
              Passive Fund Catalogue
            </h2>
          </div>
          <div className="hidden md:block">
            <div className="hidden md:block e">
              <input
                className="placeholder-iris rounded border border-blue-100"
                placeholder="Start your search here"
              ></input>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {links.map((link, index) => (
                  <Link href={link.to}>
                    <a
                      className={`px-3 py-2 rounded-md text-black font-medium ${
                        router.pathname === link.to
                          ? activeClass
                          : inactiveClass
                      } ${index > 0 && "ml-4"}`}
                    >
                      {link.text}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            {/* Mobile menu button */}
            <button
              onClick={() => setShowMenu((prev) => !prev)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-iris focus:outline-none focus:bg-iris focus:text-white"
            >
              {/* Menu open: "hidden", Menu closed: "block" */}
              <svg
                className="block h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Menu open: "block", Menu closed: "hidden" */}
              <svg
                className="hidden h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu open: "block", Menu closed: "hidden" */}
      <div className={`md:hidden ${showMenu ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 sm:px-3">
          {links.map((link, index) => (
            <Link href={link.to}>
              <a
                className={`block px-3 py-2 rounded-md text-sm font-medium ${
                  router.pathname === link.to ? activeClass : inactiveClass
                } ${index > 0 && "mt-1"}`}
              >
                {link.text}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
