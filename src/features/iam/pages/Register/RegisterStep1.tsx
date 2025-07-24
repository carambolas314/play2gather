// src/components/RegisterStep1.tsx
import React, { useState } from 'react';

// Interface para as props do RegisterStep1
interface RegisterStep1Props {
  onNext: (data: { username: string; password: string; email: string }) => void;
}

// Componente ProgressBar (reutilizável)
const ProgressBar: React.FC<{ current: number; total: number }> = ({ current, total }) => {
  const progressWidth = (current / total) * 100;
  return (
    <div className="w-1/2 h-2 bg-gray-600 rounded-full self-center"> {/* self-center para centralizar na coluna flex */}
      <div
        className="h-full bg-[#CBE220] rounded-full transition-all duration-500"
        style={{ width: `${progressWidth}%` }}
      ></div>
    </div>
  );
};

// Componente RegisterStep1 tipado
const RegisterStep1: React.FC<RegisterStep1Props> = ({ onNext }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleContinue = () => {
    // Validação básica: verifique se os campos não estão vazios
    if (username.trim() && password.trim() && email.trim()) {
      onNext({ username, password, email });
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
  
    <div className="bg-[#2B2156] mt-16 mb-32 p-8 md:p-10 rounded-2xl shadow-2xl w-full max-w-md mx-auto">
      {/* Top section: Arrow back and progress bar */}
      <div className="flex mb-6 flex-col">
        {/* Barra de progresso - movida para cima da seta para seguir a ordem do seu código */}
        <ProgressBar current={1} total={3} /> {/* Barra de progresso para a etapa 1 de 3 */}
        {/* Seta para voltar - na primeira etapa ela deve estar invisível ou desabilitada */}
        <button className="text-white text-3xl self-baseline cursor-default">
          &larr; {/* Flecha para a esquerda */}
        </button>
      </div>

      {/* Title and Description */}
      <h1 className="text-white text-3xl font-bold mb-2">
        Crie uma nova conta!
      </h1>
      <p className="text-white text-opacity-70 text-base mb-8">
        Organize a coleção e visite a comunidade de seus jogos!
      </p>

      {/* Form Fields */}
      <div className="mb-3">
        <label htmlFor="username" className="block text-white text-lg mb-2 ">
          Nome de Usuário
        </label>
        <input
          type="text"
          id="username"
          placeholder="Seu nome de Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-4 rounded-lg bg-[#42397B] text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6B40E3]"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="block text-white text-lg mb-2 ">
          Senha
        </label>
        <input
          type="password"
          id="password"
          placeholder="Mínimo 8 caracteres"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 rounded-lg bg-[#42397B] text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6B40E3]"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-white text-lg mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 rounded-lg bg-[#42397B] text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6B40E3]"
        />
      </div>

      {/* Continue with Email Button */}
      <button
        onClick={handleContinue}
        className="w-full bg-[#6B40E3] hover:bg-[#5734B7] text-white font-semibold py-4 rounded-xl mb-6 transition duration-200"
      >
        Continuar com Email
      </button>

      {/* Or register with section */}
      <p className="text-white text-opacity-70 text-center mb-4">
        Ou se registre com
      </p>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-4">
        <button className="bg-white rounded-full p-3 flex items-center justify-center shadow-lg hover:scale-105 transition duration-200">
          <img
            src="https://img.icons8.com/color/48/000000/google-logo.png"
            alt="Google"
            className="h-6 w-6"
          />
        </button>
        <button className="bg-white rounded-full p-3 flex items-center justify-center shadow-lg hover:scale-105 transition duration-200">
          <img
            src="https://img.icons8.com/color/48/000000/facebook-new.png"
            alt="Facebook"
            className="h-6 w-6"
          />
        </button>
        <button className="bg-white rounded-full p-3 flex items-center justify-center shadow-lg hover:scale-105 transition duration-200">
          <img
            src="https://img.icons8.com/ios-filled/50/000000/twitterx--v1.png"
            alt="Twitter X"
            className="h-6 w-6"
          />
        </button>
      </div>
    </div>
  );
};

export default RegisterStep1;