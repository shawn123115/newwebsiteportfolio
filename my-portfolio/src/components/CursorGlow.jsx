import { useEffect, useRef } from 'react'

export default function CursorGlow() {
    const glowRef = useRef(null)

    useEffect(() => {
        if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
        const move = (e) => {
            if (glowRef.current) {
                glowRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
            }
        }
        window.addEventListener('mousemove', move)
        return () => window.removeEventListener('mousemove', move)
    }, [])

    return (
        <div
            ref={glowRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: 500,
                height: 500,
                marginLeft: -250,
                marginTop: -250,
                borderRadius: '50%',
                background: 'radial-gradient(circle, var(--glow), transparent 65%)',
                pointerEvents: 'none',
                zIndex: 0,
                willChange: 'transform',
            }}
        />
    )
}