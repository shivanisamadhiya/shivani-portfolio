import { education, schoolEducation } from "../data/resumeData";

export default function Education() {
  return (
    <section id="education" className="section-container py-20">
      <h2 className="mb-10 font-display text-3xl font-bold text-ink-100">Education</h2>

      <div className="mb-6 rounded-2xl border border-white/5 bg-navy-900/50 p-6 backdrop-blur-md">
        <h3 className="text-lg font-semibold text-white">{education.degree}</h3>
        <p className="text-ink-300">{education.college}</p>
        <p className="mt-1 text-sm text-ink-400">{education.period}</p>
        <p className="mt-2 text-sm text-ink-300">
          CGPA: {education.cgpa} &nbsp;|&nbsp; Current SGPA: {education.currentSgpa}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {schoolEducation.map((item) => (
          <div
            key={item.level}
            className="rounded-2xl border border-white/5 bg-navy-900/50 p-5 backdrop-blur-md"
          >
            <h4 className="font-semibold text-white">{item.level}</h4>
            <p className="text-sm text-ink-300">{item.school}</p>
            <p className="mt-1 text-xs text-ink-400">{item.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
