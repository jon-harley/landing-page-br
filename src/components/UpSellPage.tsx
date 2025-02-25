import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Clock, FileText, Palette, Gift } from 'lucide-react';
import CountdownTimer from '../components/CountdownTimer';

const UpsellPage = () => {
  const PAYMENT_URL = 'https://pay.kirvano.com/6c509700-8a08-47b7-ab2d-8abbc44218e5';

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-900 to-indigo-950 py-16 px-4">
        {/* Countdown Timer - Moved to top */}
      <div className="max-w-4xl mx-auto mb-12">
        <CountdownTimer />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Sparkles className="w-16 h-16 mx-auto mb-6 text-yellow-400 animate-pulse" />
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300 mb-4">
          Parabéns! Você ganhou acesso exclusivo! 🎉
          </h1>
          <p className="text-xl text-purple-200">
          Você foi selecionado para desbloquear o Pacote Visão Completa da Alma Gêmea – uma atualização VIP com benefícios incríveis!
          </p>
        </div>

        {/* Benefits */}
        <div className="space-y-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-start gap-4">
            <div className="bg-purple-500/20 p-3 rounded-lg">
              <Clock className="w-6 h-6 text-purple-300" />
            </div>
            <div>
            <h3 className="text-xl font-semibold text-white mb-2">1️⃣ Entrega prioritária expressa</h3>
            <p className="text-purple-200">Receba seu retrato em até 5 minutos, economizando um tempo precioso</p>
            <p className="text-purple-300 mt-2">(Preço original: R$9,90)</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-start gap-4">
            <div className="bg-purple-500/20 p-3 rounded-lg">
              <FileText className="w-6 h-6 text-purple-300" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">2️⃣ Descrição detalhada da alma gêmea</h3>
              <p className="text-purple-200">Inclua quando e onde vocês se encontrarão, as iniciais do seu nome, sua profissão, personalidade, signo do zodíaco e muito mais.</p>
              <p className="text-purple-300 mt-2">(Valor original: R$29.90)</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-start gap-4">
            <div className="bg-purple-500/20 p-3 rounded-lg">
              <Palette className="w-6 h-6 text-purple-300" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">3️⃣ Desenho colorido atualizado</h3>
              <p className="text-purple-200">Retrato em cores vivas e detalhadas, capturando cada traço com perfeição</p>
              <p className="text-purple-300 mt-2">(Valor original: R$19.90)</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-start gap-4">
            <div className="bg-purple-500/20 p-3 rounded-lg">
              <Gift className="w-6 h-6 text-purple-300" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">4️⃣ Bônus exclusivo</h3>
              <p className="text-purple-200">Este bônus contém um detalhe essencial, pensado especialmente para você que busca entender e atrair sua alma gêmea. Uma revelação que pode fazer toda a diferença no seu caminho.</p>
            </div>
          </div>
        </div>

        {/* Offer Box */}
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-8 text-center mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">💡 Oferta limitada</h2>
          <p className="text-xl text-purple-200 mb-6">
          Esses bônus somam R$98, mas você os obtém por apenas R$19,90 ao escolher o Pacote Completo agora.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <a
            href={PAYMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="kirvano-payment-trigger block w-full py-4 px-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xl font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 text-center transform hover:scale-[1.02] shadow-lg"
          >
            Sim! Eu quero o Pacote Completo!
          </a>
          
          <Link
            to="/thanks"
            className="kirvano-refuse-trigger block w-full py-4 px-8 bg-gray-600/50 hover:bg-gray-600/70 text-gray-300 text-xl font-semibold rounded-lg transition-all duration-300 text-center"
          >
            Não, não aceito esta oferta especial!
          </Link>
        </div>

        {/* Timer */}
        <div className="text-center mt-8">
          <p className="text-purple-300">
          🕒 Oferta disponível apenas para esta sessão. Não perca esta oportunidade exclusiva.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpsellPage;