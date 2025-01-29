export type Exercise = {
  name: string;
  description: string;
  videoUrl: string;
  repetitions: string;
  tutorial: {
    niveis: {
      nivel1: string;
      nivel2: string;
      nivel3: string;
    };
    padroes: string[];
    dicas: string[];
    passos: string[];
    progressao: {
      maisDesafiador: string[];
      maisFacil: string[];
    };
  };
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