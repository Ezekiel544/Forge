import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div id="about" ref={ref} className="py-16 sm:py-24 md:py-32 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            className="inline-block mb-4"
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="text-4xl sm:text-5xl md:text-6xl">⚒️</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8 px-4">
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
              Who We Are
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-gradient-to-br from-orange-950/30 to-red-950/20 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-6 sm:p-8 md:p-12 shadow-2xl"
        >
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed mb-4 sm:mb-6">
            We are <span className="text-orange-500">Forge Community</span>, the first of its kind. a community that forges Web3 chads who really want to grow on and also supporting web3 creators
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
            We support in different ways: by sharing potential alphas, life-changing information, engaging on each other's posts as family, creating job opportunities for the Forgenians in the community, and representing the Forge Community as a whole.
          </p>
        </motion.div>

        {/* Animated accent elements */}
        <div className="mt-12 flex justify-center gap-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}