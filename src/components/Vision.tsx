import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Target, TrendingUp, Shield } from "lucide-react";

export function Vision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const principles = [
    {
      icon: Target,
      text: "When the world says 'bear market,' we say 'building season.'",
    },
    {
      icon: TrendingUp,
      text: "When others fade, Forgenians rise.",
    },
    {
      icon: Shield,
      text: "A place where every member eats — no one gets left behind.",
    },
  ];

  return (
    <div ref={ref} className="py-16 sm:py-24 md:py-32 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-950/20 to-transparent" />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            className="inline-block text-5xl sm:text-6xl md:text-7xl mb-4 sm:mb-6"
            animate={{
              rotateY: [0, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            🎯
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8 px-4">
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
              The Vision
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-12 sm:mb-16"
        >
          <div className="bg-gradient-to-br from-orange-950/40 to-red-950/30 backdrop-blur-sm border-2 border-orange-500/30 rounded-2xl p-6 sm:p-10 md:p-16 text-center shadow-2xl shadow-orange-500/10">
            <motion.p
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-100 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              To build the{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                most powerful
              </span>
              ,{" "}
              <span className="bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">
                most loyal
              </span>
              , and{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                wealthiest
              </span>{" "}
              Web3 community in history.
            </motion.p>
          </div>
        </motion.div>

        {/* Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-orange-500/20 rounded-xl p-5 sm:p-6 text-center"
            >
              <motion.div
                className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20"
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              >
                <principle.icon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
              </motion.div>
              <p className="text-sm sm:text-base text-gray-300">{principle.text}</p>
            </motion.div>
          ))}
        </div>

        {/* This is bigger than a community */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 sm:mt-16 md:mt-20 text-center"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent px-4">
            This Is Bigger Than a Community
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 sm:gap-6 text-base sm:text-lg md:text-xl text-gray-300 px-4">
            <motion.span
              whileHover={{ scale: 1.1, color: "#f97316" }}
              className="cursor-default"
            >
              This is a movement.
            </motion.span>
            <span className="hidden md:inline text-orange-500">•</span>
            <motion.span
              whileHover={{ scale: 1.1, color: "#ef4444" }}
              className="cursor-default"
            >
              This is a legacy.
            </motion.span>
            <span className="hidden md:inline text-orange-500">•</span>
            <motion.span
              whileHover={{ scale: 1.1, color: "#eab308" }}
              className="cursor-default"
            >
              This is where legends are born.
            </motion.span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}