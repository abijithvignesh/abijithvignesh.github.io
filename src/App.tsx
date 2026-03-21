function App() {
  return (
    <div className="min-h-dvh bg-zinc-950 text-zinc-100 selection:bg-indigo-500/30">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <a href="#top" className="font-semibold tracking-tight">
            Your Name
          </a>
          <nav className="hidden gap-6 text-sm text-zinc-300 sm:flex">
            <a className="hover:text-white" href="#about">
              About
            </a>
            <a className="hover:text-white" href="#projects">
              Projects
            </a>
            <a className="hover:text-white" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-4 py-12">
        <section className="py-10">
          <p className="text-sm font-medium text-indigo-300">Portfolio</p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Building thoughtful web experiences.
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-zinc-300">
            I’m a developer focused on React, TypeScript, and clean UI. This site is a
            starting point—swap in your name, bio, and projects.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-400"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-100 hover:bg-white/10"
            >
              Contact me
            </a>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 border-t border-white/10 py-10">
          <h2 className="text-lg font-semibold tracking-tight">About</h2>
          <p className="mt-3 max-w-2xl text-zinc-300">
            Add a short story about what you do, what you care about, and what you’re
            looking for. Keep it human, specific, and concise.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {['React', 'TypeScript', 'Tailwind', 'Node.js'].map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        <section
          id="projects"
          className="scroll-mt-24 border-t border-white/10 py-10"
        >
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-lg font-semibold tracking-tight">Projects</h2>
              <p className="mt-3 max-w-2xl text-zinc-300">
                Replace these cards with your real work. Keep project blurbs short and
                outcome-focused.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: 'Project One',
                description: 'A concise description of what you built and why it matters.',
              },
              {
                title: 'Project Two',
                description: 'A second project—highlight impact, tech, or problem solved.',
              },
            ].map((p) => (
              <article
                key={p.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10"
              >
                <h3 className="font-medium">{p.title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{p.description}</p>
                <div className="mt-4 flex gap-3 text-sm">
                  <a className="text-indigo-300 hover:text-indigo-200" href="#">
                    Live
                  </a>
                  <a className="text-indigo-300 hover:text-indigo-200" href="#">
                    Code
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 border-t border-white/10 py-10">
          <h2 className="text-lg font-semibold tracking-tight">Contact</h2>
          <p className="mt-3 max-w-2xl text-zinc-300">
            Add your email and social links here. Later, you can wire up a form provider
            if you want.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10"
              href="mailto:you@example.com"
            >
              you@example.com
            </a>
            <a
              className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10"
              href="#"
            >
              GitHub
            </a>
            <a
              className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10"
              href="#"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <a className="hover:text-zinc-200" href="#top">
            Back to top
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
