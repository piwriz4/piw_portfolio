import { motion } from 'motion/react';
import { Button, buttonVariants } from '@/components/ui/button';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import profileImage from '@/assets/profile.png';

const RESUME_URL = 'https://drive.google.com/file/d/1cAxqWKme1ezUVKLaJ9Vc0FlyVoyP-5pF/view?usp=sharing';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 sm:pt-20 overflow-hidden tech-grid">
      <div className="scanline" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] sm:text-xs font-mono mb-5 sm:mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Open to New Opportunities
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-4 leading-[0.95] text-slate-800">
              Luthfi Rizqi <br />
              <span className="section-title-accent">Mubarak</span>
            </h1>
            
            <h2 className="text-lg sm:text-xl md:text-2xl font-mono text-cyan-700 mb-5 sm:mb-6">
              IoT & AI System Engineer
            </h2>
            
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mb-7 sm:mb-8 leading-relaxed">
              Master&apos;s graduate in Electrical Engineering focused on system integration, IoT platforms, and full-stack monitoring solutions. Experienced in connecting devices, data pipelines, dashboards, and embedded systems into reliable real-world automation.
            </p>
            
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
              <a 
                href="#projects" 
                className={cn(buttonVariants({ size: "lg" }), "tech-border w-full sm:w-auto justify-center")}
              >
                View Projects <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a 
                href="#contact" 
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "tech-border w-full sm:w-auto justify-center")}
              >
                <Mail className="mr-2 w-4 h-4" /> Contact Me
              </a>
              <Button variant="ghost" size="lg" className="hover:bg-primary/5 w-full sm:w-auto justify-center" asChild>
                <a href={RESUME_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center">
                  <Download className="mr-2 w-4 h-4" /> Resume
                </a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative order-first lg:order-none px-3 sm:px-0 lg:block"
          >
            <div className="relative w-full aspect-square max-w-[280px] sm:max-w-sm lg:max-w-md mx-auto">
              <div className="absolute inset-0 tech-border bg-white/40 overflow-hidden rounded-3xl">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/10 font-mono text-8xl rotate-12 select-none pointer-events-none">
                  SYSTEMS_IO
                </div>
                <img 
                  src={profileImage}
                  alt="Luthfi Rizqi Mubarak"
                  className="w-full h-full object-cover opacity-95 saturate-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-cyan-100/20" />
              </div>
              
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 border-t-2 border-r-2 border-primary/30" />
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-16 h-16 sm:w-24 sm:h-24 border-b-2 border-l-2 border-primary/30" />
              
              <div className="absolute top-1/2 -right-5 sm:-right-8 transform -translate-y-1/2 flex flex-col gap-3 sm:gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-1 h-8 sm:h-12 bg-primary/20 rounded-full" />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
