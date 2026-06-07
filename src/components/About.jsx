import profile from "../assets/profil.jpg";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-28 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-slate-900">
            Tentang Saya
          </h2>

          <p className="text-slate-500 max-w-2xl mx-auto mt-5">
            Mengenal lebih dekat profil dan minat saya
            di bidang teknologi informasi.
          </p>
        </motion.div>

        {/* Main Card */}
        <div className="bg-white rounded-[32px] shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2">

            {/* Foto */}
            <motion.div
              className="bg-gradient-to-br from-blue-700 to-blue-900 p-10 flex justify-center items-center"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="relative">

                <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500 rounded-full blur-xl opacity-40 animate-pulse"></div>

                <img
                  src={profile}
                  alt="Putri Kaira Intan"
                  className="
                    w-full
                    max-w-sm
                    h-[500px]
                    object-cover
                    rounded-[30px]
                    shadow-2xl
                    relative
                    z-10
                    hover:scale-105
                    transition-all
                    duration-500
                  "
                />

              </div>
            </motion.div>

            {/* Deskripsi */}
            <motion.div
              className="p-12 flex flex-col justify-center"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >

              <span className="text-orange-500 font-semibold">
                SISWI SMK NEGERI KABUH JURUSAN SISTEM INFORMASI JARINGAN DAN APLIKASI
              </span>

              <h3 className="text-4xl font-bold mt-3 text-slate-900">
                Putri Kaira Intan
              </h3>

              <p className="text-slate-600 mt-6 leading-relaxed">
                Saya adalah siswi jurusan Sistem Informasi Jaringan dan
                Aplikasi (SIJA) yang memiliki ketertarikan pada
                pengembangan website, desain antarmuka (UI/UX),
                jaringan komputer, dan teknologi digital modern.
              </p>

              <p className="text-slate-600 mt-4 leading-relaxed">
                Saya senang mempelajari teknologi baru, membuat
                proyek kreatif, dan terus mengembangkan kemampuan
                di bidang teknologi informasi melalui berbagai
                pengalaman belajar dan praktik langsung.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">

                <div className="bg-blue-50 text-blue-700 px-5 py-3 rounded-xl font-medium hover:bg-blue-100 hover:scale-105 transition-all duration-300">
                  🌐 Web Development
                </div>

                <div className="bg-orange-50 text-orange-600 px-5 py-3 rounded-xl font-medium hover:bg-orange-100 hover:scale-105 transition-all duration-300">
                  🎨 UI/UX Design
                </div>

              </div>

            </motion.div>

          </div>
        </div>

        {/* Statistik */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

          <motion.div
            className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-4xl font-bold text-blue-600">3+</h3>
            <p className="text-slate-500 mt-2">
              Proyek Website
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-4xl font-bold text-orange-500">5+</h3>
            <p className="text-slate-500 mt-2">
              Keahlian Dikuasai
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-4xl font-bold text-green-500">2+</h3>
            <p className="text-slate-500 mt-2">
              Tahun Belajar IT
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-4xl font-bold text-purple-500">100%</h3>
            <p className="text-slate-500 mt-2">
              Semangat Belajar
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}