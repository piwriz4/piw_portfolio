import { motion } from 'motion/react';
import { BookOpen, ExternalLink, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const publications = [
  {
    title: 'Semantic Map Construction with Camera and LiDAR for Real-Time Object Detection',
    venue: 'IEEE',
    date: 'Dec 30, 2024',
    link: 'https://doi.org/10.1109/ICSMech62936.2024.10812187',
    summary:
      'This research presents a semantic mapping approach that combines camera and LiDAR data for real-time object detection. The method integrates sensor fusion with ROS to support more informed indoor navigation for autonomous guided vehicles and other intelligent robotic systems.',
    tags: ['Semantic Mapping', 'Sensor Fusion', 'ROS', 'LiDAR', 'Computer Vision'],
  },
  {
    title: 'Effect of Rainfall on the Chemical Composition of Rainwater in Monitoring Acid Deposition in Greater Bandung',
    venue: 'Research Article',
    date: 'Apr 1, 2023',
    link: 'https://dx.doi.org/10.25105/urbanenvirotech.v6i1.14051',
    summary:
      'This study analyzes how rainfall intensity influences rainwater acidity, conductivity, and ion concentration in the Greater Bandung area. The findings provide insight into pollutant transport behavior and acid deposition patterns under varying atmospheric conditions.',
    tags: ['Environmental Monitoring', 'Rainfall Analysis', 'Air Pollution', 'Acid Deposition'],
  },
  {
    title: 'Utilization of Plastic Waste as Paver Block, Economic Potential, and Environmental Impact',
    venue: 'Journal of Community Research and Service (JCRS)',
    date: 'Aug 1, 2022',
    link: 'https://doi.org/10.24114/jcrs.v6i2.33245',
    summary:
      'This publication explores the conversion of polypropylene plastic waste into paver blocks through a melting and pressing process. The study evaluates both economic feasibility and environmental impact, including CO2 emissions during production.',
    tags: ['Sustainability', 'Materials Reuse', 'Environmental Impact', 'Applied Research'],
  },
];

export default function Publications() {
  return (
    <section id="publications" className="py-20 sm:py-24 tech-grid relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-kicker">06 // Research</h2>
            <h3 className="section-title mb-4">
              Selected <span className="section-title-accent">Publications</span>
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              A selection of research publications spanning robotics, environmental monitoring, and applied engineering studies.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          {publications.map((publication, index) => (
            <motion.div
              key={publication.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className="tech-border bg-white/72 border-white/40 overflow-hidden">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col gap-5 sm:gap-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="rounded-2xl border border-primary/20 bg-primary/10 p-3">
                          <BookOpen className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold leading-tight text-slate-800 sm:text-2xl">
                            {publication.title}
                          </h4>
                          <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                            <span className="font-medium text-primary">{publication.venue}</span>
                            <span className="text-slate-300">•</span>
                            <span>{publication.date}</span>
                          </div>
                        </div>
                      </div>

                      <a
                        href={publication.link}
                        target="_blank"
                        rel="noreferrer"
                        className="hidden sm:inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Show publication
                      </a>
                    </div>

                    <p className="text-base leading-7 text-muted-foreground">
                      {publication.summary}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {publication.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-sky-50/80 px-3 py-1 text-xs font-medium text-slate-700 border border-sky-100"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                        <FileText className="h-4 w-4" />
                        <span className="break-all">{publication.link}</span>
                      </div>

                      <a
                        href={publication.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10 sm:hidden"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Show publication
                      </a>
                    </div>
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
