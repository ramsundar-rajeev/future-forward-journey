import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Music, GraduationCap, Mountain, Store, Code } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Piano Grade 5",
    date: "12/2024",
    description: "I prepared for and completed my Grade 5 piano examination, developing consistent practice habits and refining my technical accuracy and musical expression. Balancing piano alongside academic commitments strengthened my time management and perseverance, while performing under exam conditions improved my confidence and focus.",
    icon: Music,
    tags: ["Discipline", "Creativity", "Time Management"],
  },
  {
    id: 2,
    title: "GCSE Examinations",
    date: "05–06/2025",
    description: "I completed my GCSE examinations across a broad range of subjects, consolidating foundational knowledge and exam technique. The revision process improved my ability to plan long-term study, prioritise weaker areas, and perform under pressure. Key highlights being: 9s in Maths, Physics, Chemistry, Biology and an A in FSMQ (Add maths), as well as 8s in Computer Science and English Literature. This experience helped shape my academic interests and prepared me for the demands of A-level study.",
    icon: GraduationCap,
    tags: ["Academic Achievement", "Resilience", "Independent Learning"],
  },
  {
    id: 3,
    title: "Silver Duke of Edinburgh Award",
    date: "07/2025",
    description: "I completed the Silver Duke of Edinburgh Award, involving volunteering, physical activity, skill development, and a team expedition. This experience strengthened my teamwork, leadership, and problem-solving skills, particularly during the expedition where planning, communication, and adaptability were essential in challenging conditions.",
    icon: Mountain,
    tags: ["Leadership", "Teamwork", "Resilience"],
  },
  {
    id: 4,
    title: "Jewellery Shop Work Experience",
    date: "08/2025",
    description: "I worked in a jewellery shop, gaining experience in customer service, sales, and professional communication. I learned how to interact confidently with customers, handle responsibility, and maintain attention to detail when dealing with high-value items. This role improved my interpersonal skills and workplace professionalism.",
    icon: Store,
    tags: ["Customer Service", "Communication", "Responsibility"],
  },
  {
    id: 5,
    title: "50 Days of Python Bootcamp",
    date: "06–12/2025",
    description: "I completed a 50-day Python bootcamp, building a strong foundation in programming through daily practice and projects. I developed problem-solving skills, logical thinking, and familiarity with writing clean, efficient code. This experience reinforced my interest in computational thinking and its applications in science and technology.",
    icon: Code,
    tags: ["Python", "Problem Solving", "Computational Thinking"],
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
