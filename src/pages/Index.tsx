import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import PoemsSection from "@/components/PoemsSection";
import MusicSection from "@/components/MusicSection";
import SongsSection from "@/components/SongsSection";
import VideoSection from "@/components/VideoSection";
import PhotoGallery from "@/components/PhotoGallery";
import SocialLinks from "@/components/SocialLinks";

const Index = () => {
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

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        <HeroSection />
        <PoemsSection poems={poems} />
        <MusicSection music={music} />
        <SongsSection songs={songs} />
        <VideoSection clips={clips} setClips={setClips} />
        <PhotoGallery photos={photos} />
        <SocialLinks />
        
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