import { useEffect, useRef } from 'react'

const HeroBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let nodes = []
    
    const colors = {
      electric: '#2F2FE4',
      royal: '#162E93',
      gold: '#D4AF37'
    }

    class Node {
      constructor(width, height) {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.vx = (Math.random() - 0.5) * 0.4
        this.vy = (Math.random() - 0.5) * 0.4
        this.radius = 1.5 + Math.random() * 2.5
        this.color = Math.random() > 0.7 ? colors.electric : colors.royal
        this.pulse = Math.random() * Math.PI * 2
        this.pulseSpeed = 0.02 + Math.random() * 0.02
      }

      update(width, height) {
        this.x += this.vx
        this.y += this.vy
        this.pulse += this.pulseSpeed
        
        if (this.x < 0 || this.x > width) this.vx *= -1
        if (this.y < 0 || this.y > height) this.vy *= -1
      }

      draw(ctx) {
        const pulseRadius = this.radius + Math.sin(this.pulse) * 0.5
        ctx.beginPath()
        ctx.arc(this.x, this.y, pulseRadius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.shadowColor = this.color
        ctx.shadowBlur = 10
        ctx.fill()
        ctx.shadowBlur = 0
      }
    }

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
      nodes = []
      const numNodes = Math.floor((canvas.width * canvas.height) / 15000)
      for (let i = 0; i < Math.min(numNodes, 60); i++) {
        nodes.push(new Node(canvas.width, canvas.height))
      }
    }

    const drawConnections = () => {
      const connectionDistance = Math.min(canvas.width, canvas.height) * 0.2
      
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < connectionDistance) {
            const opacity = 1 - (distance / connectionDistance)
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(47, 47, 228, ${opacity * 0.15})`
            ctx.lineWidth = 0.5 + opacity * 0.5
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      drawConnections()
      
      nodes.forEach(node => {
        node.update(canvas.width, canvas.height)
        node.draw(ctx)
      })
      
      animationFrameId = requestAnimationFrame(animate)
    }

    resize()
    window.addEventListener('resize', resize)
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.5 }}
    />
  )
}

export default HeroBackground
