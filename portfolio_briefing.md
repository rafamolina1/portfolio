# Portfolio V2 - Briefing de Produto e Design

## Objetivo

Criar uma segunda versão experimental do portfólio de Rafael Molina em uma nova pasta, mantendo todas as informações profissionais atuais, mas com uma experiência visual e narrativa completamente diferente da versão existente.

Esta V2 não deve ser apenas uma troca de tema. Ela deve parecer um produto digital premium, com nível de acabamento inspirado em sites de alto padrão como Apple, Google, Stripe, Linear, Vercel e Arc: clara, memorável, fluida, responsiva, com forte direção de arte e excelente legibilidade.

## Princípio central

O conceito recomendado é:

**Rafael Molina Command Center**

Uma experiência de portfólio como se fosse um centro de comando de produto, engenharia e validação. O visitante não deve sentir que está vendo uma landing page comum; deve sentir que está navegando por um sistema premium que mostra:

- produtos e sistemas construídos;
- experiência web e mobile;
- sinais de validação pública;
- stack real de produção;
- projetos com lógica de negócio;
- credenciais verificáveis;
- trajetória acadêmica;
- liderança e impacto;
- disponibilidade para oportunidades estratégicas.

## Direção visual

Não copiar o layout atual. A V2 deve ter outra arquitetura visual.

Direção sugerida:

- Visual de produto premium, não currículo digital ou vitrine de telas.
- Hero com composição forte: nome, papel profissional e um painel visual interativo.
- Grid modular de cards, mas com hierarquia muito mais editorial.
- Elementos de interface inspirados em sistemas reais: timeline, mapas de arquitetura, status, telemetry, command palette e fluxos de operação.
- Paleta escura sofisticada com alto contraste, evitando aparência genérica roxa/preta.
- Cores-base sugeridas:
  - fundo: preto grafite ou carbono, não preto puro chapado;
  - primária: cyan frio ou azul elétrico;
  - secundária: laranja/âmbar para validação e impacto;
  - apoio: verde para status/produção;
  - neutros: zinc/slate com bom contraste.
- Usar tipografia expressiva e premium. Evitar aparência default. Pode usar uma combinação de fonte display forte para títulos e fonte legível para corpo.
- Motion deve ser intencional: entrada suave, transições entre módulos, highlights em hover, scroll progress, stagger em cards. Evitar animação gratuita.
- A experiência deve ser impecável em desktop e mobile.

## Diferencial esperado

A V2 deve parecer uma experiência construída por um desenvolvedor sênior com senso de produto:

- Conteúdo com hierarquia clara.
- Cases tratados como estudos de produto, não só cards de GitHub.
- Certificações como sinais de confiança, não badges jogados.
- Autonomus como case de validação real: produto em produção, semifinalista no Rocket da Globo, maior reality show de startups do Brasil, e com matéria exclusiva publicada na Globo.
- Stack apresentada como capacidade de construção, não lista de ícones.
- CTA objetivo e elegante.

## Estrutura sugerida da página

### 1. Hero - Command Center

Objetivo: capturar atenção em segundos.

Conteúdo:

- Nome: Rafael Molina.
- Papel: Desenvolvedor Full Stack.
- Frase principal:
  - Desenvolvedor Full Stack focado em construir produtos web e mobile completos, APIs e integrações que resolvem problemas reais de negócio.
- Frase de apoio:
  - Trabalho como full stack da interface web e mobile ao backend, usando React, Next.js, Flutter, Node.js, Laravel e bancos de dados para conectar experiência de uso, regra de negócio, automações e deploy em aplicações prontas para produção.
- Status:
  - Disponível para oportunidades estratégicas.
- Ações:
  - Baixar currículo.
  - Contato por e-mail.
  - GitHub.
  - LinkedIn.

Ideia visual:

- Um painel lateral ou central com três módulos vivos:
  - `Production Signals`: Autonomus em produção, dois apps Flutter publicados, semifinalista no Rocket da Globo, matéria exclusiva na Globo, palestras em eventos de tecnologia e certificações.
  - `Core Stack`: React, Next.js, Flutter, Node.js, PostgreSQL, Laravel.
  - `Current Focus`: produtos web, mobile, APIs, integrações.
- Pode haver um avatar/foto, mas não como card padrão. Usar tratamento editorial ou uma moldura de sistema.

### 2. Trust Signals

Objetivo: mostrar credibilidade rapidamente.

Cards/sinais:

- Autonomus semifinalista no Rocket da Globo, o maior reality show de startups do Brasil.
- Matéria exclusiva sobre a Autonomus publicada na Globo.
- Palestrante em eventos de tecnologia, apresentando a Autonomus e sua trajetória de produto.
- Cambridge C2 - Inglês fluente/proficiente.
- Oracle Cloud Infrastructure.
- IBM Data Privacy Fundamentals.
- IBM Machine Learning with Python.
- Experiência remota internacional com Node.js e inglês no dia a dia.

Os links verificáveis devem estar acessíveis nos certificados.

### 3. Selected Systems

Objetivo: apresentar projetos como sistemas reais.

Layout sugerido:

- Dois cases principais em destaque:
  - Watch Dog.
  - Barber Manager.
- Outros cases em uma grade menor:
  - Habit Breaker.
  - Market Pulse.
  - Km De Lucro.

Cada case deve mostrar:

- problema;
- solução/contribuição;
- stack;
- highlights técnicos;
- links para código e deploy quando houver;
- imagem/screenshot;
- status ou tipo de sistema.

Evitar:

- cards todos iguais;
- excesso de texto em bloco;
- aparência de template de portfólio.

### 4. Autonomus - Startup Case

Objetivo: transformar Autonomus em um case de produto e validação.

Conteúdo:

- Autonomus é uma empresa júnior fundada na faculdade.
- Produto em produção.
- Rafael participou da idealização e desenvolvimento ponta a ponta.
- Produto conecta clientes e prestadores de serviço por meio de experiências mobile separadas.
- Dois aplicativos em Flutter.
- API em Laravel.
- Arquitetura monolítica modular orientada a domínios.
- DDD aplicado na separação das regras de negócio.
- Service layers e action classes para organizar casos de uso e responsabilidades.
- Banco MySQL.
- Redis para mensageria e gerenciamento de filas.
- Publicação nas lojas App Store e Google Play.
- Painel web administrativo.
- API centralizada.
- Projeto apresentado no Rocket da Globo.
- Semifinalista no Rocket da Globo, maior reality show de startups do Brasil.
- Matéria exclusiva publicada na Globo.

Link de mídia:

https://redeglobo.globo.com/rpc/realities/rocket-startup/vida/noticia/autonomus-a-startup-que-conecta-trabalhadores-autonomos-e-clientes-na-busca-de-servicos.ghtml

Tratamento visual sugerido:

- Não fazer só uma seção de texto.
- Criar uma narrativa de produto:
  - problema;
  - solução;
  - arquitetura;
  - validação;
  - impacto.
- Pode usar um “system map” visual: Cliente App -> API Laravel -> Redis Queue -> MySQL -> Admin Panel -> Prestador App.

### 5. Capability Map

Objetivo: mostrar stack como capacidade de construção, não como lista.

Agrupar tecnologias por função:

- Web, Mobile e Produto:
  - React.
  - Next.js.
  - TypeScript.
  - JavaScript.
  - Tailwind.
  - Flutter.
- Backend e APIs:
  - Node.js.
  - Laravel.
  - Java.
  - APIs REST.
  - JWT.
- Dados e Infra:
  - PostgreSQL.
  - MySQL.
  - Redis.
  - Docker.
  - Railway.
  - Oracle Cloud Infrastructure.
- Automação e Integrações:
  - n8n.
  - Chatwoot.
  - Brevo.
  - Webhooks.
- IA e Dados:
  - Python.
  - Machine Learning.
  - Groq.
  - LangChain.
  - TensorFlow.
- Operação e Qualidade:
  - Postman.
  - deploy.
  - monitoramento.
  - qualidade.

Evitar colocar HTML/CSS como destaque principal.

### 6. About - Engineering Narrative

Objetivo: contar a trajetória com maturidade.

Texto-base:

Desenvolvedor Full Stack com experiência prática em React, Next.js, Flutter, Node.js e Laravel, construindo aplicações web e mobile com foco em produto, APIs, integrações e base técnica consistente.

Também sou cofundador da Autonomus, empresa júnior fundada na faculdade, em que participei do desenvolvimento ponta a ponta: dois apps Flutter, API em Laravel com arquitetura monolítica modular, DDD, service layers, action classes, MySQL, Redis para mensageria e gerenciamento de filas, painel administrativo e publicação nas lojas App Store e Google Play. A empresa está em produção, foi semifinalista no Rocket da Globo, o maior reality show de startups do Brasil, e teve matéria exclusiva publicada na Globo.

Além da Autonomus, desenvolvi projetos próprios e acadêmicos voltados a operação, automação e tomada de decisão, incluindo monitoramento, gestão financeira e fluxos com IA. Também atuei em contexto remoto internacional usando Node.js e inglês no dia a dia. Tenho certificação C2 pela Universidade de Cambridge e sigo evoluindo com foco em clareza, consistência e entrega.

Como trabalho:

- trato frontend como produto, não só como interface;
- construo experiências mobile quando o produto precisa ir além da web;
- organizo backend e integrações com responsabilidade clara;
- priorizo legibilidade, manutenção e entrega em produção;
- penso interface, operação e regra de negócio como um sistema único.

### 7. Credentials

Objetivo: mostrar validação verificável.

Credenciais:

1. Rocket da Globo
   - Autonomus foi semifinalista no Rocket da Globo, maior reality show de startups do Brasil.
   - Teve matéria exclusiva publicada na Globo.
   - Associado à Autonomus.

2. Inglês Fluente C2 - University of Cambridge
   - Certificação internacional emitida pela Universidade de Cambridge.

3. Oracle Cloud Infrastructure
   - Certificação concluída em Oracle Cloud Infrastructure.
   - Link de verificação:
   - https://catalog-education.oracle.com/ords/certview/sharebadge?id=BDFB9AB79C56F27589ACAF192371337C6018A7054703F016272EF03BB4A76141

4. IBM Data Privacy Fundamentals
   - Certificação da IBM em fundamentos de privacidade de dados.
   - Link de verificação:
   - https://courses.skillsbuild.skillsnetwork.site/certificates/bb448a693e31473baa6fb78158bcc8f7

5. IBM Machine Learning with Python
   - Certificação da IBM em Machine Learning aplicado com Python.
   - Link de verificação:
   - https://courses.skillsbuild.skillsnetwork.site/certificates/3fb5ed10feed4d168371f409380546a7

### 8. Education and Leadership

Educação:

- Análise e Desenvolvimento de Sistemas.
- Fundação Getúlio Vargas (FGV).
- 2025 - 2027.

- Bacharelado em Ciência da Computação.
- Universidade Tecnológica Federal do Paraná (UTFPR).
- 2022 - 2026.
- Em andamento.

Liderança e impacto:

- Professor de robótica pela UTFPR.
- Ensino de lógica de programação e pensamento computacional para crianças de escolas públicas.
- Atividades práticas com LEGO e Scratch.
- Foco em resolução de problemas, criatividade e colaboração.

- Membro do Centro Acadêmico de Computação da UTFPR (CACOMP).
- Organização de eventos, palestras e iniciativas acadêmicas/profissionais.
- Fortalecimento do engajamento estudantil em Ciência da Computação.

### 9. Final CTA

Objetivo: fechar com clareza.

Texto sugerido:

Se você procura alguém para construir produtos web, APIs, integrações, automações ou sistemas full stack com foco em clareza técnica e entrega, vamos conversar.

Ações:

- Enviar e-mail.
- LinkedIn.
- GitHub.
- Baixar currículo.

## Internacionalização

A V2 deve permitir alternar o conteúdo do site entre:

- Português BR.
- Inglês.
- Espanhol.

O seletor deve ficar visível no header como um marcador curto de idioma, usando `PT`, `EN` e `ES`, sem depender de redirecionamento externo.

## Informações pessoais e links

Nome:

Rafael Molina.

E-mail:

rafaeloliveiramolina@gmail.com

GitHub:

https://github.com/rafamolina1

LinkedIn:

https://www.linkedin.com/in/rafaelmolinadev/

Foto:

Usar o arquivo atual:

`/profilepic.jpeg`

Currículos:

- Português: `/Rafael_Molina.pdf`
- Inglês: `/Rafael_MolinaUS.pdf`

Site atual:

https://rafamolinadev.vercel.app

## Projetos completos

### Watch Dog

Categoria:

Observabilidade / Full Stack.

Resumo:

Aplicação full stack de monitoramento de uptime para acompanhar serviços web, persistir estado em Redis e disparar alertas automatizados.

Problema:

Monitorar serviços de forma recorrente, manter leitura rápida do último estado e evitar alertas duplicados ou ruído durante o mesmo incidente.

Contribuição:

Projetei e implementei a solução ponta a ponta com frontend em React, API em Fastify, persistência em Redis, worker agendado com node-cron e automações externas via n8n.

Highlights:

- checagens HTTP com timeout configurável e leitura por GET /status;
- alerta disparado apenas na transição real online -> offline;
- lock distribuído em Redis para evitar monitoramento duplicado entre instâncias;
- deploy validado com Docker, Railway, n8n e envio de e-mail via Brevo.

Stack:

React, TypeScript, Node.js, Redis, Docker, Railway, n8n.

Imagem:

`/dashboard-filled.png`

GitHub:

https://github.com/rafamolina1/Watch-Dog

### Barber Manager

Categoria:

SaaS multi-tenant.

Resumo:

Plataforma multi-tenant para gestão de interações via WhatsApp, isolamento por cliente, métricas de operação e integração com workflows externos.

Problema:

Permitir que cada operação tenha métricas, integrações e dados próprios sem misturar informações entre organizações diferentes.

Contribuição:

Desenvolvi a aplicação com Next.js App Router, TypeScript, Clerk, Prisma e Postgres, estruturando autenticação por organização, isolamento de dados e integração com n8n para fluxos externos.

Highlights:

- métricas, gráficos e analytics separados por organização;
- fluxo multi-tenant baseado em organizationId do Clerk;
- webhook para persistir organizações e garantir isolamento entre clientes;
- integração com n8n para orquestração de workflows e dados do WhatsApp.

Stack:

Next.js, TypeScript, Clerk, PostgreSQL, Prisma, n8n.

Imagem:

`/barber-dashboard.png`

GitHub:

https://github.com/rafamolina1/app-apontamento

### Habit Breaker

Categoria:

Saúde digital com IA.

Resumo:

Aplicação web para apoiar pessoas que estão parando de fumar, com progresso em tempo real, marcos fisiológicos e coach conversacional.

Problema:

Transformar a decisão de parar de fumar em algo visual, mensurável e acionável no dia a dia, sem exigir cadastro ou um backend tradicional.

Contribuição:

Desenvolvi a SPA em React com persistência local, painel de progresso, lembretes no navegador e integração com a Groq para um coach de apoio em momentos de fissura.

Highlights:

- contador em tempo real desde a data e hora em que a pessoa parou;
- economia acumulada, cigarros evitados e estimativa de tempo recuperado;
- histórico do usuário e do chat persistidos em localStorage;
- integração com Groq via proxy local e rewrite no deploy.

Stack:

JavaScript, React, Vite, Groq.

Imagem:

`/habit-breaker-20260405.png`

GitHub:

https://github.com/rafamolina1/Habit-Breaker

Deploy:

https://habitbreaker.vercel.app

### Market Pulse

Categoria:

Produto financeiro em tempo real.

Resumo:

Aplicação financeira para acompanhar moedas, criptomoedas e commodities em uma única experiência com atualização em tempo real.

Problema:

Concentrar dados de mercado, histórico e acompanhamento de carteira sem cair em uma interface poluída ou em fluxos pesados para o usuário.

Contribuição:

Desenvolvi a aplicação em React e Vite com atualização ao vivo, gráficos históricos, gestão de portfólio, preferências persistidas e uma camada de estado organizada por contexto.

Highlights:

- tracking em tempo real de moedas, criptoativos e commodities;
- gráficos históricos com múltiplos intervalos;
- exportação em CSV e PDF e preferências salvas em localStorage;
- lazy loading de modais pesados e suporte a PWA instalável.

Stack:

JavaScript, React, Vite, PWA.

Imagem:

`/marketpulse-20260405.png`

GitHub:

https://github.com/rafamolina1/Market-Pulse

Deploy:

https://market-pulse-rho-beryl.vercel.app

### Km De Lucro

Categoria:

SaaS financeiro para motoristas.

Resumo:

Aplicação web para motoristas autônomos controlarem faturamento, custos, lucro e margem por frete sem depender de planilhas.

Problema:

Transformar dados básicos de cada viagem em leitura financeira prática, reduzindo conta manual, planilhas paralelas e baixa visibilidade sobre lucro real.

Contribuição:

Desenvolvi a aplicação com Next.js, TypeScript e Supabase, estruturando autenticação por magic link, persistência dos fretes, cálculos automáticos e exportação para uso operacional.

Highlights:

- cadastro de fretes com origem, destino, KM, valor e custos;
- cálculo automático de lucro líquido, margem e lucro por KM;
- resumo mensal com faturamento, custos e evolução do período;
- exportação em CSV e PDF e suporte a plano gratuito e Pro.

Stack:

Next.js, React, TypeScript, Supabase, PostgreSQL.

Imagem:

`/dashkm-20260405.png`

GitHub:

https://github.com/rafamolina1/KM-De-Lucro

Deploy:

https://kmdelucro.vercel.app

## Requisitos técnicos recomendados

Stack sugerida:

- Next.js.
- TypeScript.
- Tailwind CSS.
- Framer Motion.
- next-intl, se mantiver versão multilíngue.
- react-icons ou SVGs próprios para ícones.
- Vercel Analytics, se publicar.

Arquitetura recomendada:

- `data/profile.ts` para perfil, links, currículos, certificados e stacks.
- `data/projects.ts` para projetos.
- `data/timeline.ts` para experiência, educação e validações.
- `components/sections/*` para seções principais.
- `components/ui/*` para botões, cards, badges, panels e motion primitives.
- `app/[locale]/page.tsx` apenas compondo seções, sem dados grandes inline.

Qualidade esperada:

- TypeScript strict sem erros.
- Componentes pequenos e nomeados por intenção.
- Dados centralizados.
- Layout mobile-first.
- Performance boa.
- Imagens otimizadas.
- Acessibilidade básica: contraste, aria-labels, foco visível, navegação por teclado.
- SEO completo com Open Graph e Twitter.
- Estados de hover/focus consistentes.
- `prefers-reduced-motion` respeitado.

## Critérios de aceitação

A V2 só deve ser considerada pronta se:

- não parecer uma cópia da V1;
- não parecer template genérico;
- funcionar bem em desktop e mobile;
- carregar corretamente;
- destacar Autonomus, Globo/RPC, Cambridge C2, OCI e IBM sem poluir;
- apresentar os projetos como cases reais;
- passar em `npm run lint`;
- passar em `npm run build`;
- tiver hierarquia visual clara;
- tiver CTA forte;
- preservar todas as informações importantes deste briefing.

## Observação de direção

Esta versão deve ser ousada, mas não confusa. O objetivo não é parecer futurista por parecer; é comunicar senioridade, produto, engenharia e validação pública de forma memorável.

Se houver conflito entre efeito visual e clareza, clareza vence. Se houver conflito entre minimalismo e prova de competência, mostrar prova vence. Se houver conflito entre ser diferente e parecer profissional, profissional vence.
