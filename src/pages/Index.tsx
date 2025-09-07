import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { useState, useRef, useEffect } from "react";

const Index = () => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(70);
  const [editMode, setEditMode] = useState(false);
  const [newClip, setNewClip] = useState({ title: '', description: '', url: '', thumbnail: '' });
  const [editingClip, setEditingClip] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const poems = [
    { 
      title: "Осенний лес", 
      excerpt: "Листья кружат, словно мысли...", 
      date: "2024",
      fullText: `Листья кружат, словно мысли,
В танце вечной красоты.
Золотистые капризы
Осени и теплоты.

Шепчет ветер между клёнов
О прошедших светлых днях,
И в мелодии влюблённых
Тает грусть в его словах.`
    },
    { 
      title: "Лунная дорожка", 
      excerpt: "В тишине ночной спокойной...", 
      date: "2024",
      fullText: `В тишине ночной спокойной
Льётся лунный серебро,
По воде дорожкой стройной
Тянется оно добро.

Звёзды в небе, как алмазы,
Освещают путь домой.
В этот час волшебной сказки
Сердце наполняется тишиной.`
    },
    { 
      title: "Первый снег", 
      excerpt: "Белым покрывалом землю...", 
      date: "2023",
      fullText: `Белым покрывалом землю
Укрывает первый снег.
Чистота, как в душу семя,
Падает на каждый след.

Мир становится иным,
Тише, светлее, добрей.
В этом белизне любимой
Скрыта тайна зимних дней.`
    }
  ];

  const music = [
    { title: "Melody of Dreams", type: "Инструментальная", duration: "3:42", src: "#" },
    { title: "Forest Whispers", type: "Ambient", duration: "4:15", src: "#" },
    { title: "Morning Coffee", type: "Акустика", duration: "2:58", src: "#" }
  ];

  const songs = [
    { title: "Твоя весна", genre: "Поп", year: "2024" },
    { title: "Звёзды над городом", genre: "Инди", year: "2023" },
    { title: "Дождливый день", genre: "Фолк", year: "2024" }
  ];

  const photos = [
    { title: "Закат в горах", category: "Природа", likes: 42, src: "/img/78501a7f-b078-4f89-b682-1e9502144029.jpg" },
    { title: "Уличная жизнь", category: "Стрит", likes: 28, src: "/img/df030e88-dbfe-484a-be5d-914911ef0b88.jpg" },
    { title: "Портрет незнакомки", category: "Портрет", likes: 56, src: "/img/b2ab15e8-c96f-4a80-abb8-181809680cdb.jpg" }
  ];

  const [clips, setClips] = useState([
    { 
      id: 1, 
      title: "Осенняя меланхолия", 
      description: "Музыкальный клип о красоте осенних дней",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "/img/b2ab15e8-c96f-4a80-abb8-181809680cdb.jpg",
      views: 1420,
      likes: 89,
      duration: "3:24",
      uploadDate: "2024-01-15"
    },
    { 
      id: 2, 
      title: "Лисьи проделки", 
      description: "Веселый клип о повседневной жизни",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "/img/df030e88-dbfe-484a-be5d-914911ef0b88.jpg",
      views: 956,
      likes: 67,
      duration: "2:18",
      uploadDate: "2024-02-03"
    },
    { 
      id: 3, 
      title: "Зимние грезы", 
      description: "Атмосферный клип под снежным покрывалом",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "/img/78501a7f-b078-4f89-b682-1e9502144029.jpg",
      views: 2341,
      likes: 156,
      duration: "4:02",
      uploadDate: "2023-12-20"
    }
  ]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const playTrack = (index: number) => {
    setCurrentTrack(index);
    setIsPlaying(true);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const updateTime = () => setCurrentTime(audio.currentTime);
      const updateDuration = () => setDuration(audio.duration);
      
      audio.addEventListener('timeupdate', updateTime);
      audio.addEventListener('loadedmetadata', updateDuration);
      
      return () => {
        audio.removeEventListener('timeupdate', updateTime);
        audio.removeEventListener('loadedmetadata', updateDuration);
      };
    }
  }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

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
    <div className="min-h-screen py-12 px-4">
      {/* Header */}
      <div className="text-center mb-16 animate-fade-in">
        <div className="flex justify-center mb-6">
          <img 
            src="https://cdn.poehali.dev/files/4fe93c0f-0325-4b45-b384-ca9811ec2c8c.jpg"
            alt="Lisulifka Logo"
            className="w-32 h-32 rounded-full shadow-2xl animate-float"
          />
        </div>
        <h1 className="rune-title text-fox-earth mb-4">ᚳᛋᛈⰓᛋ ᚢᚹᛟᚦᛊᚳᛕᛋ</h1>
        <p className="creative-text text-2xl text-fox-orange mb-8">Творческое пространство души</p>
        <div className="w-32 h-1 bg-gradient-to-r from-fox-orange to-fox-teal mx-auto rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Hero Image */}
        <div className="relative overflow-hidden rounded-3xl shadow-2xl animate-scale-in mb-12">
          <img 
            src="https://cdn.poehali.dev/files/a147dfee-0d3c-44ad-8a15-232874b5ceaa.jpg" 
            alt="Fox Burrow Creative Space" 
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-fox-earth/60 to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="creative-text text-3xl font-bold">Добро пожаловать в мою нору!</h2>
          </div>
        </div>

        {/* Main Story Section */}
        <div className="fox-hole-bg p-8 rounded-3xl mb-16 animate-fade-in">
          <div className="text-center mb-6">
            <h2 className="creative-text text-3xl font-bold text-fox-earth mb-4">
              ℿ ℘ Ϟ ɞ ɛ Ꮏ ɕ Ꮏ ɞ γ ю   ɞ ɑ ɕ ,   ϫ σ ℘ σ ɾ Ϟ ɛ   ϫ ℘ γ ʓ ƅ ᴙ ,   ϰ ɑ   w e b s i t e
            </h2>
            <h3 className="creative-text text-2xl text-fox-orange mb-8">
              « Ꮑ Ϟ ɕ ƅ Ϟ   π ℘ σ ϫ ɛ λ κ Ϟ »
            </h3>
          </div>
          <div className="creative-text text-lg text-fox-earth leading-relaxed space-y-4 max-w-4xl mx-auto">
            <p>꧁ℨዘᏘk০ᗰѢτℯ⊂Ѣ, ለu⊂ɣᏁя — ρӸҗᏘя ০ℨ০ρዘuųᏘ ⊂ ᗰuᏁӸᗰ, ዘ০ ᗷℯ⊂ѢᗰᏘ ᗷρℯ∂ዘӸᗰ χᏘρᏘkτℯρ০ᗰ.</p>
            <p>ОዘᏘ Ꮑਠbuτ ⊂০ԿuዘяτѢ ກℯ⊂ዘu, ກu⊂ᏘτѢ ⊂τuχu u ρu⊂০ᗷᏘτѢ kᏘρτuዘӸ.</p>
            <p>ለu⊂ɣᏁя ԿᏘ⊂τℯዘѢk০ ⊂⊂০ρuτ⊂я ⊂ ∂ρɣℨѢяᗰu, ዘ০ ກρuᗰℯρяℯτ⊂я ⊂ ᗷρᏘ୮Ꮨᗰu.</p>
            <p>℈τᏘ ɣ∂uᗷuτℯᏁѢዘᏘя ∂ℯᗷɣಎkᏘ ዘuk০୮∂Ꮨ ዘℯ ɣዘӸᗷᏘℯτ.</p>
            <p className="text-fox-teal font-semibold">ОዘᏘ ዘ০⊂uτ "ρ০ℨ០ᗷӸℯ ০Կku" ᗷℯρuτ ᗷ Ꮑਠ∂ℯú u ᗷ ⊂kᏘℨku꧂</p>
          </div>
        </div>

        {/* Poems Section with Spherical Modals */}
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

        {/* Music Section with Audio Player */}
        <section className="animate-fade-in">
          <div className="flex items-center mb-8">
            <Icon name="Music" className="text-fox-teal mr-3" size={32} />
            <h2 className="creative-text text-4xl font-bold text-fox-earth">Моя музыка</h2>
          </div>
          <div className="fox-hole-bg p-8 rounded-3xl">
            <img 
              src="/img/df030e88-dbfe-484a-be5d-914911ef0b88.jpg" 
              alt="Music Studio" 
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            
            {/* Audio Player */}
            <div className="bg-white/60 rounded-2xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-semibold text-fox-earth">{music[currentTrack]?.title}</h4>
                  <p className="text-fox-earth/70 text-sm">{music[currentTrack]?.type}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Volume2" className="text-fox-teal" size={20} />
                  <Slider 
                    value={[volume]} 
                    onValueChange={(value) => setVolume(value[0])}
                    max={100}
                    className="w-20"
                  />
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="mb-4">
                <Slider 
                  value={[currentTime]} 
                  max={duration || 100}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-fox-earth/70 mt-1">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>
              
              {/* Controls */}
              <div className="flex items-center justify-center space-x-4">
                <Button variant="ghost" size="sm" onClick={() => playTrack(Math.max(0, currentTrack - 1))}>
                  <Icon name="SkipBack" size={20} />
                </Button>
                <Button onClick={togglePlayPause} className="bg-fox-teal hover:bg-fox-teal/80 rounded-full w-12 h-12">
                  <Icon name={isPlaying ? "Pause" : "Play"} size={24} />
                </Button>
                <Button variant="ghost" size="sm" onClick={() => playTrack(Math.min(music.length - 1, currentTrack + 1))}>
                  <Icon name="SkipForward" size={20} />
                </Button>
              </div>
            </div>

            {/* Track List */}
            <div className="space-y-3">
              {music.map((track, index) => (
                <div 
                  key={index} 
                  className={`flex items-center justify-between p-4 rounded-xl transition-colors cursor-pointer ${
                    index === currentTrack ? 'bg-fox-teal/30' : 'bg-white/30 hover:bg-white/50'
                  }`}
                  onClick={() => playTrack(index)}
                >
                  <div className="flex items-center space-x-4">
                    <Icon name={index === currentTrack && isPlaying ? "Pause" : "Play"} className="text-fox-teal" size={20} />
                    <div>
                      <h4 className={`font-semibold ${index === currentTrack ? 'text-fox-teal' : 'text-fox-earth'}`}>{track.title}</h4>
                      <p className="text-fox-earth/70 text-sm">{track.type}</p>
                    </div>
                  </div>
                  <span className="text-fox-orange creative-text font-semibold">{track.duration}</span>
                </div>
              ))}
            </div>
            
            <audio ref={audioRef} className="hidden">
              <source src={music[currentTrack]?.src} type="audio/mpeg" />
            </audio>
          </div>
        </section>

        {/* Songs Section */}
        <section className="animate-fade-in">
          <div className="flex items-center mb-8">
            <Icon name="Mic" className="text-fox-warm mr-3" size={32} />
            <h2 className="creative-text text-4xl font-bold text-fox-earth">Мои песни</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {songs.map((song, index) => (
              <Card key={index} className="fox-hole-bg p-6 hover:scale-105 transition-all duration-300">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Icon name="Music2" className="text-fox-warm" size={24} />
                    <span className="text-fox-earth/70 text-sm">{song.year}</span>
                  </div>
                  <h3 className="creative-text text-xl font-semibold text-fox-earth">{song.title}</h3>
                  <span className="inline-block px-3 py-1 bg-fox-warm/20 text-fox-earth rounded-full text-sm">
                    {song.genre}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Video Clips Section */}
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

        {/* Interactive Photo Gallery */}
        <section className="animate-fade-in">
          <div className="flex items-center mb-8">
            <Icon name="Camera" className="text-fox-lavender mr-3" size={32} />
            <h2 className="creative-text text-4xl font-bold text-fox-earth">Мои фото</h2>
          </div>
          <div className="fox-hole-bg p-8 rounded-3xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {photos.map((photo, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <div className="relative group cursor-pointer overflow-hidden rounded-xl">
                      <img 
                        src={photo.src} 
                        alt={photo.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 text-white">
                          <h4 className="font-semibold">{photo.title}</h4>
                          <p className="text-sm opacity-90">{photo.category}</p>
                        </div>
                        <div className="absolute top-4 right-4 flex items-center space-x-1 text-white">
                          <Icon name="Heart" size={16} />
                          <span className="text-sm">{photo.likes}</span>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <DialogHeader>
                      <DialogTitle className="creative-text text-2xl text-fox-earth">
                        {photo.title}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <img 
                        src={photo.src} 
                        alt={photo.title}
                        className="w-full max-h-96 object-contain rounded-xl"
                      />
                      <div className="flex justify-between items-center">
                        <span className="inline-block px-3 py-1 bg-fox-lavender/30 text-fox-earth rounded text-sm">
                          {photo.category}
                        </span>
                        <div className="flex items-center space-x-2">
                          <Icon name="Heart" className="text-fox-orange" size={20} />
                          <span className="text-fox-earth">{photo.likes} лайков</span>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section className="animate-fade-in">
          <div className="text-center mb-8">
            <h2 className="creative-text text-3xl font-bold text-fox-earth mb-8">Найти меня</h2>
            <div className="flex justify-center space-x-8">
              <a 
                href="https://t.me/lisiprodelki" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 fox-hole-bg p-4 rounded-2xl hover:scale-105 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-fox-teal flex items-center justify-center group-hover:animate-pulse-glow">
                  <Icon name="Send" className="text-white" size={24} />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-fox-earth">Telegram</h3>
                  <p className="text-fox-earth/70 text-sm">@lisiprodelki</p>
                </div>
              </a>
              
              <a 
                href="https://youtube.com/@lisuli4ka" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 fox-hole-bg p-4 rounded-2xl hover:scale-105 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-fox-orange flex items-center justify-center group-hover:animate-pulse-glow">
                  <Icon name="Play" className="text-white" size={24} />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-fox-earth">YouTube</h3>
                  <p className="text-fox-earth/70 text-sm">@lisuli4ka</p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 animate-fade-in">
          <div className="w-24 h-1 bg-gradient-to-r from-fox-orange to-fox-teal mx-auto rounded-full mb-4"></div>
          <p className="creative-text text-fox-earth/70">
            Создано с любовью в уютной лисьей норе 🦊
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;