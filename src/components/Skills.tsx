import { motion } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Code2, Cpu, Terminal, Users } from 'lucide-react';

const skillGroups = [
  {
    title: "Core Strengths",
    icon: Cpu,
    skills: [
      "System Integration", "Industrial IoT Systems", "Backend & Frontend Development",
      "Real-time Monitoring Platforms", "Sensor Integration", "Computer Vision",
      "AI-based Monitoring", "Full-Stack Application Development", "API & Device Connectivity",
      "Environmental Sensing", "Robotics Software",
      "ROS / ROS2", "Semantic Mapping", "Mapping & Localization", "Autonomous Systems"
    ]
  },
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "C", "C++", "JavaScript", "TypeScript", "Node.js", "SQL"]
  },
  {
    title: "Systems & Tools",
    icon: Terminal,
    skills: [
      "YOLO / YOLOv3", "OpenCV", "PyTorch", "TensorRT",
      "PostgreSQL", "MQTT / REST / Socket.IO", "Gmapping",
      "Jetson Nano", "Arduino", "MATLAB", "Fusion360",
      "KiCAD", "Docker", "Git", "Linux"
    ]
  },
  {
    title: "Working Style",
    icon: Users,
    skills: [
      "Cross-Functional Collaboration",
      "Structured Problem Solving",
      "Technical Communication",
      "End-to-End Ownership",
      "Adaptability in New Domains"
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-kicker">03 // Capabilities</h2>
            <h3 className="section-title mb-4">
              Technical <span className="section-title-accent">Expertise</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise in system integration,
              IoT development, monitoring platforms, and applied automation.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, x: groupIndex % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            >
              <Card className="h-full tech-border bg-white/72 border-white/40 overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <group.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold tracking-tight text-slate-800">{group.title}</h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {group.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (groupIndex * 0.1) + (skillIndex * 0.05) }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="px-4 py-1.5 text-sm font-medium bg-sky-50/80 text-slate-700 hover:bg-primary hover:text-primary-foreground transition-all cursor-default border border-sky-100"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
