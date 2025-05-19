export default function MainContent() {
    return (
        <main className="relative mb-10 z-10 px-8 pt-12">
            <section className="max-w-6xl mx-auto bg-white/80 p-6 rounded-2xl shadow-md flex flex-col md:flex-row gap-4" style={{ backgroundColor: "#A3000017" }}>
                {/* TEXTO À ESQUERDA */}
                <div className="flex-1 space-y-4">
                    <p className="text-sm text-black text-left">
                        O SOS Enchentes SP é uma plataforma dedicada a fornecer informações essenciais e atualizadas sobre enchentes na cidade
                        de São Paulo. Nosso objetivo é ajudar a população a se preparar, reagir e se recuperar de eventos de enchente, minimizando
                        os impactos e promovendo a segurança de todos.
                    </p>
                    <p className="text-sm text-black text-left">
                        A plataforma oferece um sistema de alerta antecipado inteligente, que informa proativamente cidadãos e
                        autoridades sobre riscos iminentes de enchentes. Isso permite que ações preventivas e de evacuação sejam
                        tomadas com antecedência, reduzindo danos materiais e protegendo vidas. Os alertas são enviados em tempo real,
                        utilizando dados de precipitação, previsão de chuvas intensas e níveis de rios e córregos.
                    </p>
                    <p className="text-sm text-black text-left">
                        A plataforma oferece um sistema de alerta antecipado inteligente, que informa proativamente cidadãos e
                        autoridades sobre riscos iminentes de enchentes. Isso permite que ações preventivas e de evacuação sejam
                        tomadas com antecedência, reduzindo danos materiais e protegendo vidas. Os alertas são enviados em tempo real,
                        utilizando dados de precipitação, previsão de chuvas intensas e níveis de rios e córregos.
                    </p>
                </div>

                {/* VÍDEO À DIREITA */}
                <div className="w-full md:w-1/3 h-60 bg-black rounded-md text-white text-sm flex items-center justify-center">
                    {/* <video src="/meu-video.mp4" autoPlay muted loop className="w-full h-full object-cover rounded-md" /> */}
                    Vídeo aqui
                </div>
            
            </section>
        </main>
    );
}
