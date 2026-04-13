import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Layers, Cpu, Globe } from 'lucide-react';

const projects = [
  {
    title: "Integrated Robotic Monitoring & AI Vision Platform",
    category: "Professional",
    description: "Built a unified platform for robot fleet operations, combining real-time logging, task orchestration, health monitoring, and AI vision performance evaluation in a single operational dashboard.",
    tech: ["Node.js", "React", "Python", "MQTT", "Grafana", "InfluxDB"],
    contribution: "Designed the orchestration and monitoring architecture, then extended it with automated KPI analytics for AI vision model performance.",
    impact: "Improved operational visibility, reduced downtime through proactive monitoring, and cut manual QA work with automated performance reporting.",
    image: "https://picsum.photos/seed/fleet-vision/800/450",
    icon: Cpu
  },
  {
    title: "AMR Mapping & Localization Pipeline",
    category: "Professional",
    description: "Optimized the autonomy workflow for industrial mobile robots, with a focus on localization accuracy and mapping reliability in large-scale warehouse environments.",
    tech: ["ROS2", "C++", "Cartographer", "Nav2", "Linux"],
    contribution: "Implemented route optimization improvements and refined the mapping pipeline for more stable autonomous navigation.",
    impact: "Reduced localization drift and improved path-planning efficiency for multi-robot deployments.",
    image: "https://picsum.photos/seed/amr/800/450",
    icon: Layers
  },
  {
    title: "Autonomous Mapping and Navigation",
    category: "Academic (Master's)",
    description: "Developed a complete software pipeline for an autonomous mobile robot using ROS, integrating LiDAR and depth cameras for real-time SLAM and obstacle avoidance.",
    tech: ["ROS", "Python", "C++", "LiDAR", "OpenCV"],
    contribution: "Designed the sensor fusion workflow and configured the navigation stack for robust indoor autonomy.",
    impact: "Delivered reliable indoor mapping performance and stable path planning in dynamic environments.",
    image: "https://picsum.photos/seed/slam/800/450",
    icon: Layers
  },
  {
    title: "IoT-Based Air Quality Monitoring",
    category: "Academic (Bachelor's)",
    description: "Created a distributed IoT monitoring system for environmental sensing, combining automated data collection, backend processing, and a web-based dashboard.",
    tech: ["Python", "MQTT", "Raspberry Pi", "Node.js", "PostgreSQL"],
    contribution: "Developed the backend ingestion pipeline and the real-time visualization dashboard.",
    impact: "Provided continuous environmental insights with reliable remote access and 24/7 monitoring capability.",
    image: "https://picsum.photos/seed/iot-air/800/450",
    icon: Globe
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24 tech-grid relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div>
            <h2 className="section-kicker">02 // Portfolio</h2>
            <h3 className="section-title text-3xl sm:text-4xl">
              Featured <span className="section-title-accent">Projects</span>
            </h3>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground max-w-md">
            A selection of my work in robotics software, IoT systems, and intelligent automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col tech-border bg-white/72 backdrop-blur-sm border-white/40 overflow-hidden group">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 saturate-110 contrast-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-transparent to-cyan-100/10" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/85 backdrop-blur-md border-white/10 px-3 py-1 text-sm sm:text-base font-semibold">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <project.icon className="w-4 h-4 text-primary" />
                    <span className="text-[10px] sm:text-xs font-mono text-muted-foreground uppercase tracking-widest">System_Module</span>
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-slate-800 group-hover:text-primary transition-colors leading-snug">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="flex-grow space-y-4 px-5 pb-5 sm:px-6 sm:pb-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-xs font-bold uppercase tracking-tighter text-muted-foreground">Key Contribution</p>
                    <p className="text-xs italic text-slate-700">{project.contribution}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map(t => (
                      <Badge key={t} variant="outline" className="text-[10px] font-mono py-0.5 px-2 border-white/10">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="pt-0 border-t border-white/5 mt-2 flex justify-between items-center px-5 py-4 sm:px-6">
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-primary/10 hover:text-primary">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                  <Button variant="link" size="sm" className="text-xs text-primary p-0 h-auto">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
