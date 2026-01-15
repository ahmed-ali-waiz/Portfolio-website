import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', level: 85, icon: '🌐' },
      { name: 'CSS', level: 80, icon: '🎨' },
      { name: 'JavaScript', level: 85, icon: '⚡' },
      { name: 'React', level: 75, icon: '⚛️' },
      { name: 'Tailwind CSS', level: 78, icon: '💨' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 80, icon: '🟢' },
      { name: 'Express.js', level: 80, icon: '🚂' },
      { name: 'MongoDB', level: 85, icon: '🍃' },
      { name: 'REST APIs', level: 80, icon: '🔗' },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git & GitHub', level: 75, icon: '🐙' },
      { name: 'VS Code', level: 90, icon: '💻' },
      { name: 'Postman', level: 75, icon: '📬' },
      { name: 'npm', level: 80, icon: '📦' },
    ],
  },
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-20 lg:py-32 relative overflow-hidden bg-background-light/30">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10" />

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
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="section-subheading">
              Technologies and tools I use to bring ideas to life. Constantly learning and improving.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="glass-card p-6"
              >
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  {category.title}
                </h3>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="font-medium text-sm">{skill.name}</span>
                        </div>
                        <span className="text-xs text-text-muted">{skill.level}%</span>
                      </div>
                      
                      {/* Progress bar */}
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05,
                            duration: 1,
                            ease: 'easeOut',
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <h4 className="text-lg font-semibold mb-6 text-text-muted">
              Also experienced with:
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Redux', 'GraphQL', 'Firebase', 'Jest', 'Cypress',
                'Sass', 'Material UI', 'Socket.io', 'Redis', 'Linux'
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 glass-card text-sm hover:border-primary/50 transition-all duration-300 cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1 + index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
