import { motion } from 'framer-motion'

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
                borderTop: '1px solid var(--border)',
                padding: '2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
                maxWidth: 1400,
                margin: '0 auto',
                color: 'var(--text-muted)',
                fontSize: '0.85rem',
            }}
        >
            <p>Build With Love ♥</p>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
                <a href="#work" style={{ transition: 'color 0.3s' }}>
                    Work
                </a>
                <a href="#about" style={{ transition: 'color 0.3s' }}>
                    About
                </a>
                <a href="#contact" style={{ transition: 'color 0.3s' }}>
                    Contact
                </a>
            </div>
        </motion.footer>
    )
}