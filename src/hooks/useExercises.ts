import { useState, useEffect } from 'react';
import { DailyRoutine } from '../types';
import { weeklyExercises } from '../data/exercises';

export function useExercises(currentDay: number) {
  const [dailyRoutine, setDailyRoutine] = useState<DailyRoutine | null>(null);

  useEffect(() => {
    const routine = weeklyExercises.find(routine => routine.dayOfWeek === currentDay);
    setDailyRoutine(routine || null);
  }, [currentDay]);

  return dailyRoutine;
}