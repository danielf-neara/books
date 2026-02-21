/* -------------------------------------------------- */
/* Constants */
/* -------------------------------------------------- */

const STORAGE_KEY         = 'books_data';
const MIGRATION_KEY       = 'books_migrated_v7';
const MIGRATION_GOOGLE    = 'books_migrated_google_summaries';

const TAG_LABELS = {
  hooked_immediately: 'Hooked immediately',
  slow_start:         'Slow start, got better',
  couldnt_put_down:   "Couldn't put it down",
  edge_of_seat:       'Edge of my seat',
  funny:              'Funny',
};

const STATUS_ORDER = ['completed', 'in_progress', 'dnf', 'reading_list'];

/* -------------------------------------------------- */
/* Rating -> score conversion (for migration) */
/* -------------------------------------------------- */

const RATING_TO_SCORE = {
  loved:    9,
  great:    8,
  very_good:7,
  decent:   6,
  average:  5,
  disliked: 3,
  dnf:      null,
};

/* -------------------------------------------------- */
/* Seed data */
/* -------------------------------------------------- */

const SEED_BOOKS = [
  // Don Winslow -- City Trilogy
  { title: 'City on Fire',    author: 'Don Winslow', series: 'City Trilogy', series_order: 1, format: 'audiobook', score: 9, status: 'completed', tags: [], notes: null, recommended_by: null, date_added: null },
  { title: 'City of Dreams',  author: 'Don Winslow', series: 'City Trilogy', series_order: 2, format: 'audiobook', score: 9, status: 'completed', tags: [], notes: null, recommended_by: null, date_added: null },
  { title: 'City in Ruins',   author: 'Don Winslow', series: 'City Trilogy', series_order: 3, format: 'audiobook', score: 9, status: 'completed', tags: [], notes: null, recommended_by: null, date_added: null },

  // Dan Brown -- Robert Langdon
  { title: 'Angels and Demons', author: 'Dan Brown', series: 'Robert Langdon', series_order: 1, format: 'audiobook', score: 7, status: 'completed', tags: [], notes: null, recommended_by: null, date_added: null },
  { title: 'The Da Vinci Code', author: 'Dan Brown', series: 'Robert Langdon', series_order: 2, format: 'audiobook', score: 7, status: 'completed', tags: [], notes: null, recommended_by: null, date_added: null },
  { title: 'The Lost Symbol',   author: 'Dan Brown', series: 'Robert Langdon', series_order: 3, format: 'audiobook', score: 7, status: 'completed', tags: [], notes: null, recommended_by: null, date_added: null },

  // Matthew Reilly -- Jack West Jr
  { title: 'Seven Ancient Wonders',        author: 'Matthew Reilly', series: 'Jack West Jr', series_order: 1, format: 'audiobook', score: 9, status: 'completed', tags: [], notes: null, recommended_by: null, date_added: null },
  { title: 'Six Sacred Stones',            author: 'Matthew Reilly', series: 'Jack West Jr', series_order: 2, format: 'audiobook', score: 9, status: 'completed', tags: [], notes: null, recommended_by: null, date_added: null },
  { title: 'The Five Greatest Warriors',   author: 'Matthew Reilly', series: 'Jack West Jr', series_order: 3, format: 'audiobook', score: 9, status: 'completed', tags: [], notes: null, recommended_by: null, date_added: null },
  { title: 'The Four Legendary Kingdoms',  author: 'Matthew Reilly', series: 'Jack West Jr', series_order: 4, format: 'audiobook', score: 9, status: 'completed', tags: [], notes: null, recommended_by: null, date_added: null },
  { title: 'The Three Secret Cities',      author: 'Matthew Reilly', series: 'Jack West Jr', series_order: 5, format: 'audiobook', score: 9, status: 'completed', tags: [], notes: null, recommended_by: null, date_added: null },
  { title: 'The Two Lost Mountains',       author: 'Matthew Reilly', series: 'Jack West Jr', series_order: 6, format: 'audiobook', score: 9, status: 'completed', tags: [], notes: null, recommended_by: null, date_added: null },
  { title: 'The One Impossible Labyrinth', author: 'Matthew Reilly', series: 'Jack West Jr', series_order: 7, format: 'audiobook', score: 9, status: 'completed', tags: [], notes: null, recommended_by: null, date_added: null },

  // Matthew Reilly -- Scarecrow
  { title: 'Ice Station',                       author: 'Matthew Reilly', series: 'Scarecrow', series_order: 1, format: 'audiobook', score: 6, status: 'completed', tags: [], notes: null, recommended_by: null, date_added: null },
  { title: 'Area 7',                            author: 'Matthew Reilly', series: 'Scarecrow', series_order: 2, format: 'audiobook', score: 6, status: 'completed', tags: [], notes: null, recommended_by: null, date_added: null },
  { title: 'Scarecrow',                         author: 'Matthew Reilly', series: 'Scarecrow', series_order: 3, format: 'audiobook', score: 6, status: 'completed', tags: [], notes: null, recommended_by: null, date_added: null },
  { title: 'Hell Island',                       author: 'Matthew Reilly', series: 'Scarecrow', series_order: 4, format: 'audiobook', score: 6, status: 'completed', tags: [], notes: null, recommended_by: null, date_added: null },
  { title: 'Scarecrow and the Army of Thieves', author: 'Matthew Reilly', series: 'Scarecrow', series_order: 5, format: 'audiobook', score: 6, status: 'completed', tags: [], notes: null, recommended_by: null, date_added: null },

  // Others
  { title: 'Hostage',                        author: 'Eli Sharabi',             series: null, series_order: null, format: 'audiobook', score: 7,    status: 'completed', tags: [], notes: null,                              recommended_by: null, date_added: null },
  { title: 'I Am Pilgrim',                   author: 'Terry Hayes',             series: null, series_order: null, format: 'audiobook', score: 9,    status: 'completed', tags: [], notes: null,                              recommended_by: null, date_added: null },
  { title: 'Ready Player One',               author: 'Ernest Cline',            series: 'Ready Player', series_order: 1, format: 'audiobook', score: 9, status: 'completed', tags: [], notes: null,                    recommended_by: null, date_added: null },
  { title: 'Ready Player Two',               author: 'Ernest Cline',            series: 'Ready Player', series_order: 2, format: 'audiobook', score: 5, status: 'completed', tags: [], notes: null,                    recommended_by: null, date_added: null },
  { title: 'Kane and Abel',                  author: 'Jeffrey Archer',          series: null, series_order: null, format: 'audiobook', score: 9,    status: 'completed', tags: [], notes: null,                              recommended_by: null, date_added: null },
  { title: 'The Fourth Estate',              author: 'Jeffrey Archer',          series: null, series_order: null, format: 'audiobook', score: 6,    status: 'completed', tags: [], notes: null,                              recommended_by: null, date_added: null },
  { title: 'Greenlights',                    author: 'Matthew McConaughey',     series: null, series_order: null, format: 'audiobook', score: 9,    status: 'completed', tags: ['funny'], notes: 'Raucous Stories and Outlaw Wisdom', recommended_by: null, date_added: null },
  { title: 'The Firm',                       author: 'John Grisham',            series: null, series_order: null, format: 'audiobook', score: 8,    status: 'completed', tags: [], notes: null,                              recommended_by: null, date_added: null },
  { title: 'The Many Lives of Mama Love',    author: 'Lara Love Hardin',        series: null, series_order: null, format: 'audiobook', score: 7,    status: 'completed', tags: [], notes: null,                              recommended_by: null, date_added: null },
  { title: 'A Knight of the Seven Kingdoms', author: 'George R.R. Martin',     series: null, series_order: null, format: 'audiobook', score: 6,    status: 'completed', tags: [], notes: null,                              recommended_by: null, date_added: null },
  { title: 'Yearbook',                       author: 'Seth Rogen',              series: null, series_order: null, format: 'audiobook', score: 8,    status: 'completed', tags: ['funny'], notes: 'Hilarious',               recommended_by: null, date_added: null },
  { title: 'Red Rising',                     author: 'Pierce Brown',            series: 'Red Rising', series_order: 1, format: 'audiobook', score: 3, status: 'completed', tags: [], notes: null,                      recommended_by: null, date_added: null },
  { title: 'Exile',                          author: 'Richard North Patterson', series: null, series_order: null, format: 'audiobook', score: 9,    status: 'completed', tags: [], notes: null,                              recommended_by: null, date_added: null },
  { title: 'Sandstorm',                      author: 'James Rollins',           series: null, series_order: null, format: 'audiobook', score: null, status: 'dnf',      tags: [], notes: null,                              recommended_by: null, date_added: null },
  { title: 'The Templar Legacy',             author: 'Steve Berry',             series: null, series_order: null, format: 'audiobook', score: null, status: 'dnf',      tags: [], notes: '28% complete',                    recommended_by: null, date_added: null },
];

/* -------------------------------------------------- */
/* localStorage + File System auto-sync               */
/* -------------------------------------------------- */

/* -------------------------------------------------- */
/* GitHub sync */
/* -------------------------------------------------- */

const GITHUB_REPO = 'danielf-neara/books';
const GITHUB_FILE = 'books-export.json';
const GITHUB_PAT_KEY = 'github_pat';

let githubSha  = null;
let syncTimer  = null;

function getGithubPat() {
  return localStorage.getItem(GITHUB_PAT_KEY) || '';
}

async function githubLoad() {
  const pat = getGithubPat();
  const headers = { Accept: 'application/vnd.github+json' };
  if (pat) headers.Authorization = `Bearer ${pat}`;
  try {
    const res = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/contents/${GITHUB_FILE}`,
      { headers }
    );
    if (!res.ok) return null;
    const data = await res.json();
    githubSha = data.sha;
    return JSON.parse(atob(data.content.replace(/\n/g, '')));
  } catch {
    return null;
  }
}

async function githubSave() {
  const pat = getGithubPat();
  if (!pat) return;
  setSyncStatus('syncing');
  try {
    const json    = JSON.stringify(allBooks, null, 2);
    const content = btoa(unescape(encodeURIComponent(json)));
    const res = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/contents/${GITHUB_FILE}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${pat}`,
          Accept: 'application/vnd.github+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.assign({ message: 'Update books', content }, githubSha ? { sha: githubSha } : {})),
      }
    );
    if (!res.ok) { setSyncStatus('error'); return; }
    const data = await res.json();
    githubSha = data.content.sha;
    setSyncStatus('synced');
  } catch {
    setSyncStatus('error');
  }
}

function setSyncStatus(status) {
  const el = document.getElementById('sync-status');
  if (!el) return;
  const labels = { synced: 'Synced', syncing: 'Syncing\u2026', error: 'Sync failed', offline: 'Local only' };
  el.textContent = labels[status] || '';
  el.dataset.status = status;
}

/* -------------------------------------------------- */
/* localStorage + File System auto-sync               */
/* -------------------------------------------------- */

let _fileHandle = null;

async function _idbOp(mode, fn) {
  return new Promise(resolve => {
    const req = indexedDB.open('books_fs', 1);
    req.onupgradeneeded = e => e.target.result.createObjectStore('handles');
    req.onsuccess = e => {
      const tx  = e.target.result.transaction('handles', mode);
      const res = fn(tx.objectStore('handles'));
      res.onsuccess = () => resolve(res.result ?? null);
      res.onerror   = () => resolve(null);
    };
    req.onerror = () => resolve(null);
  });
}

async function _loadHandle() {
  if (_fileHandle) return _fileHandle;
  _fileHandle = await _idbOp('readonly', s => s.get('export'));
  return _fileHandle;
}

async function _storeHandle(handle) {
  _fileHandle = handle;
  await _idbOp('readwrite', s => s.put(handle, 'export'));
}

async function _clearHandle() {
  _fileHandle = null;
  await _idbOp('readwrite', s => s.delete('export'));
}

async function _writeToHandle(handle, content) {
  try {
    let perm = await handle.queryPermission({ mode: 'readwrite' });
    if (perm === 'prompt') perm = await handle.requestPermission({ mode: 'readwrite' });
    if (perm !== 'granted') return false;
    const writable = await handle.createWritable();
    await writable.write(content);
    await writable.close();
    return true;
  } catch {
    return false;
  }
}

async function persistBooks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(allBooks));
  const handle = await _loadHandle();
  if (handle) await _writeToHandle(handle, JSON.stringify(allBooks, null, 2));
  clearTimeout(syncTimer);
  syncTimer = setTimeout(githubSave, 1500);
}

function loadFromStorage() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    try {
      let books = JSON.parse(raw);
      if (!localStorage.getItem(MIGRATION_KEY)) {
        // Reset all summaries so they re-fetch with the plot-section approach
        books = books.map(b => ({ ...b, summary: null }));
        const statusMap = { listened: 'completed', want_to_listen: 'reading_list' };
        books = books.map(b => {
          let status = b.status || 'completed';
          // Rename old status values
          if (statusMap[status]) status = statusMap[status];
          // Old rating=dnf → status=dnf
          if (b.rating === 'dnf') status = 'dnf';

          const score = (b.score !== undefined && b.score !== null)
            ? b.score
            : (b.rating ? (RATING_TO_SCORE[b.rating] ?? null) : null);

          return {
            recommended_by: null,
            tags: [],
            cover_url: null,
            ...b,
            format: 'audiobook',
            status,
            score,
            rating: undefined,
            finished: undefined,
          };
        });
        localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
        localStorage.setItem(MIGRATION_KEY, '1');
      }
      // Reset empty-string summaries from old Wikipedia fetch so Google Books re-fetches them
      if (!localStorage.getItem(MIGRATION_GOOGLE)) {
        books = books.map(b => ({ ...b, summary: b.summary === '' ? null : b.summary }));
        localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
        localStorage.setItem(MIGRATION_GOOGLE, '1');
      }
      return books;
    } catch { /* fall through */ }
  }

  // First run
  const seeded = SEED_BOOKS.map(b => ({ ...b, id: crypto.randomUUID() }));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(seeded));
  localStorage.setItem(MIGRATION_KEY, '1');
  return seeded;
}

/* -------------------------------------------------- */
/* State */
/* -------------------------------------------------- */

let allBooks = [];
let pendingDeleteId = null;

/* -------------------------------------------------- */
/* CRUD */
/* -------------------------------------------------- */

function addBook(book) {
  allBooks.unshift({ ...book, id: crypto.randomUUID() });
  persistBooks();
  applyFiltersAndRender();
}

function updateBook(id, updates) {
  const idx = allBooks.findIndex(b => b.id === id);
  if (idx === -1) return;
  allBooks[idx] = { ...allBooks[idx], ...updates };
  persistBooks();
  applyFiltersAndRender();
}

function deleteBook(id) {
  allBooks = allBooks.filter(b => b.id !== id);
  persistBooks();
  applyFiltersAndRender();
}

/* -------------------------------------------------- */
/* Filter + sort */
/* -------------------------------------------------- */

function getFilters() {
  return {
    query:  document.getElementById('search-input').value.trim().toLowerCase(),
    status: document.getElementById('filter-status').value,
    score:  document.getElementById('filter-score').value,
    format: document.getElementById('filter-format').value,
    sortBy: document.getElementById('sort-by').value,
  };
}

function applyFiltersAndRender() {
  const { query, status, score, format, sortBy } = getFilters();

  let books = [...allBooks];

  if (query) books = books.filter(b =>
    (b.title  || '').toLowerCase().includes(query) ||
    (b.author || '').toLowerCase().includes(query)
  );

  if (status) books = books.filter(b => b.status === status);

  if (score) {
    if (score === 'below6') {
      books = books.filter(b => b.score !== null && b.score < 6);
    } else {
      const min = parseFloat(score);
      books = books.filter(b => b.score !== null && b.score >= min);
    }
  }

  if (format) books = books.filter(b => b.format === format);

  books.sort((a, b) => {
    // In progress always floats to top regardless of sort
    const aIn = a.status === 'in_progress' ? 0 : 1;
    const bIn = b.status === 'in_progress' ? 0 : 1;
    if (aIn !== bIn) return aIn - bIn;

    if (sortBy === 'score') {
      const sa = STATUS_ORDER.indexOf(a.status);
      const sb = STATUS_ORDER.indexOf(b.status);
      if (sa !== sb) return sa - sb;
      return (b.score ?? 0) - (a.score ?? 0);
    }
    if (sortBy === 'author') return (a.author || '').localeCompare(b.author || '');
    if (sortBy === 'title')  return (a.title  || '').localeCompare(b.title  || '');
    return 0; // date_added: insertion order
  });

  renderBooks(books);
  updateStats();
}

/* -------------------------------------------------- */
/* Stats */
/* -------------------------------------------------- */

/* -------------------------------------------------- */
/* Home */
/* -------------------------------------------------- */

function homeBookCardHTML(book) {
  const hasCover = book.cover_url && book.cover_url !== 'none';
  const coverEl  = hasCover
    ? `<img class="home-card-cover" src="${book.cover_url}" alt="" loading="lazy">`
    : `<div class="home-card-cover home-card-cover-blank">${escHtml((book.title || '?')[0].toUpperCase())}</div>`;

  let badge = '';
  if (book.status === 'in_progress') {
    badge = `<span class="home-card-badge badge-progress">Reading</span>`;
  } else if (book.score !== null && book.score !== undefined) {
    badge = `<span class="home-card-badge ${scoreClass(book.score)}">${book.score}</span>`;
  }

  return `
    <div class="home-card" onclick="activateTab('library')">
      <div class="home-card-cover-wrap">
        ${coverEl}
        ${badge}
      </div>
      <div class="home-card-info">
        <div class="home-card-title">${escHtml(book.title)}</div>
        <div class="home-card-author">${escHtml(book.author)}</div>
      </div>
    </div>`;
}

function renderHome() {
  const completed   = allBooks.filter(b => b.status === 'completed');
  const inProgress  = allBooks.filter(b => b.status === 'in_progress');
  const readingList = allBooks.filter(b => b.status === 'reading_list');

  const scores = completed.map(b => b.score).filter(s => s !== null && s !== undefined);
  const avg = scores.length
    ? (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1)
    : '--';

  document.getElementById('home-total').textContent = completed.length;
  document.getElementById('home-avg').textContent   = avg;
  document.getElementById('home-queue').textContent = readingList.length;

  const currentSection = document.getElementById('home-current-section');
  if (inProgress.length) {
    currentSection.classList.remove('hidden');
    document.getElementById('home-current').innerHTML = inProgress.map(homeBookCardHTML).join('');
  } else {
    currentSection.classList.add('hidden');
  }

  document.getElementById('home-recent').innerHTML =
    completed.slice(0, 8).map(homeBookCardHTML).join('');

  const upNextSection = document.getElementById('home-upnext-section');
  if (readingList.length) {
    upNextSection.classList.remove('hidden');
    document.getElementById('home-upnext').innerHTML =
      readingList.slice(0, 8).map(homeBookCardHTML).join('');
  } else {
    upNextSection.classList.add('hidden');
  }
}

function updateStats() {
  const completed = allBooks.filter(b => b.status === 'completed');
  const scores    = completed.map(b => b.score).filter(s => s !== null && s !== undefined);
  const avg       = scores.length
    ? (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1)
    : '--';

  document.getElementById('stat-total').textContent = completed.length;
  document.getElementById('stat-avg').textContent   = avg;
  document.getElementById('stat-queue').textContent = allBooks.filter(b => b.status === 'reading_list').length;
}

/* -------------------------------------------------- */
/* Render */
/* -------------------------------------------------- */

function renderBooks(books) {
  const list = document.getElementById('book-list');

  if (books.length === 0) {
    list.innerHTML = '<div id="empty-state">No entries match the current filters.</div>';
    return;
  }

  const inProgress = books.filter(b => b.status === 'in_progress');
  const completed  = books.filter(b => b.status === 'completed');
  const other      = books.filter(b => b.status !== 'in_progress' && b.status !== 'completed');

  // If both sections present, render with headers; otherwise render flat
  const showSections = inProgress.length > 0 && completed.length > 0;

  if (showSections) {
    list.innerHTML =
      section('In Progress', inProgress) +
      section('Completed', completed) +
      (other.length ? section('Other', other) : '');
  } else {
    list.innerHTML = books.map(bookCardHTML).join('');
  }
}

function section(label, books) {
  if (!books.length) return '';
  return `
    <div class="list-section">
      <div class="list-section-header">${label}</div>
      <div class="list-section-body">${books.map(bookCardHTML).join('')}</div>
    </div>`;
}

function scoreClass(score) {
  if (score === null || score === undefined) return '';
  if (score >= 9)  return 'score-9';
  if (score >= 8)  return 'score-8';
  if (score >= 7)  return 'score-7';
  if (score >= 6)  return 'score-6';
  if (score >= 5)  return 'score-5';
  return 'score-low';
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-AU', { year: 'numeric', month: 'short', day: 'numeric' });
}

function bookCardHTML(book) {
  const id           = book.id;
  const isInProgress = book.status === 'in_progress';
  const isQueue      = book.status === 'reading_list';
  const isDnf        = book.status === 'dnf';

  let indicator;
  if (isInProgress) {
    indicator = `<span class="row-dot"></span>`;
  } else if (isQueue) {
    indicator = `<span class="row-status-pill pill-reading-list">List</span>`;
  } else if (isDnf) {
    indicator = `<span class="row-status-pill pill-dnf">DNF</span>`;
  } else if (book.score !== null && book.score !== undefined) {
    indicator = `<span class="row-score ${scoreClass(book.score)}">${book.score}</span>`;
  } else {
    indicator = '';
  }

  const hasCover = book.cover_url && book.cover_url !== 'none';
  const coverEl  = hasCover
    ? `<img class="row-cover" src="${book.cover_url}" alt="" loading="lazy">`
    : `<div class="row-cover row-cover-blank">${escHtml((book.title || '?')[0].toUpperCase())}</div>`;

  return `
    <div class="book-row${isInProgress ? ' row-in-progress' : ''}" data-id="${id}">
      <div class="book-row-main" onclick="toggleRow('${id}')">
        ${coverEl}
        <div class="row-info">
          <span class="row-title">${escHtml(book.title)}</span><span class="row-author-sep"> · </span><span class="row-author">${escHtml(book.author)}</span>
        </div>
        ${indicator}
        <span class="row-chevron">›</span>
      </div>
      <div class="book-detail">
        <div class="detail-inner">
          <div class="detail-content" id="detail-${id}">
            ${buildDetailContent(book)}
          </div>
        </div>
      </div>
    </div>`;
}

/* -------------------------------------------------- */
/* Detail content builder */
/* -------------------------------------------------- */

function buildDetailContent(book) {
  const id   = book.id;
  const date = formatDate(book.date_added);
  const tags = (book.tags || []).map(t => `<span class="tag">${TAG_LABELS[t] || t}</span>`).join('');
  const seriesText = book.series
    ? `${book.series}${book.series_order ? ' #' + book.series_order : ''}`
    : '';

  const metaParts = [];
  if (seriesText)          metaParts.push(escHtml(seriesText));
  if (book.format)         metaParts.push(book.format === 'audiobook' ? 'Audiobook' : 'Book');
  if (date)                metaParts.push(date);
  if (book.recommended_by) metaParts.push('Rec. ' + escHtml(book.recommended_by));

  const genreHtml = (book.genres || []).length
    ? `<div class="detail-genres">${book.genres.map(g => `<span class="genre-pill">${escHtml(g)}</span>`).join('')}</div>`
    : '';

  const summaryHtml = book.summary
    ? `<div class="detail-summary">${escHtml(book.summary)}</div>`
    : (book.summary === null || book.summary === undefined)
      ? `<div class="detail-summary detail-loading">Loading summary...</div>`
      : '';

  return `
    ${book.summary === null || book.summary === undefined ? '' : ''}
    ${metaParts.length ? `<div class="detail-meta">${metaParts.join(' · ')}</div>` : ''}
    ${genreHtml}
    ${summaryHtml}
    ${tags ? `<div class="book-tags">${tags}</div>` : ''}
    ${book.notes ? `<div class="detail-notes">${escHtml(book.notes)}</div>` : ''}
    <div class="detail-actions">
      <button class="btn-row-action" onclick="event.stopPropagation(); startEdit('${id}')">Edit</button>
      <button class="btn-row-action danger" onclick="event.stopPropagation(); promptDelete('${id}', '${escAttr(book.title)}')">Delete</button>
    </div>`;
}

/* -------------------------------------------------- */
/* Row expand / collapse */
/* -------------------------------------------------- */

function toggleRow(id) {
  const row = document.querySelector(`.book-row[data-id="${id}"]`);
  if (!row) return;
  const isExpanding = !row.classList.contains('expanded');
  document.querySelectorAll('.book-row.expanded').forEach(r => r.classList.remove('expanded'));
  if (isExpanding) {
    row.classList.add('expanded');
    fetchBookDetails(id);
  }
}

/* -------------------------------------------------- */
/* Lazy-fetch genre + summary on expand */
/* -------------------------------------------------- */

async function fetchBookDetails(id) {
  const book = allBooks.find(b => b.id === id);
  if (!book) return;
  // Already fetched (empty string = checked, nothing found)
  if (book.genres !== null && book.genres !== undefined &&
      book.summary !== null && book.summary !== undefined) return;

  const [genres, summary] = await Promise.all([
    fetchGenres(book.title, book.author),
    fetchGoogleBooksSummary(book.title, book.author),
  ]);

  const idx = allBooks.findIndex(b => b.id === id);
  if (idx === -1) return;
  allBooks[idx] = { ...allBooks[idx], genres, summary };
  persistBooks();

  // Refresh the detail panel if still expanded
  const el = document.getElementById(`detail-${id}`);
  if (el) el.innerHTML = buildDetailContent(allBooks[idx]);
}

async function fetchGenres(title, author) {
  try {
    const url = `https://openlibrary.org/search.json?title=${encodeURIComponent(title)}&author=${encodeURIComponent(author)}&limit=1&fields=subject`;
    const res  = await fetch(url);
    const data = await res.json();
    const subjects = data.docs?.[0]?.subject || [];
    // Keep short, non-location subjects (likely genre labels)
    return subjects
      .filter(s => s.length < 28 && !/\(|\d/.test(s))
      .slice(0, 4);
  } catch {
    return [];
  }
}

async function fetchGoogleBooksSummary(title, author) {
  try {
    const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(title)}+inauthor:${encodeURIComponent(author)}&maxResults=1`;
    const res  = await fetch(url);
    const data = await res.json();
    const description = data.items?.[0]?.volumeInfo?.description;
    if (!description) return '';
    const text = description.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [];
    return sentences.length ? sentences.slice(0, 3).join(' ').trim() : text.slice(0, 400).trim();
  } catch {
    return '';
  }
}

/* -------------------------------------------------- */
/* Form */
/* -------------------------------------------------- */

function updateFormSections() {
  const status = document.getElementById('f-status').value;
  const showScore = status === 'completed';
  document.getElementById('score-section').classList.toggle('hidden', !showScore);
  document.getElementById('no-score-section').classList.toggle('hidden', showScore);
}

function showForm(title = 'Add') {
  document.getElementById('form-title').textContent = title;
  document.getElementById('book-form').classList.remove('hidden');
  updateFormSections();
  document.getElementById('f-title').focus();
}

function hideForm() {
  document.getElementById('book-form').reset();
  document.getElementById('edit-id').value = '';
  document.getElementById('form-title').textContent = 'Add';
  document.getElementById('form-submit-btn').textContent = 'Add';
  document.getElementById('book-form').classList.add('hidden');
  updateFormSections();
}

function startEdit(id) {
  const book = allBooks.find(b => b.id === id);
  if (!book) return;

  document.getElementById('edit-id').value          = id;
  document.getElementById('f-title').value          = book.title || '';
  document.getElementById('f-author').value         = book.author || '';
  document.getElementById('f-series').value         = book.series || '';
  document.getElementById('f-series-order').value   = book.series_order || '';
  document.getElementById('f-status').value         = book.status || 'listened';
  document.getElementById('f-format').value         = book.format || 'audiobook';
  document.getElementById('f-score').value          = book.score ?? '';
  document.getElementById('f-recommended-by').value = book.recommended_by || '';
  document.getElementById('f-recommended-by-2').value = book.recommended_by || '';
  document.getElementById('f-date').value           = book.date_added || '';
  document.getElementById('f-notes').value          = book.notes || '';
  document.getElementById('f-notes-2').value        = book.notes || '';
  document.getElementById('f-cover-url').value      = book.cover_url || '';

  // Set tag checkboxes
  document.querySelectorAll('input[name="tag"]').forEach(cb => {
    cb.checked = (book.tags || []).includes(cb.value);
  });

  updateFormSections();
  document.getElementById('form-submit-btn').textContent = 'Save';
  showForm('Edit');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleFormSubmit(e) {
  e.preventDefault();

  const status = document.getElementById('f-status').value;
  const scoreRaw = document.getElementById('f-score').value;
  const score = scoreRaw !== '' ? Math.round(parseFloat(scoreRaw)) : null;

  if (status === 'completed' && score === null) {
    alert('Please enter a score.');
    return;
  }

  const isScored = status === 'completed';

  const tags = isScored
    ? [...document.querySelectorAll('input[name="tag"]:checked')].map(cb => cb.value)
    : [];

  const recommended_by = isScored
    ? document.getElementById('f-recommended-by').value.trim() || null
    : document.getElementById('f-recommended-by-2').value.trim() || null;

  const notes = isScored
    ? document.getElementById('f-notes').value.trim() || null
    : document.getElementById('f-notes-2').value.trim() || null;

  const book = {
    title:          document.getElementById('f-title').value.trim(),
    author:         document.getElementById('f-author').value.trim(),
    series:         document.getElementById('f-series').value.trim() || null,
    series_order:   parseInt(document.getElementById('f-series-order').value) || null,
    status,
    format:         document.getElementById('f-format').value,
    score:          isScored ? score : null,
    tags,
    recommended_by,
    notes,
    cover_url:      document.getElementById('f-cover-url').value || null,
    date_added:     isScored ? (document.getElementById('f-date').value || null) : null,
  };

  const editId = document.getElementById('edit-id').value;
  if (editId) updateBook(editId, book);
  else        addBook(book);
  hideForm();
}

/* -------------------------------------------------- */
/* Delete */
/* -------------------------------------------------- */

function promptDelete(id, title) {
  pendingDeleteId = id;
  document.getElementById('delete-msg').textContent = `Delete "${title}"?`;
  document.getElementById('delete-dialog').showModal();
}

function confirmDelete() {
  if (!pendingDeleteId) return;
  deleteBook(pendingDeleteId);
  pendingDeleteId = null;
  document.getElementById('delete-dialog').close();
}

/* -------------------------------------------------- */
/* Export */
/* -------------------------------------------------- */

function importBooks() {
  document.getElementById('import-input').click();
}

function handleImport(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    try {
      const imported = JSON.parse(ev.target.result);
      if (!Array.isArray(imported)) throw new Error();
      allBooks = imported;
      persistBooks();
      applyFiltersAndRender();
    } catch {
      alert('Invalid file. Please select a valid books export JSON.');
    }
  };
  reader.readAsText(file);
  e.target.value = '';
}

async function exportBooks() {
  const json = JSON.stringify(allBooks, null, 2);

  if (window.showSaveFilePicker) {
    try {
      let handle = await _loadHandle();
      if (!handle) {
        handle = await window.showSaveFilePicker({
          suggestedName: 'books-export.json',
          types: [{ description: 'JSON', accept: { 'application/json': ['.json'] } }],
        });
        await _storeHandle(handle);
      }
      const ok = await _writeToHandle(handle, json);
      if (ok) return;
      // Permission denied or file moved -- reset and fall through to download
      await _clearHandle();
    } catch (e) {
      if (e.name === 'AbortError') return;
      await _clearHandle();
    }
  }

  // Fallback for browsers without File System Access API
  const blob = new Blob([json], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = Object.assign(document.createElement('a'), { href: url, download: 'books-export.json' });
  a.click();
  URL.revokeObjectURL(url);
}

/* -------------------------------------------------- */
/* Auto-fetch missing covers */
/* -------------------------------------------------- */

async function fetchMissingCovers() {
  const missing = allBooks.filter(b => b.cover_url === null || b.cover_url === undefined);
  if (!missing.length) return;

  // Process in batches of 4 to avoid hammering the API
  for (let i = 0; i < missing.length; i += 4) {
    const batch = missing.slice(i, i + 4);
    await Promise.all(batch.map(async book => {
      try {
        const url = `https://openlibrary.org/search.json?title=${encodeURIComponent(book.title)}&author=${encodeURIComponent(book.author)}&limit=1&fields=cover_i`;
        const res  = await fetch(url);
        const data = await res.json();
        const coverId = data.docs?.[0]?.cover_i;
        const coverUrl = coverId
          ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
          : 'none'; // sentinel so we don't re-fetch
        const idx = allBooks.findIndex(b => b.id === book.id);
        if (idx !== -1) {
          allBooks[idx].cover_url = coverUrl;
          updateCoverInDom(book.id, coverUrl);
        }
      } catch { /* silent fail */ }
    }));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allBooks));
    if (i + 4 < missing.length) await new Promise(r => setTimeout(r, 250));
  }
}

function updateCoverInDom(id, coverUrl) {
  const el = document.querySelector(`.book-row[data-id="${id}"] .row-cover, .book-row[data-id="${id}"] .row-cover-blank`);
  if (!el) return;
  if (coverUrl && coverUrl !== 'none') {
    const img = document.createElement('img');
    img.className = 'row-cover';
    img.src = coverUrl;
    img.alt = '';
    img.loading = 'lazy';
    el.replaceWith(img);
  }
}

/* -------------------------------------------------- */
/* Book lookup (Open Library) */
/* -------------------------------------------------- */

let lookupTimeout = null;
let authorLookupTimeout = null;

async function searchOpenLibrary(query) {
  const url = `https://openlibrary.org/search.json?title=${encodeURIComponent(query)}&limit=6&fields=title,author_name,series,series_number,cover_i`;
  try {
    const res  = await fetch(url);
    const data = await res.json();
    return data.docs || [];
  } catch {
    return [];
  }
}

function showSuggestions(results) {
  const box = document.getElementById('book-suggestions');
  box.innerHTML = '';

  if (!results.length) {
    box.classList.add('hidden');
    return;
  }

  results.forEach(book => {
    const title    = book.title || '';
    const author   = (book.author_name  || [])[0] || '';
    const series   = (book.series       || [])[0] || '';
    const seriesNo = (book.series_number|| [])[0] || '';

    const coverId  = book.cover_i || null;
    const coverUrl = coverId ? `https://covers.openlibrary.org/b/id/${coverId}-S.jpg` : null;

    const item = document.createElement('div');
    item.className = 'suggestion-item';
    item.innerHTML = `
      ${coverUrl ? `<img class="suggestion-cover" src="${coverUrl}" alt="" loading="lazy">` : '<div class="suggestion-cover suggestion-cover-blank"></div>'}
      <div>
        <div class="suggestion-title">${escHtml(title)}</div>
        <div class="suggestion-meta">${escHtml(author)}${series ? ` &middot; ${escHtml(series)}${seriesNo ? ' #' + parseInt(seriesNo) : ''}` : ''}</div>
      </div>`;

    const medCoverUrl = coverId ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg` : null;

    item.addEventListener('mousedown', e => {
      e.preventDefault();
      document.getElementById('f-title').value        = title;
      document.getElementById('f-author').value       = author;
      document.getElementById('f-series').value       = series;
      document.getElementById('f-series-order').value = seriesNo ? parseInt(seriesNo) || '' : '';
      // Store cover URL in a hidden field for form submission
      document.getElementById('f-cover-url').value   = medCoverUrl || '';
      closeSuggestions();
      document.getElementById('f-score').focus();
    });

    box.appendChild(item);
  });

  box.classList.remove('hidden');
}

function closeSuggestions() {
  document.getElementById('book-suggestions').classList.add('hidden');
}

async function searchOpenLibraryByAuthor(query) {
  const url = `https://openlibrary.org/search.json?author=${encodeURIComponent(query)}&limit=6&fields=title,author_name,series,series_number,cover_i`;
  try {
    const res  = await fetch(url);
    const data = await res.json();
    return data.docs || [];
  } catch {
    return [];
  }
}

function showAuthorSuggestions(results) {
  const box = document.getElementById('author-suggestions');
  box.innerHTML = '';

  if (!results.length) {
    box.classList.add('hidden');
    return;
  }

  results.forEach(book => {
    const title    = book.title || '';
    const author   = (book.author_name   || [])[0] || '';
    const series   = (book.series        || [])[0] || '';
    const seriesNo = (book.series_number || [])[0] || '';
    const coverId  = book.cover_i || null;
    const coverUrl = coverId ? `https://covers.openlibrary.org/b/id/${coverId}-S.jpg` : null;

    const item = document.createElement('div');
    item.className = 'suggestion-item';
    item.innerHTML = `
      ${coverUrl ? `<img class="suggestion-cover" src="${coverUrl}" alt="" loading="lazy">` : '<div class="suggestion-cover suggestion-cover-blank"></div>'}
      <div>
        <div class="suggestion-title">${escHtml(title)}</div>
        <div class="suggestion-meta">${escHtml(author)}${series ? ` &middot; ${escHtml(series)}${seriesNo ? ' #' + parseInt(seriesNo) : ''}` : ''}</div>
      </div>`;

    const medCoverUrl = coverId ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg` : null;

    item.addEventListener('mousedown', e => {
      e.preventDefault();
      document.getElementById('f-title').value        = title;
      document.getElementById('f-author').value       = author;
      document.getElementById('f-series').value       = series;
      document.getElementById('f-series-order').value = seriesNo ? parseInt(seriesNo) || '' : '';
      document.getElementById('f-cover-url').value   = medCoverUrl || '';
      closeAuthorSuggestions();
      document.getElementById('f-score').focus();
    });

    box.appendChild(item);
  });

  box.classList.remove('hidden');
}

function closeAuthorSuggestions() {
  document.getElementById('author-suggestions').classList.add('hidden');
}

/* -------------------------------------------------- */
/* Helpers */
/* -------------------------------------------------- */

function escHtml(str) {
  if (!str) return '';
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function escAttr(str) {
  if (!str) return '';
  return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

/* -------------------------------------------------- */
/* Init */
/* -------------------------------------------------- */

async function loadFromFile() {
  const handle = await _loadHandle();
  if (!handle) return { books: null, needsPermission: false };
  try {
    const perm = await handle.queryPermission({ mode: 'readwrite' });
    if (perm === 'granted') {
      const file = await handle.getFile();
      const text = await file.text();
      return { books: JSON.parse(text), needsPermission: false };
    }
    return { books: null, needsPermission: true };
  } catch {
    return { books: null, needsPermission: false };
  }
}

async function syncFromFile() {
  const handle = await _loadHandle();
  if (!handle) return;
  try {
    const perm = await handle.requestPermission({ mode: 'readwrite' });
    if (perm !== 'granted') return;
    const file = await handle.getFile();
    const text = await file.text();
    allBooks = JSON.parse(text);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allBooks));
    applyFiltersAndRender();
    document.getElementById('sync-banner').classList.add('hidden');
  } catch { /* silent */ }
}

document.addEventListener('DOMContentLoaded', async () => {
  const githubBooks = await githubLoad();
  if (githubBooks) {
    allBooks = githubBooks;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allBooks));
    setSyncStatus('synced');
  } else {
    const { books, needsPermission } = await loadFromFile();
    if (books) {
      allBooks = books;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(allBooks));
    } else {
      allBooks = loadFromStorage();
    }
    if (needsPermission) {
      document.getElementById('sync-banner').classList.remove('hidden');
    }
    setSyncStatus(getGithubPat() ? 'error' : 'offline');
  }

  document.getElementById('toggle-form-btn').addEventListener('click', () => {
    const form = document.getElementById('book-form');
    if (form.classList.contains('hidden')) showForm();
    else hideForm();
  });

  document.getElementById('f-status').addEventListener('change', updateFormSections);
  document.getElementById('cancel-form-btn').addEventListener('click', hideForm);
  document.getElementById('book-form').addEventListener('submit', handleFormSubmit);

  document.getElementById('confirm-delete-btn').addEventListener('click', confirmDelete);
  document.getElementById('cancel-delete-btn').addEventListener('click', () => {
    pendingDeleteId = null;
    document.getElementById('delete-dialog').close();
  });

  ['filter-status', 'filter-score', 'filter-format', 'sort-by'].forEach(id => {
    document.getElementById(id).addEventListener('change', applyFiltersAndRender);
  });

  document.getElementById('search-input').addEventListener('input', applyFiltersAndRender);

  document.getElementById('export-btn').addEventListener('click', exportBooks);
  document.getElementById('import-btn').addEventListener('click', importBooks);
  document.getElementById('import-input').addEventListener('change', handleImport);
  document.getElementById('sync-banner-btn').addEventListener('click', syncFromFile);

  document.getElementById('settings-btn').addEventListener('click', () => {
    document.getElementById('settings-pat').value = getGithubPat();
    document.getElementById('settings-dialog').showModal();
  });
  document.getElementById('settings-save-btn').addEventListener('click', async () => {
    const pat = document.getElementById('settings-pat').value.trim();
    if (pat) localStorage.setItem(GITHUB_PAT_KEY, pat);
    else localStorage.removeItem(GITHUB_PAT_KEY);
    document.getElementById('settings-dialog').close();
    const books = await githubLoad();
    if (books) {
      allBooks = books;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(allBooks));
      setSyncStatus('synced');
      applyFiltersAndRender();
      renderHome();
    }
  });
  document.getElementById('settings-cancel-btn').addEventListener('click', () => {
    document.getElementById('settings-dialog').close();
  });

  // Title lookup
  const titleInput = document.getElementById('f-title');
  titleInput.addEventListener('input', () => {
    clearTimeout(lookupTimeout);
    const q = titleInput.value.trim();
    if (q.length < 3) { closeSuggestions(); return; }
    lookupTimeout = setTimeout(async () => {
      const results = await searchOpenLibrary(q);
      showSuggestions(results);
    }, 350);
  });
  titleInput.addEventListener('blur', () => {
    // Small delay so mousedown on a suggestion fires first
    setTimeout(closeSuggestions, 150);
  });

  // Author lookup
  const authorInput = document.getElementById('f-author');
  authorInput.addEventListener('input', () => {
    clearTimeout(authorLookupTimeout);
    const q = authorInput.value.trim();
    if (q.length < 3) { closeAuthorSuggestions(); return; }
    authorLookupTimeout = setTimeout(async () => {
      const results = await searchOpenLibraryByAuthor(q);
      showAuthorSuggestions(results);
    }, 350);
  });
  authorInput.addEventListener('blur', () => {
    setTimeout(closeAuthorSuggestions, 150);
  });

  // Tab switching
  function activateTab(view) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelector(`.tab-btn[data-view="${view}"]`).classList.add('active');

    const isHome        = view === 'home';
    const isLibrary     = view === 'library';
    const isReadingList = view === 'reading-list';
    const isAnalytics   = view === 'analytics';

    document.getElementById('home-view').classList.toggle('hidden', !isHome);
    document.getElementById('library-view').classList.toggle('hidden', !isLibrary && !isReadingList);
    document.getElementById('analytics-view').classList.toggle('hidden', !isAnalytics);

    document.getElementById('add-section').classList.toggle('hidden', isReadingList);
    document.getElementById('filter-section').classList.toggle('hidden', isReadingList);

    if (isHome) {
      renderHome();
    } else if (isReadingList) {
      document.getElementById('filter-status').value = 'reading_list';
      applyFiltersAndRender();
    } else if (isLibrary) {
      document.getElementById('filter-status').value = '';
      applyFiltersAndRender();
    } else if (isAnalytics) {
      renderAnalytics(allBooks);
    }

    sessionStorage.setItem('active_tab', view);
  }

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => activateTab(btn.dataset.view));
  });

  const savedTab = sessionStorage.getItem('active_tab') || 'home';
  activateTab(savedTab);
  fetchMissingCovers();
});
