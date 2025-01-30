//ExerciseTutorial/index.tsx

import React from 'react';
import { X } from 'lucide-react';
import { Exercise } from '../../types';

interface ExerciseTutorialProps {
  exercise: Exercise;
  isOpen: boolean;
  onClose: () => void;
}

export const ExerciseTutorial: React.FC<ExerciseTutorialProps> = ({
  exercise,
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-blue-600 text-white p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Tutorial: {exercise.name}</h2>
          <button
            onClick={onClose}
            className="p-3 bg-red-500 hover:bg-red-600 rounded-full transition-colors"
            aria-label="Fechar tutorial"
          >
            <X className="w-8 h-8" />
          </button>
        </div>
        
        <div className="p-8 space-y-10">
          {/* Níveis */}
          <section>
            <h3 className="text-xl font-bold text-blue-700 mb-6">Níveis</h3>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                <h4 className="font-bold text-lg mb-3 text-blue-800">Nível 1</h4>
                <p className="text-gray-700">{exercise.tutorial.niveis.nivel1}</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                <h4 className="font-bold text-lg mb-3 text-blue-800">Nível 2</h4>
                <p className="text-gray-700">{exercise.tutorial.niveis.nivel2}</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                <h4 className="font-bold text-lg mb-3 text-blue-800">Nível 3</h4>
                <p className="text-gray-700">{exercise.tutorial.niveis.nivel3}</p>
              </div>
            </div>
          </section>

          {/* Padrões */}
          <section>
            <h3 className="text-lg font-bold text-blue-700 mb-4">Padrões de Treino</h3>
            <div className="space-y-2">
              {exercise.tutorial.padroes.map((padrao, index) => (
                <p key={index}>{padrao}</p>
              ))}
            </div>
          </section>

          {/* Dicas de Execução */}
          <section>
            <h3 className="text-lg font-bold text-blue-700 mb-4">Dicas de Execução</h3>
            <ul className="list-disc pl-6 space-y-2">
              {exercise.tutorial.dicas.map((dica, index) => (
                <li key={index}>{dica}</li>
              ))}
            </ul>
          </section>

          {/* Passo a Passo */}
          <section>
            <h3 className="text-lg font-bold text-blue-700 mb-4">Passo a Passo</h3>
            <ol className="list-decimal pl-6 space-y-2">
              {exercise.tutorial.passos.map((passo, index) => (
                <li key={index}>{passo}</li>
              ))}
            </ol>
          </section>

          {/* Progressão */}
          <section>
            <h3 className="text-lg font-bold text-blue-700 mb-4">Progressão</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Para tornar mais desafiador:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  {exercise.tutorial.progressao.maisDesafiador.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Para tornar mais fácil:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  {exercise.tutorial.progressao.maisFacil.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};