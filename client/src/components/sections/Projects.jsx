import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Folder, Star } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with payment integration, admin dashboard, and real-time inventory management.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'fullstack',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates, drag-and-drop interface, and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    category: 'fullstack',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 3,
    title: 'AI Chat Application',
    description: 'Real-time chat application with AI-powered responses, message encryption, and file sharing capabilities.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    tags: ['React', 'Socket.io', 'OpenAI', 'Express'],
    category: 'fullstack',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 4,
    title: 'Portfolio Dashboard',
    description: 'Investment portfolio tracker with real-time stock data, analytics, and performance visualization.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop',
    tags: ['React', 'D3.js', 'Node.js', 'API'],
    category: 'frontend',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: 5,
    title: 'REST API Service',
    description: 'Scalable RESTful API with authentication, rate limiting, and comprehensive documentation.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    category: 'backend',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: 6,
    title: 'Weather Dashboard',
    description: 'Beautiful weather application with location-based forecasts, interactive maps, and weather alerts.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
    tags: ['React', 'Tailwind', 'Weather API', 'Geolocation'],
    category: 'frontend',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
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
