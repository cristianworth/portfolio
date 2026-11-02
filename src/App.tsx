import { useRef, useState } from 'react';
import { cases, profile, projects, stackGroups, type CaseStudy, type Project } from './content';

const base = import.meta.env.BASE_URL;
export const asset = (path: string) => `${base}assets/${path}`;
export const caseUrl = (slug: string) => `${base}cases/${slug}/`;

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg aria-hidden="true" width="19" height="19" viewBox="0 0 24 24" fill="none">
      <path
        d={diagonal ? 'M6 18 18 6M6 6h12v12' : 'M4 12h15m-6-6 6 6-6 6'}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="m8 7-5 5 5 5m8-10 5 5-5 5M14 4l-4 16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExternalLink({
  href,
  children,
  className = '',
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a href={href} className={className}>
      {children}
      <Arrow diagonal />
    </a>
  );
}

function Header({ isCase }: { isCase: boolean }) {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="wordmark" href={base} aria-label="Cristian Weissmantel, início">
          <span className="monogram" aria-hidden="true">
            cw<span>.</span>
          </span>
          <span>
            Cristian
            <br />
            <strong>Weissmantel</strong>
          </span>
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-label={open ? 'Fechar navegação' : 'Abrir navegação'}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Fechar' : 'Menu'}
          <span aria-hidden="true">{open ? '−' : '+'}</span>
        </button>
        <nav
          id="main-nav"
          aria-label="Navegação principal"
          className={open ? 'main-nav is-open' : 'main-nav'}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              e.preventDefault();
              setOpen(false);
              toggle.current?.focus();
            }
          }}
        >
          <a onClick={() => setOpen(false)} href={`${base}#projetos`}>
            Projetos
          </a>
          <a onClick={() => setOpen(false)} href={`${base}#experiencia`}>
            Experiência
          </a>
          <a onClick={() => setOpen(false)} href={`${base}#sobre`}>
            Sobre
          </a>
          <a onClick={() => setOpen(false)} className="nav-contact" href={`${base}#contato`}>
            Vamos conversar <Arrow diagonal />
          </a>
        </nav>
        {isCase && <span className="sr-only">Estudo de caso</span>}
      </div>
    </header>
  );
}

function ProjectImage({
  project,
  priority = false,
  className = '',
}: {
  project: Project;
  priority?: boolean;
  className?: string;
}) {
  return (
    <img
      className={className}
      src={asset(`${project.image}-1280.webp`)}
      srcSet={`${asset(`${project.image}-640.webp`)} 640w, ${asset(`${project.image}-1280.webp`)} 1280w`}
      sizes="(max-width: 700px) 92vw, (max-width: 1100px) 60vw, 800px"
      alt={project.imageAlt}
      width={project.imageWidth}
      height={project.imageHeight}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
    />
  );
}

function Hero() {
  const [selected, setSelected] = useState(0);
  const project = projects[selected];
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="intro-label">
            <span aria-hidden="true" />
            {profile.role}
          </p>
          <h1 id="hero-title" className="hero-name">
            Cristian
            <br />
            Weissmantel
          </h1>
          <p className="hero-description">
            Experiência em <strong>C#/.NET</strong>, desenvolvimento web e bancos de dados
            relacionais. Também utilizo React, TypeScript e Node.js nos meus projetos.
          </p>
          <ul className="hero-stack" aria-label="Principais tecnologias">
            {['C# / .NET', 'React', 'TypeScript', 'SQL Server', 'PostgreSQL'].map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
          <div className="hero-actions">
            <a className="button button-cyan" href="#projetos">
              Explorar projetos <Arrow />
            </a>
            <a className="quiet-link" href={profile.github}>
              GitHub <CodeIcon />
            </a>
          </div>
          <p className="hero-footnote">Atualmente na {profile.company}.</p>
        </div>
        <div className="hero-showcase">
          <div className="showcase-caption">
            <span>Projetos em destaque</span>
            <span aria-hidden="true">0{selected + 1} / 02</span>
          </div>
          <a
            className={`showcase-window ${project.id}`}
            href={caseUrl(project.caseSlug!)}
            aria-label={`Ler o case ${project.name}`}
          >
            <div className="window-bar" aria-hidden="true">
              <span />
              <span />
              <span />
              <b>{project.name}</b>
              <Arrow diagonal />
            </div>
            <div className="hero-screen">
              <ProjectImage project={project} priority />
            </div>
          </a>
          <div className="showcase-bottom">
            <div>
              <span className="small-label">Em foco</span>
              <h2>{project.name}</h2>
            </div>
            <a
              href={caseUrl(project.caseSlug!)}
              className="round-link"
              aria-label={`Conhecer as decisões do ${project.name}`}
            >
              <Arrow />
            </a>
          </div>
          <div className="project-switch" aria-label="Projeto em destaque">
            {projects.slice(0, 2).map((item, index) => (
              <button
                key={item.id}
                aria-pressed={selected === index}
                onClick={() => setSelected(index)}
              >
                <span aria-hidden="true">0{index + 1}</span>
                {item.name}
              </button>
            ))}
          </div>
          <p className="showcase-note">Capturas reais dos produtos, com dados demonstrativos.</p>
        </div>
      </div>
    </section>
  );
}

function ProjectActions({ project }: { project: Project }) {
  return (
    <div className="project-actions">
      {project.caseSlug && (
        <a className="button button-ink" href={caseUrl(project.caseSlug)}>
          Ler o case <Arrow />
        </a>
      )}
      {project.demo && (
        <ExternalLink className="text-link" href={project.demo}>
          Experimentar {project.id === 'weather' ? 'aplicação' : 'demo'}
        </ExternalLink>
      )}
      <ExternalLink className="text-link code-link" href={project.code}>
        Ver código
      </ExternalLink>
    </div>
  );
}

function FeaturedProject({ project, number }: { project: Project; number: string }) {
  return (
    <article className={`featured-project ${project.id}`} aria-labelledby={`title-${project.id}`}>
      <div className="project-visual">
        <div className="visual-label">
          <span>{number}</span>
          <span>{project.category}</span>
        </div>
        <a
          className="product-capture"
          href={caseUrl(project.caseSlug!)}
          aria-label={`Ler case ${project.name}`}
        >
          <ProjectImage project={project} />
        </a>
        <span className="capture-label">Interface do produto / dados fictícios</span>
      </div>
      <div className="project-copy">
        <p className="project-status">
          <span aria-hidden="true" />
          {project.status}
        </p>
        <h3 id={`title-${project.id}`}>{project.name}</h3>
        <p className="project-premise">{project.description}</p>
        <p>{project.focus}</p>
        <ul className="tech-list" aria-label={`Tecnologias de ${project.name}`}>
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <ProjectActions project={project} />
        <p className="demo-note">{project.demoNote}</p>
      </div>
    </article>
  );
}

function MoreProject({ project }: { project: Project }) {
  return (
    <article className={`more-project ${project.id}`} aria-labelledby={`title-${project.id}`}>
      <a
        className="mini-capture"
        href={project.code}
        aria-label={`Conhecer o código de ${project.name}`}
      >
        <ProjectImage project={project} />
      </a>
      <div className="more-project-copy">
        <p className="small-label">{project.category}</p>
        <h3 id={`title-${project.id}`}>{project.name}</h3>
        <p>{project.description}</p>
        <p className="project-detail">{project.focus}</p>
        <ul className="tech-list">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <p className="compact-status">{project.status}</p>
        <ProjectActions project={project} />
        <p className="demo-note">{project.demoNote}</p>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section
      id="projetos"
      className="projects-section section-space"
      aria-labelledby="projects-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Portfólio</p>
            <h2 id="projects-title">Projetos em destaque</h2>
          </div>
          <p>Conheça as aplicações, experimente as demos e leia as decisões técnicas nos cases.</p>
        </div>
        {projects.slice(0, 2).map((project, i) => (
          <FeaturedProject key={project.id} project={project} number={`0${i + 1}`} />
        ))}
        <div className="more-heading">
          <h2>Outros projetos</h2>
          <p>Treinos, rotinas de jogos e previsão do tempo.</p>
        </div>
        <div className="more-grid">
          {projects.slice(2).map((project) => (
            <MoreProject key={project.id} project={project} />
          ))}
        </div>
        <article className="lab">
          <div className="lab-symbol" aria-hidden="true">
            <CodeIcon />
          </div>
          <div>
            <p className="small-label">Laboratório local</p>
            <h3>Gacha OCR Lab</h3>
            <p>
              Imagem, OCR regional, campos estruturados e revisão humana. Um espaço para investigar
              extração de dados, com incertezas e limites documentados.
            </p>
            <span className="lab-tech">JavaScript e Python em pilotos distintos</span>
          </div>
          <ExternalLink className="text-link" href="https://github.com/cristianworth/gacha-ocr-lab">
            Explorar laboratório
          </ExternalLink>
        </article>
      </div>
    </section>
  );
}

const experience = [
  {
    number: '01',
    title: 'Aplicações web',
    text: 'Manutenção evolutiva e corretiva de software corporativo. Trabalho com serviços e regras de negócio em C#/.NET Framework, com participação na interface em ASP.NET MVC, Razor e JavaScript/jQuery.',
    tools: 'C# / .NET Framework / ASP.NET MVC',
  },
  {
    number: '02',
    title: 'Dados e manutenção',
    text: 'Reprodução local, debugger, consultas SQL e logs no Kibana para entender defeitos. Persistência com NHibernate e SQL Server, respeitando os contratos entre módulos.',
    tools: 'SQL Server / NHibernate / Kibana',
  },
  {
    number: '03',
    title: 'Testes e entrega',
    text: 'Execução de testes com NUnit e escrita pontual de testes de regras, validação manual estruturada, versionamento com SVN e rastreabilidade no Redmine. Uso da CI existente com TeamCity para conferir as entregas.',
    tools: 'NUnit / SVN / Redmine / uso de TeamCity',
  },
];

function Experience() {
  return (
    <section
      id="experiencia"
      className="experience-section section-space"
      aria-labelledby="experience-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Experiência profissional</p>
            <h2 id="experience-title">
              {profile.role}
              <br />
              <span>{profile.company}</span>
            </h2>
          </div>
          <p>
            Atuação na manutenção e evolução de aplicações web, com serviços, regras de negócio,
            persistência e análise de requisitos.
          </p>
        </div>
        <div className="experience-list">
          {experience.map((item) => (
            <article key={item.number}>
              <span className="experience-number" aria-hidden="true">
                {item.number}
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <p className="experience-tools">{item.tools}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="experience-note">
          Também participo da análise de requisitos e da definição de escopo junto a Produto,
          suporte e gestão, conectando a necessidade ao comportamento esperado.
        </p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="about-section section-space" aria-labelledby="about-title">
      <div className="container">
        <div className="about-grid">
          <div>
            <p className="section-kicker">Sobre mim</p>
            <h2 id="about-title">Desenvolvimento web e software corporativo</h2>
          </div>
          <div className="about-copy">
            <p>
              Sou desenvolvedor pleno na LG lugar de gente. Tenho experiência com C#/.NET,
              aplicações web e bancos de dados relacionais.
            </p>
            <p>
              Trabalho com ASP.NET MVC, SQL Server e NHibernate e também utilizo ASP.NET Core,
              React, TypeScript e Node.js nos meus projetos. Minha experiência reúne manutenção de
              aplicações e desenvolvimento de ferramentas para aulas, apontamentos de horas e
              rotinas pessoais.
            </p>
            <p>
              No dia a dia, utilizo Git/SVN, testes automatizados e integração contínua. Tenho
              interesse em inteligência artificial aplicada ao desenvolvimento de software e
              integração de LLMs em aplicações.
            </p>
          </div>
        </div>
        <div id="tecnologias" className="stack-section">
          <h2>Tecnologias</h2>
          <p>Tecnologias e ferramentas que utilizo no trabalho e nos projetos.</p>
          <div className="stack-grid">
            {stackGroups.map((group) => (
              <article key={group.name}>
                <h3>{group.name}</h3>
                <ul className="stack-tags" aria-label={group.name}>
                  {group.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="contact-section" aria-labelledby="contact-title">
      <div className="container contact-inner">
        <div>
          <h2 id="contact-title">Entre em contato</h2>
          <p>Para oportunidades profissionais ou uma conversa sobre os projetos.</p>
        </div>
        <div className="contact-links">
          <ExternalLink href={`mailto:${profile.email}`}>Enviar e-mail</ExternalLink>
          <ExternalLink href={profile.linkedin}>Conversar no LinkedIn</ExternalLink>
          <ExternalLink href={profile.github}>Conhecer meu GitHub</ExternalLink>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="footer-name" href={base}>
          Cristian Weissmantel<span>{profile.role} · C#/.NET, React e TypeScript</span>
        </a>
        <div>
          <a href={`${base}creditos/`}>Créditos e fontes</a>
          <span>© 2026 · v0.1.1</span>
        </div>
      </div>
    </footer>
  );
}

function CasePage({ study }: { study: CaseStudy }) {
  const project = projects.find((p) => p.id === study.projectId)!;
  const next = cases.find((c) => c.slug !== study.slug)!;
  return (
    <>
      <section className={`case-hero ${project.id}`}>
        <div className="container">
          <a className="back-link" href={`${base}#projetos`}>
            <span aria-hidden="true">←</span> Todos os projetos
          </a>
          <p className="section-kicker">Case / {project.name}</p>
          <h1>{study.title}</h1>
          <p className="case-introduction">{study.introduction}</p>
          <div className="case-summary">
            <p>{project.status}</p>
            <ul className="tech-list">
              {project.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
          <ProjectActions project={{ ...project, caseSlug: undefined }} />
          <p className="demo-note">{project.demoNote}</p>
        </div>
      </section>
      <div className="container case-layout">
        <nav className="case-nav" aria-label="Neste case">
          <p>Neste case</p>
          <a href="#problema">O problema</a>
          <a href="#fluxo">Fluxo principal</a>
          <a href="#decisoes">Decisões e trade-offs</a>
          <a href="#validation">Validação</a>
          <a href="#limits">Limites</a>
          <a href="#participation">Participação e IA</a>
          <a href="#evidencias">Evidências</a>
        </nav>
        <article className="case-body">
          <section id="problema">
            <p className="section-kicker">Contexto e público</p>
            <h2>O problema antes da implementação</h2>
            <p>{study.context}</p>
          </section>
          <figure className={`case-capture ${project.id}`}>
            <ProjectImage project={project} priority />
            <figcaption>
              Captura real da interface com dados demonstrativos.{' '}
              {project.id === 'nextage'
                ? 'A demonstração é separada do piloto com servidor.'
                : 'O envio apresentado na demo é simulado.'}
            </figcaption>
          </figure>
          <section id="fluxo">
            <p className="section-kicker">Fluxo principal</p>
            <h2>Fluxo de uso</h2>
            <ol className="flow-list">
              {study.flow.map((step, index) => (
                <li key={step.title}>
                  <span aria-hidden="true">0{index + 1}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
          <section id="decisoes">
            <p className="section-kicker">Engenharia em contexto</p>
            <h2>Decisões e seus trade-offs</h2>
            <div className="decision-list">
              {study.decisions.map((decision, i) => (
                <section key={decision.title}>
                  <span className="decision-number" aria-hidden="true">
                    {i + 1}
                  </span>
                  <h3>{decision.title}</h3>
                  <p>{decision.text}</p>
                  <p className="tradeoff">
                    <strong>O compromisso:</strong> {decision.tradeoff}
                  </p>
                </section>
              ))}
            </div>
          </section>
          {study.sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className={section.id === 'limits' ? 'limits-section' : ''}
            >
              <h2>{section.title}</h2>
              {section.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </section>
          ))}
          <section id="evidencias" className="evidence-section">
            <p className="section-kicker">Para aprofundar</p>
            <h2>Documentação e evidências</h2>
            <p>
              Documentação pública dos projetos. Os estágios descritos foram conferidos em 29 de
              outubro de 2026.
            </p>
            <ul>
              {study.evidence.map((e) => (
                <li key={e.url}>
                  <ExternalLink href={e.url}>{e.label}</ExternalLink>
                </li>
              ))}
            </ul>
            <ProjectActions project={{ ...project, caseSlug: undefined }} />
          </section>
          <a className="next-case" href={caseUrl(next.slug)}>
            <span>
              Conheça também<strong>{projects.find((p) => p.id === next.projectId)?.name}</strong>
            </span>
            <Arrow />
          </a>
        </article>
      </div>
      <Contact />
    </>
  );
}

function Credits() {
  return (
    <div className="container legal-page">
      <a className="back-link" href={base}>
        ← Voltar ao início
      </a>
      <h1>Créditos e fontes</h1>
      <p>
        Conteúdo e código originais deste portfólio: Cristian Weissmantel, sob licença MIT. Marcas e
        materiais de terceiros preservam seus respectivos direitos.
      </p>
      <h2>Capturas dos projetos</h2>
      <p>
        As capturas foram reproduzidas dos repositórios públicos dos projetos, com autorização para
        esta apresentação. Usam dados fictícios ou sintéticos quando identificadas como
        demonstração.
      </p>
      <ul>
        {projects.map((p) => (
          <li key={p.id}>
            <a
              href={`${p.code}/blob/${['nextage', 'worklog'].includes(p.id) ? 'master' : 'main'}/docs/images/${({ nextage: 'overview.png', worklog: 'demo.png', fitness: 'public-demo-desktop.png', gacha: 'overview.png', weather: 'desktop.png' } as Record<string, string>)[p.id]}`}
            >
              {p.name}: captura original
            </a>
          </li>
        ))}
      </ul>
      <p>
        A imagem de Gacha Management inclui identidade e ícones de jogos, pertencentes aos
        respectivos titulares. A ilustração do tema Sangonomiya foi gerada e aprovada no projeto;
        não é reprodução de fanart atribuída a outro artista.
      </p>
      <p>
        Weather Lab utiliza dados da <a href="https://open-meteo.com/">Open-Meteo</a> e localização
        do <a href="https://www.geonames.org/">GeoNames</a>, com atribuição CC BY 4.0. A captura
        retrata uma previsão em um momento específico.
      </p>
      <p>
        O OCR aparece como laboratório sem captura: as imagens locais do projeto não têm autorização
        pública documentada para reprodução.
      </p>
      <h2>Tipografia e identidade</h2>
      <p>
        Manrope, de Mikhail Sharanda, e DM Sans, de Colophon Foundry e colaboradores, distribuídas
        sob SIL Open Font License e hospedadas junto do site. Ícones e monograma desenhados em SVG
        para este portfólio.
      </p>
      <h2>Conteúdo e participação</h2>
      <p>
        Os cases se baseiam nos READMEs e documentos públicos dos projetos. A experiência
        profissional usa o inventário fornecido por Cristian, com descrições gerais e sem material
        interno de empregadores. Datas de carreira, métricas e resultados não confirmados foram
        omitidos.
      </p>
      <p>
        Este site foi desenvolvido com assistência de IA. As tecnologias apresentadas reúnem a
        experiência profissional e os projetos pessoais de Cristian. Os cases descrevem sua
        participação e o apoio da IA em cada projeto.
      </p>
      <ExternalLink className="text-link" href="https://github.com/cristianworth/portfolio">
        Código, licença e documentação do portfólio
      </ExternalLink>
    </div>
  );
}

export function App({ page = 'home' }: { page?: string }) {
  const study = cases.find((c) => c.slug === page);
  const known = page === 'home' || page === 'creditos' || study;
  return (
    <>
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header isCase={!!study} />
      <main id="conteudo" tabIndex={-1}>
        {study ? (
          <CasePage study={study} />
        ) : page === 'creditos' ? (
          <Credits />
        ) : known ? (
          <>
            <Hero />
            <Projects />
            <Experience />
            <About />
            <Contact />
          </>
        ) : (
          <div className="container legal-page">
            <h1>Página não encontrada</h1>
            <p>Os projetos e seus cases estão na página inicial.</p>
            <a className="button button-ink" href={base}>
              Voltar ao portfólio <Arrow />
            </a>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
