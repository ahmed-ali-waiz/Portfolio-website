import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Calendar, MapPin, Briefcase } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { label: 'Years Experience', value: '2+' },
    { label: 'Projects Completed', value: '20+' },
    { label: 'Technologies', value: '15+' },
    { label: 'GitHub Repos', value: '25+' },
  ];

  const personalInfo = [
    { icon: User, label: 'Name', value: 'Your Name' },
    { icon: Calendar, label: 'Experience', value: 'X+ Years' },
    { icon: MapPin, label: 'Location', value: 'Your City, Country' },
    { icon: Briefcase, label: 'Status', value: 'Open to Work' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-heading">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="section-subheading">
              Get to know me better — my background, experience, and what drives me to create amazing digital products.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image/Illustration Side */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Decorative elements */}
                <motion.div
                  className="absolute inset-0 border-2 border-primary/30 rounded-2xl"
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
                <motion.div
                  className="absolute inset-4 border-2 border-secondary/30 rounded-2xl"
                  animate={{ rotate: [0, -5, 0] }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
                
                {/* Main image container */}
                <div className="absolute inset-8 glass-card overflow-hidden rounded-2xl">
                  <img
                    src="/Ahmad1.jpg"
                    alt="Ahmad Ali"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 p-4 glass-card"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span className="text-2xl">⚛️</span>
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -left-4 p-4 glass-card"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <span className="text-2xl">🚀</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold">
                  A passionate developer crafting{' '}
                  <span className="gradient-text">digital experiences</span>
                </h3>
                <p className="text-text-muted leading-relaxed">
                  I'm a Full-Stack Developer with 2+ years of hands-on experience 
                  building modern web applications. My expertise lies in the MERN stack 
                  — MongoDB, Express.js, React, and Node.js — where I create fast, 
                  scalable, and user-centric solutions.
                </p>
                <p className="text-text-muted leading-relaxed">
                  I have a genuine curiosity for learning and constantly push myself 
                  to master new technologies. Every day is an opportunity to grow, 
                  and I'm committed to delivering exceptional work while evolving as a developer.
                </p>
              </div>

              {/* Personal Info Grid */}
              <div className="grid grid-cols-2 gap-4">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    className="flex items-center gap-3 p-3 glass-card"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <info.icon className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-xs text-text-dark">{info.label}</p>
                      <p className="text-sm font-medium">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 glass-card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05, borderColor: 'rgba(56, 189, 248, 0.5)' }}
              >
                <motion.p
                  className="text-3xl md:text-4xl font-bold gradient-text"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.9 + index * 0.1, type: 'spring' }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-text-muted text-sm mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
