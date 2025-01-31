//ExerciseCard/index.tsx
import React, { useState, useEffect } from 'react';
import { ExerciseCardProps } from './types';
import { getYoutubeEmbedUrl } from '../../utils/youtube';
import { ExerciseTutorial } from '../ExerciseTutorial';

export const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise }) => {
  const [currentVideo, setCurrentVideo] = useState(exercise.videoUrl);
  const [currentVariation, setCurrentVariation] = useState('Principal');
  const [isTutorialOpen, setIsTutorialOpen] = useState(false);

  useEffect(() => {
    setCurrentVideo(exercise.videoUrl);
    setCurrentVariation('Principal');
  }, [exercise]);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6 border border-gray-200">
  <h2 className="text-xl font-bold mb-2 text-blue-700">{exercise.name}</h2>
  <p className="text-gray-700 mb-3 text-sm">{exercise.description}</p>
  <p className="font-semibold mb-3 text-sm">Repetições: {exercise.repetitions}</p>
  
  <button
    onClick={() => setIsTutorialOpen(true)}
    className="mb-4 px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-lg hover:bg-green-600 transition-colors"
  >
    Mais informações
  </button>

  <div className="aspect-video mb-4 bg-gray-100 rounded-lg overflow-hidden">
    <iframe
      className="w-full h-full"
      src={getYoutubeEmbedUrl(currentVideo)}
      title={`${exercise.name} - ${currentVariation}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>

      <div className="space-y-3 mt-6">
        <h3 className="font-bold text-xl text-blue-700 mb-3">Variações:</h3>
        <button
          onClick={() => {
            setCurrentVideo(exercise.videoUrl);
            setCurrentVariation('Principal');
          }}
          className={`block w-full text-left p-4 rounded-lg transition-colors text-lg ${
            currentVariation === 'Principal' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
          aria-label={`Mostrar versão principal de ${exercise.name}`}
        >
          <span className="font-bold">{exercise.name} (Principal)</span>
        </button>
        {exercise.variations.map((variation, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentVideo(variation.videoUrl);
              setCurrentVariation(variation.name);
            }}
            className={`block w-full text-left p-4 rounded-lg transition-colors text-lg ${
              currentVariation === variation.name 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
            aria-label={`Mostrar variação: ${variation.name}`}
          >
            <span className="font-bold">{variation.name}</span>
            <p className="text-base text-gray-600">{variation.description}</p>
          </button>
        ))}
      </div>

      <ExerciseTutorial
        exercise={exercise}
        isOpen={isTutorialOpen}
        onClose={() => setIsTutorialOpen(false)}
      />
    </div>
  );
};