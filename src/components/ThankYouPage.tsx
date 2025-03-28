import React from 'react';
import { CheckCircle } from 'lucide-react';

const ThankYouPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-900 to-indigo-950 flex items-center justify-center py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <CheckCircle className="w-20 h-20 mx-auto mb-8 text-green-400" />
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mb-6">
         Obrigado pelo seu pedido!
        </h1>
        <p className="text-xl text-purple-200 mb-8">
          O seu guia está sendo preparado com muito cuidado e atenção.
          Em breve você receberá um e-mail com todos os detalhes.
        </p>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <p className="text-purple-200">
            Caso tenha alguma dúvida, sinta-se à vontade para entrar em contato conosco em:
            <br />
            <a 
              href="mailto:isador4.lys@gmail.com"
              className="text-purple-300 hover:text-purple-200 transition-colors"
            >
              isador4.lys@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;