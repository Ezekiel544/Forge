import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Twitter, Send, ArrowRight, Flame } from "lucide-react";
import forgeLogo from "figma:asset/a7b8597c207dda62e18581ce2294ae3af08bb23f.png";

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div id="join" ref={ref} className="py-16 sm:py-24 md:py-32 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-950/30 to-transparent" />
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-orange-500/20 via-red-500/20 to-yellow-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-orange-500 rounded-full"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: 0,
          }}
          animate={{
            y: [null, "-100%", Math.random() * 100 + "%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 8 + 5,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Logo */}
          <motion.div
            className="flex justify-center mb-6 sm:mb-8"
            animate={{
              rotateY: [0, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <img 
              src={forgeLogo} 
              alt="Forge Logo" 
              className="w-20 h-20 sm:w-24 sm:h-24"
              style={{ mixBlendMode: 'lighten' }}
            />
          </motion.div>

          {/* Main CTA heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-4 sm:mb-6 px-4"
          >
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
              Join The Forge Today
            </span>
          </motion.h2>

          {/* Warning text here*/}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-3 sm:mb-4 px-4"
          >
            <span className="text-red-400">⚠️ Warning:</span> Once you enter The Forge, there's no going back to average.
          </motion.p>

          {/* Divider */}
          <motion.div
            className="flex justify-center items-center gap-3 sm:gap-4 mb-8 sm:mb-12"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-orange-500" />
            <Flame className="text-orange-500 w-5 h-5 sm:w-6 sm:h-6" />
            <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-orange-500" />
          </motion.div>

          {/* Social buttons added*/}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12 max-w-2xl mx-auto"
          >
            <motion.a
              href="https://x.com/forge_247"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl text-white shadow-lg shadow-orange-500/50 hover:shadow-orange-500/70 transition-all duration-300 flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <Twitter className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
              <span className="relative z-10 text-sm sm:text-base">Follow on X</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="https://t.me/+dahXFIbZadM1ZDRk"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-300 flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.5,
                }}
              />
              <Send className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
              <span className="relative z-10 text-sm sm:text-base">Join Telegram</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Final tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
            className="space-y-3 sm:space-y-4 px-4"
          >
            <motion.p
              className="text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              Forge or be forgotten.
            </motion.p>
            <p className="text-lg sm:text-xl text-gray-400">Welcome to the family, Chad. 🔥⚒️</p>
          </motion.div>
        </motion.div>

        {/* Decorative elements */}
        <div className="mt-12 sm:mt-20 flex justify-center gap-4 sm:gap-8">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Footer part*/}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-12 sm:mt-20 text-center text-gray-500 text-xs sm:text-sm px-4"
      >
        <p>© 2024 Forge Community. All rights reserved.</p>
        <p className="mt-2">Built by legends, for legends.</p>
      </motion.div>
    </div>
  );
}