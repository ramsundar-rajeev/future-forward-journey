import { Rocket, Target, Lightbulb } from "lucide-react";

const AspirationsSection = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          {/* Left decorative content */}
          <div className="flex-1 h-full animate-fade-up">
            <div className="grid grid-cols-1 gap-6 h-full">
              {/* Goal-Driven */}
              <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300">
                <Target className="w-8 h-8 text-primary mb-3" />
                <h4 className="font-semibold text-foreground mb-2">
                  Goal-Driven
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I set clear academic and personal goals to guide my learning.
                  Whether preparing for exams, completing projects, or
                  developing new skills, I stay focused and organised to make
                  steady progress towards my long-term ambitions.
                </p>
              </div>

              {/* Innovative */}
              <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300">
                <Lightbulb className="w-8 h-8 text-accent mb-3" />
                <h4 className="font-semibold text-foreground mb-2">
                  Innovative
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I enjoy exploring creative ways to solve problems and apply
                  what I learn beyond the classroom. By experimenting with
                  ideas, technology, and independent research, I aim to develop
                  original thinking and a deeper understanding of science.
                </p>
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
                  My ambition is to become a leading biotechnologist, working at
                  the forefront of scientific innovation. I envision myself
                  contributing to breakthroughs in sustainable biotechnology and
                  medical research.
                </p>
                <p className="text-lg leading-relaxed">
                  Long-term, I aim to bridge the gap between laboratory
                  discoveries and real-world applications, making science
                  accessible and impactful for communities worldwide. I want to
                  be part of solutions that address global challenges in health
                  and sustainability.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-primary font-medium">
                  "The future belongs to those who believe in the beauty of
                  their dreams."
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
