import Link from "next/link"
import { Inter, IBM_Plex_Serif } from 'next/font/google'

const ibmPlexSerif = IBM_Plex_Serif({ weight: ['400'], subsets: ['latin'], })
const Header = () => {
  return (
    <header className="flex flex-row justify-between w-full text-blue-700">
      <nav className={`text-xl ${ibmPlexSerif.className} w-full`}>
      <ul className="">
      <li className="ml-4 border-b-2 pb-1 mb-2 flex justify-between items-center border-blue-700 font-semibold"><Link href="./projects">Amarpreet Singh</Link></li>
          <li className="ml-4 border-b-2 pb-1 mb-2 flex justify-between items-center border-blue-700"><Link href="./projects">Projects</Link></li>
          <li className="ml-4 border-b-2 pb-1 mb-2 flex justify-between items-center border-blue-700"><Link href="./about">About</Link></li>
          <li className="ml-4 border-b-2 pb-1 mb-2 flex justify-between items-center border-blue-700"><Link href="./projects">Resume</Link></li>
          <li className="ml-4 border-b-2 pb-1 mb-2 flex justify-between items-center border-blue-700"><Link href="./contact"><s>Let&apos;s connect</s></Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header