
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const project = [
    {
        id: 1,
        title: "",
        Description: "",
        image: "/",
        tags: ["", "", "", ""],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 2,
        title: "",
        Description: "",
        image: "/",
        tags: ["", "", "", ""],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 3,
        title: "",
        Description: "",
        image: "/",
        tags: ["", "", "", ""],
        demoUrl: "#",
        githubUrl: "#"
    },


]

export const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{" "}Featured <span className="text-primary">Projects</span></h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here is some of my recent project, Each project was carefully crafted attention to details, performance and user experience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {project.map((project) => (
                        <div key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transform-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="">
                                <div className="flex flex-wrap gap-3 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a><ExternalLink /></a>
                                    <a><Github /></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};