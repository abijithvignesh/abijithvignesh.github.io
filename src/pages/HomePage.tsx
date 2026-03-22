export default function HomePage() {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100vh-72px)] flex-col items-center justify-center text-center"
    >
      <h1 className="text-7xl font-black tracking-tight text-black sm:text-9xl">
        Abijith Vignesh
      </h1>
      <p className="mt-4 text-base text-gray-400 sm:text-lg">engineer · builder · problem solver</p>

      <div className="mt-5 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-green-400" />
        <span className="text-xs text-gray-400">Open for collaborations.</span>
      </div>

      <p className="mt-5 max-w-sm px-6 text-sm text-gray-600 leading-relaxed sm:px-0 sm:text-base">
        I build AI-powered systems and the web experiences around them.
        Focused on agentic workflows, full-stack development, and
        shipping things that actually work and scale.
      </p>

      <a
        href="mailto:abijithvignesh@gmail.com"
        className="mt-8 block w-72 rounded-full bg-black py-3 text-sm font-medium text-white hover:bg-gray-900"
      >
        Say Hello
      </a>

      <a
        href="#about"
        className="absolute bottom-8 text-gray-400 hover:text-black"
        aria-label="Scroll down"
      >
        ↓
      </a>
    </section>
  )
}
