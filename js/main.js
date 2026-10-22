(() => {
  const config = window.portfolioConfig || { categories: [], projects: [] };
  const projects = Array.isArray(config.projects) ? config.projects : [];
  const categories = Array.isArray(config.categories) ? config.categories : [];
  const grid = document.getElementById('project-grid');
  const filters = document.getElementById('project-filters');
  const resultStatus = document.getElementById('results-status');
  const allLabel = 'All Projects';
  let activeCategory = allLabel;
  const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' })[char]);
  const safeHttpUrl = value => {
    try { const url = new URL(value, document.baseURI); return ['https:', 'http:'].includes(url.protocol) ? url.href : ''; }
    catch { return ''; }
  };
  const safeAssetUrl = value => {
    try {
      const url = new URL(value, document.baseURI);
      const isRelative = !/^[a-z][a-z\d+.-]*:/i.test(String(value));
      return ['https:', 'http:'].includes(url.protocol) || (isRelative && url.protocol === 'file:') ? url.href : '';
    } catch { return ''; }
  };

  function renderFilters() {
    const allCategories = [allLabel, ...categories];
    filters.innerHTML = allCategories.map(category => `<button class="filter-button" type="button" data-category="${escapeHtml(category)}" aria-pressed="${category === activeCategory}">${escapeHtml(category)}</button>`).join('');
  }

  function renderProjects() {
    const visibleProjects = projects.filter(project => activeCategory === allLabel || project.category === activeCategory);
    resultStatus.textContent = `${visibleProjects.length} ${visibleProjects.length === 1 ? 'project' : 'projects'}`;
    if (!visibleProjects.length) {
      grid.innerHTML = '<p class="empty-projects">No configured projects in this category yet.</p>';
      return;
    }
    grid.innerHTML = visibleProjects.map(project => {
      const repo = safeHttpUrl(project.repositoryUrl);
      const demo = safeHttpUrl(project.liveDemoUrl);
      const logo = safeAssetUrl(project.logo);
      const tags = (Array.isArray(project.technologies) ? project.technologies : []).map(tag => `<span class="project-tag">${escapeHtml(tag)}</span>`).join('');
      const links = `${repo ? `<a class="project-link" href="${repo}" target="_blank" rel="noopener noreferrer">View Source Code <span aria-hidden="true">↗</span></a>` : ''}${demo ? `<a class="project-link" href="${demo}" target="_blank" rel="noopener noreferrer">Live Demo <span aria-hidden="true">↗</span></a>` : ''}`;
      const initials = escapeHtml(project.name.split(/\s+/).slice(0, 2).map(part => part[0]).join('').toUpperCase());
      const image = logo
        ? `<img class="project-logo" src="${logo}" alt="${escapeHtml(project.name)} logo" data-fallback-text="${initials}" width="72" height="72">`
        : `<span class="project-logo-fallback" role="img" aria-label="${escapeHtml(project.name)} logo placeholder">${initials}</span>`;
      return `<article class="project-card${project.featured ? ' is-featured' : ''}" id="project-${escapeHtml(project.id)}"><div class="project-card-top">${image}<div class="project-title-wrap"><span class="project-category">${escapeHtml(project.category)}${project.featured ? '<span class="project-featured">Featured</span>' : ''}</span><h3>${escapeHtml(project.name)}</h3></div></div><p class="project-description">${escapeHtml(project.shortDescription)}</p>${project.description ? `<details><summary>Project details</summary><p>${escapeHtml(project.description)}</p></details>` : ''}${tags ? `<div class="project-tags" aria-label="Technology stack">${tags}</div>` : ''}${project.needsReview && project.verification ? `<p class="project-note">${escapeHtml(project.verification)}</p>` : ''}<div class="project-links">${links}</div></article>`;
    }).join('');
  }

  grid.addEventListener('error', event => {
    const image = event.target;
    if (image?.tagName !== 'IMG') return;
    if (!image.classList.contains('project-logo')) return;
    const fallback = document.createElement('span');
    if (image.classList.contains('project-logo')) {
      fallback.className = 'project-logo-fallback';
      fallback.setAttribute('role', 'img');
      fallback.setAttribute('aria-label', `${image.alt} unavailable`);
      fallback.textContent = image.dataset.fallbackText || 'Project';
    }
    image.replaceWith(fallback);
  }, true);

  filters.addEventListener('click', event => {
    const button = event.target.closest('button[data-category]');
    if (!button) return;
    activeCategory = button.dataset.category;
    renderFilters();
    renderProjects();
  });
  renderFilters();
  renderProjects();

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('primary-nav');
  const closeMenu = () => { toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Open navigation'); nav.classList.remove('is-open'); };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    nav.classList.toggle('is-open', open);
  });
  nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });

  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  let formSubmitting = false;
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (formSubmitting) return;
    status.removeAttribute('data-state');
    const fields = [...form.querySelectorAll('input, textarea')];
    fields.forEach(field => {
      field.setAttribute('aria-invalid', String(!field.checkValidity()));
    });
    if (!form.checkValidity()) {
      status.dataset.state = 'error';
      status.textContent = 'Please check each field and enter a valid email address before sending your message.';
      form.reportValidity();
      return;
    }
    const honeypot = form.querySelector('[name="_gotcha"]');
    if (String(honeypot?.value || '').trim()) {
      status.dataset.state = 'error';
      status.textContent = 'The message could not be submitted. Please try again.';
      return;
    }
    const configuredEndpoint = window.portfolioContactConfig?.endpoint?.trim();
    if (!configuredEndpoint) {
      const formValue = name => form.elements.namedItem(name).value.trim();
      const subject = formValue('subject');
      const body = [
        `Name: ${formValue('name')}`,
        `Email: ${formValue('email')}`,
        '',
        formValue('message')
      ].join('\n');
      status.removeAttribute('data-state');
      status.textContent = 'Opening a prefilled email draft. Review and send it in your email app; this website does not send messages automatically.';
      window.location.href = `mailto:meenakshishaji622@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }
    let endpoint;
    try {
      endpoint = new URL(configuredEndpoint, window.location.href);
      if (!['https:', 'http:'].includes(endpoint.protocol) || (window.location.protocol === 'https:' && endpoint.protocol !== 'https:')) throw new Error('Unsafe endpoint');
    } catch {
      status.dataset.state = 'error';
      status.textContent = 'The contact form endpoint is invalid. Please email me directly instead.';
      return;
    }
    const submitButton = form.querySelector('[type="submit"]');
    const originalButtonText = submitButton.textContent;
    formSubmitting = true;
    submitButton.disabled = true;
    submitButton.textContent = 'Sending…';
    status.removeAttribute('data-state');
    status.textContent = 'Sending your message…';
    try {
      const response = await fetch(endpoint.href, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (!response.ok) throw new Error(`Form service returned ${response.status}`);
      status.dataset.state = 'success';
      status.textContent = 'Your message was accepted by the configured form service.';
      form.reset();
      fields.forEach(field => field.removeAttribute('aria-invalid'));
    } catch {
      status.dataset.state = 'error';
      status.innerHTML = 'Your message could not be submitted. Please try again or email me at <a href="mailto:meenakshishaji622@gmail.com">meenakshishaji622@gmail.com</a>.';
    } finally {
      formSubmitting = false;
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
    }
  });
  form.addEventListener('input', event => {
    if (event.target.matches('input, textarea')) event.target.setAttribute('aria-invalid', String(!event.target.checkValidity()));
  });

  document.getElementById('year').textContent = String(new Date().getFullYear());
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('js-ready');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
  }
})();
