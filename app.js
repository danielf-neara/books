/* -------------------------------------------------- */
/* Constants */
/* -------------------------------------------------- */

const STORAGE_KEY   = 'books_data';
const MIGRATION_KEY = 'books_migrated_v5';

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
/* localStorage */
/* -------------------------------------------------- */

function persistBooks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(allBooks));
}

function loadFromStorage() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    try {
      let books = JSON.parse(raw);
      if (!localStorage.getItem(MIGRATION_KEY)) {
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
    status: document.getElementById('filter-status').value,
    score:  document.getElementById('filter-score').value,
    format: document.getElementById('filter-format').value,
    sortBy: document.getElementById('sort-by').value,
  };
}

function applyFiltersAndRender() {
  const { status, score, format, sortBy } = getFilters();

  let books = [...allBooks];

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
  list.innerHTML = books.map(bookCardHTML).join('');
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
  const isQueue      = book.status === 'reading_list';
  const isInProgress = book.status === 'in_progress';
  const isDnf        = book.status === 'dnf';
  const seriesText = book.series
    ? `${book.series}${book.series_order ? ' #' + book.series_order : ''}`
    : '';
  const date = formatDate(book.date_added);
  const tags = (book.tags || []).map(t => `<span class="tag">${TAG_LABELS[t] || t}</span>`).join('');

  let scoreBadge;
  if (isQueue) {
    scoreBadge = `<span class="badge badge-queue">Reading list</span>`;
  } else if (isInProgress) {
    scoreBadge = `<span class="badge badge-in-progress">In progress</span>`;
  } else if (isDnf) {
    scoreBadge = `<span class="badge badge-dnf">DNF</span>`;
  } else if (book.score !== null && book.score !== undefined) {
    scoreBadge = `<span class="score-badge ${scoreClass(book.score)}">${book.score}<span class="score-denom">/10</span></span>`;
  } else {
    scoreBadge = `<span class="badge badge-dnf">No score</span>`;
  }

  const formatBadge = book.format === 'audiobook'
    ? `<span class="badge badge-format">Audiobook</span>`
    : `<span class="badge badge-format">Book</span>`;

  const coverHtml = book.cover_url
    ? `<img class="book-cover" src="${book.cover_url}" alt="" loading="lazy">`
    : `<div class="book-cover book-cover-blank">${escHtml((book.title || '?')[0].toUpperCase())}</div>`;

  return `
    <div class="book-card${isQueue ? ' book-card-queue' : ''}${isInProgress ? ' book-card-in-progress' : ''}${isDnf ? ' book-card-dnf' : ''}" data-id="${book.id}">
      ${coverHtml}
      <div class="book-main">
        <div class="book-title">${escHtml(book.title)}</div>
        <div class="book-author">${escHtml(book.author)}</div>
        ${seriesText ? `<div class="book-series">${escHtml(seriesText)}</div>` : ''}
        <div class="book-meta">
          ${scoreBadge}
          ${formatBadge}
          ${date ? `<span class="book-date">${date}</span>` : ''}
          ${book.recommended_by ? `<span class="book-rec">rec. ${escHtml(book.recommended_by)}</span>` : ''}
        </div>
        ${tags ? `<div class="book-tags">${tags}</div>` : ''}
        ${book.notes ? `<div class="book-notes">${escHtml(book.notes)}</div>` : ''}
      </div>
      <div class="book-actions">
        <button class="btn-icon" onclick="startEdit('${book.id}')">Edit</button>
        <button class="btn-icon" onclick="promptDelete('${book.id}', '${escAttr(book.title)}')">Del</button>
      </div>
    </div>`;
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

function exportBooks() {
  const blob = new Blob([JSON.stringify(allBooks, null, 2)], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = Object.assign(document.createElement('a'), { href: url, download: 'books-export.json' });
  a.click();
  URL.revokeObjectURL(url);
}

/* -------------------------------------------------- */
/* Book lookup (Open Library) */
/* -------------------------------------------------- */

let lookupTimeout = null;

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

document.addEventListener('DOMContentLoaded', () => {
  allBooks = loadFromStorage();

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

  document.getElementById('export-btn').addEventListener('click', exportBooks);

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

  // Tab switching
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.dataset.view;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('library-view').classList.toggle('hidden', view !== 'library');
      document.getElementById('analytics-view').classList.toggle('hidden', view !== 'analytics');
      if (view === 'analytics') renderAnalytics(allBooks);
    });
  });

  applyFiltersAndRender();
});
