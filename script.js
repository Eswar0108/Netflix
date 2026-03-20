const catalog = [
  {
    id: 1,
    title: 'The Last Kingdom: Afterglow',
    category: 'Thriller',
    type: 'Film',
    year: 2026,
    maturity: 'TV-MA',
    runtime: '2h 14m',
    match: '98% Match',
    synopsis:
      'When a vanished heir resurfaces in a city ruled by surveillance, a burned-out strategist must build a crew, steal a data vault, and outrun a nation watching every move.',
    subtitle: 'Dark • Gritty • Suspenseful',
    rank: 1,
    progress: 72,
    palette: 'linear-gradient(180deg, rgba(15,15,15,0.1), rgba(15,15,15,0.88)), linear-gradient(135deg, #3b0f12, #0f1b3b 60%, #7f1212)'
  },
  {
    id: 2,
    title: 'Neon District',
    category: 'Sci-Fi',
    type: 'Series',
    year: 2025,
    maturity: 'TV-14',
    runtime: '8 Episodes',
    match: '96% Match',
    synopsis:
      'A memory-hacker and a detective chase a rogue algorithm through a vertical city where every billboard is listening.',
    subtitle: 'Futuristic • Slick • Smart',
    rank: 2,
    progress: 34,
    palette: 'linear-gradient(180deg, rgba(15,15,15,0.15), rgba(15,15,15,0.9)), linear-gradient(135deg, #051937, #004d7a, #008793)'
  },
  {
    id: 3,
    title: 'Crown of Ash',
    category: 'Drama',
    type: 'Series',
    year: 2024,
    maturity: 'TV-MA',
    runtime: '10 Episodes',
    match: '94% Match',
    synopsis:
      'A royal fixer returns home to a collapsing monarchy and finds the throne is the least dangerous thing in the palace.',
    subtitle: 'Political • Tense • Prestige',
    rank: 3,
    progress: 58,
    palette: 'linear-gradient(180deg, rgba(15,15,15,0.12), rgba(15,15,15,0.92)), linear-gradient(135deg, #2d1b0e, #6b3e26, #1b1a1f)'
  },
  {
    id: 4,
    title: 'Blackwater Run',
    category: 'Action',
    type: 'Film',
    year: 2026,
    maturity: 'PG-13',
    runtime: '1h 54m',
    match: '93% Match',
    synopsis:
      'A retired extraction pilot must fly one last route through a hurricane to rescue hostages from a floating prison.',
    subtitle: 'Explosive • Fast • Big Stakes',
    rank: 4,
    progress: 21,
    palette: 'linear-gradient(180deg, rgba(15,15,15,0.18), rgba(15,15,15,0.9)), linear-gradient(135deg, #19243d, #4a6fa5, #7f1818)'
  },
  {
    id: 5,
    title: 'Velvet Evidence',
    category: 'Drama',
    type: 'Series',
    year: 2023,
    maturity: 'TV-14',
    runtime: '12 Episodes',
    match: '91% Match',
    synopsis:
      'A celebrity defense attorney turns on her own clients when a cold case points to the firm that built her empire.',
    subtitle: 'Sharp • Addictive • Character-led',
    rank: 5,
    progress: 85,
    palette: 'linear-gradient(180deg, rgba(15,15,15,0.15), rgba(15,15,15,0.88)), linear-gradient(135deg, #2a0a19, #6f1d1b, #b08968)'
  },
  {
    id: 6,
    title: 'Orbital Seven',
    category: 'Sci-Fi',
    type: 'Film',
    year: 2026,
    maturity: 'PG-13',
    runtime: '2h 02m',
    match: '97% Match',
    synopsis:
      'Seven strangers wake aboard a silent station and realize one of them designed the disaster still unfolding outside the hull.',
    subtitle: 'Cosmic • Suspenseful • Stylish',
    rank: 6,
    progress: 12,
    palette: 'linear-gradient(180deg, rgba(15,15,15,0.12), rgba(15,15,15,0.92)), linear-gradient(135deg, #0b132b, #1c2541, #5bc0be)'
  },
  {
    id: 7,
    title: 'Silent Harbor',
    category: 'Thriller',
    type: 'Series',
    year: 2025,
    maturity: 'TV-MA',
    runtime: '6 Episodes',
    match: '92% Match',
    synopsis:
      'A missing container ship returns empty, and the only survivor refuses to say what came back with it.',
    subtitle: 'Moody • Chilling • Bingeable',
    rank: 7,
    progress: 64,
    palette: 'linear-gradient(180deg, rgba(15,15,15,0.16), rgba(15,15,15,0.9)), linear-gradient(135deg, #031926, #468faf, #1d3557)'
  },
  {
    id: 8,
    title: 'Atlas Code',
    category: 'Action',
    type: 'Film',
    year: 2024,
    maturity: 'PG-13',
    runtime: '2h 08m',
    match: '89% Match',
    synopsis:
      'An ex-operative decodes a satellite protocol that can erase borders, and every intelligence service wants it first.',
    subtitle: 'Global • High-tech • Relentless',
    rank: 8,
    progress: 48,
    palette: 'linear-gradient(180deg, rgba(15,15,15,0.18), rgba(15,15,15,0.9)), linear-gradient(135deg, #1f2041, #4b3f72, #ff6b6b)'
  },
  {
    id: 9,
    title: 'Marble Skies',
    category: 'Drama',
    type: 'Film',
    year: 2026,
    maturity: 'PG',
    runtime: '1h 47m',
    match: '90% Match',
    synopsis:
      'A grieving architect returns to rebuild a storm-broken coastline and discovers a map hidden in his late mother’s sketches.',
    subtitle: 'Emotional • Beautiful • Uplifting',
    rank: 9,
    progress: 27,
    palette: 'linear-gradient(180deg, rgba(15,15,15,0.16), rgba(15,15,15,0.88)), linear-gradient(135deg, #355070, #6d597a, #b56576)'
  },
  {
    id: 10,
    title: 'Zero Hour Protocol',
    category: 'Thriller',
    type: 'Series',
    year: 2026,
    maturity: 'TV-MA',
    runtime: '9 Episodes',
    match: '95% Match',
    synopsis:
      'An emergency broadcast engineer traces a coup attempt hidden inside the country’s disaster warning network.',
    subtitle: 'Conspiracy • Urgent • Twisty',
    rank: 10,
    progress: 55,
    palette: 'linear-gradient(180deg, rgba(15,15,15,0.12), rgba(15,15,15,0.92)), linear-gradient(135deg, #2b2d42, #8d99ae, #d90429)'
  },
  {
    id: 11,
    title: 'Solaris Heist',
    category: 'Sci-Fi',
    type: 'Film',
    year: 2025,
    maturity: 'TV-14',
    runtime: '2h 00m',
    match: '88% Match',
    synopsis:
      'Mercenaries, artists, and hackers collide during a museum robbery aboard the first luxury ship to orbit the sun.',
    subtitle: 'Spectacle • Fun • Clever',
    rank: 11,
    progress: 9,
    palette: 'linear-gradient(180deg, rgba(15,15,15,0.16), rgba(15,15,15,0.9)), linear-gradient(135deg, #6a040f, #f48c06, #370617)'
  },
  {
    id: 12,
    title: 'The Meridian Files',
    category: 'Action',
    type: 'Series',
    year: 2024,
    maturity: 'TV-14',
    runtime: '8 Episodes',
    match: '87% Match',
    synopsis:
      'A dead courier’s notebook sends two rivals on a cross-continent chase before a secret list reaches the wrong buyer.',
    subtitle: 'Adventure • High energy • Spy craft',
    rank: 12,
    progress: 43,
    palette: 'linear-gradient(180deg, rgba(15,15,15,0.15), rgba(15,15,15,0.9)), linear-gradient(135deg, #14213d, #fca311, #9d0208)'
  }
];

const state = {
  query: '',
  genre: 'All',
  autoplay: true,
  watchlist: new Set([2, 7]),
  heroId: 1,
  activeDrawerId: 1
};

const elements = {
  heroTitle: document.querySelector('#hero-title'),
  heroYear: document.querySelector('#hero-year'),
  heroMaturity: document.querySelector('#hero-maturity'),
  heroRuntime: document.querySelector('#hero-runtime'),
  heroCategory: document.querySelector('#hero-category'),
  heroDescription: document.querySelector('#hero-description'),
  heroStatus: document.querySelector('#hero-status'),
  topTenList: document.querySelector('#top-ten-list'),
  activityLog: document.querySelector('#activity-log'),
  resultsSummary: document.querySelector('#results-summary'),
  featuredRow: document.querySelector('#featured-row'),
  popularRow: document.querySelector('#popular-row'),
  onlyRow: document.querySelector('#only-row'),
  continueRow: document.querySelector('#continue-row'),
  myListRow: document.querySelector('#my-list-row'),
  myListSummary: document.querySelector('#my-list-summary'),
  genreTabs: [...document.querySelectorAll('.genre-tab')],
  searchInput: document.querySelector('#search-input'),
  autoplayToggle: document.querySelector('#autoplay-toggle'),
  resetFilters: document.querySelector('#reset-filters'),
  surpriseButton: document.querySelector('#surprise-button'),
  soundToggle: document.querySelector('#sound-toggle'),
  playHero: document.querySelector('#play-hero'),
  infoHero: document.querySelector('#info-hero'),
  listHero: document.querySelector('#list-hero'),
  rowRefreshButtons: [...document.querySelectorAll('[data-fill-row]')],
  detailsDrawer: document.querySelector('#details-drawer'),
  closeDrawer: document.querySelector('#close-drawer'),
  drawerArt: document.querySelector('#drawer-art'),
  drawerTitle: document.querySelector('#drawer-title'),
  drawerMeta: document.querySelector('#drawer-meta'),
  drawerCopy: document.querySelector('#drawer-copy'),
  drawerPlay: document.querySelector('#drawer-play'),
  drawerList: document.querySelector('#drawer-list'),
  posterTemplate: document.querySelector('#poster-template')
};

const activityEntries = [
  'Signed in as Guest',
  'Top 10 refreshed',
  'Autoplay previews enabled'
];

function getTitleById(id) {
  return catalog.find((item) => item.id === id) ?? catalog[0];
}

function getFilteredTitles() {
  return catalog.filter((item) => {
    const matchesGenre = state.genre === 'All' || item.category === state.genre;
    const needle = state.query.trim().toLowerCase();
    const matchesQuery =
      !needle || `${item.title} ${item.synopsis} ${item.category} ${item.type}`.toLowerCase().includes(needle);

    return matchesGenre && matchesQuery;
  });
}

function logActivity(message) {
  activityEntries.unshift(message);
  activityEntries.splice(5);
  elements.activityLog.innerHTML = activityEntries.map((entry, index) => `<li><span>${entry}</span><strong>${index + 1}m</strong></li>`).join('');
}

function syncHero(title, message) {
  state.heroId = title.id;
  elements.heroTitle.textContent = title.title;
  elements.heroYear.textContent = title.year;
  elements.heroMaturity.textContent = title.maturity;
  elements.heroRuntime.textContent = title.runtime;
  elements.heroCategory.textContent = title.category;
  elements.heroDescription.textContent = title.synopsis;
  elements.heroStatus.textContent = message;
  document.querySelector('.billboard-backdrop').style.background = `${title.palette}, linear-gradient(180deg, rgba(20,20,20,0.18), rgba(20,20,20,0.96))`;
}

function updateResultsSummary(list) {
  const summary = [];

  summary.push(state.genre === 'All' ? 'all genres' : state.genre);
  if (state.query) {
    summary.push(`matching “${state.query}”`);
  }

  elements.resultsSummary.textContent = `Showing ${list.length} title${list.length === 1 ? '' : 's'} in ${summary.join(' • ')}`;
}

function createPosterCard(title) {
  const fragment = elements.posterTemplate.content.cloneNode(true);
  const card = fragment.querySelector('.poster-card');
  const art = fragment.querySelector('.poster-art');
  const rank = fragment.querySelector('.poster-rank');
  const subtitle = fragment.querySelector('.poster-subtitle');
  const titleNode = fragment.querySelector('.poster-title');
  const meta = fragment.querySelector('.poster-meta');
  const playButton = fragment.querySelector('.play-card');
  const infoButton = fragment.querySelector('.info-card');
  const saveButton = fragment.querySelector('.save-card');

  art.style.background = title.palette;
  rank.textContent = title.rank;
  subtitle.textContent = `${title.type} • ${title.match}`;
  titleNode.textContent = title.title;
  meta.innerHTML = `<span>${title.year}</span><span>${title.maturity}</span><span>${title.runtime}</span>`;
  saveButton.textContent = state.watchlist.has(title.id) ? '✓ In My List' : '+ My List';

  const preview = () => {
    if (state.autoplay) {
      syncHero(title, `${title.title} is now previewing in the billboard.`);
    }
  };

  card.addEventListener('mouseenter', preview);
  card.addEventListener('focusin', preview);

  playButton.addEventListener('click', () => {
    syncHero(title, `Now playing ${title.title}.`);
    logActivity(`Playing ${title.title}`);
  });

  infoButton.addEventListener('click', () => {
    openDrawer(title.id);
  });

  saveButton.addEventListener('click', () => {
    toggleWatchlist(title.id);
  });

  return fragment;
}

function fillRow(container, titles) {
  container.innerHTML = '';

  if (!titles.length) {
    container.classList.add('empty-row');
    container.innerHTML = '<div class="empty-card">No titles match your current filters.</div>';
    return;
  }

  container.classList.remove('empty-row');
  titles.forEach((title) => {
    container.appendChild(createPosterCard(title));
  });
}

function renderTopTen() {
  elements.topTenList.innerHTML = catalog
    .slice(0, 10)
    .map((item) => `<li><span>#${item.rank} ${item.title}</span><strong>${item.match}</strong></li>`)
    .join('');
}

function renderRows() {
  const filtered = getFilteredTitles();
  const sortedByRank = [...filtered].sort((left, right) => left.rank - right.rank);
  const popular = [...filtered].sort((left, right) => right.progress - left.progress);
  const only = [...filtered].sort((left, right) => right.year - left.year || left.rank - right.rank);

  fillRow(elements.featuredRow, sortedByRank);
  fillRow(elements.popularRow, popular.slice(0, 6));
  fillRow(elements.onlyRow, only.slice(0, 6));
  updateResultsSummary(filtered);
}

function renderContinueWatching() {
  elements.continueRow.innerHTML = catalog
    .slice(0, 4)
    .map(
      (item) => `
        <article class="continue-card">
          <p class="overline">Continue Watching</p>
          <h3>${item.title}</h3>
          <p>${item.subtitle}</p>
          <div class="progress-track"><div class="progress-value" style="width:${item.progress}%"></div></div>
          <button class="progress-pill" data-resume-id="${item.id}">Resume at ${item.progress}%</button>
        </article>
      `
    )
    .join('');

  elements.continueRow.querySelectorAll('[data-resume-id]').forEach((button) => {
    button.addEventListener('click', () => {
      const title = getTitleById(Number(button.dataset.resumeId));
      syncHero(title, `Resumed ${title.title} from ${title.progress}%.`);
      logActivity(`Resumed ${title.title}`);
    });
  });
}

function renderMyList() {
  const selected = catalog.filter((item) => state.watchlist.has(item.id));
  elements.myListSummary.textContent = selected.length
    ? `${selected.length} saved title${selected.length === 1 ? '' : 's'}`
    : 'No titles saved yet';

  if (!selected.length) {
    elements.myListRow.classList.add('empty-row');
    elements.myListRow.innerHTML = '<div class="empty-card">Add titles with + My List to build your queue.</div>';
    return;
  }

  fillRow(elements.myListRow, selected);
}

function toggleWatchlist(id) {
  const title = getTitleById(id);

  if (state.watchlist.has(id)) {
    state.watchlist.delete(id);
    logActivity(`Removed ${title.title} from My List`);
  } else {
    state.watchlist.add(id);
    logActivity(`Added ${title.title} to My List`);
  }

  renderRows();
  renderMyList();
  openDrawer(state.activeDrawerId);
}

function openDrawer(id) {
  const title = getTitleById(id);
  state.activeDrawerId = title.id;
  elements.detailsDrawer.classList.add('is-open');
  elements.detailsDrawer.setAttribute('aria-hidden', 'false');
  elements.drawerArt.style.background = title.palette;
  elements.drawerTitle.textContent = title.title;
  elements.drawerMeta.innerHTML = `<span>${title.match}</span><span>${title.year}</span><span>${title.maturity}</span><span>${title.runtime}</span>`;
  elements.drawerCopy.textContent = title.synopsis;
  elements.drawerList.textContent = state.watchlist.has(title.id) ? '✓ In My List' : '+ My List';
}

function closeDrawer() {
  elements.detailsDrawer.classList.remove('is-open');
  elements.detailsDrawer.setAttribute('aria-hidden', 'true');
}

function bindEvents() {
  elements.genreTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      state.genre = tab.dataset.genre;
      elements.genreTabs.forEach((button) => button.classList.toggle('is-active', button === tab));
      renderRows();
      logActivity(`Genre changed to ${state.genre}`);
    });
  });

  elements.searchInput.addEventListener('input', (event) => {
    state.query = event.target.value;
    renderRows();
  });

  elements.autoplayToggle.addEventListener('click', () => {
    state.autoplay = !state.autoplay;
    elements.autoplayToggle.classList.toggle('is-active', state.autoplay);
    elements.autoplayToggle.textContent = state.autoplay ? 'Autoplay previews' : 'Autoplay paused';
    logActivity(state.autoplay ? 'Autoplay previews enabled' : 'Autoplay previews paused');
  });

  elements.resetFilters.addEventListener('click', () => {
    state.genre = 'All';
    state.query = '';
    elements.searchInput.value = '';
    elements.genreTabs.forEach((tab) => tab.classList.toggle('is-active', tab.dataset.genre === 'All'));
    renderRows();
    logActivity('Filters reset');
  });

  elements.surpriseButton.addEventListener('click', () => {
    const filtered = getFilteredTitles();
    const pool = filtered.length ? filtered : catalog;
    const title = pool[Math.floor(Math.random() * pool.length)];
    syncHero(title, `${title.title} was picked with Play Something.`);
    openDrawer(title.id);
    logActivity(`Random pick: ${title.title}`);
  });

  elements.soundToggle.addEventListener('click', () => {
    elements.soundToggle.textContent = elements.soundToggle.textContent === '🔊' ? '🔇' : '🔊';
    logActivity(elements.soundToggle.textContent === '🔊' ? 'Sound turned on' : 'Sound muted');
  });

  elements.playHero.addEventListener('click', () => {
    const title = getTitleById(state.heroId);
    logActivity(`Playing ${title.title}`);
    syncHero(title, `Playing ${title.title} from the billboard.`);
  });

  elements.infoHero.addEventListener('click', () => openDrawer(state.heroId));
  elements.listHero.addEventListener('click', () => toggleWatchlist(state.heroId));

  elements.rowRefreshButtons.forEach((button) => {
    button.addEventListener('click', () => {
      renderRows();
      logActivity(`Refreshed ${button.dataset.fillRow.replace('-', ' ')}`);
    });
  });

  elements.closeDrawer.addEventListener('click', closeDrawer);
  elements.drawerPlay.addEventListener('click', () => {
    const title = getTitleById(state.activeDrawerId);
    syncHero(title, `Resuming ${title.title}.`);
    logActivity(`Resumed ${title.title}`);
  });
  elements.drawerList.addEventListener('click', () => toggleWatchlist(state.activeDrawerId));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeDrawer();
    }
  });
}

syncHero(getTitleById(state.heroId), 'Hover a title card to preview it here.');
renderTopTen();
logActivity('Netflix clone loaded');
renderRows();
renderContinueWatching();
renderMyList();
bindEvents();
