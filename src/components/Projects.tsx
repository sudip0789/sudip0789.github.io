import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ExternalLink, Star, GitFork } from "lucide-react";
import { PROJECTS_CONFIG } from "@/data/config";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface GitHubRepo {
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

export const Projects = () => {
  const [projects, setProjects] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/projects.json");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error loading local projects.json:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Featured Projects
        </motion.h2>

        {loading ? (
          <div className="text-center text-muted-foreground">Loading projects...</div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {projects.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 rounded-xl p-6 hover:border-primary/50 hover:shadow-card transition-all duration-300 group overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                      <a
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors p-1 hover:bg-primary/10 rounded-md"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>

                    <p className="text-muted-foreground text-sm mb-6 line-clamp-3 min-h-[3.6rem]">
                      {project.description || "No description available"}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      {project.language && (
                        <Badge variant="outline" className="bg-primary/10 border-primary/30 text-primary-foreground">
                          {project.language}
                        </Badge>
                      )}
                      <div className="flex items-center gap-1 hover:text-primary transition-colors">
                        <Star className="w-4 h-4" />
                        <span>{project.stargazers_count}</span>
                      </div>
                      <div className="flex items-center gap-1 hover:text-primary transition-colors">
                        <GitFork className="w-4 h-4" />
                        <span>{project.forks_count}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button asChild size="lg">
                <a
                  href={`https://github.com/${PROJECTS_CONFIG.githubUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View more on GitHub →
                </a>
              </Button>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
};
