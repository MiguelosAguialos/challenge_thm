import Header from "~/components/header";
import HeroSection from "~/components/herosection";
import Voluntario from "../images/voluntario.png";
import RotasAbrigo from "../images/rotas_abrigo.png";

export default function Previsao() {
  const data = [
    {
      title: "Abrigo Municipal Esperança",
      rua: "📍 Rua das Flores, 123 – Zona Leste – SP",
      capacidade: "👥 Capacidade: 80 pessoas",
    },
    {
      title: "Centro Comunitário São Miguel",
      rua: "📍 Av. Brasil, 456 – Zona Sul – SP",
      capacidade: "👥 Capacidade: 120 pessoas",
    },
    {
      title: "Escola Estadual Monte Azul",
      rua: "📍 Rua da União, 789 – Zona Norte – SP",
      capacidade: "👥 Capacidade: 60 pessoas",
    },
    {
      title: "Igreja Santa Luzia (Espaço Solidário)",
      rua: "📍 Rua Esperança, 321 – Zona Oeste – SP",
      capacidade: "👥 Capacidade: 100 pessoas",
    },
  ];

  return (
    <>
      <Header />
      <HeroSection />
      <div className="w-full flex justify-center items-center flex-col text-center">
        <h1 className="max-md:text-2xl md:text-4xl font-bold">
          COMO AGIR EM CASO DE ENCHENTE!
        </h1>
        <div className="rounded-md bg-red-300 w-[60%] mt-4 p-2">
          <h1 className="max-md:text-1xl md:text-2xl font-bold">
            Antes da Enchente
          </h1>
          <p className="text-left">
            Preparar-se para uma enchente é crucial para garantir a segurança de
            todos. Primeiro, faça um plano de emergência, identificando rotas de
            evacuação e pontos de encontro seguros. Certifique-se de que todos
            os membros da família conheçam o plano.
            <br />
            <br /> Prepare sua casa elevando móveis e eletrodomésticos,
            desligando aparelhos elétricos e protegendo documentos importantes
            em sacos plásticos impermeáveis. Monte um kit de emergência com água
            potável, alimentos não perecíveis, medicamentos, lanternas, pilhas,
            roupas extras, itens de higiene pessoal, cópias de documentos
            importantes e dinheiro em espécie. Inclua também itens básicos de
            primeiros socorros.
            <br />
            <br /> Monitore as condições meteorológicas e esteja pronto para
            evacuar se necessário. Armazene água potável suficiente e evite
            consumir água de fontes possivelmente contaminadas, fervendo-a ou
            usando hipoclorito de sódio (2,5%) para desinfetar.
            <br />
            <br /> Mantenha-se informado utilizando rádios a pilha e tenha uma
            lista de contatos de emergência. Seguindo essas instruções, você
            estará mais preparado para enfrentar uma enchente e proteger sua
            família. A prevenção e a preparação são fundamentais para minimizar
            riscos e danos.
          </p>
        </div>
        <div className="rounded-md bg-red-300 w-[60%] mt-4 p-2">
          <h1 className="max-md:text-1xl md:text-2xl font-bold">
            Durante a Enchente
          </h1>
          <p className="text-left">
            Durante uma enchente, é crucial agir rapidamente para garantir a
            segurança. Mantenha a calma e siga o plano de emergência. Se estiver
            em uma área de risco, evacue imediatamente para um local seguro,
            seguindo as rotas planejadas.
            <br />
            <br /> Desconecte aparelhos elétricos e desligue a energia da casa
            para evitar choques. Mova móveis e objetos de valor para locais
            elevados. Mantenha-se informado através de rádios a pilha e siga as
            instruções das autoridades locais.
            <br />
            <br /> Evite caminhar, nadar ou dirigir em áreas alagadas, pois a
            água pode estar contaminada e esconder perigos. Se estiver em um
            veículo, não tente atravessar áreas alagadas; abandone o veículo e
            procure um local seguro.
            <br />
            <br /> Tenha seu kit de emergência à mão, incluindo água potável,
            alimentos não perecíveis, medicamentos, lanternas, pilhas e itens de
            primeiros socorros. Mantenha documentos importantes em sacos
            plásticos impermeáveis.
            <br />
            <br /> Se a água começar a subir, vá para o ponto mais alto da casa
            e sinalize para pedir ajuda. Evite contato com a água da enchente,
            pois pode estar contaminada. Mantenha contato com familiares e
            amigos para informar sua situação e localização.
            <br />
            <br /> Seguindo essas instruções, você pode proteger a si mesmo e
            sua família durante uma enchente. A segurança deve ser sempre a
            prioridade máxima.
          </p>
        </div>
        <div className="rounded-md bg-red-300 w-[60%] mt-4 p-2">
          <h1 className="max-md:text-1xl md:text-2xl font-bold">
            Após a Enchente
          </h1>
          <p className="text-left">
            Após uma enchente, é crucial tomar medidas para garantir a segurança
            e a saúde de todos. Primeiramente, só retorne para casa quando as
            autoridades locais confirmarem que é seguro. Ao entrar, use botas e
            luvas para evitar contato direto com a água contaminada e lama.
            <br />
            <br /> Verifique se há danos estruturais na casa antes de entrar. Se
            houver risco de desabamento, não entre e chame um profissional.
            Desligue a energia elétrica e só religue após garantir que todas as
            instalações elétricas estejam secas e seguras. Consulte um
            eletricista se necessário.
            <br />
            <br /> Evite caminhar, nadar ou dirigir em áreas alagadas, pois a
            água pode estar contaminada e esconder perigos. Se estiver em um
            veículo, não tente atravessar áreas alagadas; abandone o veículo e
            procure um local seguro.
            <br />
            <br /> Limpe e desinfete todas as superfícies que entraram em
            contato com a água da enchente. Use hipoclorito de sódio (2,5%) para
            desinfetar e siga as instruções do produto. Jogue fora alimentos e
            medicamentos que tiveram contato com a água contaminada.
            <br />
            <br />
            Documente todos os danos tirando fotos e vídeos para facilitar a
            solicitação de ajuda e seguros. Procure assistência do governo ou de
            organizações sociais se necessário.
            <br />
            <br /> Seguindo essas orientações, você poderá minimizar os riscos à
            saúde e segurança após uma enchente.
          </p>
        </div>
        <section className="mt-8 flex flex-col w-[60%] p-4 items-center">
          <h1 className="max-md:text-1xl md:text-2xl font-bold">
            REPORTAR ALAGAMENTO / INCIDENTE
          </h1>
          <input
            className="border-gray-300 border-2 rounded-sm mt-4 h-12 w-[60%] p-2"
            type="text"
            placeholder="Tipo de Incidente"
          />
          <input
            className="border-gray-300 border-2 rounded-sm mt-4 h-12 w-[60%] p-2"
            type="text"
            placeholder="Localização (CEP ou Rua ou Avenida...)"
          />
          <input
            type="text"
            className="h-52 text-top border-gray-300 border-2 rounded-sm mt-4 w-[60%] p-2"
            placeholder="Descrição..."
          />
          <button className="w-[30%] rounded-md mt-4 h-8 bg-red-200 font-bold cursor-pointer">
            Enviar
          </button>
        </section>
        <section
          className="mt-8 flex flex-col w-[60%] p-4 items-center"
          id="#quero-ajudar"
        >
          <h1 className="max-md:text-1xl md:text-2xl font-bold">
            QUERO AJUDAR!
          </h1>
          <img src={Voluntario} className="mt-4 rounded-md" alt="" />
          <p className="md:text-lg mt-2">
            Você pode fazer a diferença. Em momentos de enchente, toda ajuda
            conta — seja com tempo, com doações ou com solidariedade. Aqui você
            encontra formas de contribuir com quem mais precisa.
          </p>
          <section className="mt-4 flex flex-col w-full p-4 items-center">
            <h1 className="max-md:text-1xl md:text-2xl font-bold">
              CADASTRE-SE COMO VOLUNTÁRIO!
            </h1>
            <input
              className="border-gray-300 border-2 rounded-sm mt-4 h-12 w-[60%] p-2"
              type="text"
              placeholder="Nome Completo"
            />
            <input
              className="border-gray-300 border-2 rounded-sm mt-4 h-12 w-[60%] p-2"
              type="text"
              placeholder="E-mail"
            />
            <input
              className="border-gray-300 border-2 rounded-sm mt-4 h-12 w-[60%] p-2"
              type="text"
              placeholder="Telefone (WhatsApp)"
            />
            <input
              className="border-gray-300 border-2 rounded-sm mt-4 h-12 w-[60%] p-2"
              type="text"
              placeholder="Endereço"
            />
            <button className="w-[30%] rounded-md mt-4 h-8 bg-red-200 font-bold cursor-pointer">
              Enviar
            </button>
          </section>
        </section>
        <section
          className="mt-2 flex flex-col w-[60%] p-4 items-center mb-4"
          id="#rotas-fuga"
        >
          <h1 className="max-md:text-1xl md:text-2xl font-bold">
            QUERO AJUDAR!
          </h1>
          <input
            type="text"
            placeholder="Buscar Cidade..."
            className="border-2 border-gray-300 w-[80%] p-2 rounded-md mt-2"
          />
          <p className="md:text-lg mt-2">
            Siga o caminho em vermelho para chegar em algum abrigo/lugar seguro
          </p>
          <img src={RotasAbrigo} className="mt-4 rounded-md" alt="" />
          <p className="md:text-lg mt-2 font-bold">
            🏠 Abrigos Mais Próximos Disponíveis:
          </p>
          <div className="mt-4 grid grid-cols-2 gap-4">
            {data.map((item) => (
              <div className="flex flex-col items-center text-left bg-gray-50 p-4 rounded-lg">
                <h1 className="md:text-lg font-bold m-2">{item.title}</h1>
                <p className="md:text-1xl m-2 w-full">{item.rua}</p>
                <p className="md:text-1xl m-2 w-full">{item.capacidade}</p>
                <button className="bg-red-200 rounded-md h-8 w-50 mt-2 font-bold cursor-pointer">
                  Ver Abrigo
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
