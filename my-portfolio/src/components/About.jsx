import { motion } from 'framer-motion'
import { MapPin, Briefcase, Code2, Sparkles, ArrowUpRight } from 'lucide-react'

const facts = [
    { icon: MapPin, label: 'Based in', value: 'PH, Cebu' },
    { icon: Briefcase, label: 'Experience', value: 'TBA' },
    { icon: Code2, label: 'Toolbox', value: 'Laravel · Node · Mysql' },
    { icon: Sparkles, label: 'Focus', value: 'Interaction Design' },
]

const skills = [
    'Product Design',
    'Interaction Design',
    'Frontend Development',
    'Motion Design',
    'Design Systems',
    'React.js',
    'UI/UX'
]

// The images you want to display in the gallery
const aboutImages = [
    { src: '/workspace.jpg', alt: 'Workspace' },
    { src: '/workspace2.jpg', alt: 'Working' },
    { src: '/workspace3.jpg', alt: 'Hobby' }
]

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
}

export default function About() {
    return (
        <section id="about" style={{ padding: '8rem 2rem', maxWidth: 1400, margin: '0 auto' }}>

            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                style={{ marginBottom: '4rem' }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--accent)', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
                    <span style={{ width: 30, height: 2, background: 'var(--accent)' }} />
                    About Me
                </div>
                <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                    Behind the <span style={{ color: 'var(--text-muted)' }}>screen.</span>
                </h2>
            </motion.div>

            {/* Main Layout Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1.1fr', // Images take 1fr, Text takes slightly more
                gap: '4rem',
                alignItems: 'center'
            }} className="about-main-grid">

                {/* =======================================
                    LEFT COLUMN: Interactive Image Gallery
                    ======================================= */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', position: 'relative' }}>

                    {/* Main Big Image (Spans 2 columns) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        whileHover={{ scale: 1.02 }}
                        style={{
                            gridColumn: 'span 2',
                            borderRadius: 32,
                            overflow: 'hidden',
                            border: '1px solid var(--border)',
                            aspectRatio: '16/10',
                            position: 'relative'
                        }}
                    >
                        <img
                            src={aboutImages[0].src}
                            alt={aboutImages[0].alt}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.9)' }}
                        />
                        {/* Glowing gradient overlay */}
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--surface) 0%, transparent 50%)', opacity: 0.6 }} />
                    </motion.div>

                    {/* Bottom Left Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        whileHover={{ scale: 1.05, rotate: -2 }}
                        style={{
                            borderRadius: 24,
                            overflow: 'hidden',
                            border: '1px solid var(--border)',
                            aspectRatio: '1/1',
                        }}
                    >
                        <img
                            src={aboutImages[1].src}
                            alt={aboutImages[1].alt}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.9)' }}
                        />
                    </motion.div>

                    {/* Bottom Right Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        style={{
                            borderRadius: 24,
                            overflow: 'hidden',
                            border: '1px solid var(--border)',
                            aspectRatio: '1/1',
                        }}
                    >
                        <img
                            src={aboutImages[2].src}
                            alt={aboutImages[2].alt}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.9)' }}
                        />
                    </motion.div>
                </div>

                {/* =======================================
                    RIGHT COLUMN: Text, Facts & Skills 
                    ======================================= */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    variants={itemVariants}
                    style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}
                >
                    {/* Bio Text */}
                    <div>
                        <p style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.3rem)', lineHeight: 1.7, color: 'var(--text)', marginBottom: '1.5rem', fontWeight: 500 }}>
                            I'm a junior developer passionate about building modern digital experiences through clean code, thoughtful design, and continuous learning. Always exploring new technologies, improving my skills, and turning ideas into functional, user-friendly solutions.
                        </p>
                        <p style={{ fontSize: 'clamp(1rem, 1.2vw, 1.1rem)', lineHeight: 1.7, color: 'var(--text-muted)' }}>
                            My approach combines problem-solving, continuous learning, and creative development to build simple, functional, and user-friendly solutions. I'm always exploring new technologies, improving my coding skills, and finding better ways to bring ideas to life.
                        </p>
                    </div>

                    {/* Quick Facts (Horizontal Scroll on Mobile, Grid on Desktop) */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '1rem'
                    }} className="about-facts-grid">
                        {facts.map((fact, i) => {
                            const Icon = fact.icon
                            return (
                                <motion.div
                                    key={fact.label}
                                    variants={itemVariants}
                                    whileHover={{ y: -5, borderColor: 'var(--accent)' }}
                                    style={{
                                        background: 'var(--surface)',
                                        border: '1px solid var(--border)',
                                        borderRadius: 20,
                                        padding: '1.2rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        transition: 'border-color 0.3s',
                                    }}
                                >
                                    <div style={{ color: 'var(--accent)', marginBottom: '0.8rem' }}>
                                        <Icon size={20} strokeWidth={2.5} />
                                    </div>
                                    <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.2rem' }}>
                                        {fact.label}
                                    </div>
                                    <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text)' }}>
                                        {fact.value}
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>

                    {/* Skills Bar */}
                    <div style={{
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        borderRadius: 24,
                        padding: '1.5rem',
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>Core Skills</h3>
                            <ArrowUpRight size={18} color="var(--text-muted)" />
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {skills.map((skill, index) => (
                                <motion.span
                                    key={skill}
                                    whileHover={{ scale: 1.05, background: 'var(--accent)', color: 'white' }}
                                    style={{
                                        padding: '0.4rem 0.9rem',
                                        borderRadius: 40,
                                        fontSize: '0.8rem',
                                        fontWeight: 500,
                                        background: 'var(--surface-2)',
                                        border: '1px solid var(--border)',
                                        color: 'var(--text-muted)',
                                        cursor: 'pointer',
                                        transition: 'background 0.2s, color 0.2s'
                                    }}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </div>

                </motion.div>

            </div>

            {/* Responsive Overrides */}
            <style>{`
                @media (max-width: 1024px) {
                    .about-main-grid {
                        grid-template-columns: 1fr !important; /* Stack images on top of text */
                        gap: 3rem !important;
                    }
                }
                @media (max-width: 600px) {
                    .about-facts-grid {
                        grid-template-columns: 1fr 1fr !important; /* Keep facts 2x2 on mobile */
                    }
                }
            `}</style>
        </section>
    )
}