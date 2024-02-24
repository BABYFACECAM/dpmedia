import Image from "next/image";
import Link from "next/link";
import threadsLogo from "@/app/ui/logos/threads-logo-wordmark-white.png";
import spotifyLogo from "@/app/ui/logos/Spotify_Logo_RGB_Green.png";
import igLogo from "@/app/ui/logos/Instagram_Glyph_Gradient.svg";

export default function Footer() {
  return (
    <footer className="footer p-10 bg-base-100 text-red-900 font-bold">
      <nav>
        <h5 className="footer-title">Genres</h5>
        <Link href={"/hiphop"} className="link link-hover">
          Hip-Hop
        </Link>
        <Link href={"/edm"} className="link link-hover">
          EDM
        </Link>
        <Link href={"/rock"} className="link link-hover">
          Rock
        </Link>
        <Link href={"/country"} className="link link-hover">
          Country
        </Link>
      </nav>
      <nav>
        <h5 className="footer-title font-extrabold ">Company</h5>
        <Link href={"/about"} className="link link-hover">
          About us
        </Link>
        <Link href={"/contact"} className="link link-hover">
          Contact
        </Link>
        <Link href={"/jobs"} className="link link-hover">
          Jobs
        </Link>
        <Link href={"/submissions"} className="link link-hover">
          Submit Music Here
        </Link>
      </nav>
      <nav>
        <h5 className="footer-title font-extrabold ">Our Playlists</h5>
        <Link href={"/about"} className="link link-hover">
          The Arkansas Music Playlist
        </Link>
        <Link href={"/contact"} className="link link-hover">
          Locals Only Hip-Hop Playlist
        </Link>
        <Link href={"/jobs"} className="link link-hover hidden">
          Jobs
        </Link>
        <Link href={"/submissions"} className="link link-hover hidden">
          Submit Music Here
        </Link>
      </nav>

      <nav>
        <h5 className="footer-title">Social</h5>
        <div className="grid grid-flow-col gap-2 items-center ">
          <Link href={"https://threads.net/@deadpartyy"}>
            <Image
              src={threadsLogo}
              alt="Follow Us On Threads"
              className="w-24 h-8"
            />
          </Link>
          <Link
            href={
              "https://open.spotify.com/user/e7jciehecnifykwzhvjpkdtj0?si=1fdb6a6a5a274ee8"
            }
          >
            <Image
              src={spotifyLogo}
              alt="Stream The Arkansas Music Playlist on Spotify"
              className="w-24 h-8"
            />
          </Link>

          <Link href={"https://www.instagram.com/deadpartyy"}>
            <Image
              src={igLogo}
              alt="Follow Us On Instagram!"
              className="w-24 h-8"
            />
          </Link>
        </div>
      </nav>
    </footer>
  );
}
