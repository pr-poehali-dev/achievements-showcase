import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useAuth } from "@/context/AuthContext";

interface Clip {
  id: number;
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  views: number;
  likes: number;
  duration: string;
  uploadDate: string;
}

interface VideoSectionProps {
  clips: Clip[];
}

const VideoSection = ({ clips }: VideoSectionProps) => {
  const { isOwner } = useAuth();



  return (
    <section className="animate-fade-in">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <Icon name="Video" className="text-fox-coral mr-3" size={32} />
          <h2 className="creative-text text-4xl font-bold text-fox-earth">Мои клипы</h2>
        </div>
        {isOwner && (
          <Button className="bg-fox-coral hover:bg-fox-coral/80">
            <Icon name="Plus" size={20} className="mr-2" />
            Добавить клип
          </Button>
        )}
      </div>



      {/* Clips Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clips.map((clip, index) => (
          <Card key={clip.id} className="fox-hole-bg overflow-hidden hover:scale-105 transition-all duration-300">
            <div className="relative group">
              <img 
                src={clip.thumbnail} 
                alt={clip.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      className="bg-fox-orange hover:bg-fox-orange/80 rounded-full"
                      size="lg"
                    >
                      <Icon name="Play" size={24} />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <DialogHeader>
                      <DialogTitle className="creative-text text-2xl text-fox-earth">
                        {clip.title}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="aspect-video rounded-xl overflow-hidden">
                        <iframe
                          src={clip.url}
                          className="w-full h-full"
                          allowFullScreen
                          title={clip.title}
                        />
                      </div>
                      <p className="text-fox-earth">{clip.description}</p>
                      <div className="flex justify-between items-center text-sm text-fox-earth/70">
                        <span>Загружено: {clip.uploadDate}</span>
                        <span>Длительность: {clip.duration}</span>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              
              {/* Admin Controls */}
              {isOwner && (
                <div className="absolute top-2 right-2 flex space-x-1">
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-white/80 hover:bg-white"
                  >
                    <Icon name="Edit" size={16} />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-white/80 hover:bg-white text-red-600"
                  >
                    <Icon name="Trash" size={16} />
                  </Button>
                </div>
              )}
              
              {/* Play Duration Overlay */}
              <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs">
                {clip.duration}
              </div>
            </div>
            
            <div className="p-4 space-y-3">
              <h3 className="creative-text text-xl font-semibold text-fox-earth">{clip.title}</h3>
              <p className="text-fox-earth/80 text-sm line-clamp-2">{clip.description}</p>
              
              {/* Statistics */}
              <div className="flex justify-between items-center">
                <div className="flex space-x-4 text-sm text-fox-earth/70">
                  <div className="flex items-center space-x-1">
                    <Icon name="Eye" size={16} />
                    <span>{clip.views.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Heart" size={16} />
                    <span>{clip.likes}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-fox-orange">
                  <Icon name="Heart" size={16} />
                  <span className="text-sm">Лайк</span>
                </div>
              </div>
              
              <div className="text-xs text-fox-earth/60">
                Загружено: {new Date(clip.uploadDate).toLocaleDateString('ru')}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default VideoSection;