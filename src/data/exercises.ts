import { DailyRoutine } from '../types';
import { 
  alongamento,
  flexaoPernas,
  puxadaAgachamento,
  quadrilRotacao
} from './exercises-data';

export const weeklyExercises: DailyRoutine[] = [
  { dayOfWeek: 0, exercises: alongamento },         // Domingo
  { dayOfWeek: 1, exercises: flexaoPernas },        // Segunda
  { dayOfWeek: 2, exercises: puxadaAgachamento },   // Terça
  { dayOfWeek: 3, exercises: quadrilRotacao },      // Quarta
  { dayOfWeek: 4, exercises: flexaoPernas },        // Quinta
  { dayOfWeek: 5, exercises: puxadaAgachamento },   // Sexta
  { dayOfWeek: 6, exercises: quadrilRotacao }       // Sábado
];