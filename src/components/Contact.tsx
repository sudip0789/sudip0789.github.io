import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import siteData from "@/data/site.json";

export const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Get In Touch
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-lg text-muted-foreground mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            Feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg">
              <a href={`mailto:${siteData.email}`}>
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <motion.a
              href={`mailto:${siteData.email}`}
              whileHover={{ y: -5 }}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-glow transition-all"
            >
              <Mail className="w-8 h-8 text-primary mb-3 mx-auto" />
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-sm text-muted-foreground break-all">{siteData.email}</p>
            </motion.a>

            <motion.a
              href={siteData.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-glow transition-all"
            >
              <Github className="w-8 h-8 text-primary mb-3 mx-auto" />
              <h3 className="font-semibold mb-1">GitHub</h3>
              <p className="text-sm text-muted-foreground">View my work</p>
            </motion.a>

            <motion.a
              href={siteData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-glow transition-all"
            >
              <Linkedin className="w-8 h-8 text-primary mb-3 mx-auto" />
              <h3 className="font-semibold mb-1">LinkedIn</h3>
              <p className="text-sm text-muted-foreground">Let's connect</p>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
