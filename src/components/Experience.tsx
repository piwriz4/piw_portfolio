import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: "RnD Staff",
    company: "PT Enerjik Prima Presisi",
    period: "Feb 2025 - Present",
    location: "Bandung, Indonesia",
    description: "IoT and systems engineer specializing in system integration, embedded development, and AI-driven monitoring solutions. Experienced in connecting hardware, software, and cloud services into end-to-end operational platforms with a strong focus on real-time visibility and industrial efficiency.",
    tasks: [
      "Designed and implemented an IoT-based AI vision system using camera-driven detection and analytics, with rule-based evaluation to automate operator performance assessment and establish objective, data-driven KPI measurement where no prior evaluation system existed.",
      "Engineered scalable embedded and IoT solutions, including hardware-software integration, cloud connectivity, and interactive dashboards, enabling real-time operational insights and system-wide performance monitoring.",
      "Developed an integrated robotic monitoring, logging, and task queuing system that enabled real-time status tracking, dynamic task allocation, and operational diagnostics, significantly improving the efficiency and reliability of autonomous material delivery.",
      "Built end-to-end mapping and localization pipelines for autonomous mobile robots, optimizing navigation routes and reducing delivery cycle time by approximately 70% in internal logistics operations.",
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-24 tech-grid relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16">
          <h2 className="section-kicker">04 // Career</h2>
          <h3 className="section-title text-3xl sm:text-4xl">
            Professional <span className="section-title-accent">Experience</span>
          </h3>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company + exp.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-6 sm:pl-8 border-l border-white/10"
            >
              <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-3">
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-800">{exp.role}</h4>
                  <div className="flex items-center gap-2 text-primary font-medium text-sm sm:text-base">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1 md:items-end text-xs sm:text-sm text-muted-foreground font-mono">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
                {exp.description}
              </p>

              <ul className="grid grid-cols-1 gap-3 sm:gap-4">
                {exp.tasks.map((task, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 flex-shrink-0" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
