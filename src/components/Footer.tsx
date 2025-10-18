import siteData from "@/data/site.json";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center text-muted-foreground text-sm">
          <p>© {currentYear} {siteData.name}. Built with React, Vite, and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};
