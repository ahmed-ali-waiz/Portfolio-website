import { motion } from 'framer-motion';

const Loader = () => {
  const containerVariants = {
    exit: {
      opacity: 0,
      transition: { duration: 0.5 }
    }
  };

  const letterVariants = {
    initial: { y: 100, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    })
  };

  const name = "PORTFOLIO";

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      variants={containerVariants}
      exit="exit"
    >
      <div className="relative">
        {/* Animated background circles */}
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-secondary/20 rounded-full blur-3xl animate-pulse animation-delay-200" />
        </motion.div>

        {/* Logo/Name */}
        <div className="flex overflow-hidden">
          {name.split('').map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="initial"
              animate="animate"
              className="text-4xl md:text-6xl font-bold gradient-text"
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* Loading bar */}
        <motion.div
          className="mt-8 h-1 bg-white/10 rounded-full overflow-hidden"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '100%', opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: 'linear'
            }}
          />
        </motion.div>

        {/* Loading text */}
        <motion.p
          className="mt-4 text-text-muted text-center text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Loading experience...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loader;
