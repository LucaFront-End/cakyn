import { useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'

const PARTICLE_COUNT = 3500
const BASE_SIZE      = 1.6

/* ═══════════════════════════════════════════════════════
   Shape Generators — each returns Float32Array[count*3]
   ═══════════════════════════════════════════════════════ */

// Shape 0: Scattered sphere cloud (raw pellets)
function generateCloud(count) {
  const p = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2
    const phi   = Math.acos(2 * Math.random() - 1)
    const r     = 1.5 + Math.pow(Math.random(), 0.6) * 2.0
    p[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
    p[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
    p[i * 3 + 2] = r * Math.cos(phi)
  }
  return p
}

// Shape 1: Injection mold — a clean rectangular box wireframe+surface
function generateMold(count) {
  const p = new Float32Array(count * 3)
  const sx = 2.0, sy = 1.4, sz = 1.0  // Half dimensions

  for (let i = 0; i < count; i++) {
    const t = Math.random()

    if (t < 0.6) {
      // Surface particles (on the 6 faces)
      const face = Math.floor(Math.random() * 6)
      const u = (Math.random() - 0.5) * 2
      const v = (Math.random() - 0.5) * 2
      switch (face) {
        case 0: p[i*3]=sx;     p[i*3+1]=u*sy; p[i*3+2]=v*sz; break
        case 1: p[i*3]=-sx;    p[i*3+1]=u*sy; p[i*3+2]=v*sz; break
        case 2: p[i*3]=u*sx;   p[i*3+1]=sy;   p[i*3+2]=v*sz; break
        case 3: p[i*3]=u*sx;   p[i*3+1]=-sy;  p[i*3+2]=v*sz; break
        case 4: p[i*3]=u*sx;   p[i*3+1]=v*sy; p[i*3+2]=sz;   break
        case 5: p[i*3]=u*sx;   p[i*3+1]=v*sy; p[i*3+2]=-sz;  break
      }
    } else if (t < 0.85) {
      // Edge particles (12 edges of the box)
      const edge = Math.floor(Math.random() * 12)
      const lerp = (Math.random() - 0.5) * 2
      const corners = [
        // Bottom face edges
        [[-sx,-sy,-sz],[sx,-sy,-sz]], [[-sx,-sy,sz],[sx,-sy,sz]],
        [[-sx,-sy,-sz],[-sx,-sy,sz]], [[sx,-sy,-sz],[sx,-sy,sz]],
        // Top face edges
        [[-sx,sy,-sz],[sx,sy,-sz]], [[-sx,sy,sz],[sx,sy,sz]],
        [[-sx,sy,-sz],[-sx,sy,sz]], [[sx,sy,-sz],[sx,sy,sz]],
        // Vertical edges
        [[-sx,-sy,-sz],[-sx,sy,-sz]], [[sx,-sy,-sz],[sx,sy,-sz]],
        [[-sx,-sy,sz],[-sx,sy,sz]], [[sx,-sy,sz],[sx,sy,sz]],
      ]
      const [a, b] = corners[edge]
      const tt = lerp * 0.5 + 0.5
      p[i*3]   = a[0] + (b[0]-a[0]) * tt
      p[i*3+1] = a[1] + (b[1]-a[1]) * tt
      p[i*3+2] = a[2] + (b[2]-a[2]) * tt
    } else {
      // Sparse interior fill
      p[i*3]   = (Math.random()-0.5) * 2 * sx * 0.8
      p[i*3+1] = (Math.random()-0.5) * 2 * sy * 0.8
      p[i*3+2] = (Math.random()-0.5) * 2 * sz * 0.8
    }
  }
  return p
}

// Shape 2: Extrusion — long cylinder (pipe)
function generateTube(count) {
  const p = new Float32Array(count * 3)
  const radius = 1.2
  const length = 4.5

  for (let i = 0; i < count; i++) {
    const t = Math.random()
    const theta = Math.random() * Math.PI * 2
    const h = (Math.random() - 0.5) * length

    if (t < 0.55) {
      // Outer shell
      const r = radius + (Math.random() - 0.5) * 0.08
      p[i*3]   = r * Math.cos(theta)
      p[i*3+1] = h
      p[i*3+2] = r * Math.sin(theta)
    } else if (t < 0.75) {
      // Inner shell (hollow)
      const r = radius * 0.6 + (Math.random() - 0.5) * 0.08
      p[i*3]   = r * Math.cos(theta)
      p[i*3+1] = h
      p[i*3+2] = r * Math.sin(theta)
    } else if (t < 0.9) {
      // End caps (circles at top and bottom)
      const r = Math.random() * radius
      const side = Math.random() < 0.5 ? length * 0.5 : -length * 0.5
      p[i*3]   = r * Math.cos(theta)
      p[i*3+1] = side
      p[i*3+2] = r * Math.sin(theta)
    } else {
      // Edge rings
      const rings = [-length*0.5, -length*0.25, 0, length*0.25, length*0.5]
      const ring = rings[Math.floor(Math.random() * rings.length)]
      p[i*3]   = radius * Math.cos(theta)
      p[i*3+1] = ring
      p[i*3+2] = radius * Math.sin(theta)
    }
  }
  return p
}

// Shape 3: Blow molding — bottle silhouette
function generateBottle(count) {
  const p = new Float32Array(count * 3)

  for (let i = 0; i < count; i++) {
    const t = Math.random()
    const theta = Math.random() * Math.PI * 2
    let r, y

    if (t < 0.12) {
      // Cap / top rim
      y = 3.0 + Math.random() * 0.1
      r = 0.35 + (Math.random() - 0.5) * 0.05
    } else if (t < 0.22) {
      // Neck (narrow cylinder)
      y = 2.2 + Math.random() * 0.8
      r = 0.35 + (Math.random() - 0.5) * 0.06
    } else if (t < 0.32) {
      // Shoulder (flaring out)
      const blend = Math.random()
      y = 1.6 + blend * 0.6
      r = 0.4 + blend * 1.0
    } else if (t < 0.8) {
      // Body (main barrel) — most particles here
      y = -1.2 + Math.random() * 2.8
      // Slight barrel curvature
      const bodyNorm = (y + 1.2) / 2.8
      r = 1.35 + Math.sin(bodyNorm * Math.PI) * 0.15
      r += (Math.random() - 0.5) * 0.06
    } else if (t < 0.9) {
      // Bottom curve
      const blend = Math.random()
      y = -1.2 - blend * 0.4
      r = 1.35 * (1.0 - blend * 0.6)
    } else {
      // Bottom flat
      y = -1.6 + (Math.random() - 0.5) * 0.1
      r = Math.random() * 1.0
    }

    // Mostly surface, some interior
    const isSurface = Math.random() < 0.75
    const finalR = isSurface ? r : r * Math.random() * 0.5

    p[i*3]   = finalR * Math.cos(theta)
    p[i*3+1] = y
    p[i*3+2] = finalR * Math.sin(theta)
  }
  return p
}


/* ═══════════════════════════════════════════════════════
   React Component
   ═══════════════════════════════════════════════════════ */
export default function ParticleMorph({ activeStep = 0 }) {
  const mountRef    = useRef(null)
  const rendererRef = useRef(null)
  const pointsRef   = useRef(null)
  const shapesRef   = useRef([])
  const rafRef      = useRef(null)
  const mouseRef    = useRef({ x: 0, y: 0 })
  const timeRef     = useRef(0)
  const morphRef    = useRef(null) // morph animation frame

  const initShapes = useCallback(() => [
    generateCloud(PARTICLE_COUNT),
    generateMold(PARTICLE_COUNT),
    generateTube(PARTICLE_COUNT),
    generateBottle(PARTICLE_COUNT),
  ], [])

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    // ── Scene ────────────────────────────────────────────
    const scene  = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, mount.clientWidth / mount.clientHeight, 0.1, 100)
    camera.position.set(0, 0.5, 7)

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    // ── Shapes ───────────────────────────────────────────
    const shapes = initShapes()
    shapesRef.current = shapes

    // ── Geometry ─────────────────────────────────────────
    const geometry  = new THREE.BufferGeometry()
    const positions = new Float32Array(PARTICLE_COUNT * 3)
    const colors    = new Float32Array(PARTICLE_COUNT * 3)
    const sizes     = new Float32Array(PARTICLE_COUNT)

    positions.set(shapes[0]) // start as cloud

    // Color palette: subtle green tones, some cream/white
    const c1 = new THREE.Color('#1A6B3A') // deep green
    const c2 = new THREE.Color('#2A8B4E') // medium green
    const c3 = new THREE.Color('#7ECFA0') // light green
    const c4 = new THREE.Color('#C8D8CC') // cream-green
    const palette = [c1, c2, c3, c4]

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const color = palette[Math.floor(Math.random() * palette.length)].clone()
      // Add slight per-particle variation
      color.r += (Math.random() - 0.5) * 0.08
      color.g += (Math.random() - 0.5) * 0.08
      color.b += (Math.random() - 0.5) * 0.08
      colors[i * 3]     = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
      sizes[i] = BASE_SIZE * (0.4 + Math.random() * 0.7)
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color',    new THREE.BufferAttribute(colors, 3))
    geometry.setAttribute('size',     new THREE.BufferAttribute(sizes, 1))

    // ── Shader Material (clean round particles, NO additive) ──
    const material = new THREE.ShaderMaterial({
      vertexShader: `
        attribute float size;
        varying vec3 vColor;
        varying float vDist;
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vDist = -mvPosition.z;
          gl_PointSize = size * (220.0 / vDist);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vDist;
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;

          // Soft circle with subtle specular highlight
          float alpha = 1.0 - smoothstep(0.35, 0.5, dist);

          // Depth-based fade (particles further away are more transparent)
          float depthFade = clamp(1.0 - (vDist - 4.0) / 8.0, 0.3, 1.0);

          // Subtle highlight at center
          float highlight = 1.0 + smoothstep(0.3, 0.0, dist) * 0.3;

          gl_FragColor = vec4(vColor * highlight, alpha * depthFade * 0.9);
        }
      `,
      transparent: true,
      depthWrite: false,
      depthTest: true,
      vertexColors: true,
      blending: THREE.NormalBlending,
    })

    const points = new THREE.Points(geometry, material)
    scene.add(points)

    rendererRef.current = renderer
    pointsRef.current   = points

    // ── Mouse ────────────────────────────────────────────
    const onMouse = (e) => {
      const rect = mount.getBoundingClientRect()
      mouseRef.current.x = ((e.clientX - rect.left) / rect.width  - 0.5) * 2
      mouseRef.current.y = -((e.clientY - rect.top) / rect.height - 0.5) * 2
    }
    mount.addEventListener('mousemove', onMouse)

    // ── Resize ───────────────────────────────────────────
    const onResize = () => {
      const w = mount.clientWidth, h = mount.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    // ── Render Loop ──────────────────────────────────────
    const animate = () => {
      rafRef.current = requestAnimationFrame(animate)
      timeRef.current += 0.006

      if (pointsRef.current) {
        // Smooth orbiting rotation + mouse parallax
        pointsRef.current.rotation.y = timeRef.current * 0.2 + mouseRef.current.x * 0.25
        pointsRef.current.rotation.x = Math.sin(timeRef.current * 0.08) * 0.08 + mouseRef.current.y * 0.1

        // Gentle per-particle float (breathe effect)
        const posArr = pointsRef.current.geometry.getAttribute('position').array
        const sizeArr = pointsRef.current.geometry.getAttribute('size').array
        for (let i = 0; i < PARTICLE_COUNT; i++) {
          const offset = i * 0.002 + timeRef.current
          posArr[i * 3 + 1] += Math.sin(offset * 2) * 0.0008
          sizeArr[i] = BASE_SIZE * (0.4 + Math.random() * 0.02 + 0.5 * (0.5 + 0.5 * Math.sin(offset)))
        }
        pointsRef.current.geometry.getAttribute('position').needsUpdate = true
        pointsRef.current.geometry.getAttribute('size').needsUpdate = true
      }

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(rafRef.current)
      if (morphRef.current) cancelAnimationFrame(morphRef.current)
      mount.removeEventListener('mousemove', onMouse)
      window.removeEventListener('resize', onResize)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
    }
  }, [initShapes])

  // ── Morph on activeStep change ─────────────────────────
  useEffect(() => {
    if (!pointsRef.current || shapesRef.current.length === 0) return
    if (morphRef.current) cancelAnimationFrame(morphRef.current)

    const shapes   = shapesRef.current
    const posAttr  = pointsRef.current.geometry.getAttribute('position')
    const snapshot = new Float32Array(posAttr.array) // capture current positions

    const targetIdx = Math.min(activeStep + 1, shapes.length - 1)
    const target    = shapes[targetIdx]

    const duration = 1400 // ms
    const start    = performance.now()

    const tick = (now) => {
      const elapsed = now - start
      const raw = Math.min(elapsed / duration, 1)
      // Smooth ease-in-out
      const ease = raw < 0.5
        ? 4 * raw * raw * raw
        : 1 - Math.pow(-2 * raw + 2, 3) / 2

      for (let i = 0; i < PARTICLE_COUNT * 3; i++) {
        posAttr.array[i] = snapshot[i] + (target[i] - snapshot[i]) * ease
      }
      posAttr.needsUpdate = true

      if (raw < 1) morphRef.current = requestAnimationFrame(tick)
    }

    morphRef.current = requestAnimationFrame(tick)
  }, [activeStep])

  return (
    <div
      ref={mountRef}
      className="particle-morph"
      style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
    />
  )
}
