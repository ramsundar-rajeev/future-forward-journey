import { Zap, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CurrentFocusSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              <span>Current Status</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              What am I doing <span className="text-gradient">right now?</span>
            </h2>
          </div>

          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-elevated border border-border/50 animate-fade-up delay-200">
            <div className="flex items-center gap-3 text-muted-foreground text-sm mb-6">
              <Calendar className="w-4 h-4" />
              <span>Academic Year 2023-2024</span>
            </div>
            
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Currently, I'm deeply immersed in my studies, focusing on advanced 
                coursework in biology and chemistry. I'm particularly excited about 
                an upcoming science fair project exploring sustainable bio-materials.
              </p>
              <p className="text-lg leading-relaxed">
                Outside the classroom, I'm actively participating in our school's 
                science club and preparing for regional academic competitions. I'm 
                also volunteering with environmental initiatives in my community.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                  Science Fair
                </span>
                <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">
                  Competitions
                </span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">
                  Volunteering
                </span>
              </div>
              
              <Link 
                to="/activities"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                <span>See all activities</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentFocusSection;
