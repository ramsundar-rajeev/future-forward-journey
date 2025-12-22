import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Award, Users, Beaker } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Regional Science Competition",
    date: "March 2024",
    description: "Participated in the regional science fair presenting research on sustainable bio-plastics. Gained valuable experience in public speaking and scientific presentation.",
    icon: Award,
    tags: ["Science", "Competition", "Research"],
  },
  {
    id: 2,
    title: "School Science Club Leadership",
    date: "September 2023 - Present",
    description: "Elected as Vice President of the school science club. Organized weekly meetings, coordinated experiments, and mentored junior members.",
    icon: Users,
    tags: ["Leadership", "Mentoring", "Organization"],
  },
  {
    id: 3,
    title: "Summer Biology Workshop",
    date: "July 2023",
    description: "Attended an intensive two-week biology workshop focusing on molecular biology techniques and laboratory practices.",
    icon: Beaker,
    tags: ["Biology", "Workshop", "Lab Skills"],
  },
  {
    id: 4,
    title: "Community Environmental Initiative",
    date: "June 2023",
    description: "Volunteered in a local environmental cleanup and awareness campaign. Helped educate community members about sustainable practices.",
    icon: Users,
    tags: ["Volunteering", "Environment", "Community"],
  },
];

const Activities = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="pt-24 pb-16 bg-hero">
        <div className="container mx-auto px-6 pt-12">
          <div className="text-center animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Activities & Experiences
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              A collection of events, achievements, and experiences that have shaped my journey
            </p>
          </div>
        </div>
      </section>

      {/* Experience Cards */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className="bg-card rounded-2xl shadow-card border border-border/50 overflow-hidden hover:shadow-elevated transition-shadow animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Icon/Image Section */}
                  <div className="md:w-48 bg-muted/50 p-8 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <experience.icon className="w-10 h-10 text-primary" />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-8">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {experience.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {experience.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {experience.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More to come message */}
          <div className="text-center mt-16 animate-fade-up delay-500">
            <div className="inline-block px-6 py-3 bg-muted rounded-full">
              <p className="text-muted-foreground text-sm">
                More experiences coming soon as my journey continues...
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Activities;
