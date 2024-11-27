import { motion } from 'framer-motion';

export const TronPortfolio = () => (
  <div style={styles.container}>
    {/* Neon Grid Background */}
    <div style={styles.gridOverlay}></div>

    {/* Header Section */}
    <motion.header
      style={styles.header}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 style={styles.headerTitle}>
        <span style={styles.neonText}>FULLSTACK DEV</span>
        <br />
        <span style={styles.orangeText}>CREATING THE GRID</span>
      </h1>
    </motion.header>

    {/* About Me Section */}
    <motion.section
      style={styles.glassCard}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2 }}
    >
      <h2 style={styles.sectionTitle}>About Me</h2>
      <p style={styles.text}>
        Hi, I’m a passionate Fullstack Developer with expertise in building
        scalable web applications and designing intuitive user interfaces. I
        thrive at the intersection of design and technology.
      </p>
    </motion.section>

    {/* Projects Section */}
    <motion.section
      style={styles.glassCard}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.4 }}
    >
      <h2 style={styles.sectionTitle}>Projects</h2>
      <ul style={styles.projectList}>
        <li style={styles.projectItem}>
          <strong>GridBuilder</strong> - A real-time collaborative grid layout
          tool.
        </li>
        <li style={styles.projectItem}>
          <strong>CodeFlow</strong> - A developer social network for code
          sharing.
        </li>
        <li style={styles.projectItem}>
          <strong>NeoShop</strong> - A futuristic e-commerce platform.
        </li>
      </ul>
    </motion.section>

    {/* Contact Section */}
    <motion.section
      style={styles.glassCard}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.6 }}
    >
      <h2 style={styles.sectionTitle}>Contact</h2>
      <p style={styles.text}>
        Let’s collaborate! Feel free to reach out at{' '}
        <a href='mailto:tron.dev@gridmail.com' style={styles.link}>
          tron.dev@gridmail.com
        </a>
        .
      </p>
    </motion.section>
  </div>
);

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    minHeight: '100vh',
    background: 'linear-gradient(180deg, #000, #001)',
    color: '#0ff',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    fontFamily: "'Orbitron', sans-serif",
  },
  gridOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    background:
      'radial-gradient(circle, #000 40%, transparent 80%), repeating-linear-gradient(90deg, #0ff 0%, transparent 1%)',
    opacity: 0.1,
    mixBlendMode: 'screen',
    zIndex: 0,
  },
  header: {
    marginBottom: '40px',
    textAlign: 'center',
  },
  headerTitle: {
    fontSize: '3.5rem',
    lineHeight: '1.2',
    color: '#0ff',
    textShadow: '0px 0px 10px #0ff, 0px 0px 20px #0ff',
  },
  neonText: {
    color: '#0ff',
    display: 'block',
  },
  orangeText: {
    color: '#ff9900',
    textShadow: '0px 0px 10px #ff9900, 0px 0px 20px #ff9900',
  },
  glassCard: {
    width: '90%',
    maxWidth: '600px',
    padding: '20px',
    margin: '20px 0',
    borderRadius: '10px',
    background: 'rgba(255, 255, 255, 0.1)',
    boxShadow: '0px 4px 30px rgba(0, 255, 255, 0.3)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(0, 255, 255, 0.2)',
    zIndex: 1,
    color: '#fff',
  },
  sectionTitle: {
    fontSize: '2rem',
    marginBottom: '10px',
    textShadow: '0px 0px 10px #0ff',
    color: '#0ff',
  },
  text: {
    fontSize: '1rem',
    lineHeight: '1.5',
    color: '#ccc',
  },
  projectList: {
    listStyle: 'none',
    padding: 0,
  },
  projectItem: {
    marginBottom: '10px',
    textShadow: '0px 0px 5px #ff9900',
    color: '#ff9900',
  },
  link: {
    color: '#ff9900',
    textShadow: '0px 0px 5px #ff9900',
    textDecoration: 'none',
  },
};
