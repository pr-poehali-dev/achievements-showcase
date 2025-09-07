import Icon from "@/components/ui/icon";

const SocialLinks = () => {
  return (
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
  );
};

export default SocialLinks;