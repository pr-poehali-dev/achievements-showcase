import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

interface Poem {
  title: string;
  excerpt: string;
  date: string;
  fullText: string;
}

interface PoemsSectionProps {
  poems: Poem[];
}

const PoemsSection = ({ poems }: PoemsSectionProps) => {
  return (
    <section className="animate-fade-in">
      <div className="flex items-center mb-8">
        <Icon name="BookOpen" className="text-fox-orange mr-3" size={32} />
        <h2 className="creative-text text-4xl font-bold text-fox-earth">Мои стихи</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {poems.map((poem, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <Card className="fox-hole-bg p-6 hover:scale-105 transition-all duration-300 animate-float cursor-pointer" 
                    style={{animationDelay: `${index * 0.2}s`}}>
                <div className="space-y-3">
                  <h3 className="creative-text text-xl font-semibold text-fox-earth">{poem.title}</h3>
                  <p className="text-fox-orange italic">"{poem.excerpt}"</p>
                  <div className="flex justify-between items-center text-sm text-fox-earth/70">
                    <span>{poem.date}</span>
                    <Icon name="Heart" size={16} />
                  </div>
                </div>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-fox-orange/20 via-fox-teal/20 to-fox-lavender/20 rounded-full animate-sphere-bounce opacity-30 -z-10"></div>
                <DialogHeader>
                  <DialogTitle className="creative-text text-2xl text-fox-earth text-center mb-6">
                    {poem.title}
                  </DialogTitle>
                </DialogHeader>
                <div className="text-center p-8">
                  <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-fox-orange/30 via-fox-teal/30 to-fox-warm/30 flex items-center justify-center animate-pulse-glow mb-6">
                    <div className="creative-text text-fox-earth leading-relaxed text-lg whitespace-pre-line p-4">
                      {poem.fullText}
                    </div>
                  </div>
                  <p className="text-fox-earth/70 text-sm">{poem.date}</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
};

export default PoemsSection;