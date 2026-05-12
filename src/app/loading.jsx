"use client";

import { motion } from "framer-motion";

export default function NeonLoader() {
  return (
    <div className="fixed inset-0 bg-[#020617] flex items-center justify-center">
      <motion.div
        className="w-28 h-28 rounded-full border-4 border-cyan-400 border-t-transparent shadow-[0_0_60px_#22d3ee]"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}