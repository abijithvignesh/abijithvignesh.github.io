export default function HomePage() {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100vh-72px)] flex-col items-center justify-center text-center"
    >
      <h1 className="text-8xl font-black tracking-tight text-black sm:text-9xl">
        Abijith Vignesh
      </h1>
      <p className="mt-3 text-lg text-gray-400">developer · designer · creator</p>

      <div className="mt-8 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-green-400" />
        <span className="text-sm text-gray-400">Available for small to medium sized projects</span>
      </div>

      <p className="mt-4 max-w-sm text-gray-600 leading-relaxed">
        I'm a developer focused on React, TypeScript, and clean UI. I'm currently
        building thoughtful web experiences. Swap in your bio here.
      </p>

      <a
        href="mailto:you@example.com"
        className="mt-8 block w-72 rounded-sm bg-black py-3 text-sm font-medium text-white hover:bg-gray-900"
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
