import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, MapPin, ThumbsUp, Heart, PenTool, Shield, Clock, Sparkles, ArrowRight, AlertTriangle, FileText, Users, Star, Gift, Zap } from 'lucide-react';
import { useForm } from '../components/FormContext';

const faqs = [
  {
    "question": "Como funciona o Desenho e Leitura da Alma Gêmea?",
    "answer": "Os esboços são criados a partir de leituras intuitivas de energia. Eu me conecto com as energias e vibrações associadas a você no momento da solicitação, o que me guia na visualização e desenho de uma possível representação da sua alma gêmea. É uma combinação de intuição, percepção espiritual e expressão artística. Para alguns, esses esboços são uma exploração divertida e intrigante de possibilidades; para outros, podem ter um significado mais profundo. De qualquer forma, a experiência é projetada para ser positiva e edificante."
  },
  {
    "question": "Qual é o preço de um desenho?",
    "answer": "Devido à qualidade do meu trabalho, normalmente cobro R$99,90. No entanto, devido ao grande interesse nos meus serviços, atualmente estou cobrando €39,90."
  },
  {
    "question": "Por que eu deveria confiar em você se sou cético(a)?",
    "answer": "Sou Isadora Lys, uma sensitiva que desenvolveu um dom único desde a infância. Cresci em uma família com profundas raízes em práticas espirituais e psíquicas e passei anos aperfeiçoando minhas habilidades. Não apenas desenho; eu me conecto com energias e emoções em um nível que não é visível aos olhos, permitindo-me criar uma representação da sua alma gêmea, tanto na forma física quanto na essência do ser."
  },
  {
    "question": "Ainda posso encontrar minha alma gêmea, mesmo se já for mais velho(a)?",
    "answer": "Absolutamente. O amor e a conexão não conhecem limites de idade. A idade traz sabedoria, profundidade e um rico repertório de experiências, qualidades que podem atrair uma alma gêmea. Nunca é tarde demais para o amor entrar na sua vida!"
  },
  {
    "question": "Em quanto tempo receberei meu desenho e leitura?",
    "answer": "Seu desenho e leitura serão enviados por e-mail dentro de 10 horas. Em raras ocasiões, quando a demanda é alta, a entrega pode levar até 24 horas. Também existe a opção de entrega rápida em menos tempo, disponível por um custo adicional."
  },
  {
    "question": "O que está incluído no meu desenho?",
    "answer": "Além do desenho da sua alma gêmea, incluo um arquivo intitulado \"Como atrair sua alma gêmea mais rápido\", que contém insights espirituais e práticos valiosos. Você também pode optar por receber uma descrição detalhada das características e qualidades da sua alma gêmea para ajudá-lo(a) a reconhecê-la no momento certo. Essa opção adicional pode ser selecionada na página de pagamento e requer um pagamento extra."
  },
  {
    "question": "Vou reconhecer minha alma gêmea a partir do desenho?",
    "answer": "Muitas pessoas descobriram que o desenho se assemelha a alguém que já conhecem, como um parceiro atual, alguém que admiram ou por quem têm sentimentos."
  },
  {
    "question": "Qual é a precisão da leitura?",
    "answer": "Nossas leituras têm uma taxa de precisão surpreendente, com mais de 90% dos clientes relatando uma forte conexão com as características reveladas. A precisão também depende da abertura energética da pessoa que recebe a leitura."
  },
  {
    "question": "Este serviço pode me ajudar se eu tiver mais de 40 anos?",
    "answer": "Com certeza! A idade não é uma barreira para encontrar o amor verdadeiro. Meu serviço já ajudou pessoas de todas as idades, incluindo aquelas com mais de 40 anos."
  },
  {
    "question": "E se eu já tiver conhecido minha alma gêmea no passado?",
    "answer": "O serviço pode ajudá-lo(a) a identificar se alguém do seu passado é, de fato, sua alma gêmea, ou guiá-lo(a) para uma nova conexão, caso esse seja o seu destino."
  },
  {
    "question": "Existe alguma garantia de que encontrarei minha alma gêmea?",
    "answer": "Embora não possamos garantir resultados específicos, nosso serviço fornece insights e orientações valiosas para ajudá-lo(a) na sua jornada em busca do amor verdadeiro."
  },
  {
    "question": "Quanto tempo depois de receber meu esboço posso encontrar minha alma gêmea?",
    "answer": "O tempo varia para cada indivíduo. Alguns clientes encontram sua alma gêmea em semanas, enquanto para outros pode levar mais tempo."
  },
  {
    "question": "Este serviço é apenas para pessoas solteiras?",
    "answer": "Embora seja projetado principalmente para aqueles que buscam sua alma gêmea, os insights fornecidos podem ser valiosos para qualquer pessoa que deseja aprofundar sua compreensão sobre o amor e os relacionamentos."
  },
  {
    "question": "Como posso começar?",
    "answer": "Basta clicar no botão \"Revelar Minha Alma Gêmea\" e seguir os passos para preencher o questionário. Eu o(a) guiarei pelo restante do processo."
  }
];

const OfferPage = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
    const handleFaqClick = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
      };
    const { formData } = useForm();
    const firstName = formData.fullName?.split(' ')[0] || 'Querida';
    const PAYMENT_URL = 'https://pay.kirvano.com/5a3b240a-8be8-44d9-b5a7-91f498d3f38e';

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-900 to-indigo-950 py-16 px-4">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <Sparkles className="w-16 h-16 mx-auto mb-6 text-purple-300" />
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mb-4">
        Você está prestes a conhecer sua alma gêmea!
        </h1>
      </div>

      {/* Warning Alert */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-6 text-center">
          <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
          <p className="text-yellow-300 text-xl font-semibold">
          ATENÇÃO: Você poderá sentir emoções intensas após receber seu desenho.
          </p>
        </div>
      </div>


      {/* Social Proof */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="flex items-center justify-center gap-8 text-center">
          <div>
            <Users className="w-8 h-8 mx-auto mb-2 text-purple-300" />
            <p className="text-2xl font-bold text-white">10,000+</p>
            <p className="text-purple-200">Clientes Satisfeitos</p>
          </div>
          <div>
            <Star className="w-8 h-8 mx-auto mb-2 text-purple-300" />
            <p className="text-2xl font-bold text-white">4.9/5</p>
            <p className="text-purple-200">Classificação média</p>
          </div>
          <div>
            <Heart className="w-8 h-8 mx-auto mb-2 text-purple-300" />
            <p className="text-2xl font-bold text-white">95%</p>
            <p className="text-purple-200">Taxa de precisão</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto space-y-16">
        {/* What You'll Get Section */}
        <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <h2 className="text-3xl font-serif text-center text-white mb-12">
          O que você receberá hoje:
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <PenTool className="w-6 h-6 flex-shrink-0 text-purple-400" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Desenho detalhado e personalizado</h3>
                  <p className="text-purple-200">Um retrato incrivelmente detalhado que captura não apenas a aparência física da sua alma gêmea, mas também sua aura única e essência espiritual.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Zap className="w-6 h-6 flex-shrink-0 text-purple-400" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Leitura de energia profunda</h3>
                  <p className="text-purple-200">Descubra as características únicas, a personalidade e a conexão espiritual da sua alma gêmea por meio de uma leitura intuitiva detalhada.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 flex-shrink-0 text-purple-400" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Entrega expressa em 24 horas</h3>
                  <p className="text-purple-200">Receba seu retrato e leitura em tempo recorde. Cada momento conta quando se trata de amor verdadeiro!</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FileText className="w-6 h-6 flex-shrink-0 text-purple-400" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Guia para manifestar o amor</h3>
                  <p className="text-purple-200">Receba um guia exclusivo com técnicas e rituais para atrair sua alma gêmea mais rapidamente para sua vida.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Gift className="w-6 h-6 flex-shrink-0 text-purple-400" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Bônus exclusivos</h3>
                  <p className="text-purple-200">
                    <span className="text-pink-300">BÔNUS 1:</span> Ritual de conexión espiritual
                    <br />
                    <span className="text-pink-300">BÔNUS 2:</span> Meditação guiada para atrair amor
                    <br />
                    <span className="text-pink-300">BÔNUS 3:</span> Calendário astrológico para o amor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Personalized Button */}
        <div className="text-center">
          <a
            href={PAYMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xl font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-[1.02]"
          >
            <span>{firstName}, su alma gemela está lista para conocerla</span>
            <ArrowRight className="w-6 h-6" />
          </a>
        </div> 

        {/* My Work Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-12">Exemplos do meu trabalho...</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://i.imgur.com/G7sBecU.jpg"
                alt="Exemplo 1"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://i.imgur.com/9YwNBtb.png"
                alt="Exemplo 2"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://i.imgur.com/IsXiQYE.jpg"
                alt="Exemplo 3"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
            <section className="py-16 px-4 bg-white/5 mb-16">
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all">
                    <PenTool className="w-8 h-8 mx-auto mb-4 text-purple-300" />
                    <h3 className="text-xl font-semibold mb-2">Retrato de energia</h3>
                    <p className="text-purple-200">Desenho único baseado em sua energia pessoal e conexão espiritual</p>
                  </div>
                  <div className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all">
                    <Clock className="w-8 h-8 mx-auto mb-4 text-purple-300" />
                    <h3 className="text-xl font-semibold mb-2">Entrega Rápida</h3>
                    <p className="text-purple-200">Seu retrato e análise em até 24 horas após a solicitação</p>
                  </div>
                  <div className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all">
                    <Heart className="w-8 h-8 mx-auto mb-4 text-purple-300" />
                    <h3 className="text-xl font-semibold mb-2">Conexão Profunda</h3>
                    <p className="text-purple-200">Descubra detalhes exclusivos sobre sua conexão destinada</p>
                  </div>
                </div>
              </div>
            </section>

      {/* Personalized Button */}
      <div className="text-center">
          <a
            href={PAYMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xl font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-[1.02]"
          >
            <span>{firstName}, sua alma gêmea está pronta para conhecê-lo</span>
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>

        {/* New Offerings Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
              Se você quer vencer as adversidades e encontrar sua alma gêmea a qualquer custo, eu quero te ajudar.
              </h2>
              <p className="text-xl text-purple-200">
              Através do LUZ DEL AMOR Sketch, você terá uma experiência personalizada inigualável para encontrar sua alma gêmea, que inclui:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Detailed Soulmate Drawing */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                <div className="mb-6">
                  <PenTool className="w-12 h-12 mx-auto text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                Desenho detalhado de alma gêmea
                </h3>
                <img 
                  src="https://i.imgur.com/xB4xd25.png"
                  alt="Retrato Exemplo"
                  className="w-full aspect-square object-cover rounded-lg mb-4"
                />
                <p className="text-purple-200">
                Um retrato meticulosamente desenhado que captura a essência e a aparência da sua alma gêmea, incluindo detalhes únicos e características distintas.
                </p>
              </div>

              {/* 24h Response Time */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                <div className="mb-6">
                  <Clock className="w-12 h-12 mx-auto text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                Tempo de resposta de até 24 horas
                </h3>
                <img 
                  src="https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&q=80"
                  alt="Relógio"
                  className="w-full aspect-square object-cover rounded-lg mb-4"
                />
                <p className="text-purple-200">
                Em apenas 24 horas, você receberá seu retrato, um desenho especial da pessoa com quem você está destinado a ficar. Este esboço ajuda você a identificar seu verdadeiro amor quando você o(a) conhece. É como uma visão do futuro do seu amor, mostrando-lhe o futuro do seu amor real e duradouro.
                </p>
              </div>

              {/* Location Prediction */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                <div className="mb-6">
                  <Sparkles className="w-12 h-12 mx-auto text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                Previsão do local do encontro
                </h3>
                <img 
                  src="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?auto=format&fit=crop&q=80"
                  alt="Local de Encontro"
                  className="w-full aspect-square object-cover rounded-lg mb-4"
                />
                <p className="text-purple-200">
                Além do retrato, você receberá uma descrição detalhada do local onde o destino proporcionará seu encontro, permitindo que você esteja preparado para esse momento especial.
                </p>
              </div>
            </div>
          </div>
        </section>

       {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-12">Histórias de Conexões</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white/5 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all">
              <img
                src="https://i.imgur.com/NMewwQ6.png"
                alt="Depoimento 1"
                className="w-full h-auto rounded-lg mb-4"
              />
            </div>
            <div className="p-6 bg-white/5 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all">
              <img
                src="https://i.imgur.com/3B5oDLj.png"
                alt="Depoimento 2"
                className="w-full h-auto rounded-lg mb-4"
              />
            </div>
            <div className="p-6 bg-white/5 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all">
              <img
                src="https://i.imgur.com/6UZAlvz.png"
                alt="Depoimento 3"
                className="w-full h-auto rounded-lg mb-4"
              />
            </div>
            <div className="p-6 bg-white/5 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all">
              <img
                src="https://i.imgur.com/ed0QMIm.png"
                alt="Depoimento 4"
                className="w-full h-auto rounded-lg mb-4"
              />
            </div>
            
          </div>
        </div>
      </section> 

        {/* Special Offer */}
        <section className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif text-white mb-6">Oferta Especial</h2>
            <div className="mb-6">
              <p className="text-2xl text-purple-200 mb-2">Pacote de Desenho de Alma Gêmea</p>
              <div className="flex items-center justify-center gap-4">
                <span className="text-gray-400 line-through text-2xl">R$99,90</span>
                <span className="text-4xl font-bold text-white">R$39,90</span>
              </div>
            </div>
            <a
              href={PAYMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-md flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-[1.02] mb-6"
            >
              <span>Revele minha alma gêmea agora</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <div className="flex items-center justify-center gap-2 text-purple-300">
              <Shield className="w-5 h-5" />
              <span>Garantia de satisfação de 7 dias ou seu dinheiro de volta</span>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <p className="text-purple-200 text-lg italic mb-4">
              "Estou completamente encantada com o desenho colorido e a descrição detalhada do meu futuro parceiro que recebi da vidente Isadora. No momento em que vi o desenho, soube que era uma representação precisa do homem com quem eu deveria ficar. A atenção aos detalhes é incrível."
            </p>
            <div className="flex items-center gap-4">
              <img
                src="https://i.imgur.com/WWnKs4v.png"
                alt="Cliente"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-400"
              />
              <div>
                <h4 className="font-semibold text-white">Beatriz Ferreira</h4>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <p className="text-purple-200 text-lg italic mb-4">
              "Gente, o desenho da minha alma gêmea ficou idêntico! Só achei que ele poderia ser um pouco mais bonito, mas valeu cada centavo."
            </p>
            <div className="flex items-center gap-4">
              <img
                src="https://i.imgur.com/DMQxbG1.png"
                alt="Cliente"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-400"
              />
              <div>
                <h4 className="font-semibold text-white">Teresa Almeida</h4>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <p className="text-purple-200 text-lg italic mb-4">
              "A experiência foi incrível! Ela cuidou muito bem dos detalhes, ele é super romântico, bonito e alto."
            </p>
            <div className="flex items-center gap-4">
              <img
                src="https://i.imgur.com/09qTYPs.png"
                alt="Cliente"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-400"
              />
              <div>
                <h4 className="font-semibold text-white">Carmen Fernández</h4>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <p className="text-purple-200 text-lg italic mb-4">
              "Comprei o retrato da Isadora, e ela prometeu que eu encontraria minha alma gêmea em até 30 dias. Que mentira! Em apenas DUAS SEMANAS, já encontrei o amor da minha vida. Meu único arrependimento foi não ter feito isso antes."
            </p>
            <div className="flex items-center gap-4">
              <img
                src="https://i.imgur.com/PwaZB2c.png"
                alt="Cliente"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-400"
              />
              <div>
                <h4 className="font-semibold text-white">Elena García</h4>
              </div>
            </div>
          </div>
        </section>

       {/* Detailed Description Section */}
       <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Detailed Description */}
            <div className="text-center space-y-4">
              <FileText className="w-12 h-12 mx-auto text-purple-400" />
              <h3 className="text-xl font-semibold text-white">DESCRIÇÃO DETALHADA</h3>
              <span className="text-red-400 text-sm font-normal">[Adição recomendada]</span>
              <p className="text-purple-200">
              Fornecerei uma descrição detalhada de sua futura alma gêmea, incluindo traços de personalidade, comportamento, possível carreira e iniciais do nome.
              </p>
            </div> 

       {/* Prediction */}
       <div className="text-center space-y-4">
              <MapPin className="w-12 h-12 mx-auto text-purple-400" />
              <h3 className="text-xl font-semibold text-white">PREVISÃO</h3>
              <p className="text-purple-200">
              Se você optar pelo complemento Descrição da Alma Gêmea, fornecerei informações sobre quando e onde você encontrará sua alma gêmea, juntamente com detalhes como signo do zodíaco, profissão e iniciais do nome.
              </p>
            </div>

            {/* Soulmate Drawing */}
            <div className="text-center space-y-4">
              <Heart className="w-12 h-12 mx-auto text-purple-400" />
              <h3 className="text-xl font-semibold text-white">DESENHO DE ALMA GÊMEA</h3>
              <p className="text-purple-200">
              Obtenha um desenho digital personalizado feito especialmente para você.
              </p>
            </div>

            {/* Satisfaction */}
            <div className="text-center space-y-4">
              <ThumbsUp className="w-12 h-12 mx-auto text-purple-400" />
              <h3 className="text-xl font-semibold text-white">SATISFAÇÃO</h3>
              <p className="text-purple-200">
              Ofereço 100% de satisfação nos meus desenhos de alma gêmea.
              </p>
            </div>
          </div>
        </section>  

       {/* About Isadora Section */}
      <section className="py-16 px-4 bg-white/5 mb-16">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <img 
            src="https://i.imgur.com/v9fXwBq.png" 
            alt="Isadora" 
            className="w-64 h-64 object-cover rounded-lg shadow-xl"
          />
          <div className="space-y-4">
            <h2 className="text-3xl font-serif mb-6">Sobre Isadora Lys</h2>
            <p className="text-purple-200">
            Sou Isadora, uma vidente com mais de 12 anos de experiência, especializada em leitura de mapas astrológicos, leituras intuitivas e conexões espirituais. Desde muito jovem, descobri meu dom de ver além do plano físico e captar a essência das almas destinadas a se encontrar.
            </p>
            <p className="text-purple-200">
            Minha missão de reunir almas gêmeas começou há mais de 15 anos, quando tive uma visão poderosa sobre conexões predestinadas. Desde então, tenho ajudado milhares de pessoas a reconhecer e encontrar seus verdadeiros amores, orientando-as com precisão e sensibilidade.
            </p>
            <p className="text-purple-200">
            Com minha habilidade única, já consegui unir inúmeras almas gêmeas, com uma taxa de sucesso surpreendente. Agora, eu quero ajudar você!
            </p>
          </div>
        </div>
      </section>

        {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-12">Perguntas frequentes</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white/5 rounded-lg hover:bg-white/10 transition-all"
              >
                <button
                  className="w-full px-6 py-4 cursor-pointer flex items-center justify-between"
                  onClick={() => handleFaqClick(index)}
                >
                  <span className="font-semibold text-left">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 py-4 text-purple-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    {/* Personalized Button */}
    <div className="text-center">
          <a
            href={PAYMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xl font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-[1.02]"
          >
            <span>{firstName}, sua alma gêmea está pronta para conhecê-la.</span>
            <ArrowRight className="w-6 h-6" />
          </a>
    </div>

    {/* Footer */}
          <footer className="py-8 px-4 border-t border-purple-800">
            <div className="max-w-4xl mx-auto">
              {/* Disclaimer */}
              <div className="text-sm text-purple-300/80 mb-8 space-y-4">
                <h3 className="font-semibold mb-2">Isenção de responsabilidade</h3>
                <p>
                  Os nomes de empresas, produtos e serviços mencionados neste site são usados ​​apenas para fins de identificação e não implicam qualquer endosso. Todas as marcas registradas pertencem exclusivamente aos seus respectivos proprietários.
                  </p>
                  <p>
                  Aviso Legal: Ao adquirir nossos serviços, você reconhece que este é um produto destinado a fins de entretenimento e não um serviço profissional de aconselhamento psicológico, jurídico ou de saúde. Não sou psicólogo, advogado ou profissional de saúde, e as leituras oferecidas não substituem a orientação profissional nessas áreas.
                  </p>
                  <p>
                  Os retratos e interpretações fornecidos são baseados em percepções intuitivas e não garantimos que a pessoa desenhada corresponda a alguém que você conhece na vida real. As experiências variam de pessoa para pessoa e não há promessas de resultados específicos.
                  </p>
                  <p>
                  Além disso, os depoimentos, estudos de caso e exemplos apresentados nesta página refletem experiências individuais e não garantem que todos terão resultados iguais ou semelhantes. Todas as vendas são finais, mas garantimos a entrega do serviço conforme descrito.
                  </p>
                  <p>
                  Caso tenha alguma dúvida, recomendamos que tome sua decisão com sabedoria e, se necessário, procure orientação profissional.
                  </p>
                  </div>
    
              {/* Copyright and Links */}
              <div className="text-center space-y-4">
                <p className="text-purple-300">
                  © 2024 Luz Do Amor. Todos os direitos reservados.
                </p>
                <div className="flex justify-center space-x-6 text-sm">
                  <Link to="/privacyPolicy" className="text-purple-300 hover:text-purple-200 transition-colors">
                  Política de Privacidade
                  </Link>
                  <Link to="/terms" className="text-purple-300 hover:text-purple-200 transition-colors">
                  Termos e Condições
                  </Link>
                  <Link to="/contact" className="text-purple-300 hover:text-purple-200 transition-colors">
                  Entre em contato
                  </Link>
                </div>
              </div>
            </div>
          </footer>
      </div>
    </div>
  );
};

export default OfferPage;