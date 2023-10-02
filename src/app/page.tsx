import Image from "next/image";
import Link from "next/link";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import Popup from "./components/Popup";

const ibmPlexSerif = IBM_Plex_Serif({ weight: ["300"], subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-6 py-8 sm:px-6 sm:py-6">
      <section className="">
        <h1 className="text-5xl text-white font-regular leading-tight">
          Hello, I&apos;m Amarpreet Singh, a software developer and designer
          based in chilly Toronto. I spend my time to crafting delightful
          software solutions that help companies grow their businesses.
        </h1>
      </section>

      <section className="mt-16">
        <h2
          className={`${ibmPlexSerif.className} text-white text-4xl border-b border-stone-700 py-4`}
        >
          Projects
        </h2>
        <div className="grid w-full grid-cols-2 gap-6 my-4">
          <div className="w-full">
            <div className="bg-amber-100 rounded-lg">
              <div className="h-20">1</div>
              <div className="bg-yellow-300 rounded-b-lg">
                <div className="flex w-full p-6 flex-col">
                  <div>
                    <h3 className="text-3xl font-medium text-yellow-950 mb-1">
                      Dr Ink
                    </h3>
                  </div>
                  <div><p className="text-xl text-yellow-950">A e-commerce web application</p></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-pink-400">2</div>
        </div>
      </section>
    </main>
  );
}
