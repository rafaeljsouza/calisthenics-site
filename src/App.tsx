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
      <div className="min-h-screen w-full max-w-full overflow-x-hidden">
        <FontSizeController />
        
        <header className="bg-white shadow-sm">
          <div className="max-w-4xl mx-auto p-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <h1 className="text-2xl font-bold">Treino da Lena</h1>
              <nav className="flex flex-wrap justify-center sm:justify-start gap-2 mb-4">
                <Link 
                  to="/" 
                  className="px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors flex items-center text-sm"
                >
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>Exercícios</span>
                </Link>
                <Link 
                  to="/visao-geral" 
                  className="px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors flex items-center text-sm"
                >
                  <Info className="w-4 h-4 mr-1" />
                  <span>Visão Geral</span>
                </Link>
              </nav>
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