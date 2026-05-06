import './Marquee.css'

const marqueeItems = [
  '♻ Economía circular',
  '⚡ Suministro constante',
  '🏭 Procesos industriales',
  '🧪 Asesoría técnica',
  '📦 Empaques',
  '🚗 Automotriz',
  '🏗️ Construcción',
  '💻 Electrónica',
  '🌿 Sustentabilidad',
  '✦ Material virgen',
  '✦ Material reciclado',
]

export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee__track">
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span key={i} className="marquee__item">{item}</span>
        ))}
      </div>
    </div>
  )
}
