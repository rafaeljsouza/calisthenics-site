import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Calendar, Info } from 'lucide-react';
import { ExerciseCard } from './components/ExerciseCard';
import { WeekNavigation } from './components/WeekNavigation';
import { FontSizeController } from './components/FontSizeController';
import { WeeklyOverview } from './components/WeeklyOverview';
import { useExercises } from './hooks/useExercises';

// Componente para a página principal de exercícios diários
const DailyExercises: React.FC = () => {
  const [currentDay, setCurrentDay] = useState(new Date().getDay());
  const dailyRoutine = useExercises(currentDay);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <WeekNavigation currentDay={currentDay} onDayChange={setCurrentDay} />
      
      {dailyRoutine?.exercises.map((exercise, index) => (
        <ExerciseCard key={index} exercise={exercise} />
      ))}
    </div>
  );
};

// Componente principal App com sistema de rotas
const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <FontSizeController />
        
        <header className="bg-white shadow-sm">
          <div className="max-w-4xl mx-auto p-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">Treino da Lena</h1>
              <div className="flex gap-4">
                <Link 
                  to="/" 
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
                >
                  <Calendar className="w-6 h-6" />
                  <span className="hidden sm:inline">Exercícios</span>
                </Link>
                <Link 
                  to="/visao-geral" 
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
                >
                  <Info className="w-6 h-6" />
                  <span className="hidden sm:inline">Visão Geral</span>
                </Link>
              </div>
            </div>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<DailyExercises />} />
            <Route path="/visao-geral" element={<WeeklyOverview />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;