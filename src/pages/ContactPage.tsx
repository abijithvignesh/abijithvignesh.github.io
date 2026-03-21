export default function ContactPage() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-gray-200 py-14">
      <h2 className="text-lg font-semibold tracking-tight">Contact</h2>
      <p className="mt-3 max-w-2xl text-gray-500">
        Add your email and social links here.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-gray-300"
          href="mailto:you@example.com"
        >
          you@example.com
        </a>
        <a
          className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-gray-300"
          href="#"
        >
          GitHub
        </a>
        <a
          className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-gray-300"
          href="#"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}
