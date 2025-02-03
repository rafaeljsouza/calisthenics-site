//ExerciseCard/index.tsx
import React, { useState } from 'react';
import { ExerciseCardProps } from './types';
import { getYoutubeEmbedUrl } from '../../utils/youtube';
import { ExerciseTutorial } from '../ExerciseTutorial';

export const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise }) => {
  const [currentVideo, setCurrentVideo] = useState(exercise.videoUrl);
  const [currentVariation, setCurrentVariation] = useState('Principal');
  const [isTutorialOpen, setIsTutorialOpen] = useState(false);

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6 w-full max-w-full overflow-hidden">
      <div className="flex flex-col break-words">
        <h2 className="text-xl font-bold mb-2 text-blue-700">{exercise.name}</h2>
        <p className="text-gray-700 mb-3">{exercise.description}</p>
        <p className="text-gray-800 font-semibold mb-3">Repetições: {exercise.repetitions}</p>
      </div>

      <button
        onClick={() => setIsTutorialOpen(true)}
        className="mb-4 px-4 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors w-full sm:w-auto"
      >
        Mais informações
      </button>

      <div className="relative w-full pt-[56.25%] mb-4">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={getYoutubeEmbedUrl(currentVideo)}
          title={`${exercise.name} - ${currentVariation}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="space-y-3">
        <h3 className="font-bold text-lg text-blue-700 mb-3">Variações:</h3>
        <div className="space-y-2 w-full">
          <button
            onClick={() => {
              setCurrentVideo(exercise.videoUrl);
              setCurrentVariation('Principal');
            }}
            className={`w-full text-left p-4 rounded-lg transition-colors ${
              currentVariation === 'Principal'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            <span className="font-bold break-words">{exercise.name} (Principal)</span>
          </button>
          
          {exercise.variations.map((variation, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentVideo(variation.videoUrl);
                setCurrentVariation(variation.name);
              }}
              className={`w-full text-left p-4 rounded-lg transition-colors ${
                currentVariation === variation.name
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              <span className="font-bold break-words">{variation.name}</span>
              <p className="text-sm mt-1 break-words">{variation.description}</p>
            </button>
          ))}
        </div>
      </div>

      <ExerciseTutorial
        exercise={exercise}
        isOpen={isTutorialOpen}
        onClose={() => setIsTutorialOpen(false)}
      />
    </div>
  );
};