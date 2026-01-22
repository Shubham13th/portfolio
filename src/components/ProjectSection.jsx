import { ArrowRight, ExternalLink, Github } from "lucide-react";
import mediFor7 from "../assets/mediFor7.png"
import shubhVivah from "../assets/shubhVivah.png"

const projects = [
    {
        id: 1,
        title: "MediFor7",
        description: "A comprehensive medical resource platform.",
        image: mediFor7,
        tags: ["React", "Tailwind CSS"],
        demoUrl: "https://medifor7.onrender.com/",
        githubUrl: "https://github.com/Shubham13th/mediFor7"
    },
    {
        id: 2,
        title: "Shubh Vivah",
        description: "Online Matromonial platform", 
        image: shubhVivah,
        tags: ["React", "React-Dom", "Tailwind CSS"],
        demoUrl: "https://illustrious-chaja-e0ac9d.netlify.app/",
        githubUrl: "https://github.com/Shubham13th/Matrimonial-Website/tree/main/frontend"
    },
    {
        id: 3,
        title: "SmartAttend",
        description: "", 
        image: "/",
        tags: ["", "", "", ""],
        demoUrl: "#",
        githubUrl: "#"
    },
];

export const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{" "}Featured <span className="text-primary">Projects</span></h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here is some of my recent project, Each project was carefully crafted attention to details, performance and user experience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Added gap for spacing */}
                    {projects.map((project) => (
                        <div key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transform-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="p-6"> {/* Added padding */}
                                <div className="flex flex-wrap gap-3 mb-4">
                                    {project.tags.map((tag, index) => (
                                        <span 
                                            key={`${project.id}-${tag}-${index}`} // Added unique key
                                            className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description} {/* Fixed: now matches the object property */}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a href={project.demoUrl} className="hover:text-primary transition-colors">
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                        <a href={project.githubUrl} className="hover:text-primary transition-colors">
                                            <Github className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};