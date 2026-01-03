import profilePhoto from "@/assets/profile-photo.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Profile Image */}
          <div className="animate-fade-up">
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-secondary flex items-center justify-center shadow-elevated overflow-hidden">
                <img 
                  src={profilePhoto} 
                  alt="Ramsundar Rajeev" 
                  className="w-full h-full object-cover object-top scale-110"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-full border-2 border-primary/20 -z-10" />
              <div className="absolute -inset-6 rounded-full border border-primary/10 -z-10" />
            </div>
          </div>

          {/* About Text */}
          <div className="flex-1 text-center md:text-left animate-fade-up delay-200">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Hi there! I'm a passionate student currently exploring the fascinating 
              intersection of science and technology. My journey in education has 
              sparked a deep curiosity for understanding how life works at its most 
              fundamental level.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in the power of continuous learning and am motivated by the 
              potential to contribute to innovations that could improve lives. Whether 
              it's through research, collaboration, or creative problem-solving, I'm 
              always eager to take on new challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
