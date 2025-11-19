import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  Gem,
  Users,
  Briefcase,
  GraduationCap,
  DollarSign,
  Network,
  Gift,
} from "lucide-react";

const features = [
  {
    icon: Gem,
    title: "God-Tier Alpha Vault",
    description:
      "50x gems, presales, IDOs, and hidden narratives dropped daily before they hit the timeline.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Users,
    title: "Engagement Army",
    description:
      "200+ Forgenians raiding posts, pushing each other into the algorithm, turning 100 likes into 100K impressions.",
    gradient: "from-red-500 to-yellow-500",
  },
  {
    icon: Briefcase,
    title: "Career Launchpad",
    description:
      "Direct job placements & bounties from Tier-1 projects (we've placed devs, marketers, community managers, and even founders).",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: GraduationCap,
    title: "Zero-to-Hero Academy",
    description:
      "Free courses, live workshops, 1-on-1 mentorship on different niches. No money? No skills? No problem. We turn beginners into paid professionals in weeks.",
    gradient: "from-orange-500 to-red-600",
  },
  {
    icon: DollarSign,
    title: "Funding Forge",
    description:
      "Regular pitch nights, investor intros, and grant connections. Your idea can get funded just by being one of us.",
    gradient: "from-red-600 to-orange-400",
  },
  {
    icon: Network,
    title: "Lifetime Network 500",
    description:
      "Real connections with growing web3 chads, whales, KOLs, and project founders who actually reply in the GC.",
    gradient: "from-orange-400 to-yellow-500",
  },
  {
    icon: Gift,
    title: "Forge Rewards",
    description:
      "Airdrops, whitelists, and exclusive perks opportunites only for active Forgenians. The more you contribute, the more you earn.",
    gradient: "from-yellow-500 to-red-500",
  },
];

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div ref={ref} className="py-16 sm:py-24 md:py-32 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-1/2 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 px-4">
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
              What Happens Inside The Forge?
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 px-4">
            We don't gatekeep success. We manufacture it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                style={{
                  background: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                }}
              />
              <div className="relative bg-gradient-to-br from-gray-900 to-black border border-orange-500/20 group-hover:border-orange-500/50 rounded-xl p-5 sm:p-6 h-full transition-all duration-300">
                <motion.div
                  className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 mb-3 sm:mb-4 rounded-lg bg-gradient-to-br ${feature.gradient}`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </motion.div>
                <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 text-white">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{feature.description}</p>

                {/* Animated corner accent */}
                <motion.div
                  className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.gradient} opacity-10 rounded-bl-full`}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}