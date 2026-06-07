import profile from "../assets/profil.jpg";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Kiri */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full border border-white/20 text-white hover:bg-white hover:text-blue-800 transition-all duration-300 cursor-default">
              👋 Halo, Saya
            </span>

            <motion.h1
              className="text-6xl md:text-7xl font-bold text-white mt-8 leading-tight hover:scale-105 transition-transform duration-300 cursor-default"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Putri Kaira Intan
            </motion.h1>

            <div className="flex items-center gap-4 mt-5">
              <div className="w-16 h-1 bg-orange-500"></div>

              <h2 className="text-2xl md:text-3xl text-white">
                Sistem Informasi Jaringan dan Aplikasi
              </h2>
            </div>

            <p className="text-white/80 mt-8 text-lg leading-relaxed max-w-xl">
              Siswi SMK yang memiliki minat pada pengembangan website,
              UI/UX Design, jaringan komputer, dan teknologi digital modern.
            </p>

            <motion.div
              className="flex flex-wrap gap-4 mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <a
                href="#projects"
                className="bg-orange-500 hover:bg-orange-600 hover:scale-105 hover:shadow-xl transition-all duration-300 px-6 py-3 rounded-xl text-white font-semibold"
              >
                Lihat Portofolio
              </a>

              <a
                href="#contact"
                className="border border-white/30 hover:bg-white hover:text-blue-800 hover:scale-105 transition-all duration-300 px-6 py-3 rounded-xl text-white"
              >
                Hubungi Saya
              </a>
            </motion.div>
          </motion.div>

          {/* Kanan */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 80, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative">

              <div className="absolute -top-5 -right-5 w-32 h-32 bg-orange-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>

              <div className="bg-white p-5 rounded-[40px] shadow-2xl relative z-10 hover:-translate-y-3 hover:rotate-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500">
                <img
                  src={profile}
                  alt="Putri Kaira Intan"
                  className="
                    w-[380px]
                    h-[500px]
                    object-cover
                    rounded-[30px]
                    hover:scale-105
                    transition-transform
                    duration-500
                  "
                />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}