import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-gradient-to-r from-blue-900 via-blue-700 to-slate-900 text-white py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-8">

          {/* Profil */}
          <div>
            <h3 className="text-3xl font-bold mb-4 hover:text-orange-400 transition-colors duration-300">
              Putri Kaira Intan
            </h3>

            <p className="text-slate-200 leading-relaxed">
              Siswi SMK jurusan Sistem Informasi Jaringan dan Aplikasi
              yang memiliki minat dalam pengembangan website,
              desain UI/UX, dan teknologi digital modern.
            </p>
          </div>

          {/* Navigasi */}
          <div>
            <h4 className="text-xl font-semibold mb-4">
              Navigasi Cepat
            </h4>

            <ul className="space-y-3 text-slate-200">

              <li>
                <a
                  href="#about"
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  Tentang
                </a>
              </li>

              <li>
                <a
                  href="#skills"
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  Keahlian
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  Proyek
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  Kontak
                </a>
              </li>

            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="text-xl font-semibold mb-4">
              Kontak
            </h4>

            <p className="text-slate-200 hover:text-orange-400 transition-colors duration-300">
              📧 kairaintan66@gmail.com
            </p>

            <p className="text-slate-200 hover:text-orange-400 transition-colors duration-300 mt-2">
              📱 +62 856-4915-4736
            </p>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-slate-300">
          © 2026 Putri Kaira Intan Portfolio. All Rights Reserved.
        </div>

      </div>
    </motion.footer>
  );
}