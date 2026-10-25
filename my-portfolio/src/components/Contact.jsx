import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

// Custom SVGs for social icons (fixes lucide-react export errors)
const GithubIcon = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-1.9c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.5-.3-5.1-1.3-5.1-5.6 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.4.1-2.9 0 0 1-.3 3.2 1.2a11.1 11.1 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.5.2 2.6.1 2.9.7.8 1.1 1.8 1.1 3 0 4.3-2.6 5.3-5.1 5.6.4.3.7 1 .7 2v3c0 .3.2.6.8.5 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
    </svg>
)

const LinkedinIcon = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
)

const FacebookIcon = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
)

export default function Contact() {
    return (
        <section id="contact" style={{ padding: '6rem 2rem', maxWidth: 1400, margin: '0 auto' }}>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{
                    background: 'linear-gradient(135deg, var(--surface), var(--surface-2))',
                    border: '1px solid var(--border)',
                    borderRadius: 32,
                    padding: 'clamp(2.5rem, 6vw, 5rem)',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* ambient glow */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-50%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '120%',
                        height: '200%',
                        background: 'radial-gradient(circle, var(--glow), transparent 60%)',
                        pointerEvents: 'none',
                        opacity: 0.5,
                    }}
                />

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    style={{
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                        fontWeight: 800,
                        letterSpacing: '-0.03em',
                        lineHeight: 1.1,
                        marginBottom: '1.2rem',
                        position: 'relative',
                    }}
                >
                    Let's build something
                    <br />
                    <span
                        style={{
                            background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        that feels alive.
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                        color: 'var(--text-muted)',
                        maxWidth: 520,
                        margin: '0 auto 2.5rem',
                        fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)',
                        position: 'relative',
                    }}
                >
                    Have a project in mind? I'm always open to interesting conversations and
                    collaborations.
                </motion.p>

                <motion.a
                    href="bshawn123115@gmail.com"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        padding: '1rem 2.2rem',
                        borderRadius: 60,
                        fontWeight: 600,
                        fontSize: '1rem',
                        background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
                        color: 'white',
                        boxShadow: '0 10px 40px -10px var(--glow)',
                        position: 'relative',
                        marginBottom: '2.5rem',
                    }}
                >
                    <Mail size={18} />
                    bshawn123115@gmail.com
                </motion.a>

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '1rem',
                        position: 'relative',
                    }}
                >
                    {[
                        { icon: GithubIcon, href: 'https://github.com', label: 'GitHub' },
                        { icon: LinkedinIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
                        { icon: FacebookIcon, href: 'https://www.facebook.com/shawn.m.batestel.2024/', label: 'Facebook' },
                    ].map(({ icon: Icon, href, label }, i) => (
                        <motion.a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={label}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                            whileHover={{ scale: 1.15, y: -3 }}
                            whileTap={{ scale: 0.9 }}
                            style={{
                                width: 46,
                                height: 46,
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'var(--surface)',
                                border: '1px solid var(--border)',
                                color: 'var(--text)',
                            }}
                        >
                            <Icon size={18} />
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}