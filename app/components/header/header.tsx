import "./header.css"

export function Header() {
  return (
    <header className="wrapper">
      <div className="repel region">
        <h1>12 Week Assistant</h1>
        <nav>
          <ul className="repel">
            <li>Dashboard</li>
            <li>Calendar</li>
            <li>Insights</li>
          </ul>
        </nav>
      </div>
    </header>

  )
}
