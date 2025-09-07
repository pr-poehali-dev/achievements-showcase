import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

interface Fairytale {
  title: string;
  excerpt: string;
  fullText: string;
  imageUrl: string;
  category: string;
}

interface FairytalesSectionProps {
  fairytales: Fairytale[];
}

const FairytalesSection = ({ fairytales }: FairytalesSectionProps) => {
  const [selectedFairytale, setSelectedFairytale] = useState<Fairytale | null>(null);

  return (
    <section className="animate-fade-in">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 mb-4">
          <Icon name="BookOpen" size={32} className="text-fox-orange animate-pulse" />
          <h2 className="creative-title text-4xl font-bold">Сказки</h2>
          <Icon name="Sparkles" size={32} className="text-fox-teal animate-pulse" />
        </div>
        <p className="creative-text text-fox-earth/80 max-w-2xl mx-auto leading-relaxed">
          Волшебные истории из лисьей норки, где каждая строчка наполнена мудростью и добротой
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-fox-orange to-fox-teal mx-auto mt-6 rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fairytales.map((fairytale, index) => (
          <Card 
            key={index}
            className="group hover:shadow-2xl transition-all duration-500 border-fox-earth/20 hover:border-fox-orange/30 bg-gradient-to-br from-white to-fox-earth/5 hover:scale-[1.02] cursor-pointer relative overflow-hidden"
            onClick={() => setSelectedFairytale(fairytale)}
          >
            {/* Background Image */}
            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
              <img 
                src={fairytale.imageUrl} 
                alt={fairytale.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs px-3 py-1 bg-fox-teal/20 text-fox-teal rounded-full font-medium">
                    {fairytale.category}
                  </span>
                  <Icon name="Heart" size={16} className="text-fox-orange/60 group-hover:text-fox-orange transition-colors" />
                </div>
                <CardTitle className="creative-title text-xl group-hover:text-fox-orange transition-colors">
                  {fairytale.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="creative-text text-fox-earth/80 line-clamp-3 leading-relaxed mb-4">
                  {fairytale.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-fox-orange hover:text-fox-orange hover:bg-fox-orange/10 font-medium group-hover:translate-x-1 transition-transform"
                  >
                    Читать сказку
                    <Icon name="ArrowRight" size={14} className="ml-1" />
                  </Button>
                  
                  <div className="flex items-center gap-1 text-fox-earth/60">
                    <Icon name="Clock" size={14} />
                    <span className="text-xs">~3 мин</span>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>

      {/* Fairytale Dialog */}
      <Dialog open={!!selectedFairytale} onOpenChange={() => setSelectedFairytale(null)}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden bg-gradient-to-br from-white to-fox-earth/5">
          <DialogHeader className="border-b border-fox-earth/10 pb-4">
            <div className="flex items-center gap-3">
              <Icon name="BookOpen" size={24} className="text-fox-orange" />
              <DialogTitle className="creative-title text-2xl text-fox-orange">
                {selectedFairytale?.title}
              </DialogTitle>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs px-2 py-1 bg-fox-teal/20 text-fox-teal rounded-full">
                {selectedFairytale?.category}
              </span>
              <div className="flex items-center gap-1 text-fox-earth/60">
                <Icon name="Clock" size={12} />
                <span className="text-xs">~3 минуты чтения</span>
              </div>
            </div>
          </DialogHeader>
          
          {selectedFairytale && (
            <div className="overflow-y-auto pr-2 max-h-[60vh]">
              {/* Featured Image */}
              <div className="mb-6 rounded-lg overflow-hidden">
                <img 
                  src={selectedFairytale.imageUrl} 
                  alt={selectedFairytale.title}
                  className="w-full h-48 object-cover opacity-80"
                />
              </div>
              
              {/* Text Content */}
              <div className="creative-text text-fox-earth leading-relaxed whitespace-pre-line text-justify">
                {selectedFairytale.fullText}
              </div>
              
              {/* Footer */}
              <div className="mt-8 pt-4 border-t border-fox-earth/10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-fox-earth/60">
                  <Icon name="Feather" size={16} />
                  <span className="text-sm">© Лисёнок</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-fox-teal hover:text-fox-teal hover:bg-fox-teal/10"
                  >
                    <Icon name="Share2" size={14} className="mr-1" />
                    Поделиться
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-fox-orange hover:text-fox-orange hover:bg-fox-orange/10"
                  >
                    <Icon name="Heart" size={14} className="mr-1" />
                    Нравится
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default FairytalesSection;