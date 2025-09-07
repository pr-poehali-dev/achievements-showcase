import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface Song {
  title: string;
  genre: string;
  year: string;
}

interface SongsSectionProps {
  songs: Song[];
}

const SongsSection = ({ songs }: SongsSectionProps) => {
  return (
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
  );
};

export default SongsSection;