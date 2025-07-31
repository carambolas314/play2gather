// src/components/CustomRangeSlider.tsx
import React, { useState, useRef, useEffect, useCallback } from 'react';

interface CustomRangeSliderProps {
  min: number;
  max: number;
  value: [number, number]; // [valorMinimo, valorMaximo]
  onChange: (value: [number, number]) => void;
  minLabel?: string; // Rótulo opcional para o valor mínimo (abaixo do slider)
  maxLabel?: string; // Rótulo opcional para o valor máximo (abaixo do slider)
}

const CustomRangeSlider: React.FC<CustomRangeSliderProps> = ({ min, max, value, onChange, minLabel, maxLabel }) => {
  const [localValue, setLocalValue] = useState(value); // Estado interno para os valores dos thumbs
  const trackRef = useRef<HTMLDivElement>(null); // Referência para a trilha do slider
  const activeThumbRef = useRef<0 | 1 | null>(null); // Rastreia qual thumb está sendo arrastado (0 para o esquerdo, 1 para o direito)

  // Sincroniza o estado interno com a prop 'value' se ela mudar externamente (ex: filtro resetado)
  useEffect(() => {
    if (value[0] !== localValue[0] || value[1] !== localValue[1]) {
      setLocalValue(value);
    }
  }, [value, localValue]); // Adicione localValue às dependências para evitar loop infinito em alguns casos

  // Calcula a porcentagem da posição de um valor na trilha
  const getPercentage = useCallback((val: number) => {
    return ((val - min) / (max - min)) * 100;
  }, [min, max]);

  // Converte uma posição X do mouse em um valor numérico do slider
  const getValueFromClientX = useCallback((clientX: number) => {
    if (!trackRef.current) return min;

    const { left, width } = trackRef.current.getBoundingClientRect(); // Posição e largura da trilha
    const x = clientX - left; // Posição X relativa à trilha
    let percentage = x / width; // Porcentagem da posição na trilha
    percentage = Math.max(0, Math.min(1, percentage)); // Garante que a porcentagem esteja entre 0 e 1

    // Converte a porcentagem de volta para um valor dentro do range [min, max]
    return Math.round(min + percentage * (max - min));
  }, [min, max]);

  // Lida com o movimento do mouse enquanto arrasta um thumb
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (activeThumbRef.current === null) return; // Nenhuma thumb está sendo arrastada

    const newValue = getValueFromClientX(e.clientX);

    setLocalValue(prev => {
      const newArr: [number, number] = [...prev];
      if (activeThumbRef.current === 0) { // Thumb esquerdo
        newArr[0] = Math.min(newValue, newArr[1]); // Garante que o thumb esquerdo não ultrapasse o direito
        newArr[0] = Math.max(newArr[0], min); // Garante que o thumb esquerdo não seja menor que o mínimo
      } else { // Thumb direito
        newArr[1] = Math.max(newValue, newArr[0]); // Garante que o thumb direito não seja menor que o esquerdo
        newArr[1] = Math.min(newArr[1], max); // Garante que o thumb direito não seja maior que o máximo
      }
      return newArr;
    });
  }, [getValueFromClientX, min, max]);

  // Lida com a soltura do mouse (fim do arrastar)
  const handleMouseUp = useCallback(() => {
    if (activeThumbRef.current !== null) {
      activeThumbRef.current = null; // Libera o thumb ativo
      document.removeEventListener('mousemove', handleMouseMove); // Remove listeners
      document.removeEventListener('mouseup', handleMouseUp); // Remove listeners
      onChange(localValue); // Chama a função onChange do componente pai apenas quando o arrastar termina
    }
  }, [handleMouseMove, onChange, localValue]);

  // Lida com o clique inicial do mouse em um thumb
  const handleThumbMouseDown = (thumbIndex: 0 | 1) => (e: React.MouseEvent) => {
    e.preventDefault(); // Evita seleção de texto padrão do navegador
    activeThumbRef.current = thumbIndex; // Define qual thumb está ativo
    document.addEventListener('mousemove', handleMouseMove); // Adiciona listener para movimento do mouse
    document.addEventListener('mouseup', handleMouseUp); // Adiciona listener para soltura do mouse
  };

  // Posição percentual dos thumbs na trilha
  const thumb1Pos = getPercentage(localValue[0]);
  const thumb2Pos = getPercentage(localValue[1]);

  return (
    <div className="w-full relative py-4"> {/* Container para o slider e os rótulos */}
      {/* Trilha do Slider */}
      <div
        ref={trackRef} // Referência para o div da trilha
        className="w-full h-2 bg-gray-600 rounded-full relative cursor-pointer"
        // Opcional: Permite clicar na trilha para mover o thumb mais próximo
        onClick={(e) => {
           const clickedValue = getValueFromClientX(e.clientX);
           const distToThumb1 = Math.abs(clickedValue - localValue[0]);
           const distToThumb2 = Math.abs(clickedValue - localValue[1]);
           let newRange: [number, number];
           if (distToThumb1 < distToThumb2) {
             newRange = [clickedValue, localValue[1]];
           } else {
             newRange = [localValue[0], clickedValue];
           }
           setLocalValue(newRange);
           onChange(newRange);
        }}
      >
        {/* Faixa Preenchida (amarela) entre os Thumbs */}
        <div
          className="h-full bg-[#CBE220] rounded-full absolute"
          style={{
            left: `${thumb1Pos}%`,
            width: `${thumb2Pos - thumb1Pos}%`
          }}
        ></div>

        {/* Thumb Esquerdo */}
        <div
          className="h-5 w-5 rounded-full bg-white absolute cursor-pointer shadow-md -top-1.5 transform -translate-x-1/2"
          style={{ left: `${thumb1Pos}%` }}
          onMouseDown={handleThumbMouseDown(0)} // Listener para começar a arrastar
        ></div>

        {/* Thumb Direito */}
        <div
          className="h-5 w-5 rounded-full bg-white absolute cursor-pointer shadow-md -top-1.5 transform -translate-x-1/2"
          style={{ left: `${thumb2Pos}%` }}
          onMouseDown={handleThumbMouseDown(1)} // Listener para começar a arrastar
        ></div>
      </div>

      {/* Rótulos de Ano (Min e Max) */}
      <div className="flex justify-between text-gray-400 text-sm mt-2">
        <span>{minLabel || localValue[0]}</span>
        <span>{maxLabel || localValue[1]}</span>
      </div>
    </div>
  );
};

export default CustomRangeSlider;