interface HeroSectionProps {
  // No props needed for now
}

const HeroSection = ({}: HeroSectionProps) => {
  return (
    <>
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
          <p>꧁ℨዘᏘk০ᗰѢτℯ⊂Ѣ, ለu⊂ɣᏁя — ρӸҗᏘя ০ℨ០ρዘuųᏘ ⊂ ᗰuᏁӸᗰ, ዘ০ ᗷℯ⊂ѢᗰᏘ ᗷρℯ∂ዘӸᗰ χᏘρᏘkτℯρ០ᗰ.</p>
          <p>ОዘᏘ Ꮑਠbuτ ⊂০ԿuዘяτѢ ກℯ⊂ዘu, ກu⊂ᏘτѢ ⊂τuχu u ρu⊂০ᗷᏘτѢ kᏘρτuዘӸ.</p>
          <p>ለu⊂ɣᏁя ԿᏘ⊂τℯዘѢk០ ⊂⊂០ρuτ⊂я ⊂ ∂ρɣℨѢяᗰu, ዘ০ ກρuᗰℯρяℯτ⊂я ⊂ ᗷρᏘ୮Ꮨᗰu.</p>
          <p>℈τᏘ ɣ∂uᗷuτℯᏁѢዘᏘя ∂ℯᗷɣಎkᏘ ዘuk០୮∂Ꮨ ዘℯ ɣዘӸᗷᏘℯτ.</p>
          <p className="text-fox-teal font-semibold">ОዘᏘ ዘ০⊂uτ "ρ০ℨ០ᗷӸℯ ০Կku" ᗷℯρuτ ᗷ Ꮑਠ∂ℯú u ᗷ ⊂kᏘℨku꧂</p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;