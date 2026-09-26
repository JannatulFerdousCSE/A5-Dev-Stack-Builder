import type { Technology } from '../types'

type Props = {
  selected: Technology[]
  onRemove: (id: string) => void
  onRemoveAll: () => void
}

export default function StackSidebar({ selected, onRemove, onRemoveAll }: Props) {
  return (
    <aside className="stack-sidebar">
      <div className="stack-heading">
        <div>
          <p className="stack-kicker">YOUR TOOLKIT</p>
          <h2>Your Stack</h2>
        </div>
        <span className="count-badge">{selected.length}</span>
      </div>

      {selected.length === 0 ? (
        <div className="empty-stack">
          <div className="empty-icon">+</div>
          <h3>Your stack is empty</h3>
          <p>Add technologies from the list to start building your development stack.</p>
        </div>
      ) : (
        <>
          <div className="stack-list">
            {selected.map((technology) => (
              <div className="stack-item" key={technology.id}>
                <img src={technology.icon} alt="" />
                <div className="stack-item-info">
                  <strong>{technology.name}</strong>
                  <span>{technology.category}</span>
                </div>
                <button aria-label={`Remove ${technology.name}`} onClick={() => onRemove(technology.id)}>×</button>
              </div>
            ))}
          </div>
          <button className="remove-all" onClick={onRemoveAll} disabled={selected.length === 0}>Remove All</button>
        </>
      )}
    </aside>
  )
}
