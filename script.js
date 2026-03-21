const titles = [
  {
    id: 1,
    name: 'Midnight Protocol',
    genre: 'Action',
    year: 2026,
    rating: 'PG-13',
    length: '2h 08m',
    badge: '98% Match',
    description:
      'A former cyber-intelligence analyst uncovers a global conspiracy while racing to stop a blackout before sunrise.',
    accent: 'linear-gradient(145deg, rgba(229, 9, 20, 0.85), rgba(53, 92, 125, 0.85))'
  },
  {
    id: 2,
    name: 'Orbit House',
    genre: 'Sci-Fi',
    year: 2025,
    rating: 'TV-14',
    length: '10 Episodes',
    badge: 'New Season',
    description:
      'A luxury space hotel drifts off-course, forcing guests and crew to reinvent survival beyond Earth orbit.',
    accent: 'linear-gradient(145deg, rgba(46, 134, 222, 0.85), rgba(102, 51, 153, 0.85))'
  },
  {
    id: 3,
    name: 'Signal Divide',
    genre: 'Drama',
    year: 2024,
    rating: 'TV-MA',
    length: '8 Episodes',
    badge: 'Critics Pick',
    description:
      'Two radio hosts in rival cities begin hearing each other through a storm-driven frequency that changes both lives.',
    accent: 'linear-gradient(145deg, rgba(255, 159, 67, 0.86), rgba(16, 172, 132, 0.82))'
  },
  {
    id: 4,
    name: 'Crimson Tides',
    genre: 'Action',
    year: 2026,
    rating: 'PG-13',
    length: '1h 54m',
    badge: 'Top 10',
    description:
      'An elite rescue diver leads a high-risk mission in a storm-ravaged coastal city after a refinery explosion.',
    accent: 'linear-gradient(145deg, rgba(238, 82, 83, 0.88), rgba(52, 31, 151, 0.82))'
  },
  {
    id: 5,
    name: 'Paper Crowns',
    genre: 'Drama',
    year: 2023,
    rating: 'TV-14',
    length: '12 Episodes',
    badge: 'Fan Favorite',
    description:
      'Inside a family-run magazine empire, ambition and loyalty collide during the last year of print.',
    accent: 'linear-gradient(145deg, rgba(255, 195, 18, 0.86), rgba(87, 88, 187, 0.82))'
  },
  {
    id: 6,
    name: 'Nova Run',
    genre: 'Sci-Fi',
    year: 2026,
    rating: 'PG',
    length: '1h 47m',
    badge: 'Just Added',
    description:
      'A teenage courier discovers her delivery route is actually a map to hidden portals across the city skyline.',
    accent: 'linear-gradient(145deg, rgba(29, 209, 161, 0.88), rgba(84, 160, 255, 0.82))'
  }
];

const state = {
  filter: 'All',
  query: '',
  watchlist: new Set()
};

const elements = {
  catalog: document.querySelector('#catalog'),
  watchlistGrid: document.querySelector('#watchlist-grid'),
  watchlistCount: document.querySelector('#watchlist-count'),
  chips: [...document.querySelectorAll('.chip')],
  search: document.querySelector('#search-input'),
  surprise: document.querySelector('#surprise-me'),
  heroTitle: document.querySelector('#hero-title'),
  heroDescription: document.querySelector('#hero-description'),
  heroYear: document.querySelector('#hero-year'),
  heroRating: document.querySelector('#hero-rating'),
  heroLength: document.querySelector('#hero-length'),
  heroStatus: document.querySelector('#hero-status'),
  playFeatured: document.querySelector('#play-featured'),
  detailsFeatured: document.querySelector('#details-featured'),
  modal: document.querySelector('#details-modal'),
  modalTitle: document.querySelector('#modal-title'),
  modalCopy: document.querySelector('#modal-copy'),
  modalMeta: document.querySelector('#modal-meta'),
  template: document.querySelector('#card-template')
};

let featuredTitle = titles[0];

function filterTitles() {
  return titles.filter((title) => {
    const matchesFilter = state.filter === 'All' || title.genre === state.filter;
    const needle = state.query.trim().toLowerCase();
    const matchesQuery = !needle || `${title.name} ${title.description}`.toLowerCase().includes(needle);
    return matchesFilter && matchesQuery;
  });
}

function setFeatured(title, reason) {
  featuredTitle = title;
  elements.heroTitle.textContent = title.name;
  elements.heroDescription.textContent = title.description;
  elements.heroYear.textContent = title.year;
  elements.heroRating.textContent = title.rating;
  elements.heroLength.textContent = title.length;
  elements.heroStatus.textContent = reason;
}

function openModal(title) {
  elements.modalTitle.textContent = title.name;
  elements.modalCopy.textContent = title.description;
  elements.modalMeta.innerHTML = `
    <span>${title.genre}</span>
    <span>${title.year}</span>
    <span>${title.rating}</span>
    <span>${title.length}</span>
  `;
  elements.modal.showModal();
}

function toggleWatchlist(titleId) {
  if (state.watchlist.has(titleId)) {
    state.watchlist.delete(titleId);
  } else {
    state.watchlist.add(titleId);
  }

  renderCatalog();
  renderWatchlist();
}

function createCard(title) {
  const fragment = elements.template.content.cloneNode(true);
  const card = fragment.querySelector('.card');
  const art = fragment.querySelector('.card-art');
  const titleEl = fragment.querySelector('.card-title');
  const badge = fragment.querySelector('.card-badge');
  const description = fragment.querySelector('.card-description');
  const meta = fragment.querySelector('.small-meta');
  const playBtn = fragment.querySelector('.play-btn');
  const infoBtn = fragment.querySelector('.info-btn');
  const listBtn = fragment.querySelector('.list-btn');

  art.style.background = title.accent;
  titleEl.textContent = title.name;
  badge.textContent = title.badge;
  description.textContent = title.description;
  meta.innerHTML = `
    <span>${title.genre}</span>
    <span>${title.year}</span>
    <span>${title.length}</span>
  `;

  playBtn.addEventListener('click', () => {
    setFeatured(title, `${title.name} is now featured in the hero banner.`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  infoBtn.addEventListener('click', () => openModal(title));

  listBtn.textContent = state.watchlist.has(title.id) ? '✓ Saved' : '+ My List';
  listBtn.classList.toggle('btn-primary', state.watchlist.has(title.id));
  listBtn.classList.toggle('btn-ghost', !state.watchlist.has(title.id));
  listBtn.addEventListener('click', () => toggleWatchlist(title.id));

  card.addEventListener('dblclick', () => toggleWatchlist(title.id));

  return fragment;
}

function renderCatalog() {
  const results = filterTitles();
  elements.catalog.innerHTML = '';

  if (!results.length) {
    elements.catalog.innerHTML = '<div class="watchlist-grid empty-state">No titles match your search right now.</div>';
    return;
  }

  results.forEach((title) => {
    elements.catalog.appendChild(createCard(title));
  });
}

function renderWatchlist() {
  const savedTitles = titles.filter((title) => state.watchlist.has(title.id));
  elements.watchlistCount.textContent = `${savedTitles.length} title${savedTitles.length === 1 ? '' : 's'} saved for later`;

  if (!savedTitles.length) {
    elements.watchlistGrid.className = 'watchlist-grid empty-state';
    elements.watchlistGrid.textContent = 'Save titles to build your next binge session.';
    return;
  }

  elements.watchlistGrid.className = 'watchlist-grid';
  elements.watchlistGrid.innerHTML = savedTitles
    .map(
      (title) => `
        <article class="hero-panel">
          <p class="panel-label">${title.genre}</p>
          <h3>${title.name}</h3>
          <p>${title.description}</p>
        </article>
      `
    )
    .join('');
}

function bindEvents() {
  elements.chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      state.filter = chip.dataset.filter;
      elements.chips.forEach((entry) => entry.classList.toggle('is-active', entry === chip));
      renderCatalog();
    });
  });

  elements.search.addEventListener('input', (event) => {
    state.query = event.target.value;
    renderCatalog();
  });

  elements.surprise.addEventListener('click', () => {
    const pick = titles[Math.floor(Math.random() * titles.length)];
    setFeatured(pick, `Surprise pick: ${pick.name} jumped into the spotlight.`);
  });

  elements.playFeatured.addEventListener('click', () => {
    setFeatured(featuredTitle, `Now playing preview for ${featuredTitle.name}.`);
  });

  elements.detailsFeatured.addEventListener('click', () => openModal(featuredTitle));

  elements.modal.addEventListener('click', (event) => {
    const bounds = event.target.getBoundingClientRect();
    const clickedBackdrop =
      event.target === elements.modal &&
      (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom);

    if (clickedBackdrop) {
      elements.modal.close();
    }
  });
}

setFeatured(featuredTitle, 'Pick a title below to refresh the spotlight.');
bindEvents();
renderCatalog();
renderWatchlist();
