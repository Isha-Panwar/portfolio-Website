import { Download, Mail, ExternalLink, Award, MapPin, Phone, Linkedin, Github } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* 1. HERO SECTION & RESUME */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center md:text-left">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-cyan-400 tracking-tight">
            Isha Panwar
          </h1>
          <p className="text-2xl mt-4 text-slate-200 font-medium">
            Systems Engineer / Data Engineer | Microsoft Fabric Developer
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-3 text-slate-400 text-sm">
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-cyan-400" /> Indore, MP, India</span>
            <span className="flex items-center gap-1"><Phone className="w-4 h-4 text-cyan-400" /> +91 7898769442</span>
            <span className="flex items-center gap-1"><Mail className="w-4 h-4 text-cyan-400" /> ishapanwar26@gmail.com</span>
          </div>
          <p className="mt-4 text-slate-400 text-lg leading-relaxed">
            Results-driven IT Professional with over 5 years of experience in Data Engineering, Analytics, Mapping Technologies, and Cloud-based Data Solutions across automotive and technology domains through TCS engagements.
          </p>
          
          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start items-center">
            <a
            
               href="/ISHA PANWAR Resume.docx"
                download="ISHA_PANWAR_Resume.docx"
               className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-6 py-3 rounded-lg transition-all shadow-md"
             >
                <Download className="w-5 h-5" /> Download Resume

            </a>
            <a
              href="https://linkedin.com/in/isha-panwar"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 p-3 bg-slate-900 border border-slate-800 rounded-lg hover:border-cyan-400 text-slate-300 hover:text-cyan-400 transition-all font-medium text-sm"
              aria-label="LinkedIn Profile"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Isha-Panwar"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 p-3 bg-slate-900 border border-slate-800 rounded-lg hover:border-cyan-400 text-slate-300 hover:text-cyan-400 transition-all font-medium text-sm"
              aria-label="GitHub Profile"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* 2. TECHNICAL SKILLS SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-12 border-t border-slate-900">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6">Core Competencies & Skills</h2>
        <div className="flex flex-wrap gap-3">
          {[
            "Microsoft Fabric", "PySpark", "Power BI", "Data Transformation",
            "ETL/ELT Development", "Azure DevOps", "SQL", "Python", "Java",
            "Data Lakehouse", "Data Pipeline Development", "Adobe CJA",
            "Generative AI", "Prompt Engineering", "Agile & Scrum"
          ].map((skill) => (
            <span key={skill} className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-slate-300 text-sm font-medium">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* 3. WORK EXPERIENCE */}
      <section className="max-w-5xl mx-auto px-6 py-12 border-t border-slate-900">
        <h2 className="text-3xl font-bold text-cyan-400 mb-8">Professional Experience</h2>
        <div className="space-y-6 border-l-2 border-slate-800 pl-6">
          <div className="relative">
            <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-cyan-400 rounded-full"></div>
            <h3 className="text-xl font-semibold text-slate-100">Tata Consultancy Services (TCS)</h3>
            <p className="text-sm text-cyan-400 font-medium">Systems Engineer / Data Engineer | 2021 – Present</p>
            <p className="mt-2 text-slate-400 text-sm">
              Delivering enterprise-scale data solutions and analytics platforms across global projects in automotive and technology domains.
            </p>
          </div>
        </div>
      </section>

      {/* 4. PROJECTS SHOWCASE */}
      <section className="max-w-5xl mx-auto px-6 py-12 border-t border-slate-900">
        <h2 className="text-3xl font-bold text-cyan-400 mb-8">Key Client Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Project 2: Microsoft Corporation */}
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-cyan-500/50 transition-all">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-slate-100">Microsoft Corporation</h3>
              <span className="text-xs bg-cyan-950 text-cyan-400 px-2.5 py-1 rounded-full border border-cyan-800 font-medium">2+ Years</span>
            </div>
            <p className="text-xs text-slate-400 mb-3">Role: Data Engineer / Microsoft Fabric Developer</p>
            <ul className="text-slate-400 text-sm space-y-2 list-disc list-inside leading-relaxed">
              <li>Designed scalable data pipelines using PySpark and Microsoft Fabric (Lakehouse, Notebooks, Data Pipelines).</li>
              <li>Developed interactive Power BI dashboards, data models, and enterprise reports for stakeholders.</li>
              <li>Leveraged Customer Journey Analytics (CJA) to track touchpoints and optimize user experience metrics.</li>
              <li>Managed deployments and CI/CD releases using Azure DevOps.</li>
            </ul>
          </div>

          {/* Project 1: HERE Maps */}
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-cyan-500/50 transition-all">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-slate-100">HERE Maps (Automotive & ADAS)</h3>
              <span className="text-xs bg-cyan-950 text-cyan-400 px-2.5 py-1 rounded-full border border-cyan-800 font-medium">3 Years</span>
            </div>
            <p className="text-xs text-slate-400 mb-3">Role: Software Engineer / Map Data Engineer</p>
            <ul className="text-slate-400 text-sm space-y-2 list-disc list-inside leading-relaxed">
              <li>Developed map generation workflows using Java for ADAS autonomous driving applications.</li>
              <li>Processed digital map datasets, navigation road networks, and attribute enrichment.</li>
              <li>Implemented automated data validation and quality assurance frameworks.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. EDUCATION & CERTIFICATIONS */}
      <section className="max-w-5xl mx-auto px-6 py-12 border-t border-slate-900 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">Education</h2>
          <div className="space-y-4">
            <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg">
              <h3 className="font-semibold text-slate-200">Master of Computer Applications (MCA)</h3>
              <p className="text-sm text-slate-400">Completed in 2024</p>
            </div>
            <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg">
              <h3 className="font-semibold text-slate-200">Bachelor of Computer Applications (BCA)</h3>
              <p className="text-sm text-slate-400">Completed in 2021</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">Certifications</h2>
          <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg flex items-start gap-4">
            <Award className="w-8 h-8 text-cyan-400 shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-slate-200">Google Gen AI Leader Certification</h3>
              <p className="text-sm text-slate-400">Google</p>
              <p className="text-xs text-slate-500 mt-2">
                Generative AI Fundamentals, AI Adoption Strategies, Responsible AI, and LLMs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONTACT SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-900 text-center">
        <h2 className="text-3xl font-bold text-cyan-400">Get In Touch</h2>
        <p className="mt-3 text-slate-400">Indore, MP, India | +91 7898769442</p>
        <a
          href="mailto:ishapanwar26@gmail.com"
          className="inline-flex items-center gap-2 mt-6 bg-slate-900 border border-slate-800 hover:border-cyan-400 px-6 py-3 rounded-lg text-cyan-400 font-medium transition-all"
        >
          <Mail className="w-5 h-5" /> Send an Email (ishapanwar26@gmail.com)
        </a>
      </section>
    </main>
  );
}