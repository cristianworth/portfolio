export const profile = {
  name: 'Cristian Weissmantel',
  github: 'https://github.com/cristianworth',
  linkedin: 'https://www.linkedin.com/in/cristian-weissmantel/',
};

export type Project = {
  id: string;
  name: string;
  category: string;
  status: string;
  description: string;
  focus: string;
  technologies: string[];
  code: string;
  demo?: string;
  demoNote?: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  caseSlug?: 'nextage-class' | 'worklog';
};

export const projects: Project[] = [
  {
    id: 'nextage',
    name: 'Nextage Class',
    category: 'Organização de aulas',
    status: 'Demo pública • piloto em desenvolvimento',
    description: 'Uma agenda que conecta cada aula à continuidade do aluno.',
    focus:
      'Planejamento, registro pedagógico e pedidos de horário para professores particulares de idiomas.',
    technologies: ['React', 'TypeScript', 'ASP.NET Core no piloto', 'PostgreSQL no piloto'],
    code: 'https://github.com/cristianworth/nextage-class',
    demo: 'https://cristianworth.github.io/nextage-class/',
    caseSlug: 'nextage-class',
    image: 'nextage',
    imageAlt: 'Nextage Class: agenda semanal e acompanhamento de alunos fictícios na demo pública.',
    imageWidth: 1440,
    imageHeight: 1416,
    demoNote:
      'Sem login. Dados fictícios neste navegador; o piloto com servidor é uma frente separada.',
  },
  {
    id: 'worklog',
    name: 'Worklog for Redmine',
    category: 'Rotina de trabalho',
    status: 'Demo pública com envio simulado',
    description: 'Horas organizadas. Envio consciente. Histórico preservado.',
    focus:
      'Recompor vários dias de trabalho, conferir os totais e revisar apontamentos antes do envio ao Redmine.',
    technologies: ['React', 'TypeScript', 'Node.js no modo local', 'SQLite no modo local'],
    code: 'https://github.com/cristianworth/worklog-for-redmine',
    caseSlug: 'worklog',
    demo: 'https://cristianworth.github.io/worklog-for-redmine/',
    demoNote:
      'Sem conta ou instalação. Dados fictícios e envio simulado; nenhum Redmine real é acessado.',
    image: 'worklog',
    imageAlt: 'Worklog: seleção de período, rascunhos e totais de horas com dados demonstrativos.',
    imageWidth: 1265,
    imageHeight: 2412,
  },
  {
    id: 'fitness',
    name: 'Fitness Lab',
    category: 'Treinos e alimentação',
    status: 'Demo pública com dados fictícios',
    description: 'Treinos, alimentação e evolução no mesmo diário.',
    focus:
      'Sessões retomáveis, histórico com contexto e backup dos registros armazenados no navegador.',
    technologies: ['React', 'TypeScript', 'IndexedDB'],
    code: 'https://github.com/cristianworth/fitness-lab',
    demo: 'https://cristianworth.github.io/fitness-lab/?mode=demo',
    demoNote:
      'Sem conta. Dados sintéticos em banco isolado no navegador; restauração mediante confirmação.',
    image: 'fitness',
    imageAlt: 'Fitness Lab: painel de treino e alimentação preenchido com dados sintéticos.',
    imageWidth: 1280,
    imageHeight: 1605,
  },
  {
    id: 'gacha',
    name: 'Gacha Management',
    category: 'Rotinas de jogos',
    status: 'Aplicação com perfis compartilhados',
    description: 'Calendários e recorrências a serviço da rotina.',
    focus:
      'Stamina, tarefas, eventos e banners por perfil, preservando escolhas manuais durante a sincronização.',
    technologies: ['JavaScript', 'HTML e CSS', 'PostgreSQL / Supabase'],
    code: 'https://github.com/cristianworth/GachaManagement-cloud',
    demoNote:
      'A versão online usa perfis públicos e banco compartilhado. Conheça o código e a prévia local documentada.',
    image: 'gacha',
    imageAlt: 'Gacha Management: painel com perfil Demo, stamina, tarefas e eventos fictícios.',
    imageWidth: 1440,
    imageHeight: 960,
  },
  {
    id: 'weather',
    name: 'Weather Lab',
    category: 'Dados e visualização',
    status: 'Aplicação pública com dados reais',
    description: 'Previsão do tempo com contexto para o dia.',
    focus: 'Busca por localidade, favoritos e gráficos horários de temperatura e chuva.',
    technologies: ['React', 'TypeScript', 'Open-Meteo'],
    code: 'https://github.com/cristianworth/weather-lab',
    demo: 'https://cristianworth.github.io/weather-lab/',
    demoNote:
      'Dados reais da Open-Meteo. A disponibilidade depende dos serviços de previsão e localização.',
    image: 'weather',
    imageAlt: 'Weather Lab: condições meteorológicas, previsão semanal e gráficos horários.',
    imageWidth: 1440,
    imageHeight: 1892,
  },
];

type CaseSection = { id: string; title: string; paragraphs: string[] };
export type CaseStudy = {
  slug: 'nextage-class' | 'worklog';
  projectId: string;
  title: string;
  introduction: string;
  context: string;
  flow: { title: string; text: string }[];
  decisions: { title: string; text: string; tradeoff: string }[];
  sections: CaseSection[];
  evidence: { label: string; url: string }[];
};

export const cases: CaseStudy[] = [
  {
    slug: 'nextage-class',
    projectId: 'nextage',
    title: 'Uma aula termina. A continuidade fica.',
    introduction:
      'Da agenda ao próximo encontro: transformar a rotina de uma professora particular em um fluxo de acompanhamento pedagógico.',
    context:
      'Para uma professora particular de idiomas, o horário é apenas uma parte da aula. É preciso recuperar o que foi trabalhado, conferir o homework, preparar materiais e decidir como continuar. O Nextage Class reúne esse contexto por aluno e inclui uma consulta simplificada para ele.',
    flow: [
      {
        title: 'Preparar',
        text: 'Consultar o histórico, o homework anterior e o material previsto para o próximo encontro.',
      },
      {
        title: 'Registrar',
        text: 'Salvar o conteúdo trabalhado e o homework, separando o que aconteceu da próxima unidade sugerida.',
      },
      {
        title: 'Dar continuidade',
        text: 'O aluno consulta seu histórico permitido e solicita um horário. A professora aprova ou recusa, com nova conferência de conflitos.',
      },
    ],
    decisions: [
      {
        title: 'Recorrência e ocorrência têm identidades próprias.',
        text: 'Uma série semanal define a repetição. Uma remarcação individual mantém sua própria identidade. Alterar esta e as próximas preserva aulas iniciadas e registros anteriores.',
        tradeoff:
          'Há mais regras de ocupação e edição para manter, mas uma mudança na agenda não reescreve o passado.',
      },
      {
        title: 'O progresso acompanha a cronologia dos registros.',
        text: 'Uma unidade pode ocupar vários encontros. A continuidade é calculada por aluno e sequência; editar uma aula antiga não sobrescreve automaticamente o progresso posterior. Cópias históricas guardam o contexto do material.',
        tradeoff:
          'É preciso tratar edições retroativas e snapshots, em troca de um histórico que continua compreensível quando o catálogo muda.',
      },
      {
        title: 'A consulta do aluno tem um contrato próprio.',
        text: 'A interface recebe os campos previstos para consulta. Notas livres da professora, planejamento e motivos de falta ficam fora desse contrato de leitura.',
        tradeoff:
          'Na demo, a separação organiza a experiência, mas o documento fictício inteiro está no navegador. A proteção entre contas pertence ao piloto com API e autenticação.',
      },
      {
        title: 'A demonstração pode evoluir sem depender do piloto.',
        text: 'React, TypeScript e Vite sustentam o fluxo demonstrativo. ASP.NET Core, PostgreSQL e autenticação compõem a evolução com servidor, com regras de acesso na API.',
        tradeoff:
          'São experiências com garantias diferentes. Publicar a demo não comprova que convites, recuperação de acesso e operação do piloto estejam validados.',
      },
    ],
    sections: [
      {
        id: 'validation',
        title: 'O que foi validado',
        paragraphs: [
          'A documentação registra a aprovação dos fluxos da professora e da simulação do aluno com a professora de referência, em outubro de 2026.',
          'Há um cenário automatizado documentado que percorre pedido semanal, aprovação, remarcação individual, registro da aula, consulta do aluno e recarga. Essas são evidências do projeto; os testes do produto não foram reexecutados para construir este portfólio.',
        ],
      },
      {
        id: 'limits',
        title: 'O que a demo não comprova',
        paragraphs: [
          'A demonstração usa dados fictícios e armazenamento no navegador. Não oferece autenticação real nem sincronização entre pessoas ou dispositivos. Um pedido pendente não reserva horário.',
          'O piloto tem trabalho de contas e convites implementado, mas mantém verificações integradas reais de acesso e etapas de persistência e operação em aberto. O projeto não é apresentado como serviço já operando com alunos reais.',
        ],
      },
      {
        id: 'participation',
        title: 'Minha participação e a da IA',
        paragraphs: [
          'Guio o produto, defino prioridades, acompanho decisões e valido os resultados com uma professora real. A rotina dela dá referência às regras e aos fluxos.',
          'A IA participa da implementação e das verificações. React, TypeScript e ASP.NET Core fazem parte do meu aprofundamento com assistência de IA; sua presença no projeto não representa domínio equivalente em toda a stack. O Nextage não tem funcionalidades de IA.',
        ],
      },
    ],
    evidence: [
      {
        label: 'Roteiro da demonstração pública',
        url: 'https://github.com/cristianworth/nextage-class/blob/master/docs/public-demo.md',
      },
      {
        label: 'Visão de produto e participação',
        url: 'https://github.com/cristianworth/nextage-class/blob/master/docs/product-vision.md',
      },
      {
        label: 'Arquitetura: demo e piloto',
        url: 'https://github.com/cristianworth/nextage-class/blob/master/docs/architecture.md',
      },
      {
        label: 'Continuidade pedagógica',
        url: 'https://github.com/cristianworth/nextage-class/blob/master/docs/course-progress.md',
      },
      {
        label: 'Pedidos de horário e aprovação',
        url: 'https://github.com/cristianworth/nextage-class/blob/master/docs/scheduling-requests.md',
      },
      {
        label: 'Aceite e cenário integrado',
        url: 'https://github.com/cristianworth/nextage-class/blob/master/docs/verification-2d.md',
      },
      {
        label: 'Verificações e limites do piloto',
        url: 'https://github.com/cristianworth/nextage-class/blob/master/docs/verification-3b.md',
      },
    ],
  },
  {
    slug: 'worklog',
    projectId: 'worklog',
    title: 'Salvar o trabalho. Revisar o envio.',
    introduction:
      'Um fluxo para recompor apontamentos de vários dias e lidar com o que acontece quando um envio ao Redmine termina pela metade.',
    context:
      'O Worklog nasce da minha rotina de reconstruir apontamentos de vários dias e enviá-los depois ao Redmine. Rascunhos por data, totais diários e revisão da seleção ajudam a separar duas intenções: guardar o trabalho e criar apontamentos no serviço externo.',
    flow: [
      {
        title: 'Recompor',
        text: 'Escolher um período e preencher tarefa, atividade, duração e observação. Conferir os totais e salvar os rascunhos.',
      },
      {
        title: 'Revisar',
        text: 'Selecionar linhas, um dia ou os pendentes salvos do período. Confirmar explicitamente o que será enviado.',
      },
      {
        title: 'Conferir',
        text: 'Acompanhar o processamento e seus recibos. Preservar sucessos e investigar resultados incertos antes de tentar novamente.',
      },
    ],
    decisions: [
      {
        title: 'Um banco embutido para uma ferramenta pessoal.',
        text: 'O modo local usa Express e SQLite. O banco dispensa a instalação de outro serviço e oferece transações para guardar rascunhos.',
        tradeoff:
          'Uma transação local não desfaz chamadas já concluídas na API do Redmine. O modo local também não é um servidor multiusuário.',
      },
      {
        title: 'Durações viram minutos inteiros.',
        text: 'A entrada compacta aceita 30 como 00:30 e 130 como 01:30. Internamente, o domínio soma minutos inteiros.',
        tradeoff:
          'A entrada precisa de validação clara, mas os totais não dependem de aritmética de ponto flutuante para representar frações de hora.',
      },
      {
        title: 'Validar o lote; preservar o resultado parcial.',
        text: 'A seleção inteira é validada antes da primeira criação. A execução é sequencial, para na primeira falha e mantém os sucessos. O início de cada tentativa é persistido antes da chamada remota.',
        tradeoff:
          'A execução não é atômica no serviço externo. O aplicativo precisa representar o que já foi criado e o que ainda não foi enviado.',
      },
      {
        title: 'Um resultado incerto pede leitura antes de repetição.',
        text: 'Uma falha de resposta pode ocorrer depois da criação remota. O recibo fica protegido e a reconciliação consulta o serviço, sem repetir automaticamente o envio.',
        tradeoff:
          'Isso exige uma etapa de conferência. O projeto não promete idempotência remota nem impede outro aplicativo de criar registros simultaneamente.',
      },
      {
        title: 'Uma interface, dois modos de acesso a dados.',
        text: 'Um contrato tipado conecta a interface à API local ou à simulação no navegador. O build da demo exclui módulos de servidor, chamadas HTTP operacionais e arquivos privados; o projeto audita esse artefato.',
        tradeoff:
          'A demo mostra o fluxo com resultados simulados. Ela não comprova uma integração real com o Redmine de quem a visita.',
      },
    ],
    sections: [
      {
        id: 'validation',
        title: 'O que foi validado',
        paragraphs: [
          'Os guias registram edição, salvamento, recarga, restauração de exemplos, teclado, telas estreitas e cenários de falha com recibos. O changelog v0.9.0, de outubro de 2026, documenta as verificações daquela entrega.',
          'No modo local, houve verificações autorizadas de criação e leitura correspondente no Redmine, com confirmação visual. Isso não comprova compatibilidade com todas as atividades, permissões e customizações. São evidências históricas do projeto, não testes de integração executados por este site.',
        ],
      },
      {
        id: 'limits',
        title: 'Limites que fazem parte do fluxo',
        paragraphs: [
          'A demo não acessa Redmine, API local nem banco privado. O envio é simulado e os dados ficam no navegador; limpar os dados do site remove esses registros.',
          'Recarregar não retoma automaticamente um lote interrompido. A aplicação preserva os recibos para conferência. O retorno de visitantes independentes ainda é uma validação a coletar.',
        ],
      },
      {
        id: 'participation',
        title: 'Minha participação e a da IA',
        paragraphs: [
          'O projeto parte da minha rotina de apontamentos. Defini o fluxo, as restrições de uso e validei os resultados, com assistência de IA no desenvolvimento.',
          'A implementação reúne ferramentas que estou aprofundando nos projetos pessoais. Os documentos registram as decisões e seus limites; não atribuo a mim autoria individual de toda a implementação ou domínio consolidado de toda a stack.',
        ],
      },
    ],
    evidence: [
      {
        label: 'Arquitetura e trade-offs',
        url: 'https://github.com/cristianworth/worklog-for-redmine/blob/master/docs/architecture.md',
      },
      {
        label: 'Contrato e isolamento da demo',
        url: 'https://github.com/cristianworth/worklog-for-redmine/blob/master/docs/data-access.md',
      },
      {
        label: 'Envio em lote e recuperação',
        url: 'https://github.com/cristianworth/worklog-for-redmine/blob/master/docs/batch-submission.md',
      },
      {
        label: 'Decisões e validações',
        url: 'https://github.com/cristianworth/worklog-for-redmine/blob/master/docs/project-decisions.md',
      },
      {
        label: 'Histórico de entregas',
        url: 'https://github.com/cristianworth/worklog-for-redmine/blob/master/CHANGELOG.md',
      },
    ],
  },
];
