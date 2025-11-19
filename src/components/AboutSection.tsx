import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-yellow-500/30 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500"
          >
            Who We Are
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: '100px' } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto mb-8"
          />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-8 md:p-12 shadow-2xl shadow-orange-500/10"
          >
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
              We are <span className="text-orange-500">Forge Community</span>, the first of its kind — 
              a community that forges Web3 chads who really want to grow on.
            </p>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
              We support in different ways: by sharing potential alphas, life-changing information, 
              engaging on each other's posts as family, creating job opportunities for the Forgenians 
              in the community, and representing the Forge Community as a whole.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 p-6 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border-l-4 border-orange-500 rounded-lg"
            >
              <p className="text-orange-400 italic text-lg">
                "We don't gatekeep success. We manufacture it."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
