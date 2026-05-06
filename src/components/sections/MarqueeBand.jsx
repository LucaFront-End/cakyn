import './MarqueeBand.css'

const items = [
  'Polipropileno', '◆', 'Polietileno HDPE', '◆', 'Polietileno LDPE',
  '◆', 'Poliestireno', '◆', 'Material Reciclado', '◆', 'Resinas a Medida',
  '◆', 'Inyección', '◆', 'Extrusión', '◆', 'Soplado', '◆'
]

export default function MarqueeBand() {
  const doubled = [...items, ...items]

  return (
    <div className="marquee-band" aria-hidden="true">
      <div className="marquee-band__track">
        {doubled.map((item, i) => (
          <span key={i} className={`marquee-band__item ${item === '◆' ? 'marquee-band__sep' : ''}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
