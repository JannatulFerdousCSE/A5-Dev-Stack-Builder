import type { Technology } from '../types'

type Props = {
  technology: Technology
  added: boolean
  onAdd: () => void
}

export default function TechnologyCard({ technology, added, onAdd }: Props) {
  return (
    <article className="technology-card">
      <div className="card-top">
        <div className="tech-icon-wrap">
          <img src={technology.icon} alt="" className="tech-icon" />
        </div>
        <span className="badge">{technology.badge}</span>
      </div>

      <h3>{technology.name}</h3>
      <p className="tech-description">{technology.description}</p>

      <div className="tech-meta">
        <span className="category-chip">{technology.category}</span>
        <span className="difficulty">{technology.difficulty}</span>
      </div>

      <div className="card-bottom">
        <span className="rating">★ {technology.rating.toFixed(1)}</span>
        <button className={added ? 'add-button added' : 'add-button'} onClick={onAdd} disabled={added}>
          {added ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </article>
  )
}
