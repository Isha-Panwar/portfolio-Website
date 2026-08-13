export default function Home() {
  const skills = [
    "Microsoft Fabric",
    "PySpark",
    "Power BI",
    "Azure DevOps",
    "SQL",
    "Python",
    "Java",
    "Customer Journey Analytics",
    "ETL",
    "Generative AI",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <span className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full">
          5+ Years Experience
        </span>

        <h1 className="text-6xl font-bold mt-8">
          Isha Panwar
        </h1>

        <h2 className="text-3xl text-cyan-400 mt-4">
          Data Engineer & Microsoft Fabric Developer
        </h2>

        <p className="max-w-3xl mx-auto mt-6 text-slate-300">
          Experienced in Microsoft Fabric, PySpark, Power BI,
          Azure DevOps, Customer Journey Analytics and
          Enterprise Analytics.
        </p>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-slate-900 rounded-3xl p-8 text-center">
            <h3 className="text-4xl font-bold text-cyan-400">
              5+
            </h3>
            <p>Years Experience</p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 text-center">
            <h3 className="text-4xl font-bold text-cyan-400">
              3
            </h3>
            <p>Years at HERE Maps</p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 text-center">
            <h3 className="text-4xl font-bold text-cyan-400">
              2+
            </h3>
            <p>Years in Microsoft Project</p>
          </div>

        </div>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-8">
          About Me
        </h2>

        <div className="bg-slate-900 rounded-3xl p-8">
          <p className="text-slate-300 leading-8">
            Data Engineer with 5+ years of experience working
            at Tata Consultancy Services. Started career with
            HERE Maps on ADAS and autonomous vehicle mapping
            projects and later worked on Microsoft enterprise
            analytics solutions using Microsoft Fabric,
            PySpark, Power BI and Azure DevOps.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-4xl font-bold mb-8">
          Technical Skills
        </h2>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-8">
          Experience
        </h2>

        <div className="space-y-6">

          <div className="bg-slate-900 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold">
              HERE Maps – ADAS Project
            </h3>

            <ul className="mt-4 text-slate-300 space-y-2">
              <li>• Worked on autonomous vehicle mapping.</li>
              <li>• Developed map generation solutions using Java.</li>
              <li>• Performed map quality validation.</li>
            </ul>
          </div>

          <div className="bg-slate-900 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold">
              Microsoft Enterprise Project
            </h3>

            <ul className="mt-4 text-slate-300 space-y-2">
              <li>• Worked extensively with Microsoft Fabric.</li>
              <li>• Built scalable PySpark pipelines.</li>
              <li>• Created Power BI dashboards.</li>
              <li>• Used CJA to analyze customer journeys.</li>
              <li>• Managed Azure DevOps deployments.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Education */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-8">
          Education & Certifications
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-slate-900 p-8 rounded-3xl">
            🎓 MCA
          </div>

          <div className="bg-slate-900 p-8 rounded-3xl">
            🎓 BCA (2021)
          </div>

          <div className="bg-slate-900 p-8 rounded-3xl">
            🏆 Google Gen AI Leader
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-slate-500">
        © 2026 Isha Panwar
      </footer>
    </main>
  );
}