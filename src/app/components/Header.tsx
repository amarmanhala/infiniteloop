import Link from "next/link";
import { Inter, IBM_Plex_Serif } from "next/font/google";

const ibmPlexSerif = IBM_Plex_Serif({ weight: ["400"], subsets: ["latin"] });
const Header = () => {
  return (
    <header className="flex flex-row justify-between w-full text-neutral-300">
      <nav className={`text-xl ${ibmPlexSerif.className} w-full text-lg`}>
        <ul className="">
          <li className="ml-4  pb-1 mb-1 flex justify-between items-center">
            <Link
              href="/"
              className="border-b-2 border-[#dd425c] hover:text-[#dd425c]"
            >
              Amarpreet Singh
            </Link>
          </li>
          <li className="ml-4 pb-1 mb-1 flex justify-between items-center font-normal">
            <Link
              href="./projects"
              className="border-b-2 border-[#dd425c] hover:text-[#dd425c]"
            >
              Projects
            </Link>
          </li>
          <li className="ml-4 pb-1 mb-1 flex justify-between items-center">
            <Link
              href="./about"
              className="border-b-2 border-[#dd425c] hover:text-[#dd425c]"
            >
              About
            </Link>
          </li>
          <li className="ml-4 pb-1 mb-1 flex justify-between items-center">
            <Link
              href="./projects"
              className="border-b-2 border-[#dd425c] hover:text-[#dd425c]"
            >
              Resume
            </Link>
          </li>
          <li className="ml-4 pb-1 mb-1 flex justify-between items-center">
            <Link
              href="./books"
              className="border-b-2 border-[#dd425c] hover:text-[#dd425c]"
            >
              Books
            </Link>
          </li>
          <li className="ml-4 pb-1 mb-1 flex justify-between items-center">
            <Link
              href="./contact"
              className="border-b-2 border-[#dd425c] hover:text-[#dd425c]"
            >
              Let&apos;s connect
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
