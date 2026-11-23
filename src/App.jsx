const features = [
  {
    number: '01',
    title: 'Start with a thought',
    description: 'Every good thing starts somewhere. Bring your rough notes, big questions, and half-formed ideas.',
    icon: '✳',
  },
  {
    number: '02',
    title: 'Make it your own',
    description: 'Find your rhythm, follow what feels interesting, and shape a way of working that fits you.',
    icon: '↗',
  },
  {
    number: '03',
    title: 'See where it goes',
    description: 'Small steps add up. Keep going, stay curious, and let the next good idea find its way in.',
    icon: '◎',
  },
];

function App() {
  return (
    <main>
      <nav className="nav wrap" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="Commonplace home">
          <span className="brand-mark">c.</span>
          commonplace
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#ideas">Our approach</a>
          <a className="nav-cta" href="mailto:hello@commonplace.example">Say hello <span>↗</span></a>
        </div>
      </nav>

      <section className="hero wrap" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> A little space to think</p>
          <h1>Make room for<br /><em>good ideas.</em></h1>
          <p className="hero-text">A calmer way to bring the things you care about to life. Start wherever you are, and see what grows.</p>
          <a className="button" href="#ideas">Explore the idea <span>↓</span></a>
          <button
            className="button button-test"
            type="button"
            onClick={() => {
              window.setTimeout(() => {
                throw new Error('DevNexus test error triggered from the website');
              }, 0);
            }}
          >
            Send a test error <span>↗</span>
          </button>
          <p className="test-error-note">Sends a test error to DevNexus.</p>
          <div className="hero-note"><span className="note-line" /> No perfect plan required</div>
        </div>
        <div className="hero-art" aria-label="Abstract illustration of a growing flower" role="img">
          <div className="art-sun" />
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-stem" />
          <div className="art-leaf leaf-left" />
          <div className="art-leaf leaf-right" />
          <div className="art-flower"><span /><span /><span /><span /><span /><i /></div>
          <div className="art-ground" />
          <span className="art-caption caption-top">take your time</span>
          <span className="art-caption caption-bottom">let it grow ↗</span>
          <span className="art-star star-one">✳</span>
          <span className="art-star star-two">✦</span>
        </div>
      </section>

      <section className="intro" id="about">
        <div className="wrap intro-inner">
          <p className="eyebrow">A note from us</p>
          <p className="intro-line">You don't need to have it all figured out.<br /><span>You just need a place to begin.</span></p>
        </div>
      </section>

      <section className="ideas wrap" id="ideas">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The simple stuff</p>
            <h2>Good things take<br /><em>a little curiosity.</em></h2>
          </div>
          <p className="section-blurb">A few reminders for the days when you need them. Keep what resonates, and leave the rest.</p>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.number}>
              <div className="card-top"><span>{feature.number}</span><span className="feature-icon">{feature.icon}</span></div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <span className="card-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="closing">
        <div className="wrap closing-inner">
          <p className="eyebrow">Whenever you're ready</p>
          <h2>Begin with<br /><em>what's on your mind.</em></h2>
          <a className="button button-light" href="mailto:hello@commonplace.example">Get in touch <span>↗</span></a>
          <span className="closing-spark">✳</span>
        </div>
      </section>

      <footer className="footer wrap">
        <a className="brand" href="#home"><span className="brand-mark">c.</span> commonplace</a>
        <p>Made with a little room to breathe.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}

export default App;

