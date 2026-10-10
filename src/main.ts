import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <header class="site-header">
      <a class="brand" href="#home" aria-label="BrightPath home">
        <span class="brand-mark">B</span>
        <span>BrightPath</span>
      </a>
      <nav aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#courses">Courses</a>
        <a class="nav-cta" href="#contact">Get in touch</a>
      </nav>
    </header>

    <main>
      <section class="hero" id="home">
        <div class="hero-copy">
          <p class="eyebrow"><span class="eyebrow-dot"></span> YOUR NEXT CHAPTER STARTS HERE</p>
          <h1>Make room for<br><span>what’s next.</span></h1>
          <p class="hero-description">
            Discover practical ideas, build useful skills, and take the next step
            toward the future you want.
          </p>
          <div class="hero-actions">
            <a class="button button-primary" href="#courses">Explore courses <span aria-hidden="true">→</span></a>
            <a class="text-link" href="#about">Learn about us</a>
          </div>
          <div class="hero-note">
            <div class="avatar-stack" aria-hidden="true"><span>J</span><span>M</span><span>A</span></div>
            <p><strong>Keep learning.</strong><br><span>Small steps make a difference.</span></p>
          </div>
        </div>
        <div class="hero-art" role="img" aria-label="Decorative illustration of a person learning at a desk">
          <div class="art-sun"></div>
          <div class="art-window"><span></span><span></span><span></span><span></span></div>
          <div class="art-plant"><i></i><i></i><i></i><b></b></div>
          <div class="art-person">
            <div class="person-hair"></div><div class="person-head"></div>
            <div class="person-neck"></div><div class="person-body"></div>
            <div class="person-arm"></div>
          </div>
          <div class="art-desk"></div>
          <div class="art-laptop"><div></div></div>
          <div class="art-book"></div>
          <div class="art-label"><span>✦</span> Grow at your own pace</div>
        </div>
      </section>

      <section class="benefits" id="about">
        <div class="section-heading">
          <p class="eyebrow">A BETTER WAY TO LEARN</p>
          <h2>Good things grow from curiosity.</h2>
          <p>Learning doesn't have to be complicated. Start with what interests you.</p>
        </div>
        <div class="benefit-grid">
          <article class="benefit-card">
            <div class="icon-box icon-lilac">✳</div>
            <h3>Learn something useful</h3>
            <p>Explore clear, practical ideas you can apply in everyday life and work.</p>
          </article>
          <article class="benefit-card">
            <div class="icon-box icon-mint">↗</div>
            <h3>Grow with confidence</h3>
            <p>Build your knowledge one manageable step at a time, at your own pace.</p>
          </article>
          <article class="benefit-card">
            <div class="icon-box icon-peach">◎</div>
            <h3>Stay curious</h3>
            <p>Keep discovering new interests and open doors to fresh opportunities.</p>
          </article>
        </div>
      </section>

      <section class="courses" id="courses">
        <div class="courses-heading">
          <div><p class="eyebrow">FIND YOUR STARTING POINT</p><h2>Explore popular topics</h2></div>
          <p>There’s always something new to discover.</p>
        </div>
        <div class="topic-list">
          <article class="topic-card"><span class="topic-number">01</span><div><h3>Technology</h3><p>Understand the tools shaping our world.</p></div><span class="topic-arrow">↗</span></article>
          <article class="topic-card"><span class="topic-number">02</span><div><h3>Creative thinking</h3><p>Turn fresh ideas into meaningful projects.</p></div><span class="topic-arrow">↗</span></article>
          <article class="topic-card"><span class="topic-number">03</span><div><h3>Career development</h3><p>Build skills for your next opportunity.</p></div><span class="topic-arrow">↗</span></article>
        </div>
      </section>

      <section class="contact" id="contact">
        <div><p class="eyebrow">READY WHEN YOU ARE</p><h2>Your next step can start today.</h2><p>Keep asking questions. Keep moving forward.</p></div>
        <a class="button button-light" href="mailto:hello@example.com">Say hello <span aria-hidden="true">→</span></a>
      </section>
    </main>

    <footer>
      <a class="brand footer-brand" href="#home"><span class="brand-mark">B</span><span>BrightPath</span></a>
      <p>© 2026 BrightPath. Made for curious minds.</p>
      <a href="#home">Back to top ↑</a>
    </footer>
  `
})
export class AppComponent {}

bootstrapApplication(AppComponent).catch((err) => console.error(err));
