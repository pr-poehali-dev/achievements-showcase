import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

interface Photo {
  title: string;
  category: string;
  likes: number;
  src: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
}

const PhotoGallery = ({ photos }: PhotoGalleryProps) => {
  return (
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
  );
};

export default PhotoGallery;