import { motion } from 'framer-motion'

export default function Loader() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
            style={{
                position: 'fixed',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#0a0a0f',
                zIndex: 9999,
                flexDirection: 'column',
                gap: '2rem',
            }}
        >
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
                style={{
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    border: '3px solid rgba(108,123,255,0.15)',
                    borderTopColor: '#6c7bff',
                }}
            />
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                style={{
                    color: '#8b8baa',
                    fontSize: '0.85rem',
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    fontWeight: 500,
                }}
            >
                Loading
            </motion.p>
        </motion.div>
    )
}