import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/projects'

export default function Projects() {
    return (
        <section id="work" style={{ padding: '6rem 2rem', maxWidth: 1400, margin: '0 auto' }}>
            <SectionHeader
                label="Selected Work"
                title="Projects that push boundaries"
                subtitle="A collection of interfaces where motion, clarity and interaction meet."
            />

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '1.5rem',
                    marginTop: '3rem',
                }}
            >
                {projects.map((p, i) => (
                    <ProjectCard key={p.id} project={p} index={i} />
                ))}
            </div>
        </section>
    )
}

export function SectionHeader({ label, title, subtitle }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ maxWidth: 700 }}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--accent)',
                    marginBottom: '0.9rem',
                }}
            >
                <span
                    style={{
                        width: 28,
                        height: 2,
                        background: 'linear-gradient(90deg, var(--accent), transparent)',
                        borderRadius: 2,
                    }}
                />
                {label}
            </div>
            <h2
                style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: 700,
                    letterSpacing: '-0.03em',
                    lineHeight: 1.15,
                    marginBottom: '0.8rem',
                }}
            >
                {title}
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', maxWidth: 600 }}>{subtitle}</p>
        </motion.div>
    )
}

function ProjectCard({ project, index }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
                duration: 0.7,
                delay: (index % 3) * 0.1,
                ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -10 }}
            style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 24,
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'border-color 0.3s, box-shadow 0.4s',
                minHeight: 280,
                display: 'flex',
                flexDirection: 'column',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${project.accent}55`
                e.currentTarget.style.boxShadow = `0 30px 60px -25px ${project.accent}30`
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.boxShadow = 'none'
            }}
        >
            {/* Gradient hover overlay */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: `radial-gradient(circle at 50% 0%, ${project.accent}10, transparent 70%)`,
                    opacity: 0,
                    transition: 'opacity 0.4s',
                    pointerEvents: 'none',
                }}
                className="card-glow"
            />

            <div
                style={{
                    fontSize: '2.8rem',
                    marginBottom: '1.5rem',
                    width: 'fit-content',
                    transition: 'transform 0.4s ease',
                }}
                className="card-icon"
            >
                {project.icon}
            </div>

            <h3
                style={{
                    fontSize: '1.35rem',
                    fontWeight: 600,
                    marginBottom: '0.6rem',
                    letterSpacing: '-0.01em',
                }}
            >
                {project.title}
            </h3>

            <p
                style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.92rem',
                    lineHeight: 1.65,
                    flex: 1,
                    marginBottom: '1.5rem',
                }}
            >
                {project.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        style={{
                            fontSize: '0.72rem',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '0.04em',
                            padding: '0.35rem 0.9rem',
                            borderRadius: 40,
                            background: `${project.accent}15`,
                            color: project.accent,
                            transition: 'all 0.3s',
                        }}
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <motion.div
                style={{
                    position: 'absolute',
                    top: 24,
                    right: 24,
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'var(--surface-2)',
                    border: '1px solid var(--border)',
                    opacity: 0,
                    transition: 'opacity 0.3s',
                }}
                className="card-arrow"
            >
                <ArrowUpRight size={16} />
            </motion.div>

            <style>{`
        article:hover .card-glow { opacity: 1; }
        article:hover .card-icon { transform: translateX(6px) scale(1.08); }
        article:hover .card-arrow { opacity: 1 !important; }
      `}</style>
        </motion.article>
    )
}