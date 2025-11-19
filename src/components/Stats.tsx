import { motion } from "motion/react";
import { Users, TrendingUp, Briefcase, Award } from "lucide-react";
import { useInView } from "motion/react";
import { useRef } from "react";

const stats = [
  { icon: Users, label: "Forgenians", value: "200+", delay: 0 },
  { icon: TrendingUp, label: "Growth weekly", value: "85%", delay: 0.1 },
  { icon: Briefcase, label: "Jobs Opportunity", value: "30+", delay: 0.2 },
  { icon: Award, label: "Success Rate", value: "95%", delay: 0.3 },
];

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="py-12 sm:py-16 md:py-20 px-4 border-y border-orange-500/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: stat.delay, duration: 0.6 }}
              className="text-center"
            >
              <motion.div
                className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-3 sm:mb-4 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-orange-500" />
              </motion.div>
              <motion.div
                className="text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-1 sm:mb-2"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: stat.delay + 0.2, type: "spring", stiffness: 200 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm sm:text-base text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}