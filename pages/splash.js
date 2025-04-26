import { useHeartbeat } from '../hooks/useHeartbeat';
import { motion, useReducedMotion } from 'framer-motion';

export default function AvantaSommerSplash() {
  useHeartbeat();
  const shouldReduce = useReducedMotion();
  const variants = shouldReduce ? {} : {
    hidden: { scale: 0.95, opacity: 0.8 },
    animate: { scale: [0.95,1,0.95], opacity: [0.8,1,0.8], transition: { duration:1.8, repeat: Infinity } }
  };

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center relative overflow-hidden">
      <motion.a href="https://auth.avantasommer.com" target="_blank" rel="noopener noreferrer"
        className="absolute bottom-6 right-6 w-12 h-12 bg-gradient-to-br from-gray-900 via-white/10 to-gray-900 rounded-full border border-white/10 shadow-xl"
        animate={{ rotate:[0,360] }} transition={{ repeat:Infinity, duration:20, ease:'linear' }}
        title="Official AVANTASOMMER Verified Asset">
        <div className="text-white/40 text-[8px] uppercase flex items-center justify-center w-full h-full">A</div>
      </motion.a>
      <motion.div initial="hidden" animate="animate" variants={variants}
        className="text-white text-6xl font-light tracking-widest uppercase text-center">
        AVANTASOMMER
      </motion.div>
      <div className="absolute bottom-2 left-0 w-full text-center text-xs text-gray-500 italic">
        “Cloudflare didn’t ask us to build it. They now ask permission to show it.” — AVANTASOMMER
      </div>
    </div>
  );
}
