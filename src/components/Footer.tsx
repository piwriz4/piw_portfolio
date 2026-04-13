import { Cpu } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Cpu className="w-6 h-6 text-primary" />
            <span className="text-lg font-bold tracking-tighter font-mono">
              LRM<span className="text-primary/50">.SYS</span>
            </span>
          </div>
          
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          
          <div className="text-sm text-muted-foreground font-mono">
            &copy; {currentYear} // Luthfi Rizqi Mubarak
          </div>
        </div>
        
        <Separator className="my-8 bg-white/5" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-muted-foreground/50 uppercase tracking-[0.2em]">
          <div>System_v1.0.4 // Build_2026.04.09</div>
          <div>Designed & Developed for Robotics Excellence</div>
          <div>Latency: 24ms // Status: Operational</div>
        </div>
      </div>
    </footer>
  );
}
