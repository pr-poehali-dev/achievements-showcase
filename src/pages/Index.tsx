import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const poems = [
    { title: "Осенний лес", excerpt: "Листья кружат, словно мысли...", date: "2024" },
    { title: "Лунная дорожка", excerpt: "В тишине ночной спокойной...", date: "2024" },
    { title: "Первый снег", excerpt: "Белым покрывалом землю...", date: "2023" }
  ];

  const music = [
    { title: "Melody of Dreams", type: "Инструментальная", duration: "3:42" },
    { title: "Forest Whispers", type: "Ambient", duration: "4:15" },
    { title: "Morning Coffee", type: "Акустика", duration: "2:58" }
  ];

  const songs = [
    { title: "Твоя весна", genre: "Поп", year: "2024" },
    { title: "Звёзды над городом", genre: "Инди", year: "2023" },
    { title: "Дождливый день", genre: "Фолк", year: "2024" }
  ];

  const photos = [
    { title: "Закат в горах", category: "Природа", likes: 42 },
    { title: "Уличная жизнь", category: "Стрит", likes: 28 },
    { title: "Портрет незнакомки", category: "Портрет", likes: 56 }
  ];

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

        {/* Poems Section */}
        <section className="animate-fade-in">
          <div className="flex items-center mb-8">
            <Icon name="BookOpen" className="text-fox-orange mr-3" size={32} />
            <h2 className="creative-text text-4xl font-bold text-fox-earth">Мои стихи</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {poems.map((poem, index) => (
              <Card key={index} className="fox-hole-bg p-6 hover:scale-105 transition-all duration-300 animate-float" 
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
            ))}
          </div>
        </section>

        {/* Music Section */}
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
            <div className="space-y-4">
              {music.map((track, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white/50 rounded-xl hover:bg-white/70 transition-colors">
                  <div className="flex items-center space-x-4">
                    <Icon name="Play" className="text-fox-teal" size={24} />
                    <div>
                      <h4 className="font-semibold text-fox-earth">{track.title}</h4>
                      <p className="text-fox-earth/70 text-sm">{track.type}</p>
                    </div>
                  </div>
                  <span className="text-fox-orange creative-text font-semibold">{track.duration}</span>
                </div>
              ))}
            </div>
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

        {/* Photos Section */}
        <section className="animate-fade-in">
          <div className="flex items-center mb-8">
            <Icon name="Camera" className="text-fox-lavender mr-3" size={32} />
            <h2 className="creative-text text-4xl font-bold text-fox-earth">Мои фото</h2>
          </div>
          <div className="fox-hole-bg p-8 rounded-3xl">
            <img 
              src="/img/b2ab15e8-c96f-4a80-abb8-181809680cdb.jpg" 
              alt="Photography Collection" 
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {photos.map((photo, index) => (
                <div key={index} className="bg-white/50 p-4 rounded-xl hover:bg-white/70 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-fox-earth">{photo.title}</h4>
                    <div className="flex items-center space-x-1">
                      <Icon name="Heart" className="text-fox-orange" size={16} />
                      <span className="text-fox-earth text-sm">{photo.likes}</span>
                    </div>
                  </div>
                  <span className="inline-block px-2 py-1 bg-fox-lavender/30 text-fox-earth rounded text-xs">
                    {photo.category}
                  </span>
                </div>
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