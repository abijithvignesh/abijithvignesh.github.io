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
            I'm a developer focused on React, TypeScript, and clean UI. I enjoy crafting
            thoughtful web experiences that are fast, accessible, and a pleasure to use.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Outside of coding I enjoy exploring new technologies and building side projects
            that scratch real itches.
          </p>

          {/* Work Experience */}
          <div className="mt-10">
            <p className="text-sm font-bold tracking-wide">Work Experience</p>
            <div className="mt-3 space-y-3 text-sm text-gray-500">
              <div>
                <p className="text-gray-800">Your Role</p>
                <p>Company &nbsp;·&nbsp; 20XX –</p>
              </div>
              <div>
                <p className="text-gray-800">Previous Role</p>
                <p>Company &nbsp;·&nbsp; 20XX – 20XX</p>
              </div>
            </div>
          </div>
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
