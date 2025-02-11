import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <motion.div
        className="relative w-16 h-16"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        {/* Outer Ring */}
        <div className="absolute inset-0 border-4 border-transparent border-t-neon-blue border-r-neon-purple rounded-full animate-pulse-slow" />
        
        {/* Inner Ring */}
        <div className="absolute inset-2 border-4 border-transparent border-t-neon-pink border-r-neon-green rounded-full animate-pulse-slow" 
             style={{ animationDelay: '-0.5s' }}
        />
        
        {/* Center Dot */}
        <div className="absolute inset-[30%] bg-neon-blue rounded-full animate-glow" />
      </motion.div>
    </div>
  );
};

export default LoadingSpinner;
