import { useEffect, useState, useRef, useMemo } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react' // Added ArrowUp
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CursorGlow from './components/CursorGlow'
import Loader from './components/Loader'
import VoiceGreeting from "./components/VoiceGreeting";



// --- SCROLL TO TOP BUTTON COMPONENT ---
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down 400px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          whileHover={{ scale: 1.1, y: -5, boxShadow: '0 0 25px var(--accent)' }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            width: 50,
            height: 50,
            borderRadius: '50%',
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            color: 'var(--accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 9999,
            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)',
            backdropFilter: 'blur(10px)'
          }}
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

// --- ENCHANTED WEATHER ENGINE ---
const WeatherCanvas = ({ season, theme }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d', { alpha: true })
    let animationFrameId
    let particles = []
    let w, h
    const dpr = window.devicePixelRatio || 1

    const resize = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.scale(dpr, dpr)
    }
    window.addEventListener('resize', resize)
    resize()

    class Particle {
      constructor() {
        this.reset(true)
      }
      reset(init = false) {
        this.x = Math.random() * w

        if (season === 'rain') {
          this.y = init ? Math.random() * h : -20
          this.size = Math.random() * 15 + 10
          this.speedY = Math.random() * 10 + 15
          this.speedX = Math.random() * 0.5 - 0.25
          this.type = 'rain'
        } else if (season === 'snow') {
          this.y = init ? Math.random() * h : -20
          this.size = Math.random() * 2 + 1
          this.speedY = Math.random() * 0.8 + 0.5
          this.speedX = Math.random() * 0.5 - 0.25
          this.type = 'snow'
        } else if (season === 'autumn') {
          this.type = Math.random() > 0.6 ? 'leaf' : 'bee'

          if (this.type === 'leaf') {
            this.y = init ? Math.random() * h : -20
            this.size = Math.random() * 6 + 4
            this.speedY = Math.random() * 1 + 0.8
            this.speedX = Math.random() * 1 - 0.5
            this.rotation = Math.random() * 360
            this.rotSpeed = Math.random() * 2 - 1
          } else {
            this.y = init ? Math.random() * h : h + 20
            this.size = Math.random() * 2.5 + 1.5
            this.speedY = -(Math.random() * 0.8 + 0.4)
            this.speedX = Math.random() * 1.5 - 0.75
            this.opacity = 0
            this.twinkleSpeed = Math.random() * 0.05 + 0.02
            this.phase = Math.random() * Math.PI * 2
            this.wiggleSpeed = Math.random() * 0.05 + 0.02
            this.color = theme === 'light' ? 'rgba(255, 140, 0,' : (Math.random() > 0.5 ? 'rgba(100, 255, 255,' : 'rgba(255, 215, 0,')
          }
        } else {
          this.y = init ? Math.random() * h : -20
          this.size = Math.random() * 1.5 + 0.5
          this.speedY = 0
          this.speedX = 0
          this.opacity = Math.random() * 0.5 + 0.1
          this.twinkleSpeed = Math.random() * 0.02 + 0.01
          this.type = 'star'
        }
      }
      update() {
        if (season === 'autumn' && this.type === 'bee') {
          this.y += this.speedY
          this.phase += this.wiggleSpeed
          this.x += Math.sin(this.phase) * 1.5
          this.opacity += this.twinkleSpeed

          if (this.opacity > 1) {
            this.opacity = 1
            this.twinkleSpeed *= -1
          } else if (this.opacity < 0.2) {
            this.opacity = 0.2
            this.twinkleSpeed *= -1
          }

          if (this.y < -20) {
            this.reset()
            this.y = h + 20
          }
        } else if (season !== 'faded' && this.type !== 'bee') {
          this.y += this.speedY
          this.x += this.speedX

          if (this.type === 'leaf') {
            this.rotation += this.rotSpeed
            this.x += Math.sin(this.y * 0.01) * 1.5
          }

          if (this.y > h + 20 || this.x > w + 20 || this.x < -20) {
            this.reset()
            this.x = Math.random() * w
          }
        } else if (season === 'faded') {
          this.twinkleSpeed += 0.01
          this.currentOpacity = this.opacity + Math.sin(this.twinkleSpeed) * 0.2
        }
      }
      draw() {
        if (this.type === 'rain') {
          ctx.moveTo(this.x, this.y)
          ctx.lineTo(this.x + this.speedX * 2, this.y + this.size)
        } else if (this.type === 'snow') {
          ctx.moveTo(this.x, this.y)
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        } else if (this.type === 'leaf') {
          ctx.save()
          ctx.translate(this.x, this.y)
          ctx.rotate((this.rotation * Math.PI) / 180)
          ctx.beginPath()
          ctx.ellipse(0, 0, this.size, this.size / 2, 0, 0, Math.PI * 2)
          ctx.fillStyle = theme === 'light' ? 'rgba(200, 80, 0, 0.6)' : 'rgba(255, 140, 0, 0.8)'
          ctx.fill()
          ctx.restore()
        } else if (this.type === 'bee') {
          ctx.beginPath()
          ctx.shadowBlur = 15 + (this.opacity * 10)
          ctx.shadowColor = `${this.color}${this.opacity})`
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
          ctx.fillStyle = `${this.color}${this.opacity})`
          ctx.fill()
          ctx.shadowBlur = 0

          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size * 0.4, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
          ctx.fill()
        } else {
          ctx.moveTo(this.x, this.y)
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        }
      }
    }

    const counts = { rain: 120, snow: 80, autumn: 100, faded: 60 }
    const count = counts[season] || 50

    for (let i = 0; i < count; i++) {
      particles.push(new Particle())
    }

    const animate = () => {
      ctx.clearRect(0, 0, w, h)

      if (season === 'rain') {
        ctx.strokeStyle = theme === 'light' ? 'rgba(100, 150, 255, 0.6)' : 'rgba(150, 180, 255, 0.4)'
        ctx.lineWidth = 1.5
        ctx.lineCap = 'round'
        ctx.beginPath()
      } else if (season === 'snow') {
        ctx.fillStyle = theme === 'light' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.8)'
        ctx.beginPath()
      } else if (season === 'autumn') {
        // Handled in draw
      } else {
        ctx.fillStyle = theme === 'light' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.6)'
      }

      for (let i = 0; i < particles.length; i++) {
        particles[i].update()

        if (particles[i].type === 'bee') {
          particles[i].draw()
        } else if (season === 'faded') {
          ctx.beginPath()
          const starColor = theme === 'light' ? '0, 0, 0' : '255, 255, 255'
          ctx.fillStyle = `rgba(${starColor}, ${Math.max(0, particles[i].currentOpacity || 0.5)})`
          ctx.arc(particles[i].x, particles[i].y, particles[i].size, 0, Math.PI * 2)
          ctx.fill()
        } else {
          particles[i].draw()
        }
      }

      if (season === 'rain') ctx.stroke()
      if (season === 'snow') ctx.fill()

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [season, theme])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 2,
        maxWidth: '100vw',
        overflow: 'hidden'
      }}
    />
  )
}

const MemoizedWeather = ({ season, theme }) => useMemo(() => <WeatherCanvas season={season} theme={theme} />, [season, theme])

export default function App() {
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState('dark')

  const seasons = useMemo(() => ['rain', 'snow', 'autumn', 'faded'], [])
  const [currentSeason, setCurrentSeason] = useState('faded')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600)
    return () => clearTimeout(t)
  }, [])
  return (<>
    <VoiceGreeting /></>)

  useEffect(() => {
    if (loading) return
    const interval = setInterval(() => {
      setCurrentSeason(prev => {
        const nextIndex = (seasons.indexOf(prev) + 1) % seasons.length
        return seasons[nextIndex]
      })
    }, 12000)

    return () => clearInterval(interval)
  }, [loading, seasons])

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <>
          <motion.div
            key={theme}
            initial={{ opacity: 0 }}
            animate={{
              opacity: currentSeason === 'autumn' || currentSeason === 'faded' ? 0.9 : 0.3,
              scale: currentSeason === 'autumn' ? 1.05 : 1
            }}
            transition={{
              opacity: { duration: 2 },
              scale: { duration: 15, repeat: Infinity, ease: 'easeInOut' }
            }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 0,
              pointerEvents: 'none',
              backgroundImage: theme === 'dark' ? `url("${import.meta.env.BASE_URL}ancient-tree.jpg")`
                : `url("${import.meta.env.BASE_URL}light-tree.jpg")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: theme === 'dark'
                ? 'brightness(1.2) contrast(1.2) saturate(1.5) drop-shadow(0 0 50px rgba(100, 255, 255, 0.4))'
                : 'brightness(1.1) contrast(1.1) saturate(1.3) drop-shadow(0 0 60px rgba(255, 215, 0, 0.5))',
              mixBlendMode: theme === 'dark' ? 'screen' : 'normal',
            }}
          />

          <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 0,
            pointerEvents: 'none',
            background: theme === 'dark'
              ? 'radial-gradient(circle at 50% 20%, rgba(108, 123, 255, 0.25) 0%, transparent 60%)'
              : 'radial-gradient(circle at 70% 15%, rgba(255, 230, 150, 0.4) 0%, transparent 60%)',
            opacity: currentSeason === 'autumn' ? 1 : 0.6,
            transition: 'opacity 2s ease-in-out, background 0.5s ease'
          }} />

          <MemoizedWeather season={currentSeason} theme={theme} />

          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 3,
              pointerEvents: 'none',
              background: theme === 'dark'
                ? 'linear-gradient(to bottom, rgba(10,10,15,0.3) 0%, rgba(10,10,15,0.95) 45vh, var(--bg) 100%)'
                : 'linear-gradient(to bottom, rgba(248,248,252,0.3) 0%, rgba(248,248,252,0.95) 45vh, var(--bg) 100%)',
            }}
          />

          <CursorGlow />

          {/* SCROLL TO TOP BUTTON IS ADDED HERE */}
          <ScrollToTop />

          <div style={{ position: 'relative', zIndex: 10 }}>
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <main>
              <Hero />
              <About />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </div>
        </>
      )}
      export default App;
    </>
  )
}

