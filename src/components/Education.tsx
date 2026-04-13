import { motion } from 'motion/react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const education = [
  {
    degree: "Master of Electrical Engineering",
    school: "Telkom University",
    period: "2023 - 2024",
    focus: "Autonomous Systems & Robotics",
    details: "Specialized in ROS-based development, sensor fusion, and intelligent control systems. Thesis focused on real-time mapping and navigation for mobile robots."
  },
  {
    degree: "Bachelor of Physics Engineering",
    school: "Telkom University",
    period: "2019 - 2023",
    focus: "IoT & Embedded Systems",
    details: "Focused on IoT system development and environmental monitoring. Developed an IoT-based air quality monitoring system for the final project."
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-24 bg-muted/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-kicker">05 // Academic</h2>
            <h3 className="section-title">
              <span className="section-title-accent">Education</span>
            </h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full tech-border bg-white/72 border-white/40 overflow-hidden group">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start gap-4 mb-5 sm:mb-6">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <GraduationCap className="w-7 h-7 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl sm:text-xl font-bold tracking-tight leading-tight text-slate-800">{edu.degree}</h4>
                      <p className="text-base sm:text-base text-primary font-medium mt-1">{edu.school}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-5 sm:mb-6 text-sm sm:text-sm text-muted-foreground font-mono">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      <span>{edu.focus}</span>
                    </div>
                  </div>

                  <p className="text-base sm:text-base text-muted-foreground leading-relaxed">
                    {edu.details}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
