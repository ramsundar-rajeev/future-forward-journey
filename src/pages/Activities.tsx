import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Award } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Activity Title",
    date: "Date",
    description: "Activity description goes here. This is where you can describe what the activity involved and what you learned from it.",
    icon: Award,
    tags: ["Tag 1", "Tag 2", "Tag 3"],
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
