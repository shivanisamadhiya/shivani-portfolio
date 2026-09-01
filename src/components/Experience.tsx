import { experience } from "../data/resumeData";

export default function Experience() {
  return (
    <section id="experience" className="section-container py-20">
      <h2 className="mb-10 font-display text-3xl font-bold text-ink-100">Experience</h2>

      <div className="space-y-6">
        {experience.map((exp) => (
          <div
            key={exp.id}
            className="rounded-2xl border border-white/5 bg-navy-900/50 p-6 backdrop-blur-md"
          >
            <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
            <p className="text-ink-300">
              {exp.company} — {exp.location}
            </p>
            <p className="mt-1 text-sm text-ink-400">{exp.period}</p>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-ink-300">
              {exp.highlights.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}