import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";
import { useState, useRef, useEffect } from "react";

const Index = () => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(70);
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

  return (
    <div className="min-h-screen py-12 px-4">
      {/* Header */}
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="rune-title text-fox-earth mb-4">ᚳᛋᛈⰓᛋ ᚢᚹᛟᚦᛊᚳᛕᛋ</h1>
        <p className="creative-text text-2xl text-fox-orange mb-8">Творческое пространство души</p>
        <div className="w-32 h-1 bg-gradient-to-r from-fox-orange to-fox-teal mx-auto rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Hero Image */}
        <div className="relative overflow-hidden rounded-3xl shadow-2xl animate-scale-in">
          <img 
            src="/img/78501a7f-b078-4f89-b682-1e9502144029.jpg" 
            alt="Fox Burrow Creative Space" 
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-fox-earth/60 to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="creative-text text-3xl font-bold">Добро пожаловать в мою нору!</h2>
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