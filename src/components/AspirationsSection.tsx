import { Rocket, Target, Lightbulb } from "lucide-react";

const AspirationsSection = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left decorative content */}
          <div className="flex-1 animate-fade-up">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card rounded-2xl p-6 shadow-card">
                <Target className="w-8 h-8 text-primary mb-3" />
                <h4 className="font-semibold text-foreground mb-1">Goal-Driven</h4>
                <p className="text-sm text-muted-foreground">Focused on meaningful outcomes</p>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-card mt-8">
                <Lightbulb className="w-8 h-8 text-accent mb-3" />
                <h4 className="font-semibold text-foreground mb-1">Innovative</h4>
                <p className="text-sm text-muted-foreground">Thinking outside the box</p>
              </div>
            </div>
          </div>

          {/* Main aspirations card */}
          <div className="flex-1 lg:flex-[1.5] animate-fade-up delay-200">
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-elevated border border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
                  Future <span className="text-gradient">Aspirations</span>
                </h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  My ambition is to become a leading biotechnologist, working at the 
                  forefront of scientific innovation. I envision myself contributing to 
                  breakthroughs in sustainable biotechnology and medical research.
                </p>
                <p className="text-lg leading-relaxed">
                  Long-term, I aim to bridge the gap between laboratory discoveries and 
                  real-world applications, making science accessible and impactful for 
                  communities worldwide. I want to be part of solutions that address 
                  global challenges in health and sustainability.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-primary font-medium">
                  "The future belongs to those who believe in the beauty of their dreams."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AspirationsSection;
