import React, { useState } from 'react';
import { ExerciseCardProps } from './types';
import { getYoutubeEmbedUrl } from '../../utils/youtube';

export const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise }) => {
  const [currentVideo, setCurrentVideo] = useState(exercise.videoUrl);
  const [currentVariation, setCurrentVariation] = useState('Principal');

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-bold mb-2">{exercise.name}</h2>
      <p className="text-gray-600 mb-4">{exercise.description}</p>
      <p className="font-semibold mb-4">Repetições: {exercise.repetitions}</p>
      
      <div className="aspect-video mb-2 bg-gray-100 rounded overflow-hidden">
        <iframe
          className="w-full h-full"
          src={getYoutubeEmbedUrl(currentVideo)}
          title={`${exercise.name} - ${currentVariation}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="space-y-2 mt-4">
        <h3 className="font-semibold">Variações:</h3>
        <button
          onClick={() => {
            setCurrentVideo(exercise.videoUrl);
            setCurrentVariation('Principal');
          }}
          className={`block w-full text-left p-2 rounded transition-colors ${
            currentVariation === 'Principal' 
              ? 'bg-blue-50 text-blue-700' 
              : 'hover:bg-gray-50'
          }`}
          aria-label={`Mostrar versão principal de ${exercise.name}`}
        >
          <span className="font-medium">{exercise.name} (Principal)</span>
        </button>
        {exercise.variations.map((variation, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentVideo(variation.videoUrl);
              setCurrentVariation(variation.name);
            }}
            className={`block w-full text-left p-2 rounded transition-colors ${
              currentVariation === variation.name 
                ? 'bg-blue-50 text-blue-700' 
                : 'hover:bg-gray-50'
            }`}
            aria-label={`Mostrar variação: ${variation.name}`}
          >
            <span className="font-medium">{variation.name}</span>
            <p className="text-sm text-gray-600">{variation.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};