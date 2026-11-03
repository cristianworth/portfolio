# Fontes e limites editoriais

Conferência inicial: 29/10/2026. Relatos históricos foram cruzados com os READMEs e guias atuais. Os demais repositórios serviram somente para leitura; nenhuma alteração foi feita neles.

## Experiência profissional

O inventário fornecido por Cristian e os chats “Planejar evolução do portfólio” e “Planejar projeto de tracking” sustentam C#/.NET Framework, ASP.NET MVC/Razor, JavaScript/jQuery, SQL Server, NHibernate, debugger, Kibana, NUnit, SVN, Redmine e uso da CI com TeamCity.

O site não publica o inventário bruto, transcrições, nomes de clientes, chamados, código proprietário, resultados pendentes ou documentos de trabalho. Execução recorrente de testes e escrita pontual são distintas; uso da CI não é configuração. Datas de carreira, formação e resultados não confirmados continuam omitidos.

## Alinhamento de apresentação — 01/11/2026

A conversa “cristianworth readme”, consultada nesta revisão, confirma o cargo **Desenvolvedor Pleno**, a atuação na **LG lugar de gente**, o contato público por e-mail e a inclusão das tecnologias dos projetos pessoais nas skills. O README atual é a referência para os quatro grupos: Backend, Frontend, Dados e persistência, Ferramentas e qualidade.

A apresentação usa nome, cargo e tecnologias, com descrições diretas. Frases de campanha foram retiradas da abertura, títulos, rodapé e compartilhamento. As stacks são agrupadas por área, reunindo trabalho e projetos pessoais; não são tratadas como habilidades menores por terem sido usadas com apoio de IA. A participação humana e a assistência de IA continuam descritas de forma objetiva nos cases e créditos, sem ressalvas repetidas sobre capacidade de programar.

O interesse declarado é **inteligência artificial aplicada ao desenvolvimento de software e integração de LLMs em aplicações**. RAG e MCP não foram promovidos a experiência adquirida.

## Projetos

| Projeto                                                         | Fontes principais                                                                                                                       | Limite aplicado                                                                                                                                                                                |
| --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Nextage](https://github.com/cristianworth/nextage-class)       | `docs/product-vision.md`, `architecture.md`, `course-progress.md`, `scheduling-requests.md`, `verification-2d.md`, `verification-3b.md` | Demo fictícia separada do piloto. Sem inferir autenticação segura na simulação ou piloto operando com alunos reais.                                                                            |
| [Worklog](https://github.com/cristianworth/worklog-for-redmine) | `docs/architecture.md`, `data-access.md`, `batch-submission.md`, `project-decisions.md`, changelog                                      | Demo isolada, envio simulado, recibos protegidos; sem promessa de idempotência remota ou integração universal.                                                                                 |
| [Fitness](https://github.com/cristianworth/fitness-lab)         | README, `docs/architecture.md`, `development.md`, `validation.md`, `public-demo.md`, NOTICE                                             | Persistência local, dados sintéticos. Captura não comprova publicação.                                                                                                                         |
| [Gacha](https://github.com/cristianworth/GachaManagement-cloud) | README, `docs/public-demo.md`, `docs/portfolio-demo-prompt.md`, guias de sincronização e `docs/sangonomiya-design-plan.md`              | Demo pública isolada em `/demo/`, com PGlite/IndexedDB local e catálogo da API atualizado diariamente. Banners/avisos demonstrativos; perfil Demo da aplicação normal permanece compartilhado. |
| [Weather](https://github.com/cristianworth/weather-lab)         | README, captura e créditos da API                                                                                                       | Dados reais dependem de serviços. Screenshot é histórico.                                                                                                                                      |
| [OCR](https://github.com/cristianworth/gacha-ocr-lab)           | README e exclusão de imagens pessoais no `.gitignore`                                                                                   | Laboratório, sem anunciar inventário aceito ou copiar imagens locais não publicadas.                                                                                                           |

As contagens históricas de testes dos projetos não são apresentadas como verificações deste portfólio. As fontes detalhadas estão linkadas nos cases para o visitante poder aprofundar.

## Pendências factuais para Cristian

Não impedem a publicação:

- Confirmar trajetória e datas profissionais antes de incluir linha do tempo.
- Confirmar entregas efetivamente liberadas e seus resultados antes de adicionar cases profissionais.
- Esclarecer frequência de autoria de testes, adoção do padrão de commits pelo time e atuação em procedures/funções SQL, caso queira aprofundar essas áreas.
- Disponibilizar currículo revisado se desejar um link de download.
- Autorizar um exemplo público do OCR antes de incluir captura.

As demos de Nextage e Fitness foram publicadas pelos respectivos projetos durante esta entrega. As URLs documentadas foram abertas e verificadas antes de serem incorporadas. O parâmetro `?mode=demo` do Fitness entra diretamente no banco fictício isolado.

Em 03/11/2026, o Gacha Management passou a oferecer a demo pública isolada da versão 1.20.0, HEAD `f0d5d46`. O retorno do projeto informa 702 testes completos, CI Windows/Linux e deploy aprovados; esses testes não foram reexecutados pelo portfólio. A demonstração preserva o progresso por navegador, permite restaurar exemplos e não acessa o banco pessoal. Eventos vencidos ou sem capa própria ficam ocultos; banners e avisos são demonstrativos. A primeira abertura pode demorar, e limpar o armazenamento remove o progresso. A captura do card permanece a prévia local fictícia documentada na página de créditos.
