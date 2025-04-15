export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center pt-16">
      {/* Video or image background - placeholder for now */}
      <div className="absolute inset-0 bg-black/50 z-0">
        <div className="w-full h-full bg-gradient-to-b from-black/60 to-transparent absolute top-0 left-0 z-10" />
        <div className="w-full h-full absolute inset-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/IMG_1796.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Hero content overlay */}
      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Lorem Ipsum Dolor Sit Amet
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
        </div>
      </div>
    </section>
  );
}
