import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Freelance Full-Stack Developer',
    organization: 'Fiverr',
    location: 'Remote',
    period: '2024 - Present',
    description: 'Delivering high-quality web solutions to clients worldwide. Specializing in MERN stack applications, from concept to deployment, while maintaining strong client communication and satisfaction.',
    highlights: ['MERN Stack Projects', 'Client Satisfaction', 'Remote Collaboration'],
  },
  {
    type: 'education',
    title: 'BS Computer Science',
    organization: 'COMSATS University',
    location: 'Sahiwal',
    period: '2023 - Present',
    description: 'Currently in my 3rd year, pursuing a degree in Computer Science. Focused on software development, web technologies, and building real-world projects alongside academics.',
    highlights: ['3rd Year Student', 'MERN Stack Focus', 'Active Learner'],
  },
  {
    type: 'education',
    title: 'ICS (Intermediate in Computer Science)',
    organization: 'Punjab College',
    location: 'Sahiwal',
    period: '2021 - 2023',
    description: 'This is where my passion for technology began. Chose computer science from the start and wrote my first lines of code in C — sparking a journey that continues to this day.',
    highlights: ['First Language: C', 'Computer Science Foundation', 'Passion for Coding'],
  },
];

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <section id="experience" className="py-20 lg:py-32 relative overflow-hidden bg-background-light/30">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-heading">
              Experience & <span className="gradient-text">Education</span>
            </h2>
            <p className="section-subheading">
              My professional journey and educational background that shaped me into the developer I am today.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2" />

            {/* Timeline items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary transform md:-translate-x-1/2 -translate-x-1/2 shadow-glow-primary z-10"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
                  >
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
                  </motion.div>

                  {/* Content */}
                  <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <motion.div
                      className="glass-card p-6 hover:border-primary/50 transition-all duration-300"
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${
                            exp.type === 'work' 
                              ? 'bg-primary/20 text-primary' 
                              : 'bg-secondary/20 text-secondary'
                          }`}>
                            {exp.type === 'work' ? (
                              <Briefcase className="w-5 h-5" />
                            ) : (
                              <GraduationCap className="w-5 h-5" />
                            )}
                          </div>
                          <div>
                            <h3 className="text-lg font-bold">{exp.title}</h3>
                            <p className="text-primary text-sm">{exp.organization}</p>
                          </div>
                        </div>
                      </div>

                      {/* Meta info */}
                      <div className="flex flex-wrap gap-4 text-sm text-text-muted mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-text-muted text-sm mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2">
                        {exp.highlights.map((highlight, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-text-muted"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
