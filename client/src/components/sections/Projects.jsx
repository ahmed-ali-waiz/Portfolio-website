import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Folder, Star } from 'lucide-react';

const projects = [
  // Deployed Project 1
  {
    id: 1,
    title: 'Apex Driving School',
    description: 'A modern website for Apex Driving School, featuring course details, instructor profiles, and an online contact form for easy enrollment.',
    image: 'https://github.com/ahmed-ali-waiz/Driving-School/blob/master/assets/graduate1.jpg?raw=true',
    tags: ['React', 'Tailwind', 'Netlify'],
    category: 'frontend',
    liveUrl: 'https://apexx-driving.netlify.app',
    githubUrl: 'https://github.com/ahmed-ali-waiz/Driving-School',
    featured: true,
  },
  // Deployed Project 2
  {
    id: 2,
    title: 'Image-slider',
    description: 'A visually engaging CSS-only image slider with a 3D carousel effect. Built for web design inspiration and creative UI showcases.',
    image: '/image-slider.png',
    tags: ['HTML', 'CSS', 'Web Design'],
    category: 'frontend',
    liveUrl: 'https://ahmed-ali-waiz.github.io/Image-slider.io/',
    githubUrl: 'https://github.com/ahmed-ali-waiz/Image-slider.io',
    featured: true,
  },
  // Code Project 1
  {
    id: 3,
    title: 'Pizza-Management-System',
    description: 'A comprehensive Pizza Management System Admin Panel built as a Web Technologies course project. Features order management, inventory tracking, analytics dashboard, and payment processing.',
    image: '/pizza-img.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Admin Panel'],
    category: 'fullstack',
    liveUrl: '',
    githubUrl: 'https://github.com/ahmed-ali-waiz/Pizza-Management-System',
    featured: false,
  },
  // Code Project 2
  {
    id: 4,
    title: 'Chatting Application',
    description: 'A full-stack real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js). It features secure user authentication, smooth real-time messaging, online user status, and a modern, responsive UI designed for scalability and production use.',
    image: 'https://tse2.mm.bing.net/th/id/OIP.ReCk6ngfPiRE_KwdUzH6ZQHaE0?rs=1&pid=ImgDetMain&o=7&rm=3',
    tags: ['MERN', 'Socket.io', 'Real-time', 'Authentication'],
    category: 'fullstack',
    liveUrl: '',
    githubUrl: 'https://github.com/ahmed-ali-waiz/Mern-Chatt-App',
    featured: false,
  },
  // Dummy Project 1
  {
    id: 5,
    title: 'Demo Project One',
    description: 'This is a placeholder demo project to showcase layout and design. Replace with your own project details.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
    tags: ['Demo', 'Template'],
    category: 'frontend',
    liveUrl: '',
    githubUrl: '',
    featured: false,
  },
  // Dummy Project 2
  {
    id: 6,
    title: 'Demo Project Two',
    description: 'Another example of a dummy project card. Use this slot for future work or experiments.',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&h=400&fit=crop',
    tags: ['Demo', 'Experiment'],
    category: 'frontend',
    liveUrl: '',
    githubUrl: '',
    featured: false,
  },
];

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'fullstack', name: 'Full Stack' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend' },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((project) => project.category === activeCategory);

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
    <section id="projects" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10" />

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="section-heading">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subheading">
              A showcase of my recent work. Each project represents unique challenges and creative solutions.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-xl font-medium text-sm transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-primary to-secondary text-white'
                    : 'glass-button text-text-muted hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="project-card group"
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                    
                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 bg-accent/90 rounded-full text-xs font-medium text-white">
                        <Star className="w-3 h-3 fill-white" />
                        Featured
                      </div>
                    )}

                    {/* Hover Links */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center gap-4 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    >
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 glass-card hover:bg-primary hover:border-primary transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.a>
                      )}
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 glass-card hover:bg-primary hover:border-primary transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-5 h-5" />
                        </motion.a>
                      )}
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <Folder className="w-5 h-5 text-primary shrink-0" />
                    </div>
                    
                    <p className="text-text-muted text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs font-mono text-primary bg-primary/10 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/ahmed-ali-waiz"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              View More on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
