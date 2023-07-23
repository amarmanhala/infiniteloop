import { Inter, IBM_Plex_Serif } from "next/font/google";
import Link from "next/link";
import Header from "../components/Header";

const ibmPlexSerif = IBM_Plex_Serif({ weight: ["500"], subsets: ["latin"] });

const Contact = () => {
  return (
   <>
      
      <main className="bg-blue-100 w-full p-24 flex min-h-screen flex-col justify-between">
        <Header />
        <h1
          className={`text-blue-700 text-6xl ${ibmPlexSerif.className}`}
        >
          A engineer who you can find on
        </h1>
        <nav className={`text-3xl text-blue-700`}>
          <ul>
            <li className="border-b-2 border-blue-700 pb-3 mb-4 flex justify-between items-center"><span>Email</span><a href="mailto:amar.manhala@gmail.com">amar.manhala@gmail.com</a></li>
            <li className="border-b-2 border-blue-700 pb-3 mb-4 flex justify-between items-center"><Link href="./about">GitHub</Link><span>@amarmanhala</span></li>
            <li className="border-b-2 border-blue-700 pb-3 mb-4 flex justify-between items-center"><Link href="./projects">Twitter</Link><span>@amarmanhala</span></li>
          </ul>
        </nav>
      </main>
   </>
  );
};

export default Contact;
