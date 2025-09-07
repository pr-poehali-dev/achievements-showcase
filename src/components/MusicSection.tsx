import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";
import { useState, useRef, useEffect } from "react";

interface Track {
  title: string;
  type: string;
  duration: string;
  src: string;
}

interface MusicSectionProps {
  music: Track[];
}

const MusicSection = ({ music }: MusicSectionProps) => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(70);
  const audioRef = useRef<HTMLAudioElement>(null);

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
  );
};

export default MusicSection;