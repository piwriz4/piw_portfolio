import { motion } from 'motion/react';
import { Mail, MessageSquare, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="section-kicker">07 // Connect</h2>
          <h3 className="section-title mb-6">Let's build something <br /><span className="section-title-accent">intelligent together.</span></h3>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
            If you would like to discuss robotics software, IoT systems, or collaboration opportunities, feel free to reach out via email or LinkedIn.
          </p>

          <div className="space-y-6">
            <div className="tech-border bg-white/72 backdrop-blur-sm p-6 flex items-center gap-4 group">
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Email</p>
                <a href="mailto:luthfirizqim@gmail.com" className="text-lg font-medium text-slate-800 hover:text-primary transition-colors">
                  luthfirizqim@gmail.com
                </a>
              </div>
            </div>
            
            <div className="tech-border bg-white/72 backdrop-blur-sm p-6 flex items-center gap-4 group">
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/luthfirizqim"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg font-medium text-slate-800 hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4" />
                  linkedin.com/in/luthfirizqim
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
