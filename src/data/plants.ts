export interface Plant {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  category: string;
  dossier: {
    structuralAnalysis: string;
    fluidDynamics: {
      capillarity: string;
      evapotranspiration: string;
    };
    geometry: string;
    specs: {
      light: string;
      humidity: string;
      growth: string;
    };
    detailImage: string;
  };
}

export const PLANTS: Plant[] = [
  {
    id: 'monstera-deliciosa',
    title: 'Monstera deliciosa',
    subtitle: 'Engenharia de Luz Difusa',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=2000&auto=format&fit=crop',
    category: 'Análise Técnica',
    dossier: {
      structuralAnalysis: 'A Monstera deliciosa opera como uma rede de captação de fótons otimizada. Suas fenestrações (buracos) não são aleatórias; são algoritmos biológicos que permitem que a luz passe para as folhas inferiores enquanto reduzem a carga mecânica do vento.',
      fluidDynamics: {
        capillarity: 'Sistema de transporte de xilema capaz de elevar nutrientes a até 20 metros em seu habitat natural, utilizando pressão negativa e coesão molecular.',
        evapotranspiration: 'Regulação térmica ativa através dos estômatos, mantendo a temperatura foliar até 4°C abaixo da temperatura ambiente em picos de calor.'
      },
      geometry: 'A disposição das folhas segue a sequência de Fibonacci, garantindo que nenhuma folha bloqueie completamente a outra. É uma solução de engenharia para o problema de empilhamento espacial em ambientes de baixa luminosidade.',
      specs: {
        light: '1500-2500 lux',
        humidity: '> 60%',
        growth: '0.8m / ano'
      },
      detailImage: 'https://images.unsplash.com/photo-1597072689227-8882273e8f6a?q=80&w=1000&auto=format&fit=crop'
    }
  },
  {
    id: 'samambaia-nephrolepis',
    title: 'Nephrolepis exaltata',
    subtitle: 'Sistemas Fractais de Alta Umidade',
    image: 'https://images.unsplash.com/photo-1595224326116-17b545d9e504?q=80&w=2000&auto=format&fit=crop',
    category: 'Análise Primitiva',
    dossier: {
      structuralAnalysis: 'Apresenta uma arquitetura fractal rigorosa onde cada fronde replica a estrutura da folha principal. Este design maximiza exponencialmente a área de superfície para captação de umidade e fótons em ambientes de sub-bosque denso.',
      fluidDynamics: {
        capillarity: 'Rede vascular primitiva, porém altamente eficiente, projetada para transporte rápido de fluidos em ambientes saturados. Ausência de tecidos lenhosos complexos.',
        evapotranspiration: 'Possui uma taxa de transpiração altíssima, atuando como umidificador natural e regulador microclimático do ambiente ao seu redor.'
      },
      geometry: 'Simetria bilateral com subdivisões fractais recursivas. A curvatura das frondes segue catenárias naturais sob a influência da gravidade e peso da água.',
      specs: {
        light: '800-1500 lux',
        humidity: '> 70%',
        growth: 'Rápido (Contínuo)'
      },
      detailImage: 'https://images.unsplash.com/photo-1605553634123-5e5e6e33658d?q=80&w=1000&auto=format&fit=crop'
    }
  },
  {
    id: 'sansevieria-trifasciata',
    title: 'Sansevieria trifasciata',
    subtitle: 'Resiliência Estrutural e Purificação CAM',
    image: 'https://images.unsplash.com/photo-1598880940080-c9a108269151?q=80&w=2000&auto=format&fit=crop',
    category: 'Otimização Metabólica',
    dossier: {
      structuralAnalysis: 'Folhas verticalizadas e extremamente rígidas com alta concentração de fibras esclerenquimáticas. Projetadas estruturalmente para resistir a estresse mecânico severo e períodos prolongados de seca (estresse hídrico).',
      fluidDynamics: {
        capillarity: 'Armazenamento hídrico de alta densidade no mesofilo esponjoso. O sistema radicular atua como âncora e reservatório secundário.',
        evapotranspiration: 'Utiliza o Metabolismo Ácido das Crassuláceas (CAM). Os estômatos abrem exclusivamente à noite para trocas gasosas, minimizando a perda de água por evaporação diurna.'
      },
      geometry: 'Crescimento vertical cilíndrico ou plano-lanceolado. Esta geometria minimiza a área de superfície exposta à radiação solar direta durante o pico do meio-dia.',
      specs: {
        light: '500-5000 lux',
        humidity: 'Tolerante (Baixa)',
        growth: '0.2m / ano'
      },
      detailImage: 'https://images.unsplash.com/photo-1614594805320-e8cb404503e0?q=80&w=1000&auto=format&fit=crop'
    }
  },
  {
    id: 'begonia-maculata',
    title: 'Begônia Maculata',
    subtitle: 'Fotônica Foliar e Pigmentação',
    image: 'https://images.unsplash.com/photo-1612363228103-b09a081c782b?q=80&w=2000&auto=format&fit=crop',
    category: 'Engenharia Óptica',
    dossier: {
      structuralAnalysis: 'As máculas (pontos prateados) na superfície adaxial atuam como micro-refletores ópticos. O verso da folha, rico em antocianinas (vermelho), funciona como um espelho biológico, refletindo fótons não absorvidos de volta para o mesofilo fotossintético.',
      fluidDynamics: {
        capillarity: 'Caules suculentos e nodosos adaptados para armazenamento temporário de água, compensando flutuações rápidas na umidade do solo.',
        evapotranspiration: 'Altamente sensível a correntes de ar convectivas. Exige um microclima estável para evitar o colapso do gradiente de pressão de vapor nas bordas das folhas.'
      },
      geometry: 'Folhas fortemente assimétricas (formato "asa de anjo"). Esta assimetria é otimizada para que as folhas superiores não sombreiem perfeitamente as inferiores no eixo de crescimento helicoidal.',
      specs: {
        light: '1000-2000 lux',
        humidity: '> 60%',
        growth: 'Moderado'
      },
      detailImage: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=1000&auto=format&fit=crop'
    }
  },
  {
    id: 'ficus-lyrata-bambino',
    title: "Ficus lyrata 'Bambino'",
    subtitle: 'Otimização de Área Foliar e Fototropismo',
    image: 'https://images.unsplash.com/photo-1610450947065-2c9df7b2fa1a?q=80&w=2000&auto=format&fit=crop',
    category: 'Adaptação Morfológica',
    dossier: {
      structuralAnalysis: 'A variante "Bambino" apresenta um nanismo genético que condensa a rede vascular e aumenta a densidade foliar. Suas folhas coriáceas em formato de lira possuem uma cutícula espessa, projetada para resistir a correntes de ar enquanto maximiza a captação de luz em espaços confinados.',
      fluidDynamics: {
        capillarity: 'Sistema xilemático altamente responsivo a ciclos de seca e inundação. Requer um gradiente de secagem no substrato para evitar asfixia radicular e edema foliar (rompimento celular por excesso de pressão hídrica).',
        evapotranspiration: 'Possui estômatos de grande calibre na face abaxial, resultando em rápida perda de umidade em ambientes secos. Exige monitoramento rigoroso do Déficit de Pressão de Vapor (VPD) para evitar necrose nas bordas.'
      },
      geometry: 'Crescimento apical dominante com filotaxia espiralada. A sobreposição das folhas é minimizada pelo fototropismo ativo, onde os pecíolos realizam torção mecânica (fototropismo positivo) para alinhar a lâmina foliar perpendicularmente à fonte de luz primária.',
      specs: {
        light: '2500-4000 lux',
        humidity: '> 55%',
        growth: '0.3m / ano'
      },
      detailImage: 'https://images.unsplash.com/photo-1620127393452-927907570498?q=80&w=1000&auto=format&fit=crop'
    }
  },
  {
    id: 'alocasia-regal',
    title: "Alocasia 'Regal Shields'",
    subtitle: 'Engenharia de Pigmentação e Escudo Foliar',
    image: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?q=80&w=2000&auto=format&fit=crop',
    category: 'Análise Técnica',
    dossier: {
      structuralAnalysis: 'Uma obra-prima de design estrutural, a Regal Shields apresenta folhas em formato de escudo com uma textura coriácea. Sua pigmentação escura (quase negra) na face adaxial é uma adaptação para absorver o máximo de radiação em ambientes de sombra profunda, enquanto as nervuras proeminentes garantem a integridade mecânica contra o peso da água.',
      fluidDynamics: {
        capillarity: 'Pecíolos robustos com canais vasculares de grande calibre, permitindo o transporte rápido de seiva para sustentar a enorme área foliar.',
        evapotranspiration: 'Alta taxa de transpiração controlada por estômatos sensíveis. Requer umidade atmosférica constante para evitar o murchamento das bordas.'
      },
      geometry: 'As folhas se posicionam em ângulos agudos para facilitar o escoamento de água (guta), prevenindo o acúmulo de patógenos fúngicos na superfície.',
      specs: {
        light: '1500-3000 lux',
        humidity: '> 70%',
        growth: '0.5m / ano'
      },
      detailImage: 'https://images.unsplash.com/photo-1637500923330-804975765957?q=80&w=1000&auto=format&fit=crop'
    }
  },
  {
    id: 'bonsai-jabuticaba',
    title: 'Plinia cauliflora (Bonsai)',
    subtitle: 'Miniaturização e Frutificação Cauliflora',
    image: 'https://images.unsplash.com/photo-1521033332975-77faa1c032c7?q=80&w=2000&auto=format&fit=crop',
    category: 'Engenharia de Bonsai',
    dossier: {
      structuralAnalysis: 'O bonsai de Jabuticaba é um estudo em resiliência e adaptação. Através de técnicas de poda e aramação, a árvore mantém uma estrutura lenhosa complexa em escala reduzida. Sua característica mais notável é a caulifloria, onde flores e frutos emergem diretamente do tronco principal e galhos maduros.',
      fluidDynamics: {
        capillarity: 'Sistema radicular confinado que exige um substrato de alta drenagem e porosidade para manter o fluxo constante de nutrientes em um volume limitado de solo.',
        evapotranspiration: 'Folhas pequenas e densas que realizam trocas gasosas eficientes, exigindo regas frequentes devido à baixa reserva hídrica do vaso de bonsai.'
      },
      geometry: 'A copa é moldada seguindo princípios estéticos clássicos (Moyogi ou Chokkan), buscando o equilíbrio visual e a distribuição uniforme da luz entre os galhos internos.',
      specs: {
        light: 'Pleno Sol / Meia Sombra',
        humidity: 'Moderada',
        growth: 'Lento (Controlado)'
      },
      detailImage: 'https://images.unsplash.com/photo-1599591037488-3a5691d815ad?q=80&w=1000&auto=format&fit=crop'
    }
  },
  {
    id: 'bonsai-pitanga',
    title: 'Eugenia uniflora (Bonsai)',
    subtitle: 'Arquitetura de Copa e Resiliência Lenhosa',
    image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?q=80&w=2000&auto=format&fit=crop',
    category: 'Engenharia de Bonsai',
    dossier: {
      structuralAnalysis: 'A Pitangueira em miniatura destaca-se pelo seu tronco descamante e folhas que mudam de cor conforme a estação e intensidade luminosa. Sua estrutura é altamente flexível na juventude, permitindo criações artísticas complexas, mas torna-se extremamente rígida e resistente com a idade.',
      fluidDynamics: {
        capillarity: 'Vascularização eficiente que suporta a produção de frutos carnosos mesmo em condições de cultivo restrito.',
        evapotranspiration: 'As folhas jovens apresentam tons avermelhados, uma proteção natural contra o excesso de radiação UV enquanto o sistema fotossintético se estabiliza.'
      },
      geometry: 'Desenvolvimento de ramificação fina (ramificação secundária e terciária) que cria uma silhueta naturalista, mimetizando árvores centenárias em escala minúscula.',
      specs: {
        light: 'Pleno Sol',
        humidity: 'Moderada',
        growth: 'Moderado (Controlado)'
      },
      detailImage: 'https://images.unsplash.com/photo-1590005354167-6da97870c912?q=80&w=1000&auto=format&fit=crop'
    }
  },
  {
    id: 'comigo-ninguem-pode',
    title: 'Dieffenbachia seguine',
    subtitle: 'Defesa Química e Estrutura Celular',
    image: 'https://images.unsplash.com/photo-1631501433336-303147750211?q=80&w=2000&auto=format&fit=crop',
    category: 'Análise Biológica',
    dossier: {
      structuralAnalysis: 'A Dieffenbachia é famosa por sua estratégia de defesa passiva: a presença de cristais de oxalato de cálcio em forma de agulha (ráfides) em seus tecidos. Estruturalmente, possui caules carnosos e eretos que suportam folhas largas com variados padrões de variegação.',
      fluidDynamics: {
        capillarity: 'Transporte de seiva rico em alcaloides e compostos defensivos. O sistema vascular é robusto, permitindo a sobrevivência em solos com baixa oxigenação.',
        evapotranspiration: 'Taxa moderada de transpiração. As folhas largas captam poeira atmosférica, exigindo limpeza periódica para manter a eficiência dos estômatos.'
      },
      geometry: 'Crescimento vertical com folhas dispostas de forma alternada, maximizando a exposição à luz em ambientes de sombra parcial.',
      specs: {
        light: 'Meia Sombra',
        humidity: '50-70%',
        growth: '0.4m / ano'
      },
      detailImage: 'https://images.unsplash.com/photo-1614594805320-e8cb404503e0?q=80&w=1000&auto=format&fit=crop'
    }
  },
  {
    id: 'jiboia',
    title: 'Epipremnum aureum',
    subtitle: 'Versatilidade Vascular e Trepadeira Adaptativa',
    image: 'https://images.unsplash.com/photo-1599209248411-5ee2e09147ef?q=80&w=2000&auto=format&fit=crop',
    category: 'Otimização de Espaço',
    dossier: {
      structuralAnalysis: 'A Jiboia é uma das plantas mais resilientes do Herbário. Suas raízes adventícias permitem que ela escale superfícies ou cresça de forma pendente. Em seu estado maduro, as folhas podem desenvolver fenestrações similares à Monstera, demonstrando uma plasticidade morfológica impressionante.',
      fluidDynamics: {
        capillarity: 'Capacidade extraordinária de transporte hídrico através de longas extensões de caule, mantendo a turgidez mesmo em extremidades distantes da raiz principal.',
        evapotranspiration: 'Eficiente purificadora de ar, capaz de filtrar compostos orgânicos voláteis (VOCs) enquanto mantém um ciclo hídrico estável.',
      },
      geometry: 'Crescimento em trepadeira com filotaxia alternada. A planta ajusta o tamanho de suas folhas proporcionalmente à disponibilidade de luz e suporte vertical.',
      specs: {
        light: '500-3000 lux',
        humidity: 'Tolerante',
        growth: 'Rápido (> 1m / ano)'
      },
      detailImage: 'https://images.unsplash.com/photo-1592150621344-c7a4c422d475?q=80&w=1000&auto=format&fit=crop'
    }
  }
];
