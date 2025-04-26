import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';

export default function AvantaSommerFrontpage() {
  return (
    <>
      <Head>
        <title>AVANTASOMMER</title>
        <meta name="description" content="Intelligence First. Disruption Always." />
        <link rel="preload" href="/public/avantasommer_subtle_heartbeat.wav" as="audio" />
      </Head>
      <div className="min-h-screen bg-black text-white font-light tracking-tight">
        <div className="flex flex-col justify-center items-center h-screen text-center">
          <motion.h1 className="text-5xl md:text-7xl uppercase" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            ALL / NOTHING
          </motion.h1>
          <motion.p className="mt-4 text-md md:text-xl text-gray-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
            by AVANTASOMMER™ — The Force. The Power. The Future.
          </motion.p>
        </div>
        <section className="px-6 md:px-12 py-20 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
            <h2 className="text-3xl md:text-4xl mb-6 font-semibold uppercase">WE ARE NOT A BRAND</h2>
            <p className="text-lg text-gray-400">
              We are a creative force. A fusion of human instinct and AI intelligence.
              We don’t follow trends. We forge them. Our tools are motion. Precision. Presence.
              This is the ecosystem for those who don’t build apps — they build legacies.
            </p>
          </motion.div>
        </section>
        <section className="px-6 md:px-12 py-16 bg-white text-black text-center">
          <h3 className="text-2xl md:text-3xl font-semibold uppercase mb-4">Enter the Ecosystem</h3>
          <p className="text-gray-700 mb-6">
            Explore tools, motion assets, authentication systems and creative technology unlike anything else.
          </p>
          <Link href="https://showroom.avantasommer.com" className="px-6 py-3 bg-black text-white font-semibold rounded-full hover:opacity-80 transition inline-block">Launch the Showroom</Link>
        </section>
        <footer className="text-center text-gray-500 text-sm py-8">
          © 2025 AVANTASOMMER™ — Crafted in Code. Directed by Instinct.
        </footer>
      </div>
    </>
  );
}
