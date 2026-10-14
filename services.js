(() => {
  'use strict';

  const services = {
    'web-applications': {
      title: 'Web applications',
      tagline: 'Fast, accessible software built around the way your team and customers work.',
      overview: 'From customer portals and internal dashboards to full SaaS products, we design and engineer web applications that are dependable, secure, and ready to grow.',
      outcomes: ['Clear product requirements and technical plan', 'Responsive, accessible interface', 'Reliable application logic and data model', 'Tested deployment and handover'],
      includes: ['Product discovery and scope definition', 'UX flows, interface design, and clickable prototypes', 'Frontend and backend development', 'API and database integration', 'Authentication, roles, and permissions', 'Quality, accessibility, and performance testing', 'Deployment guidance and technical documentation'],
      steps: [['Discover', 'Map users, goals, constraints, and success measures.'], ['Design', 'Shape the user journeys, data model, and interface before development.'], ['Build', 'Deliver working features in reviewed increments with regular demos.'], ['Verify', 'Test core workflows, accessibility, security, and performance.'], ['Launch', 'Deploy, monitor, document, and transfer the product to your team.']],
      faqs: [['Can you work with our existing systems?', 'Yes. We assess your current APIs, data, and identity systems during discovery and plan integrations around them.'], ['Can you take over an existing application?', 'Yes. We begin with a codebase and architecture review, then agree a prioritized improvement plan.'], ['Will the application work on mobile?', 'We design responsive web experiences for phones, tablets, and desktop. Native mobile apps are a separate service.']]
    },
    'mobile-apps': {
      title: 'Mobile apps',
      tagline: 'Useful, polished iOS and Android experiences made for real-world use.',
      overview: 'We help turn product ideas into mobile apps with intuitive flows, dependable integrations, and a codebase your team can maintain.',
      outcomes: ['Validated mobile product scope', 'iOS and Android experience design', 'Tested app connected to required services', 'Release-ready builds and handover'],
      includes: ['User journeys and feature planning', 'Interface design and interactive prototypes', 'Cross-platform app development', 'API, authentication, and notification integration', 'Device and accessibility testing', 'Store submission and release support', 'Source code and maintenance guidance'],
      steps: [['Define', 'Prioritize users, platforms, essential features, and release goals.'], ['Prototype', 'Test navigation and key interactions before implementation.'], ['Develop', 'Build the app in increments and connect the required services.'], ['Test', 'Validate workflows across devices, screen sizes, and network conditions.'], ['Release', 'Prepare store assets, publish builds, and plan ongoing improvements.']],
      faqs: [['Do you build for both iOS and Android?', 'We can deliver cross-platform apps for both systems from a shared codebase, with platform-specific behavior where needed.'], ['Can the app connect to our website or backend?', 'Yes. We plan and implement the APIs, authentication, and data flows needed to connect the app.'], ['Do you help with app store release?', 'Yes. Store preparation and release support can be included in the project scope.']]
    },
    'cloud-devops': {
      title: 'Cloud & DevOps',
      tagline: 'Infrastructure and delivery workflows that make shipping safer and scaling clearer.',
      overview: 'We design practical cloud foundations, automate repeatable releases, and improve visibility into the health and cost of your software.',
      outcomes: ['Documented infrastructure plan', 'Repeatable deployment workflow', 'Monitoring and operational visibility', 'Clear ownership and recovery guidance'],
      includes: ['Cloud architecture and environment review', 'Infrastructure as code where appropriate', 'CI/CD pipeline setup or improvement', 'Containerization and deployment automation', 'Logging, metrics, and alerting', 'Backup, recovery, and access planning', 'Runbooks and team handover'],
      steps: [['Assess', 'Review workloads, constraints, risks, and current operations.'], ['Plan', 'Choose an architecture and deployment approach that fits the product.'], ['Automate', 'Create repeatable infrastructure and release workflows.'], ['Observe', 'Add useful health, performance, and cost signals.'], ['Handover', 'Document operations, recovery procedures, and ownership.']],
      faqs: [['Which cloud providers do you work with?', 'We can plan for AWS, Azure, Google Cloud, and suitable managed platforms based on your needs.'], ['Can you improve an existing deployment pipeline?', 'Yes. We review the current release process and target the most valuable reliability and speed improvements.'], ['Do you provide ongoing cloud support?', 'Ongoing monitoring and improvement can be arranged as a separate support engagement.']]
    },
    'ai-integration': {
      title: 'AI integration',
      tagline: 'Practical AI features connected to real workflows, with evaluation and safeguards.',
      overview: 'We identify where machine learning or language models can reduce repetitive work or improve a product, then build a measurable, maintainable integration.',
      outcomes: ['Use case and feasibility assessment', 'Prototype tested against representative tasks', 'Integrated AI workflow with guardrails', 'Evaluation and monitoring plan'],
      includes: ['Workflow and data suitability assessment', 'Provider and model selection guidance', 'Prompt, retrieval, or model integration', 'Privacy and failure-mode considerations', 'Human review and fallback paths', 'Quality evaluation and usage monitoring', 'Technical notes and handover'],
      steps: [['Find the use case', 'Define the user problem and how success can be measured.'], ['Check feasibility', 'Review data, privacy, cost, latency, and likely failure modes.'], ['Prototype', 'Test candidate approaches against representative examples.'], ['Integrate', 'Connect the selected approach with clear limits and fallback behavior.'], ['Evaluate', 'Monitor quality and adjust using agreed success measures.']],
      faqs: [['Do all AI features require a language model?', 'No. We compare conventional automation, search, rules, and machine-learning approaches before recommending a fit.'], ['How do you handle inaccurate AI output?', 'We design evaluation, human review, constrained outputs, and fallback paths appropriate to the use case.'], ['Can you use our existing AI provider?', 'Yes. We can assess and integrate an existing provider, subject to its security and technical fit.']]
    },
    'security-reviews': {
      title: 'Security reviews',
      tagline: 'Find and prioritize product risks before they become expensive incidents.',
      overview: 'We examine application code, architecture, access controls, and deployment practices to identify practical security improvements for your product.',
      outcomes: ['Scoped review plan and threat context', 'Prioritized findings with evidence', 'Actionable remediation guidance', 'Optional validation of completed fixes'],
      includes: ['Scope and asset review', 'Architecture and threat-model discussion', 'Authentication and authorization checks', 'Dependency and configuration review', 'Targeted code review and testing', 'Risk-ranked findings and remediation notes', 'Fix verification by agreement'],
      steps: [['Scope', 'Agree systems, access, test boundaries, and review objectives.'], ['Map risks', 'Understand data flows, trust boundaries, and likely threats.'], ['Review', 'Inspect the agreed code, configuration, and workflows.'], ['Report', 'Present findings by impact with practical remediation steps.'], ['Verify', 'Review fixes and clarify any remaining risks.']],
      faqs: [['Is this a certification or compliance audit?', 'No. This is a scoped engineering security review and does not replace a formal compliance assessment or independent certification.'], ['Do you need production access?', 'Not necessarily. Access is agreed during scoping; many reviews can use staging environments and source code.'], ['Can you help fix the findings?', 'Yes. Remediation can be planned and delivered as a follow-up engineering engagement.']]
    },
    'product-design': {
      title: 'Product design',
      tagline: 'Research-led experiences that make complex products easier to understand and use.',
      overview: 'We help teams turn product goals into clear user journeys, tested concepts, and consistent interfaces ready for engineering.',
      outcomes: ['Shared understanding of users and goals', 'Prioritized user journeys and product flows', 'Testable interface prototype', 'Reusable visual and interaction patterns'],
      includes: ['Stakeholder and user discovery', 'Journey mapping and information architecture', 'Wireframes and interaction design', 'Visual interface design', 'Responsive and accessibility considerations', 'Prototype testing and iteration', 'Design system and developer handoff'],
      steps: [['Understand', 'Learn about users, context, business goals, and constraints.'], ['Structure', 'Organize content and map the highest-value user journeys.'], ['Explore', 'Create wireframes and compare interface directions.'], ['Validate', 'Test prototypes, gather feedback, and refine the experience.'], ['Handoff', 'Document components, responsive behavior, and interaction details.']],
      faqs: [['Can you work with our existing brand?', 'Yes. We can work within your existing brand system or identify where it needs product-specific extensions.'], ['Do you test designs with users?', 'User validation can be included when suitable participants and project scope are available.'], ['Can you continue from design into development?', 'Yes. Design and engineering can be planned together so decisions carry through implementation.']]
    }
  };

  const root = document.getElementById('service-content');
  const key = new URLSearchParams(location.search).get('service');
  const service = services[key];

  if (!service) {
    document.title = 'Service not found | Kodovoz Labs';
    root.innerHTML = '<section class="service-not-found"><p class="eyebrow">Service directory</p><h1>Choose a service to explore.</h1><p class="lead">See what we build, how we work, and what each engagement can include.</p><a class="btn" href="index.html#services">Browse services</a></section>';
    return;
  }

  document.title = `${service.title} | Kodovoz Labs`;
  document.querySelector('meta[name="description"]').content = `${service.title} by Kodovoz Labs: scope, deliverables, process, and answers to common questions.`;

  const list = (items) => items.map((item) => `<li>${item}</li>`).join('');
  const cards = (items, className, numberLabel) => items.map((item, index) => {
    const number = String(index + 1).padStart(2, '0');
    const content = Array.isArray(item) ? `<span class="service-step-number">${number}</span><div><h3>${item[0]}</h3><p>${item[1]}</p></div>` : `<span class="service-step-number">${numberLabel ? number : 'INCLUDED'}</span><p>${item}</p>`;
    return `<article class="${className}">${content}</article>`;
  }).join('');
  const faqs = service.faqs.map(([question, answer]) => `<details class="service-faq"><summary>${question}</summary><p>${answer}</p></details>`).join('');
  const related = Object.entries(services).filter(([serviceKey]) => serviceKey !== key).slice(0, 3).map(([serviceKey, item]) => `<a href="service.html?service=${serviceKey}" class="related-service"><span>${item.title}</span><span aria-hidden="true">&rarr;</span></a>`).join('');

  root.innerHTML = `
    <section class="service-detail-hero">
      <p class="eyebrow">Product engineering services</p>
      <h1>${service.title}</h1>
      <p class="service-tagline">${service.tagline}</p>
      <div class="service-hero-actions"><a class="btn" href="index.html#booking">Discuss your project <svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a><a class="btn btn--ghost" href="#process">How we work</a></div>
    </section>
    <section class="service-detail-section service-overview">
      <div><p class="eyebrow">Overview</p><h2>Built around your goals.</h2></div>
      <div><p class="service-overview-copy">${service.overview}</p><ul class="service-outcomes">${list(service.outcomes)}</ul></div>
    </section>
    <section class="service-detail-section" id="included">
      <div class="service-section-heading"><p class="eyebrow">Scope of work</p><h2>What may be included</h2><p class="muted">Every engagement is scoped to your product, team, and priorities.</p></div>
      <div class="service-includes-grid">${cards(service.includes, 'service-include', true)}</div>
    </section>
    <section class="service-detail-section" id="process">
      <div class="service-section-heading"><p class="eyebrow">Delivery approach</p><h2>From first conversation to handover</h2></div>
      <ol class="service-process-list">${cards(service.steps, 'service-process-step', true)}</ol>
    </section>
    <section class="service-detail-section service-faq-section" id="faq">
      <div class="service-section-heading"><p class="eyebrow">Common questions</p><h2>Good to know</h2></div>
      <div class="service-faq-list">${faqs}</div>
    </section>
    <section class="service-related-section">
      <div><p class="eyebrow">More ways to work together</p><h2>Related services</h2></div>
      <div class="related-service-list">${related}</div>
    </section>
    <section class="service-cta"><p class="eyebrow">Have a project in mind?</p><h2>Let's make the next step clear.</h2><p>Tell us where you are and what you want to achieve. We'll help shape a sensible first step.</p><a class="btn" href="index.html#booking">Start a conversation <svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></section>`;
})();
