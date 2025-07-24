// src/features/iam/pages/Register/RegisterFlow.tsx
import React, { useState } from 'react';

// Importe seus componentes de etapa, garantindo que os nomes e caminhos estejam corretos
import RegisterStep1 from './RegisterStep1'; // Ajuste o caminho conforme sua estrutura
import RegisterStep2 from './RegisterStep2'; // Ajuste o caminho conforme sua estrutura
import RegisterStep3 from './RegisterStep3'; // Ajuste o caminho conforme sua estrutura

const RegisterFlow: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  // O ideal seria tipar 'formData' de forma mais específica, mas 'any' serve para começar
  const [formData, setFormData] = useState<any>({}); 

  // A função handleNextStep recebe um objeto 'data' com as informações da etapa
  const handleNextStep = (data: any) => { 
    setFormData((prevData: any) => ({ ...prevData, ...data }));
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  // A função handleSubmit recebe um objeto 'data' para a última etapa
  const handleSubmit = (data: any) => { 
    setFormData((prevData: any) => ({ ...prevData, ...data }));
    console.log('Dados completos do registro:', { ...formData, ...data });
    alert('Registro concluído! Veja os dados no console.');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <RegisterStep1 onNext={handleNextStep} />;
      case 2:
        return <RegisterStep2 onNext={handleNextStep} onPrevious={handlePreviousStep} />;
      case 3:
        return <RegisterStep3 onSubmit={handleSubmit} onPrevious={handlePreviousStep} />;
      default:
        return <RegisterStep1 onNext={handleNextStep} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#1C1C2E] flex items-center justify-center font-jost">
      {renderStep()}
    </div>
  );
};

export default RegisterFlow;