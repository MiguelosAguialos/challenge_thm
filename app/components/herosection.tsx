export default function HeroSection() {
  return (
    <section className="w-full h-[200px] mt-[126px] p-6">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full rounded-2xl object-cover"
      >
        <source src="/videos/opcao01-HERO-SECTION.mp4" type="video/mp4" />
        Seu navegador não suporta vídeo.
      </video>
    </section>
  );
}
