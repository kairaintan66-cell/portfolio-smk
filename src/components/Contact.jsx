import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import {
  Mail,
  Phone,
  MapPin,
  Send
} from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_daknq3i",
        "template_wlu4uig",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "J8sSPsRXqR0yAGPTl"
      )
      .then(() => {
        alert("Pesan berhasil dikirim!");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error(error);
        alert("Gagal mengirim pesan!");
      });
  };

  return (
    <section
      id="contact"
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
          <h2 className="text-5xl font-bold text-slate-900 mt-4">
            Hubungi Saya
          </h2>

          <p className="text-slate-500 mt-5 max-w-2xl mx-auto">
            Saya terbuka untuk diskusi, kolaborasi,
            maupun kesempatan belajar dan berkembang
            di bidang teknologi informasi.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Informasi Kontak */}
          <motion.div
            className="bg-white rounded-[32px] p-10 shadow-xl"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <h3 className="text-3xl font-bold text-slate-900 mb-8">
              Informasi Kontak
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-5">
                <div className="bg-blue-100 p-4 rounded-2xl">
                  <Mail className="text-blue-600" />
                </div>

                <div>
                  <p className="text-slate-500 text-sm">
                    Email
                  </p>

                  <p className="font-semibold">
                    kairaintan66@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="bg-orange-100 p-4 rounded-2xl">
                  <Phone className="text-orange-500" />
                </div>

                <div>
                  <p className="text-slate-500 text-sm">
                    Telepon
                  </p>

                  <p className="font-semibold">
                    +62 856-4915-4736
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="bg-green-100 p-4 rounded-2xl">
                  <MapPin className="text-green-600" />
                </div>

                <div>
                  <p className="text-slate-500 text-sm">
                    Lokasi
                  </p>

                  <p className="font-semibold">
                    Indonesia
                  </p>
                </div>
              </div>

            </div>

            <motion.div
              className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-blue-700 to-blue-900 text-white"
              whileHover={{
                scale: 1.03,
              }}
            >
              <h4 className="font-bold text-xl">
                Siap Berkolaborasi 🚀
              </h4>

              <p className="text-white/80 mt-2">
                Mari berdiskusi mengenai ide,
                proyek, atau kesempatan belajar bersama.
              </p>
            </motion.div>

          </motion.div>

          {/* Form Kontak */}
          <motion.div
            className="bg-white rounded-[32px] p-10 shadow-xl"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <form
              onSubmit={sendEmail}
              className="space-y-6"
            >

              <div>
                <label className="block mb-2 font-medium">
                  Nama Lengkap
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Masukkan nama"
                  className="w-full border border-slate-200 rounded-xl p-4 outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Masukkan email"
                  className="w-full border border-slate-200 rounded-xl p-4 outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Pesan
                </label>

                <textarea
                  rows={6}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tulis pesan..."
                  className="w-full border border-slate-200 rounded-xl p-4 outline-none focus:border-blue-500"
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl transition"
              >
                <Send size={18} />
                Kirim Pesan
              </motion.button>

            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
}