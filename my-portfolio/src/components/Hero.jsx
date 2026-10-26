import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
    return (
        <section
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '3rem',
                padding: '7rem 2rem 4rem 8vw',
                maxWidth: '100vw',
                overflow: 'hidden',
                margin: '0 auto',
                position: 'relative',
            }}
        >
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                style={{ flex: '1 1 500px', maxWidth: 700, zIndex: 1 }}
            >
                <motion.div variants={item}>
                    <span
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.6rem',
                            background: 'rgba(108,123,255,0.1)',
                            border: '1px solid rgba(108,123,255,0.25)',
                            color: 'var(--accent)',
                            padding: '0.45rem 1.1rem',
                            borderRadius: 40,
                            fontSize: '0.8rem',
                            fontWeight: 500,
                            marginBottom: '1.5rem',
                        }}
                    >
                        <span
                            style={{
                                width: 7,
                                height: 7,
                                borderRadius: '50%',
                                background: 'var(--accent)',
                                boxShadow: '0 0 10px var(--accent)',
                                animation: 'pulse 2s infinite',
                            }}
                        />
                        Available for freelance
                    </span>
                </motion.div>

                <motion.h1
                    variants={item}
                    style={{
                        fontSize: 'clamp(2.8rem, 7vw, 5.2rem)',
                        fontWeight: 800,
                        lineHeight: 1.05,
                        letterSpacing: '-0.04em',
                        marginBottom: '1.5rem',
                    }}
                >
                    Design that
                    <br />
                    <span
                        style={{
                            background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        inspires.
                    </span>
                </motion.h1>

                <motion.p
                    variants={item}
                    style={{
                        fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
                        color: 'var(--text-muted)',
                        maxWidth: 550,
                        marginBottom: '2.5rem',
                        lineHeight: 1.7,
                    }}
                >
                    I'm a BSIT graduate and aspiring developer passionate about building immersive digital experiences. Blending creativity with technology, I craft modern, intuitive, and visually engaging interfaces. Minimal design, meaningful interactions, and thoughtful motion turning ideas into digital experiences that inspire, connect, and leave a lasting impression. Always learning, always creating, and always pushing the boundaries of what's possible on the web.
                </motion.p>

                <motion.div variants={item} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <motion.a
                        href="#work"
                        whileHover={{ scale: 1.04, y: -3 }}
                        whileTap={{ scale: 0.97 }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.6rem',
                            padding: '0.95rem 2rem',
                            borderRadius: 60,
                            fontWeight: 600,
                            fontSize: '0.95rem',
                            background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
                            color: 'white',
                            boxShadow: '0 10px 40px -10px var(--glow)',
                        }}
                    >
                        Explore work <ArrowRight size={18} />
                    </motion.a>

                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.04, y: -3 }}
                        whileTap={{ scale: 0.97 }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            padding: '0.95rem 2rem',
                            borderRadius: 60,
                            fontWeight: 600,
                            fontSize: '0.95rem',
                            border: '1px solid var(--border)',
                            color: 'var(--text)',
                        }}
                    >
                        Get in touch
                    </motion.a>
                </motion.div>
            </motion.div>

            {/* Animated orb visual */}
            <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{
                    flex: '1 1 350px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    minHeight: 380,
                }}
            >
                <OrbVisual />
            </motion.div>

            <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
      `}</style>
        </section>
    )
}

function OrbVisual() {
    return (
        <div style={{ position: 'relative', width: 'min(400px, 75vw)', height: 'min(400px, 75vw)' }}>

            {/* Main orb with PROFILE PICTURE */}
            <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '50%',
                    background: 'var(--surface-2)',
                    border: '2px solid var(--border)',
                    boxShadow: '0 30px 90px -20px var(--glow)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                }}
            >
                <img
                    src={`${import.meta.env.BASE_URL}workspace3.jpg`}
                    alt="Professional Portrait"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        filter: 'brightness(0.9) contrast(1.1)'
                    }}
                    onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<span style="font-size: 5rem; opacity: 0.5">👤</span>';
                    }}
                />

                {/* Subtle gradient overlay so it blends with the dark theme */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(circle at center, transparent 40%, rgba(10,10,15,0.6) 100%)',
                    pointerEvents: 'none'
                }} />
            </motion.div>

            {/* 
        UI and UX orbs are removed. 
        Only the small star orb remains for a bit of visual flair.
      */}

            {/* Small orb */}
            <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, 360, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                    position: 'absolute',
                    top: '15%',
                    left: '-5%',
                    width: '15%',
                    height: '15%',
                    borderRadius: '50%',
                    background: 'var(--surface-2)',
                    border: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 'clamp(0.7rem, 1.3vw, 1rem)',
                    zIndex: 2,
                }}
            >
                ✦
            </motion.div>
        </div>
    )
}