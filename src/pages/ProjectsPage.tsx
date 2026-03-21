export default function ProjectsPage() {
  return (
    <section id="projects" className="scroll-mt-24 border-t border-gray-200 py-14">
      <h2 className="text-lg font-semibold tracking-tight">All projects</h2>
      <p className="mt-3 max-w-2xl text-gray-500">
        Replace these cards with your real work. Keep project blurbs short and
        outcome-focused.
      </p>
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
            className="rounded-xl border border-gray-200 bg-white p-5 hover:border-gray-300"
          >
            <h3 className="font-medium">{p.title}</h3>
            <p className="mt-2 text-sm text-gray-500">{p.description}</p>
            <div className="mt-4 flex gap-3 text-sm">
              <a className="text-black underline-offset-2 hover:underline" href="#">
                Live
              </a>
              <a className="text-black underline-offset-2 hover:underline" href="#">
                Code
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
