import abijithPhoto from '../assets/abijith.png'

export default function AboutPage() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-gray-200 py-20">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
        {/* Left: text */}
        <div>
          <h2 className="text-5xl font-black leading-tight tracking-tight">
            A little bit<br />about me
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            I'm a developer with a strong focus on AI/ML engineering and full-stack
            development. I work with Python, React, and a range of AI tooling —
            from building RAG pipelines and agentic workflows with LangGraph and
            LangChain, to designing scalable backends with Node.js, JAVA, Kafka, and Postgres.
            I care about systems that are fast, reliable, and genuinely useful.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Outside of work, I'm usually exploring what's next in AI, tinkering
            with multi-agent architectures, building side projects that scratch
            real itches, or figuring out what becomes possible when good engineering
            meets good design.
          </p>

          {/* Resume */}
          <a
            href="/Abijith2026resume.pdf"
            download
            className="mt-10 inline-flex items-center gap-2 rounded-lg border border-gray-800 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-black hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download Résumé
          </a>
        </div>

        {/* Right: photo */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-72 h-80">
            {/* back card */}
            <div className="absolute inset-0 rounded-2xl bg-gray-300 rotate-3" />
            {/* photo */}
            <img
              src={abijithPhoto}
              alt="Abijith Vignesh"
              className="absolute inset-0 h-full w-full rounded-2xl object-cover object-top shadow-md -rotate-1"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
