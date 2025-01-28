export type Exercise = {
    name: string;
    description: string;
    videoUrl: string;
    repetitions: string;
    variations: {
      name: string;
      videoUrl: string;
      description: string;
    }[];
  };
  
  export type DailyRoutine = {
    dayOfWeek: number;
    exercises: Exercise[];
  };