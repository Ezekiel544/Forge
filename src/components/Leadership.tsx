import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Twitter } from "lucide-react";
import Ezekiel from '../assets/Ezekiel.png'; 
import Alpha from '../assets/alpha.png';

const leaders = [
  {
    name: "EzekielCrrypt",
    role: "Founder",
    handle: "@EzekielCrrypt",
    description: "The man who turned nothing into an empire and now pulls everyone up with him.",
    image: Ezekiel,
  },
  {
    name: "alphacrypt",
    role: "Co-founder",
    handle: "@alpha_crypt01",
    description: "The alpha hunter who spots 100x before the chart even loads.",
    image: Alpha,
  },
];

export function Leadership() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="py-16 sm:py-24 md:py-32 px-4 relative overflow-hidden">
      {/* Background decoration added*/}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.div
            className="inline-block text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6"
            animate={{
              rotate: [0, -10, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            👑
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 sm:mb-4 px-4">
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
              Leadership
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 px-4">The visionaries behind The Forge</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -20 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-gray-900 to-black border border-orange-500/20 group-hover:border-orange-500/50 rounded-2xl p-6 sm:p-8 overflow-hidden transition-all duration-300">
                {/* Animated glow effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${leader.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />

                <div className="relative z-10">
                  {/* Profile Image added*/}
                  <motion.div
                    className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-4 sm:mb-6 relative"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${leader.gradient} rounded-full blur-xl opacity-50`}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    />
                    <div className={`relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full p-1 bg-gradient-to-br ${leader.gradient}`}>
                      <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Role Badge added*/}
                  <motion.div
                    className={`inline-block px-3 sm:px-4 py-1 mb-3 sm:mb-4 rounded-full bg-gradient-to-r ${leader.gradient} text-white text-xs sm:text-sm`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {leader.role}
                  </motion.div>

                  {/* Name */}
                  <h3 className="text-xl sm:text-2xl mb-2 text-white">{leader.name}</h3>

                  {/* Handle added*/}
                  <motion.a
                    href={`https://twitter.com/${leader.handle.substring(1)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors mb-3 sm:mb-4 text-sm sm:text-base"
                    whileHover={{ x: 5 }}
                  >
                    <Twitter className="w-4 h-4" />
                    <span>{leader.handle}</span>
                  </motion.a>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{leader.description}</p>
                </div>

                {/* Decorative corner */}
                <motion.div
                  className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${leader.gradient} opacity-5 rounded-tl-full`}
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.7,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Motivational quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 sm:mt-16 text-center px-4"
        >
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 italic"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            "One decision separates who stays broke and who changes their bloodline forever."
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}