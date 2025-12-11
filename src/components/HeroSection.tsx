import manifestoCover from "@/assets/manifesto-cover.png";

const HeroSection = () => {
  return (
    <div className="relative h-full w-full overflow-hidden animate-slide-in-right">
      {/* Cover Image */}
      <img
        src={manifestoCover}
        alt="National Youth Manifesto 2025 - 1st Edition Cover featuring Kenyan youth leaders"
        className="h-full w-full object-cover object-center"
      />
      
      {/* Subtle Overlay for text legibility if needed */}
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-kenya-black/10" />
    </div>
  );
};

export default HeroSection;
