import { motion } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';
import { Cpu, Globe, Zap, ShieldCheck } from 'lucide-react';

const highlights = [
  {
    icon: ShieldCheck,
    title: 'Smart Monitoring',
    description: 'Building monitoring tools that improve visibility, diagnostics, and operational efficiency.'
  },
  {
    icon: Globe,
    title: 'IoT Automation',
    description: 'Designing connected monitoring systems and data-driven automation workflows.'
  },
  {
    icon: Zap,
    title: 'Sensor Integration',
    description: 'Integrating sensors, devices, and embedded components for reliable field operation.'
  },
  {
    icon: Cpu,
    title: 'Robotics Systems',
    description: 'Applying robotics experience when projects require autonomous workflows, device orchestration, or machine-level control.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-kicker">01 // About Me</h2>
            <h3 className="section-title mb-6">
              Engineering the software <br />
              <span className="section-title-accent">behind intelligent machines.</span>
            </h3>
            <div className="space-y-4 text-base sm:text-[1.05rem] text-muted-foreground leading-relaxed">
              <p>
                I am an IoT and AI System Engineer with a strong focus on system integration, connected platforms, and intelligent automation. My work centers on building practical systems that connect sensor data, edge devices, backend services, and user-facing dashboards into one reliable workflow.
              </p>
              <p>
                With a Master&apos;s degree in Electrical Engineering, I bridge the gap between hardware and scalable software. I specialize in sensor integration, hardware-software interfacing, monitoring platforms, and full-stack implementations powered by IoT and AI.
              </p>
              <p>
                I build reliable systems that help operations run more efficiently, turn machine data into useful insight, and support better decision-making in the field.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full tech-border bg-white/70 backdrop-blur-sm border-white/40 hover:border-primary/50 transition-colors group">
                  <CardContent className="p-6 sm:p-6">
                    <item.icon className="w-11 h-11 sm:w-10 sm:h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="text-xl sm:text-lg font-bold mb-2 text-slate-800">{item.title}</h4>
                    <p className="text-base sm:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
