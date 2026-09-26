export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="hero-kicker">
            YOUR MODERN DEVELOPMENT TOOLKIT
          </p>

          <h1>
            Build Your Ideal <span>Development Stack</span>
          </h1>

          <p className="hero-text">
            Explore frontend, backend, database, and development tools.
            Pick the technologies that fit your workflow and build your
            perfect stack.
          </p>

          <div className="hero-buttons">
            <a
              className="primary-button"
              href="#technologies"
            >
              Explore Technologies
            </a>

            <a
              className="secondary-button"
              href="#projects"
            >
              Learn More
            </a>
          </div>
        </div>

        <div
          className="hero-art"
          aria-label="Dev Stack illustration"
        >
          <img
            src={`${import.meta.env.BASE_URL}dev-stack-hero.png`}
            alt="Dev Stack technology illustration"
          />
        </div>
      </div>
    </section>
  )
}