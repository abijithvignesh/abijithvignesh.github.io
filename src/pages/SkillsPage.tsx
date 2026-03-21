const skills = [
  { category: 'Languages', items: ['Python', 'JavaScript', 'SQL'] },
  { category: 'AI / ML', items: ['LangGraph', 'LangChain', 'Deep Agent', 'RAG', 'Google ADK', "Agentic workflows"] },
  { category: 'Frontend', items: ['React.js', 'HTML', 'CSS'] },
  { category: 'Backend', items: ['Node.js', 'Express.js', 'Redis', 'Kafka', 'Postgres'] },
  { category: 'DevOps & CI/CD', items: ['Docker', 'Kubernetes', 'GitLab CI/CD'] },
  { category: 'Cloud Technologies', items: ['GCP'] },
  { category: 'Other', items: ['Performance Tuning', 'Problem Solving', 'Analytical Skills'] },
]

export default function SkillsPage() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-gray-200 py-14">
      <h2 className="text-lg font-semibold tracking-tight">Skills</h2>
      <div className="mt-6 space-y-6">
        {skills.map(({ category, items }) => (
          <div key={category}>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
              {category}
            </p>
            <ul className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <li
                  key={skill}
                  className="cursor-default rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600 transition-colors hover:border-black hover:bg-black hover:text-white"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
