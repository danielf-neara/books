/* -------------------------------------------------- */
/* Constants */
/* -------------------------------------------------- */

const STORAGE_KEY = 'books_data';

const RATING_ORDER = ['loved', 'great', 'very_good', 'decent', 'average', 'disliked', 'dnf'];

const RATING_LABELS = {
  loved:    'Loved',
  great:    'Great',
  very_good:'Very Good',
  decent:   'Decent',
  average:  'Average',
  disliked: 'Disliked',
  dnf:      'DNF',
};

/* -------------------------------------------------- */
/* Seed data (loaded on first run only) */
/* -------------------------------------------------- */

const SEED_BOOKS = [
  // Don Winslow -- City Trilogy
  { title: 'City on Fire',    author: 'Don Winslow', series: 'City Trilogy', series_order: 1, format: 'book', rating: 'loved',    finished: true,  notes: null },
  { title: 'City of Dreams',  author: 'Don Winslow', series: 'City Trilogy', series_order: 2, format: 'book', rating: 'loved',    finished: true,  notes: null },
  { title: 'City in Ruins',   author: 'Don Winslow', series: 'City Trilogy', series_order: 3, format: 'book', rating: 'loved',    finished: true,  notes: null },

  // Dan Brown -- Robert Langdon
  { title: 'Angels and Demons', author: 'Dan Brown', series: 'Robert Langdon', series_order: 1, format: 'book', rating: 'very_good', finished: true, notes: null },
  { title: 'The Da Vinci Code', author: 'Dan Brown', series: 'Robert Langdon', series_order: 2, format: 'book', rating: 'very_good', finished: true, notes: null },
  { title: 'The Lost Symbol',   author: 'Dan Brown', series: 'Robert Langdon', series_order: 3, format: 'book', rating: 'very_good', finished: true, notes: null },

  // Matthew Reilly -- Jack West Jr
  { title: 'Seven Ancient Wonders',        author: 'Matthew Reilly', series: 'Jack West Jr', series_order: 1, format: 'book', rating: 'loved', finished: true, notes: null },
  { title: 'Six Sacred Stones',            author: 'Matthew Reilly', series: 'Jack West Jr', series_order: 2, format: 'book', rating: 'loved', finished: true, notes: null },
  { title: 'The Five Greatest Warriors',   author: 'Matthew Reilly', series: 'Jack West Jr', series_order: 3, format: 'book', rating: 'loved', finished: true, notes: null },
  { title: 'The Four Legendary Kingdoms',  author: 'Matthew Reilly', series: 'Jack West Jr', series_order: 4, format: 'book', rating: 'loved', finished: true, notes: null },
  { title: 'The Three Secret Cities',      author: 'Matthew Reilly', series: 'Jack West Jr', series_order: 5, format: 'book', rating: 'loved', finished: true, notes: null },
  { title: 'The Two Lost Mountains',       author: 'Matthew Reilly', series: 'Jack West Jr', series_order: 6, format: 'book', rating: 'loved', finished: true, notes: null },
  { title: 'The One Impossible Labyrinth', author: 'Matthew Reilly', series: 'Jack West Jr', series_order: 7, format: 'book', rating: 'loved', finished: true, notes: null },

  // Matthew Reilly -- Scarecrow
  { title: 'Ice Station',                       author: 'Matthew Reilly', series: 'Scarecrow', series_order: 1, format: 'book', rating: 'decent', finished: true, notes: null },
  { title: 'Area 7',                            author: 'Matthew Reilly', series: 'Scarecrow', series_order: 2, format: 'book', rating: 'decent', finished: true, notes: null },
  { title: 'Scarecrow',                         author: 'Matthew Reilly', series: 'Scarecrow', series_order: 3, format: 'book', rating: 'decent', finished: true, notes: null },
  { title: 'Hell Island',                       author: 'Matthew Reilly', series: 'Scarecrow', series_order: 4, format: 'book', rating: 'decent', finished: true, notes: null },
  { title: 'Scarecrow and the Army of Thieves', author: 'Matthew Reilly', series: 'Scarecrow', series_order: 5, format: 'book', rating: 'decent', finished: true, notes: null },

  // Others
  { title: 'Hostage',                       author: 'Eli Sharabi',             series: null, series_order: null, format: 'book', rating: 'very_good', finished: true,  notes: null },
  { title: 'I Am Pilgrim',                  author: 'Terry Hayes',             series: null, series_order: null, format: 'book', rating: 'loved',    finished: true,  notes: null },
  { title: 'Ready Player One',              author: 'Ernest Cline',            series: 'Ready Player', series_order: 1, format: 'book', rating: 'loved',    finished: true,  notes: null },
  { title: 'Ready Player Two',              author: 'Ernest Cline',            series: 'Ready Player', series_order: 2, format: 'book', rating: 'average',  finished: true,  notes: null },
  { title: 'Kane and Abel',                 author: 'Jeffrey Archer',          series: null, series_order: null, format: 'book', rating: 'loved',    finished: true,  notes: null },
  { title: 'The Fourth Estate',             author: 'Jeffrey Archer',          series: null, series_order: null, format: 'book', rating: 'decent',   finished: true,  notes: null },
  { title: 'Greenlights',                   author: 'Matthew McConaughey',     series: null, series_order: null, format: 'book', rating: 'loved',    finished: true,  notes: 'Raucous Stories and Outlaw Wisdom' },
  { title: 'The Firm',                      author: 'John Grisham',            series: null, series_order: null, format: 'book', rating: 'great',    finished: true,  notes: null },
  { title: 'The Many Lives of Mama Love',   author: 'Lara Love Hardin',        series: null, series_order: null, format: 'book', rating: 'very_good', finished: true, notes: null },
  { title: 'A Knight of the Seven Kingdoms',author: 'George R.R. Martin',      series: null, series_order: null, format: 'book', rating: 'decent',   finished: true,  notes: null },
  { title: 'Yearbook',                      author: 'Seth Rogen',              series: null, series_order: null, format: 'book', rating: 'great',    finished: true,  notes: 'Hilarious' },
  { title: 'Red Rising',                    author: 'Pierce Brown',            series: 'Red Rising', series_order: 1, format: 'book', rating: 'disliked', finished: true, notes: null },
  { title: 'Exile',                         author: 'Richard North Patterson', series: null, series_order: null, format: 'book', rating: 'loved',    finished: true,  notes: null },
  { title: 'Sandstorm',                     author: 'James Rollins',           series: null, series_order: null, format: 'book', rating: 'dnf',      finished: false, notes: null },
  { title: 'The Templar Legacy',            author: 'Steve Berry',             series: null, series_order: null, format: 'book', rating: 'dnf',      finished: false, notes: '28% complete' },
];

/* -------------------------------------------------- */
/* localStorage helpers */
/* -------------------------------------------------- */

function persistBooks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(allBooks));
}

function loadFromStorage() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    try { return JSON.parse(raw); } catch { /* fall through */ }
  }
  // First run -- seed with existing book list
  const seeded = SEED_BOOKS.map((b, i) => ({
    ...b,
    id: crypto.randomUUID(),
    date_added: null,
  }));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(seeded));
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
  const record = { ...book, id: crypto.randomUUID() };
  allBooks.unshift(record);
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
/* Filter + sort + render */
/* -------------------------------------------------- */

function getFilters() {
  return {
    rating:   document.getElementById('filter-rating').value,
    format:   document.getElementById('filter-format').value,
    finished: document.getElementById('filter-finished').value,
    sortBy:   document.getElementById('sort-by').value,
  };
}

function applyFiltersAndRender() {
  const { rating, format, finished, sortBy } = getFilters();

  let books = [...allBooks];

  if (rating)       books = books.filter(b => b.rating === rating);
  if (format)       books = books.filter(b => b.format === format);
  if (finished !== '') books = books.filter(b => String(b.finished) === finished);

  books.sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return RATING_ORDER.indexOf(a.rating) - RATING_ORDER.indexOf(b.rating);
      case 'author':
        return (a.author || '').localeCompare(b.author || '');
      case 'title':
        return (a.title || '').localeCompare(b.title || '');
      default: // date_added -- fall back to insertion order (id is uuid, use array order)
        return 0;
    }
  });

  renderBooks(books);
  updateStats();
}

/* -------------------------------------------------- */
/* Stats */
/* -------------------------------------------------- */

function updateStats() {
  const finished = allBooks.filter(b => b.finished);
  document.getElementById('stat-total').textContent  = finished.length;
  document.getElementById('stat-loved').textContent  = allBooks.filter(b => b.rating === 'loved').length;
  document.getElementById('stat-dnf').textContent    = allBooks.filter(b => b.rating === 'dnf').length;
}

/* -------------------------------------------------- */
/* Render */
/* -------------------------------------------------- */

function renderBooks(books) {
  const list = document.getElementById('book-list');

  if (books.length === 0) {
    list.innerHTML = '<div id="empty-state">No books match the current filters.</div>';
    return;
  }

  list.innerHTML = books.map(bookCardHTML).join('');
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-AU', { year: 'numeric', month: 'short', day: 'numeric' });
}

function bookCardHTML(book) {
  const ratingLabel = RATING_LABELS[book.rating] || book.rating;
  const formatLabel = book.format === 'audiobook' ? 'Audiobook' : 'Book';
  const date        = formatDate(book.date_added);
  const seriesText  = book.series
    ? `${book.series}${book.series_order ? ' #' + book.series_order : ''}`
    : '';

  return `
    <div class="book-card" data-id="${book.id}">
      <div class="book-main">
        <div class="book-title">${escHtml(book.title)}</div>
        <div class="book-author">${escHtml(book.author)}</div>
        ${seriesText ? `<div class="book-series">${escHtml(seriesText)}</div>` : ''}
        <div class="book-meta">
          <span class="badge badge-rating-${book.rating}">${ratingLabel}</span>
          <span class="badge badge-format">${formatLabel}</span>
          ${date ? `<span class="book-date">${date}</span>` : ''}
        </div>
        ${book.notes ? `<div class="book-notes">${escHtml(book.notes)}</div>` : ''}
      </div>
      <div class="book-actions">
        <button class="btn-icon" onclick="startEdit('${book.id}')">Edit</button>
        <button class="btn-icon" onclick="promptDelete('${book.id}', '${escAttr(book.title)}')">Del</button>
      </div>
    </div>`;
}

/* -------------------------------------------------- */
/* Form: add + edit */
/* -------------------------------------------------- */

function showForm(title = 'Add Book') {
  document.getElementById('form-title').textContent = title;
  document.getElementById('book-form').classList.remove('hidden');
  document.getElementById('f-title').focus();
}

function hideForm() {
  const form = document.getElementById('book-form');
  form.reset();
  document.getElementById('edit-id').value = '';
  document.getElementById('form-title').textContent = 'Add Book';
  document.getElementById('form-submit-btn').textContent = 'Add Book';
  form.classList.add('hidden');
}

function startEdit(id) {
  const book = allBooks.find(b => b.id === id);
  if (!book) return;

  document.getElementById('edit-id').value          = id;
  document.getElementById('f-title').value          = book.title || '';
  document.getElementById('f-author').value         = book.author || '';
  document.getElementById('f-series').value         = book.series || '';
  document.getElementById('f-series-order').value   = book.series_order || '';
  document.getElementById('f-format').value         = book.format || 'book';
  document.getElementById('f-rating').value         = book.rating || '';
  document.getElementById('f-date').value           = book.date_added || '';
  document.getElementById('f-notes').value          = book.notes || '';

  document.getElementById('form-submit-btn').textContent = 'Save Changes';
  showForm('Edit Book');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleFormSubmit(e) {
  e.preventDefault();

  const ratingVal = document.getElementById('f-rating').value;
  if (!ratingVal) { alert('Please select a rating.'); return; }

  const book = {
    title:        document.getElementById('f-title').value.trim(),
    author:       document.getElementById('f-author').value.trim(),
    series:       document.getElementById('f-series').value.trim() || null,
    series_order: parseInt(document.getElementById('f-series-order').value) || null,
    format:       document.getElementById('f-format').value,
    rating:       ratingVal,
    notes:        document.getElementById('f-notes').value.trim() || null,
    finished:     ratingVal !== 'dnf',
    date_added:   document.getElementById('f-date').value || null,
  };

  const editId = document.getElementById('edit-id').value;
  if (editId) {
    updateBook(editId, book);
  } else {
    addBook(book);
  }
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
  const json = JSON.stringify(allBooks, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = 'books-export.json';
  a.click();
  URL.revokeObjectURL(url);
}

/* -------------------------------------------------- */
/* Helpers */
/* -------------------------------------------------- */

function escHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
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

  // Form toggle
  document.getElementById('toggle-form-btn').addEventListener('click', () => {
    const form = document.getElementById('book-form');
    if (form.classList.contains('hidden')) showForm();
    else hideForm();
  });
  document.getElementById('cancel-form-btn').addEventListener('click', hideForm);
  document.getElementById('book-form').addEventListener('submit', handleFormSubmit);

  // Delete dialog
  document.getElementById('confirm-delete-btn').addEventListener('click', confirmDelete);
  document.getElementById('cancel-delete-btn').addEventListener('click', () => {
    pendingDeleteId = null;
    document.getElementById('delete-dialog').close();
  });

  // Filters
  ['filter-rating', 'filter-format', 'filter-finished', 'sort-by'].forEach(id => {
    document.getElementById(id).addEventListener('change', applyFiltersAndRender);
  });

  // Export
  document.getElementById('export-btn').addEventListener('click', exportBooks);

  applyFiltersAndRender();
});
