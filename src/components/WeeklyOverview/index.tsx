import React from 'react';
import { weeklyExercises } from '../../data/exercises';

export const WeeklyOverview: React.FC = () => {
  const daysOfWeek = [
    'Domingo', 'Segunda', 'Terça', 'Quarta', 
    'Quinta', 'Sexta', 'Sábado'
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Sobre os Níveis dos Exercícios</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="mb-4">
            Cada exercício possui uma versão mais fácil e uma mais desafiadora.
            Clique em "mais informações" em cada exercício para ver a progressão completa. 
            Comece sempre pela versão mais fácil e progrida gradualmente:
          </p>
          <ul className="space-y-4 list-disc pl-6">
            <li>
              <strong>Flexão na parede:</strong> Comece na vertical (mais fácil) e 
              vá inclinando o corpo conforme ficar mais forte (mais difícil).
            </li>
            <li>
              <strong>Elevação de Pernas:</strong> Inicie com os joelhos dobrados e 
              progrida para pernas estendidas quando estiver mais forte.
            </li>
            <li>
              <strong>Puxada:</strong> Comece mais vertical e vá aumentando a 
              inclinação conforme ganhar força.
            </li>
            <li>
              <strong>Agachamento:</strong> Use apoios mais altos no início e vá 
              baixando o apoio gradualmente.
            </li>
            <li>
              <strong>Elevação de Quadril:</strong> Comece com apoio e progrida 
              para versão apoiando nas mãos quando se sentir confortável.
            </li>
            <li>
              <strong>Rotação:</strong> Ajuste a amplitude do movimento de acordo 
              com seu conforto e flexibilidade.
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Rotina Semanal</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {daysOfWeek.map((day, index) => (
            <div key={day} className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-bold mb-2 text-blue-600">{day}</h3>
              {weeklyExercises[index].exercises.length > 0 ? (
                <ul className="space-y-2">
                  {weeklyExercises[index].exercises.map((exercise, i) => (
                    <li key={i} className="flex flex-col">
                      <span className="font-medium">{exercise.name}: </span>
                      <span className="text-gray-600 text-sm">
                         {exercise.repetitions}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">Dia de descanso e alongamento 😊</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Dicas Importantes</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <ul className="space-y-4 list-disc pl-6">
            <li>
              <strong>Respiração:</strong> Inspire antes de contrair, contraia e 
              expire enquanto relaxa
            </li>
            <li>
              <strong>Progressão:</strong> Aumente o número de repetições ou a 
              dificuldade apenas quando se sentir totalmente confortável com o 
              nível atual.
            </li>
            <li>
              <strong>Descanso:</strong> Respeite os intervalos entre as séries 
              dois a três minutos, cinco minutos entre exerícios diferentes e 
              descanse dia de descanso.
            </li>
            <li>
              <strong>Hidratação:</strong> Beba água quando sentir sede, em pequenos 
              goles para não encher muito.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};