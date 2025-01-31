import { Exercise } from '../types';

export const alongamento: Exercise[] = [
  {
    name: "Alongamento Suave",
    description: "Série de alongamentos para relaxamento",
    videoUrl: "https://youtu.be/xfF6WV_cDgU?si=9sX1lOPcHFDg8OK0&t=99",
    repetitions: "seguir as recomendações do vídeo",
    tutorial: {
      niveis: {
        nivel1: "",
        nivel2: "",
        nivel3: ""
      },
      padroes: [],
      dicas: [],
      passos: [],
      progressao: {
        maisDesafiador: [],
        maisFacil: [],
      },
    },
    variations: [
      {
        name: "Alongamento Sentado",
        videoUrl: "https://www.youtube.com/watch?v=4f0LLMG7IJY&t=55s",
        description: "Versão mais suave, realizando os movimentos sentado"
      }
    ]
  }
];

export const flexaoPernas: Exercise[] = [
  {
    name: "Flexão na parede",
    description: "Fortalecimento de pernas e quadril. quanto mais inclinado, mais difícil",
    videoUrl: "https://youtu.be/oACdpTtZZLo?si=TxGpLxoAgj811Qr7&t=7",
    repetitions: "3 séries de 50 repetições",
    tutorial: {
      niveis: {
        nivel1: "2 séries de 30",
        nivel2: "2 séries de 50",
        nivel3: "3 séries de 50"
      },
      padroes: [
        "Comece fazendo 2 séries com o máximo que conseguir OU 50 repetições",
        "Quando conseguir fazer 2 séries de 50, adicione uma terceira série",
        "Descanse 2-3 minutos entre as séries",
        "Quando conseguir fazer 3 séries de 50 (Nível 3) com BOA FORMA, você estará pronto para passar para uma variação mais difícil de flexão"
      ],
      dicas: [
        "Devagar e constante é o segredo deste exercício. Não faça com pressa. Encontre um ritmo controlado e rítmico para realmente 'sentir' o movimento: 2 segundos descendo, 1 segundo de pausa, 2 segundos subindo. Repita.",
        "Mantenha as mãos na altura do peito. Mãos muito altas colocam mais trabalho nos cotovelos do que o necessário. Mãos muito baixas dificultam manter as palmas planas.",
        "Uma boa regra é conseguir manter as palmas planas e sentir um leve alongamento no pulso enquanto os braços estão retos",
        "Mantenha o corpo firme. Não arqueie o corpo na parte inferior para facilitar o movimento. Força no core é importante para toda calistenia, e este é um ótimo lugar para começar a desenvolvê-la"
      ],
      passos: [
        "Fique a um braço de distância de frente para a parede",
        "Coloque suas palmas planas na parede. Seus braços devem estar retos",
        "Desça lentamente até sua cabeça tocar suavemente a parede",
        "Pause por 1 segundo",
        "Volte lentamente para cima",
        "Pause por 1 segundo",
        "Repita"
      ],
      progressao: {
        maisDesafiador: [
          "Faça através de um batente de porta ou argolas para aumentar a amplitude do movimento. Desça até não conseguir descer mais antes de voltar"
        ],
        maisFacil: [
          "Fazer de joelhos tornará mais fácil. No entanto, como as flexões na parede são apenas um pouco mais difíceis que abrir portas, você pode ter melhores resultados fazendo MENOS flexões na parede no início, em vez de torná-las mais fáceis"
        ]
      }
    },
    variations: [
      {
        name: "Flexão inclinada",
        videoUrl: "https://www.youtube.com/shorts/so5nuzZWwmI",
        description: " 3 de 40 rep"
      }
    ]
  },
  {
    name: "Elevação de pernas deitada com joelhos flexionados",
    description: "Fortalecimento abdominal infra",
    videoUrl: "https://www.youtube.com/watch?v=I_Y7XXEmazA",
    repetitions: "2 séries de 30 repetições",
    tutorial: {
      niveis: {
        nivel1: "2 séries de 10 repetições",
        nivel2: "2 séries de 20 repetições",
        nivel3: "2 séries de 30 repetições"
      },
      padroes: [
        "Faça 2 séries com o máximo de repetições que conseguir.",
        "Os níveis acima são padrões que você pode usar para medir seu progresso.",
        "Descanse 2-3 minutos entre as séries.",
        "Se você estiver com dificuldade para atingir o Nível 1 após algumas semanas de tentativa, tente usar algumas das regressões mostradas abaixo.",
        "Quando conseguir fazer 2 séries de 30 (Nível 3) com BOA FORMA, você estará pronto para passar para uma variação mais difícil."
      ],
      dicas: [
        "Mantenha os calcanhares fora do chão durante todo o exercício. Tocar o chão no fundo do movimento torna o exercício mais fácil. Faça isso se necessário no início, mas procure quebrar esse hábito eventualmente.",
        "Quanto mais você estender os joelhos, mais difícil será o exercício. Para elevação de joelhos, tente manter uma flexão de 90 graus.",
        "Tente manter a lombar no chão durante todo o exercício. Dependendo do seu tipo corporal, isso pode ser difícil ou impossível. No entanto, mantenha a intenção de tocar a lombar.",
        "Filme-se e assista entre as séries para verificar sua forma. Um espelho também é útil.",
        "Se sua lombar doer, usar uma almofada pequena ou uma toalha pequena enrolada embaixo é uma solução temporária.",
        "Manter as coxas pressionadas uma contra a outra pode ajudar você a se concentrar no movimento."
      ],
      passos: [
        "Deite-se no chão com os braços ao lado do corpo.",
        "Dobre os joelhos até aproximadamente 90 graus.",
        "Levante as pernas até que os joelhos estejam sobre a cintura. Controle o movimento.",
        "Pause por 1 segundo, sentindo a contração nos quadris e abdômen.",
        "Desça lentamente enquanto endireita as pernas até que os calcanhares estejam a cerca de 2,5 cm do chão.",
        "Pause por 1 segundo.",
        "Repita os passos 3-6."
      ],
      progressao: {
        maisDesafiador: [
          "Endireitar um pouco o joelho tornará este exercício mais difícil"
        ],
        maisFacil: [
          "Dobrar mais o joelho tornará este exercício mais fácil",
          "Se você não conseguir fazer isso, levantar e abaixar uma perna de cada vez (tipo andar de bicicleta) é uma variação mais fácil"
        ]
      }
    },
    variations: [
      {
        name: "Elevação de pernas deitada com pernas esticadas",
        videoUrl: "https://youtu.be/cCGSbAjIP3k?si=1QR2TWPuvWMX9FK-",
        description: "quanto mais reta a perna, mais difícil"
      }
    ]
  }
];

export const puxadaAgachamento: Exercise[] = [
  {
    name: "Puxada na parede",
    description: "Fortalecimento de costas, use uma barra ou pilastra, quanto mais inclinado, mais difícil",
    videoUrl: "https://youtu.be/rYXoCAxIJgs?si=om1pFqhvolFtpvzY&t=55",
    repetitions: "3 séries de 50 repetições, infelizmente só tinha em inglês",
    tutorial: {
      niveis: {
        nivel1: "2 séries de 30",
        nivel2: "2 séries de 50",
        nivel3: "3 séries de 50"
      },
      padroes: [
        "Faça 2-3 séries com o máximo que conseguir",
        "Os níveis acima são padrões que você pode usar para medir seu progresso",
        "Descanse 2-3 minutos entre as séries",
        "Se você estiver com dificuldade para atingir o Nível 1 após algumas semanas de tentativa, tente usar algumas das regressões mostradas abaixo",
        "Quando conseguir fazer 3 séries de 50 (Nível 3) com BOA FORMA, você estará pronto para passar para uma variação mais difícil de puxada"
      ],
      dicas: [
        "Devagar e constante é o segredo deste exercício. Não faça com pressa. Encontre um ritmo controlado e rítmico para realmente 'sentir' o movimento: 2 segundos descendo, 1 segundo de pausa, 2 segundos subindo. Repita.",
        "Mantenha as mãos na altura do esterno. Seu punho deve tocar seu peito no topo do movimento",
        "Independentemente de onde você fizer este exercício, certifique-se de ter uma boa pegada no objeto. Uma superfície escorregadia tornará difícil se segurar, o que não é o objetivo deste exercício",
        "Mantenha o corpo firme. Não arqueie o corpo na parte inferior para facilitar o movimento. Força no core é importante para toda calistenia, e este é um ótimo lugar para começar a desenvolvê-la",
        "Mantenha as escápulas para baixo e para trás para melhor engajar os músculos das costas",
        "Aprender a fazer isso com os braços retos na parte inferior do movimento desenvolverá força escapular fundamental - muito importante para calistenia avançada"
      ],
      passos: [
        "Fique a um braço de distância de frente para um poste, árvore ou seção de parede",
        "Segure firmemente o objeto com ambos os braços. Seus braços devem estar retos",
        "Suba lentamente até que o objeto ou suas mãos toquem suavemente seu peito",
        "Pause por 1 segundo",
        "Desça lentamente",
        "Pause por 1 segundo",
        "Repita os passos 3-6"
      ],
      progressao: {
        maisDesafiador: [
          "Fazer com um braço só é possível mesmo para alguns iniciantes e oferece uma mudança interessante"
        ],
        maisFacil: [
          "Encontrar um objeto que você possa segurar firmemente tornará este exercício mais seguro e efetivo. Este exercício não deve ser muito mais difícil que abrir uma porta pesada"
        ]
      }
    },
    variations: [
      {
        name: "Puxada inclinada",
        videoUrl: "https://www.youtube.com/watch?v=0X2GYq9ytTc",
        description: "só o primeiro movimento do vídeo. 3 de 30 repetições"
      }
    ]
  },
  {
    name: "Agachamento canivete, apoiado em cadeira/mesa/cama",
    description: "Fortalecimento coxa anterior, glúteos e quadril",
    videoUrl: "https://youtu.be/1HkM3aKFIIo?si=b_Sc9aK-wp6MeuyD&t=4",
    repetitions: "3 séries de 35 repetições",
    tutorial: {
      niveis: {
        nivel1: "2 séries de 15",
        nivel2: "2 séries de 25",
        nivel3: "3 séries de 35"
      },
      padroes: [
        "Faça 2-3 séries com o máximo que conseguir",
        "Os níveis acima são padrões que você pode usar para medir seu progresso",
        "Descanse 2-3 minutos entre as séries",
        "Se você estiver com dificuldade para atingir o Nível 1 após algumas semanas de tentativa, tente usar algumas das regressões mostradas abaixo",
        "Quando conseguir fazer 3 séries de 35 (Nível 3) com BOA FORMA, você estará pronto para passar para uma variação mais difícil de agachamento"
      ],
      dicas: [
        "Suas pernas devem estar aproximadamente na largura dos ombros",
        "Seus pés devem apontar para frente ou ligeiramente para fora. Não os aponte excessivamente para fora",
        "Devagar e constante é o segredo deste exercício. Não faça com pressa. Encontre um ritmo controlado e rítmico para realmente 'sentir' o movimento: 2 segundos descendo, 1 segundo de pausa, 2 segundos subindo. Repita",
        "Tente manter suas costas neutras durante todo o exercício. Isso significa não arquear ou arredondar as costas",
        "Encontre uma base da qual você possa empurrar firmemente. Se usar uma cadeira ou mesa baixa, certifique-se de que não irá desabar",
        "Contraia seu core e abdômen durante o movimento. Você deve sentir seu corpo 'dobrar' nos quadris - como um canivete abrindo!",
        "Filme-se e assista entre as séries!",
        "Como estamos progredindo gradualmente, é ok se seus joelhos passarem dos dedos dos pés"
      ],
      passos: [
        "Fique em pé na frente de uma plataforma estável na altura do joelho",
        "Mantendo as pernas retas, dobre nos quadris até suas palmas estarem na plataforma. Seus braços devem estar relativamente retos, assim como sua cintura",
        "Agache lentamente, com uma leve inclinação para frente para poder ajudar com os braços, até que suas coxas estejam pressionadas contra suas panturrilhas",
        "Pause por 1 segundo",
        "Volte lentamente para cima",
        "Pause por 1 segundo",
        "Repita os passos 3-6"
      ],
      progressao: {
        maisDesafiador: [
          "Fazer isso com uma plataforma um pouco mais alta pode tornar a assistência mais difícil. Isso nos levará suavemente ao próximo passo!"
        ],
        maisFacil: [
            "Este exercício é mais fácil se você não agachar tão profundamente, ou se aumentar a assistência dos braços neste alcance",
            "Ao longo do tempo, aumente a profundidade do agachamento e reduza a assistência dos braços",
            "Alternativamente, você pode agachar em uma cadeira ou banquinho muito baixo. Este 'ponto de descanso' tornará a parte inferior mais fácil e acompanhará seu progresso"
          ]
        }
      },
      variations: [
        {
          name: "Agachamento com apoio alto",
          videoUrl: "https://www.youtube.com/shorts/BcPfuGRtZFY",
          description: "3 de 30 rep."
        }
      ]
    }];
    
    export const quadrilRotacao: Exercise[] = [
      {
        name: "Elevação de quadril",
        description: "Fortalecimento de glúteos, anterior e posterior da coxa",
        videoUrl: "https://www.youtube.com/watch?v=VG8pOUS6HUU",
        repetitions: "3 séries de 50 repetições",
        tutorial: {
          niveis: {
            nivel1: "2 séries de 15",
            nivel2: "2 séries de 30",
            nivel3: "3 séries de 50"
          },
          padroes: [
            "Faça 2-3 séries com o máximo que conseguir",
            "Os níveis acima são padrões que você pode usar para medir seu progresso",
            "Descanse 2-3 minutos entre as séries",
            "Se você estiver com dificuldade para atingir o Nível 1 após algumas semanas de tentativa, tente usar algumas das regressões mostradas abaixo",
            "Quando conseguir fazer 3 séries de 50 (Nível 3) com BOA FORMA, você estará pronto para passar para uma variação mais difícil de ponte"
          ],
          dicas: [
            "O posicionamento dos pés afeta a dificuldade. Tente manter as canelas perpendiculares ao chão e/ou ter os calcanhares a alguns centímetros do bumbum",
            "Tente evitar ceder nos quadris. Se isso for difícil, aproximar os pés ou pressionar mais com os braços às vezes ajuda",
            "Mantenha as pernas na largura dos ombros",
            "Seus pés devem apontar para frente ou ligeiramente para fora",
            "Devagar e constante é o segredo deste exercício. Não faça com pressa. Encontre um ritmo controlado e rítmico para realmente 'sentir' o movimento",
            "Tente manter suas costas neutras durante todo o exercício",
            "Contraia seu core e abdômen durante o movimento. Você deve sentir seu corpo 'dobrar' nos quadris"
          ],
          passos: [
            "Deite de costas com os joelhos dobrados. Suas pernas devem estar na largura dos ombros",
            "Contraia os glúteos mantendo as costas neutras. Isso deve empurrar seus quadris para cima",
            "Continue este movimento até que suas coxas, tronco e torso estejam em linha reta",
            "Pause por 1 segundo",
            "Volte lentamente para baixo",
            "Pause por 1 segundo",
            "Repita os passos 2-6"
          ],
          progressao: {
            maisDesafiador: [
              "Fazer este exercício com os calcanhares mais longe do bumbum pode torná-lo mais difícil"
            ],
            maisFacil: [
              "Este exercício é mais fácil se mantido por tempo em vez de fazer repetições",
              "Se você tem dificuldade em fazer o Nível 1 com boa forma, tente chegar à posição superior e manter por alguns minutos por vez",
              "Isso deve melhorar sua capacidade de formar uma linha reta dos ombros aos joelhos"
            ]
          }
        },
        variations: [
          {
            name: "Elevação de quadril com apoio de braços",
            videoUrl: "https://www.youtube.com/shorts/rM5mBhplrE0",
            description: "pode encostar no chão entre as execuções, 3 de 30 rep"
          }
        ]
      },
      {
        name: "Rotação de quadril sentado",
        description: "Fortalecimento glúteos, abdomen, lateráis do dorso e dorso",
        videoUrl: "https://www.youtube.com/shorts/87TZSd7Qcb8",
        repetitions: "3 séries de 60 segundos de cada lado",
        tutorial: {
          niveis: {
            nivel1: "3 séries de 15 segundos (ambos os lados)",
            nivel2: "3 séries de 30 segundos (ambos os lados)",
            nivel3: "3 séries de 60 segundos (ambos os lados)"
          },
          padroes: [
            "Estes números são fornecidos como diretrizes para avançar neste exercício",
            "Avance para o próximo passo, Rotações com Perna Dobrada, quando sentir que está preparado",
            "Descanse 30 segundos entre as séries"
          ],
          dicas: [
            "Gire em direção à sua perna DOBRADA. Isso ajuda a alinhar o movimento",
            "A conexão mente-músculo é muito importante aqui. Sinta um lado do seu corpo alongar enquanto o outro lado contrai",
            "Pequenos ajustes podem ajudar você a sentir o movimento muito melhor ao longo do tempo que pratica",
            "Uma vez na posição, olhe ligeiramente para baixo como se estivesse tentando tocar seu queixo no ombro para o qual está girando",
            "Vá devagar e de forma constante. Em NENHUMA circunstância use VELOCIDADE para girar ou estender sua amplitude de movimento"
          ],
          passos: [
            "Sente no chão com suas pernas retas à sua frente",
            "Coloque seu pé direito ao lado do seu joelho esquerdo e cruze-o para que o pé fique do outro lado do joelho à sua esquerda",
            "Gire em direção à sua perna dobrada e coloque sua mão esquerda no seu lado direito. Coloque sua mão direita atrás de você",
            "Continue girando para sua direita o máximo que puder com segurança",
            "Respire normalmente e mantenha pelo tempo determinado",
            "Volte à posição inicial e faça exatamente o mesmo para o lado esquerdo",
            "Depois de fazer ambos os lados, descanse 30 segundos antes de repetir novamente"
          ],
          progressao: {
            maisDesafiador: [
              "Experimente lentamente dobrar sua perna reta para tornar este exercício mais difícil (veja Rotações com Joelho Dobrado)",
              "Não dobre sua perna pela metade e tente progredir dessa forma. Isso coloca pressão lateral desnecessária no joelho",
              "Dobre seu joelho completamente e tente girar com a postura adequada"
            ],
            maisFacil: [
              "Se você não consegue colocar sua mão do lado de fora do seu joelho, simplesmente girar sem envolver seus braços tornará este exercício mais fácil",
              "Você saberá que está progredindo quando conseguir colocar seu cotovelo do lado de fora do seu joelho"
            ]
          }
        },
        variations: [
          {
            name: "Rotação de quadril sentado com pernas cruzadas",
            videoUrl: "https://www.youtube.com/watch?v=kn4cMobFzI0",
            description: "3 séries de 60 segundos de cada lado"
          }
        ]
      }
    ];
    
    // Em seguida, vamos criar o arquivo exercises.ts atualizado com a nova estrutura