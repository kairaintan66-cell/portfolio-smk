import { motion } from "framer-motion";

const projects = [
  {
    title: "Website Artikel Festival Budaya",
    tech: "HTML CSS JS",
    icon: "🎭",
  },
  {
    title: "Website Monitoring Air",
    tech: "HTML CSS JS",
    icon: "💧",
  },
  {
    title: "Website PeriodicLearn",
    tech: "HTML CSS JS",
    icon: "📚",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold">
            Portofolio
          </h2>

          <p className="text-slate-500 mt-4">
            Beberapa proyek yang telah saya kerjakan
            selama proses pembelajaran dan pengembangan
            keterampilan di bidang teknologi informasi.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              whileHover={{
                y: -10,
              }}
              className="
                rounded-3xl
                overflow-hidden
                shadow-lg
                hover:shadow-2xl
                transition-all
                duration-300
                bg-white
                cursor-pointer
              "
            >

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="
                  h-52
                  bg-gradient-to-r
                  from-blue-700
                  to-blue-900
                  flex
                  items-center
                  justify-center
                "
              >
                <motion.span
                  whileHover={{
                    scale: 1.2,
                    rotate: 10,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="text-7xl"
                >
                  {project.icon}
                </motion.span>
              </motion.div>

              <div className="p-6">
                <h3 className="font-bold text-xl text-slate-900">
                  {project.title}
                </h3>

                <p className="text-gray-500 mt-3">
                  {project.tech}
                </p>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}