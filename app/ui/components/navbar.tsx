import { SignedIn, UserButton, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import Logo from "@/app/ui/logos/dpmedia-logo.jpg";
import Image from "next/image";

interface NavLink {
  label: string;
  route: string;
}

const navLinks: NavLink[] = [
  { label: "Hip-Hop", route: "/hip-hop" },
  { label: "Country", route: "/country" },
  { label: "Rock", route: "/rock" },
  { label: "EDM", route: "/edm" },
  { label: "Artist Spotlight", route: "/artists" },
];

export default function Navbar() {
  return (
    <nav className="navbar h-32 bg-black/20 p-4 mb-4">
      <div className="navbar-start mb-20 mt-6">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            {/* Hamburger Icon */}
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 font-semibold rounded-box w-full"
          >
            {navLinks.map((link) => (
              <li key={link.route}>
                <Link href={link.route} className="link link-hover">
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-4 lg:hidden">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered w-full"
                />
              </div>
            </li>
          </ul>
        </div>
        <Link href={"/"} className="btn bg-transparent no-animation btn-link ">
          <Image
            src={Logo}
            alt="The Dead Party Playlist"
            className="h-32 w-32"
          />
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
        <div className="form-control mr-2 hidden lg:flex">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div>
        <div className="hidden lg:flex">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton
              mode="modal"
              className="btn bg-red-900 hover:btn-success"
            />
          </SignedOut>
        </div>
        {/* Mobile view for Signed In/Out*/}
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal" className="btn btn-ghost" />
            </SignedOut>
          </label>
          {/* User dropdown contents */}
        </div>
      </div>
    </nav>
  );
}
