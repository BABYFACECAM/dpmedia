import { SignedIn, UserButton, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";

interface NavLink {
  label: string;
  route: string;
}

const navLinks: NavLink[] = [
  { label: "Hip-Hop", route: "/hip-hop" },
  { label: "Country", route: "/country" },
  { label: "Rock", route: "/rock" },
  { label: "EDM", route: "/edm" },
  { label: "Artist Spotlight", route: "/artist-spotlight" },
];

export default function Navbar() {
  return (
    <nav className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-56 lg:p-0"
          >
            {navLinks.map((link) => (
              <li key={link.route}>
                <Link href={link.route}>{link.label}</Link>
              </li>
            ))}
            <li className="pt-4">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered"
                />
              </div>
            </li>
          </ul>
        </div>
        <Link href={"/"} className="btn btn-ghost text-xl text-red-900">
          Dead Party Media
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {navLinks.map((link) => (
            <li key={link.route}>
              <Link href={link.route}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="hidden lg:flex">
          <div className="form-control mr-2">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal" className="btn btn-warning" />
          </SignedOut>
        </div>
        {/* Mobile view for Signed In/Out*/}
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal" className="btn btn-warning" />
            </SignedOut>
          </label>
          {/* User dropdown contents */}
        </div>
      </div>
    </nav>
  );
}
