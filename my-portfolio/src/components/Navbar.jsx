import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'

const links = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
]

export default function Navbar({ theme, toggleTheme }) {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                padding: '0.9rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: scrolled ? 'color-mix(in srgb, var(--bg) 80%, transparent)' : 'transparent',
                backdropFilter: scrolled ? 'blur(20px)' : 'none',
                borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
                transition: 'all 0.4s ease',
            }}
        >
            <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                    fontSize: '1.4rem',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                }}
            >
                ✦ nova
            </motion.a>

            {/* Desktop links */}
            <div
                style={{
                    display: 'flex',
                    gap: '2.2rem',
                    alignItems: 'center',
                }}
                className="nav-desktop"
            >
                {links.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        style={{
                            fontSize: '0.92rem',
                            fontWeight: 500,
                            color: 'var(--text-muted)',
                            position: 'relative',
                            padding: '0.3rem 0',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                    >
                        {link.name}
                    </a>
                ))}
                <button
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        color: 'var(--text)',
                        transition: 'transform 0.3s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'rotate(20deg) scale(1.1)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'rotate(0) scale(1)')}
                >
                    {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </button>
            </div>

            {/* Mobile menu button */}
            <button
                className="nav-mobile-btn"
                onClick={() => setOpen(!open)}
                style={{
                    display: 'none',
                    width: 40,
                    height: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text)',
                }}
            >
                {open ? <X size={24} /> : <Menu size={24} />}
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            right: 0,
                            background: 'var(--surface)',
                            borderBottom: '1px solid var(--border)',
                            padding: '1.5rem 2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.2rem',
                        }}
                    >
                        {links.map((l) => (
                            <a
                                key={l.name}
                                href={l.href}
                                onClick={() => setOpen(false)}
                                style={{ fontWeight: 500, fontSize: '1.1rem' }}
                            >
                                {l.name}
                            </a>
                        ))}
                        <button
                            onClick={() => {
                                toggleTheme()
                                setOpen(false)
                            }}
                            style={{
                                textAlign: 'left',
                                fontWeight: 500,
                                fontSize: '1.1rem',
                                color: 'var(--text-muted)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                            }}
                        >
                            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                            Toggle theme
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
        </motion.nav>
    )
}