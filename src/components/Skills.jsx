import { motion } from "framer-motion";

const skills = [
  {
    name: "HTML",
    icon: "🌐",
    color: "bg-orange-50 text-orange-500",
  },
  {
    name: "CSS",
    icon: "🎨",
    color: "bg-blue-50 text-blue-600",
  },
  {
    name: "JavaScript",
    icon: "⚡",
    color: "bg-yellow-50 text-yellow-500",
  },
  {
    name: "Logo Design",
    icon: "🏷️",
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    name: "Poster Design",
    icon: "📢",
    color: "bg-red-50 text-red-500",
  },
  {
    name: "Content Design",
    icon: "📸",
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    name: "PHP",
    icon: "🐘",
    color: "bg-purple-50 text-purple-500",
  },
  {
    name: "MySQL",
    icon: "🗄️",
    color: "bg-green-50 text-green-500",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 bg-white"
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
            Keahlian Saya
          </h2>

          <p className="text-slate-500 mt-5 max-w-2xl mx-auto">
            Teknologi dan tools yang saya pelajari
            dalam pengembangan website dan desain digital.
          </p>
        </motion.div>

        {/* Grid Skills */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="
                bg-white
                rounded-[28px]
                p-8
                shadow-md
                hover:shadow-2xl
                transition-all
                duration-300
                border
                border-slate-100
                cursor-pointer
              "
            >

              <motion.div
                whileHover={{
                  rotate: 10,
                  scale: 1.15,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
                className={`
                  w-16
                  h-16
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  text-3xl
                  ${skill.color}
                `}
              >
                {skill.icon}
              </motion.div>

              <h3 className="text-xl font-bold text-slate-900 mt-6">
                {skill.name}
              </h3>

              <p className="text-slate-500 mt-2">
                Teknologi yang digunakan dalam
                proses belajar dan pengembangan proyek.
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}