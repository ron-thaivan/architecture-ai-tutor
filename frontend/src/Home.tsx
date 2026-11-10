import { Link } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import "./Home.css";

function CourtyardStudy() {
  return <svg viewBox="0 0 500 530" aria-hidden="true" className="ph-art-svg">
    <defs>
      <linearGradient id="ph-wall" x1="0" x2="1" y2="1"><stop stopColor="#80604b" /><stop offset=".55" stopColor="#bc8c68" /><stop offset="1" stopColor="#ead0ae" /></linearGradient>
      <linearGradient id="ph-floor" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#edc6a0" /><stop offset="1" stopColor="#956145" /></linearGradient>
      <linearGradient id="ph-sky" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#e6d5c3" /><stop offset="1" stopColor="#f9e9d2" /></linearGradient>
      <linearGradient id="ph-shadow"><stop stopColor="#301e16" /><stop offset="1" stopColor="#72503b" /></linearGradient>
    </defs>
    <path fill="url(#ph-wall)" d="M0 0h500v530H0z" />
    <path fill="#554335" d="M0 0h500L420 78H65z" />
    <path fill="url(#ph-shadow)" d="M0 0 65 78v345L0 530z" />
    <path fill="url(#ph-floor)" d="M65 423h355l80 107H0z" />
    <path fill="#513d30" d="M132 151h201v272H132z" />
    <path fill="url(#ph-sky)" d="M143 161h180v252H143z" />
    <path fill="#ad8462" d="m143 350 43-45 35 15 40-43 62 34v102H143z" />
    <path fill="#7f684e" d="m143 371 67-25 54 23 59-38v82H143z" />
    <path fill="#ceb391" d="M143 389h180v24H143z" />
    <path fill="#f4d5aa" opacity=".75" d="m333 212 87-44v255l-87-10z" />
    <path fill="#e8b886" d="m333 413 87 10 80 107H204z" />
    <path fill="#694936" opacity=".6" d="m143 413 68 0-78 117H0z" />
    <path fill="#d1b18a" d="M82 170h20v240H82z" /><path fill="#4e3a2d" d="M86 176h12v228H86z" />
    <path stroke="#f2d3aa" opacity=".5" d="M65 423 0 530m68-107 8 107m114-107 78 107m89-107 99 107" />
    <path fill="#b18b68" d="m340 374 62 3v22l-62-5z" /><path fill="#6d4a33" d="m340 394 62 5-12 25-50-5z" />
  </svg>;
}

function FormStudy() {
  return <svg viewBox="0 0 360 260" aria-hidden="true" className="ph-art-svg">
    <defs>
      <linearGradient id="ph-rose" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#ebbcaa" /><stop offset="1" stopColor="#b86d56" /></linearGradient>
      <linearGradient id="ph-arch"><stop stopColor="#894a37" /><stop offset=".5" stopColor="#cb8065" /><stop offset="1" stopColor="#e2a085" /></linearGradient>
      <radialGradient id="ph-sphere" cx=".3" cy=".2"><stop stopColor="#ffe0c7" /><stop offset="1" stopColor="#b67158" /></radialGradient>
    </defs>
    <path fill="url(#ph-rose)" d="M0 0h360v260H0z" />
    <ellipse cx="215" cy="218" rx="110" ry="18" fill="#914b39" opacity=".22" />
    <path d="M123 212h151v10H123zm11-10h129v10H134zm12-10h105v10H146z" fill="#e7ac90" />
    <path d="M160 192V77a40 40 0 0 1 80 0v115h-27V80a13 13 0 0 0-26 0v112z" fill="url(#ph-arch)" />
    <path d="M213 192V81a13 13 0 0 0-26 0v111z" fill="#7c3e2e" />
    <circle cx="97" cy="194" r="24" fill="url(#ph-sphere)" /><circle cx="267" cy="150" r="17" fill="url(#ph-sphere)" /><circle cx="89" cy="63" r="14" fill="url(#ph-sphere)" /><circle cx="132" cy="119" r="19" fill="url(#ph-sphere)" />
  </svg>;
}

function ApertureStudy() {
  return <svg viewBox="0 0 320 300" aria-hidden="true" className="ph-art-svg">
    <defs><linearGradient id="ph-clay" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#da976e" /><stop offset=".55" stopColor="#ad6241" /><stop offset="1" stopColor="#623b2b" /></linearGradient></defs>
    <path fill="url(#ph-clay)" d="M0 0h320v300H0z" />
    {[0, 1, 2, 3, 4, 5].map(i => <path key={i} d={`M${-85+i*19} 310C${-62+i*19} ${123+i*13} ${105+i*15} ${101+i*17} 340 ${94+i*26}`} fill="none" stroke={i % 2 ? "#c08d68" : "#edd2ad"} strokeWidth="11" />)}
  </svg>;
}

export default function Home() {
  const { user, loading, setShowSignIn } = useAuth();
  return <main className="portfolio-home">
    <div className="ph-shell">
      <nav className="ph-nav" aria-label="Home navigation">
        <Link to="/" className="ph-brand"><span className="ph-brand-symbol" aria-hidden="true">↗</span> AI TUTOR<span className="ph-brand-caption">DESIGN STUDIO</span></Link>
        <div className="ph-nav-links"><Link to="/studio">Workspace</Link><Link to="/learning">Learning</Link></div>
        {user ? <Link className="ph-nav-account" to="/profile">My profile <span aria-hidden="true">↗</span></Link> : <button className="ph-nav-account" disabled={loading} onClick={() => setShowSignIn(true)}>Sign in <span aria-hidden="true">↗</span></button>}
      </nav>

      <section className="ph-hero" aria-labelledby="ph-title">
        <div className="ph-hero-top"><span className="ph-eyebrow">A space for your next idea.</span><p>Explore, question, and develop.<br />Your studio companion, from the first sketch.</p></div>
        <div className="ph-gallery" aria-label="Illustrative architectural studies">
          <figure className="ph-study ph-study--space"><CourtyardStudy /><figcaption>01 / SPACE &amp; LIGHT</figcaption></figure>
          <figure className="ph-study ph-study--form"><FormStudy /><figcaption>02 / FORM</figcaption></figure>
          <figure className="ph-study ph-study--detail"><ApertureStudy /><figcaption>03 / APERTURE</figcaption></figure>
          <div className="ph-floating ph-file"><span className="ph-file-thumb" aria-hidden="true"><ApertureStudy /></span><span>room for an idea<span className="ph-file-sub">A new perspective</span></span><span className="ph-file-check" aria-hidden="true">↗</span></div>
          <div className="ph-floating ph-palette"><span className="ph-palette-title">A study in possibilities</span><div className="ph-swatches" aria-hidden="true"><i /><i /><i /><i /></div><span className="ph-palette-foot">SPACE. LIGHT. FORM.</span></div>
          <h1 id="ph-title">THINK.<br /><span>MAKE.</span></h1>
        </div>
        <div className="ph-hero-bottom"><p>Start with a question.<br /><strong>See where it takes you.</strong></p><div className="ph-actions"><Link to="/studio" className="ph-button ph-button--light">Enter the studio <span aria-hidden="true">↗</span></Link><Link to="/learning" className="ph-text-link">{user ? "Continue learning" : "Explore Learning Mode"} <span aria-hidden="true">→</span></Link></div></div>
        {!loading && user && <p className="ph-account-note">Welcome back, {user.isAnonymous ? "Guest" : user.displayName || user.email}.</p>}
      </section>

      <section className="ph-tools" aria-labelledby="ph-tools-title">
        <div className="ph-section-heading"><span className="ph-eyebrow">THE WORKSPACE / 01</span><h2 id="ph-tools-title">Your process.<br />Room to grow.</h2><p>A place to collect ideas,<br />build understanding, and keep moving.</p></div>
        <div className="ph-tool-grid">
          <Link to="/studio" className="ph-tool ph-tool--studio"><span className="ph-tool-number">01 / CREATE</span><span className="ph-tool-arrow" aria-hidden="true">↗</span><h3>Studio<br />Brainstorm</h3><p>Bring your brief. Explore concepts, references, and your next design move.</p><span className="ph-tool-go">Open studio</span></Link>
          <Link to="/learning" className="ph-tool"><span className="ph-tool-number">02 / DISCOVER</span><span className="ph-tool-arrow" aria-hidden="true">↗</span><h3>Learning<br />Mode</h3><p>Ask a question, work through a topic, and develop your understanding.</p><span className="ph-tool-go">Start learning</span></Link>
          <Link to="/autograder" className="ph-tool"><span className="ph-tool-number">03 / REVIEW</span><span className="ph-tool-arrow" aria-hidden="true">↗</span><h3>Auto<br />Grader</h3><p>Upload a question and answer PDF for structured feedback on your work.</p><span className="ph-tool-go">Review a paper</span></Link>
          <Link to="/profile" className="ph-tool"><span className="ph-tool-number">04 / ORGANIZE</span><span className="ph-tool-arrow" aria-hidden="true">↗</span><h3>Your<br />Profile</h3><p>Your textbooks, appearance, and account settings, together in one place.</p><span className="ph-tool-go">Open profile</span></Link>
        </div>
      </section>

      <section className="ph-process" aria-labelledby="ph-process-title"><div><span className="ph-eyebrow">THE PROCESS / 02</span><h2 id="ph-process-title">From a starting point.<br />To a point of view.</h2></div><ol><li><span>01</span><div><h3>Understand</h3><p>Read the brief. Find the questions worth asking.</p></div></li><li><span>02</span><div><h3>Explore</h3><p>Compare ideas through space, light, movement, and form.</p></div></li><li><span>03</span><div><h3>Develop</h3><p>Reflect, refine, and prepare to share your thinking.</p></div></li></ol></section>
      <footer className="ph-footer"><div className="ph-footer-top"><span className="ph-eyebrow">EVERY PROJECT STARTS SOMEWHERE.</span><Link to="/studio" className="ph-footer-cta">MAKE A START.<span aria-hidden="true">↗</span></Link></div><div className="ph-footer-bottom"><span>© 2026 AI Tutor</span><span>Built for curious minds.</span>{user ? <Link to="/learning">Continue learning →</Link> : <button onClick={() => setShowSignIn(true)}>Create an account →</button>}</div></footer>
    </div>
  </main>;
}
