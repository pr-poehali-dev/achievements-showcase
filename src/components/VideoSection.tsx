import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { useState } from "react";

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
  setClips: (clips: Clip[]) => void;
}

const VideoSection = ({ clips, setClips }: VideoSectionProps) => {
  const [editMode, setEditMode] = useState(false);
  const [newClip, setNewClip] = useState({ title: '', description: '', url: '', thumbnail: '' });
  const [editingClip, setEditingClip] = useState<number | null>(null);

  const handleAddClip = () => {
    if (newClip.title && newClip.url) {
      const clip = {
        id: clips.length + 1,
        ...newClip,
        views: 0,
        likes: 0,
        duration: "0:00",
        uploadDate: new Date().toISOString().split('T')[0]
      };
      setClips([...clips, clip]);
      setNewClip({ title: '', description: '', url: '', thumbnail: '' });
      setEditMode(false);
    }
  };

  const handleEditClip = (index: number) => {
    setEditingClip(index);
    setNewClip({
      title: clips[index].title,
      description: clips[index].description,
      url: clips[index].url,
      thumbnail: clips[index].thumbnail
    });
  };

  const handleUpdateClip = () => {
    if (editingClip !== null && newClip.title && newClip.url) {
      const updatedClips = clips.map((clip, index) => 
        index === editingClip 
          ? { ...clip, ...newClip }
          : clip
      );
      setClips(updatedClips);
      setEditingClip(null);
      setNewClip({ title: '', description: '', url: '', thumbnail: '' });
    }
  };

  const handleDeleteClip = (index: number) => {
    setClips(clips.filter((_, i) => i !== index));
  };

  const handleLikeClip = (index: number) => {
    const updatedClips = clips.map((clip, i) => 
      i === index ? { ...clip, likes: clip.likes + 1 } : clip
    );
    setClips(updatedClips);
  };

  const handleViewClip = (index: number) => {
    const updatedClips = clips.map((clip, i) => 
      i === index ? { ...clip, views: clip.views + 1 } : clip
    );
    setClips(updatedClips);
  };

  return (
    <section className="animate-fade-in">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <Icon name="Video" className="text-fox-coral mr-3" size={32} />
          <h2 className="creative-text text-4xl font-bold text-fox-earth">Мои клипы</h2>
        </div>
        <Button onClick={() => setEditMode(true)} className="bg-fox-coral hover:bg-fox-coral/80">
          <Icon name="Plus" size={20} className="mr-2" />
          Добавить клип
        </Button>
      </div>

      {/* Add/Edit Clip Form */}
      {(editMode || editingClip !== null) && (
        <Card className="fox-hole-bg p-6 mb-8">
          <h3 className="creative-text text-2xl font-bold text-fox-earth mb-6">
            {editingClip !== null ? 'Редактировать клип' : 'Добавить новый клип'}
          </h3>
          <div className="space-y-4">
            <div>
              <Label htmlFor="title" className="text-fox-earth font-semibold">Название</Label>
              <Input
                id="title"
                value={newClip.title}
                onChange={(e) => setNewClip({...newClip, title: e.target.value})}
                placeholder="Введите название клипа"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="description" className="text-fox-earth font-semibold">Описание</Label>
              <Textarea
                id="description"
                value={newClip.description}
                onChange={(e) => setNewClip({...newClip, description: e.target.value})}
                placeholder="Расскажите о вашем клипе"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="url" className="text-fox-earth font-semibold">URL видео</Label>
              <Input
                id="url"
                value={newClip.url}
                onChange={(e) => setNewClip({...newClip, url: e.target.value})}
                placeholder="https://www.youtube.com/embed/..."
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="thumbnail" className="text-fox-earth font-semibold">Превью (URL)</Label>
              <Input
                id="thumbnail"
                value={newClip.thumbnail}
                onChange={(e) => setNewClip({...newClip, thumbnail: e.target.value})}
                placeholder="URL изображения для превью"
                className="mt-1"
              />
            </div>
            <div className="flex space-x-3">
              <Button 
                onClick={editingClip !== null ? handleUpdateClip : handleAddClip}
                className="bg-fox-teal hover:bg-fox-teal/80"
              >
                <Icon name="Save" size={16} className="mr-2" />
                {editingClip !== null ? 'Обновить' : 'Сохранить'}
              </Button>
              <Button 
                onClick={() => {
                  setEditMode(false);
                  setEditingClip(null);
                  setNewClip({ title: '', description: '', url: '', thumbnail: '' });
                }}
                variant="outline"
              >
                <Icon name="X" size={16} className="mr-2" />
                Отмена
              </Button>
            </div>
          </div>
        </Card>
      )}

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
                      onClick={() => handleViewClip(index)}
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
              <div className="absolute top-2 right-2 flex space-x-1">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleEditClip(index)}
                  className="bg-white/80 hover:bg-white"
                >
                  <Icon name="Edit" size={16} />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleDeleteClip(index)}
                  className="bg-white/80 hover:bg-white text-red-600"
                >
                  <Icon name="Trash" size={16} />
                </Button>
              </div>
              
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
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => handleLikeClip(index)}
                  className="text-fox-orange hover:text-fox-orange/80"
                >
                  <Icon name="Heart" size={16} className="mr-1" />
                  Лайк
                </Button>
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