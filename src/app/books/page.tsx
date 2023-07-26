import { Inter, IBM_Plex_Serif } from "next/font/google";

const ibmPlexSerif = IBM_Plex_Serif({ weight: ["300"], subsets: ["latin"] });

const Books = () => {
  return (
    <section className="mt-12 sm:mt-12">
      <header
        className={`flex justify-between ${ibmPlexSerif.className} text-neutral-300 text-2xl sm:text-4xl border-b border-neutral-300 py-3 sm:py-6`}
      >
        <h2>Books</h2>

        <h2>keep reading, keep growing!</h2>
      </header>
    </section>
  );
};

export default Books;
