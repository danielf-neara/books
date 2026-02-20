/* -------------------------------------------------- */
/* Constants */
/* -------------------------------------------------- */

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
/* Supabase init */
/* -------------------------------------------------- */

let supabase;

function initSupabase() {
  if (typeof SUPABASE_URL === 'undefined' || typeof SUPABASE_ANON_KEY === 'undefined') {
    document.getElementById('loading').textContent =
      'Error: config.js not found. Copy config.example.js to config.js and fill in your Supabase credentials.';
    throw new Error('Missing Supabase config');
  }
  supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

/* -------------------------------------------------- */
/* State */
/* -------------------------------------------------- */

let allBooks = [];
let pendingDeleteId = null;

/* -------------------------------------------------- */
/* Data fetching */
/* -------------------------------------------------- */

async function loadBooks() {
  const { data, error } = await supabase
    .from('books')
    .select('*')
    .order('date_added', { ascending: false });

  if (error) {
    document.getElementById('loading').textContent = 'Error loading books: ' + error.message;
    return;
  }

  allBooks = data || [];
  document.getElementById('loading').style.display = 'none';
  applyFiltersAndRender();
}

/* -------------------------------------------------- */
/* CRUD operations */
/* -------------------------------------------------- */

async function addBook(book) {
  const { data, error } = await supabase.from('books').insert([book]).select().single();
  if (error) throw error;
  allBooks.unshift(data);
  applyFiltersAndRender();
}

async function updateBook(id, updates) {
  const { data, error } = await supabase.from('books').update(updates).eq('id', id).select().single();
  if (error) throw error;
  const idx = allBooks.findIndex(b => b.id === id);
  if (idx !== -1) allBooks[idx] = data;
  applyFiltersAndRender();
}

async function deleteBook(id) {
  const { error } = await supabase.from('books').delete().eq('id', id);
  if (error) throw error;
  allBooks = allBooks.filter(b => b.id !== id);
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

  if (rating)   books = books.filter(b => b.rating === rating);
  if (format)   books = books.filter(b => b.format === format);
  if (finished !== '') books = books.filter(b => String(b.finished) === finished);

  books.sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return RATING_ORDER.indexOf(a.rating) - RATING_ORDER.indexOf(b.rating);
      case 'author':
        return (a.author || '').localeCompare(b.author || '');
      case 'title':
        return (a.title || '').localeCompare(b.title || '');
      default: // date_added
        return new Date(b.date_added || 0) - new Date(a.date_added || 0);
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
  document.getElementById('stat-total').textContent = finished.length;
  document.getElementById('stat-loved').textContent = allBooks.filter(b => b.rating === 'loved').length;
  document.getElementById('stat-dnf').textContent   = allBooks.filter(b => b.rating === 'dnf').length;
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

  list.innerHTML = books.map(book => bookCardHTML(book)).join('');
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-AU', { year: 'numeric', month: 'short', day: 'numeric' });
}

function bookCardHTML(book) {
  const ratingLabel = RATING_LABELS[book.rating] || book.rating;
  const formatLabel = book.format === 'audiobook' ? 'Audiobook' : 'Book';
  const date = formatDate(book.date_added);

  const seriesText = book.series
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
        <button class="btn-icon" onclick="promptDelete('${book.id}', '${escAttr(book.title)}')">Delete</button>
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

  document.getElementById('edit-id').value = id;
  document.getElementById('f-title').value        = book.title || '';
  document.getElementById('f-author').value       = book.author || '';
  document.getElementById('f-series').value       = book.series || '';
  document.getElementById('f-series-order').value = book.series_order || '';
  document.getElementById('f-format').value       = book.format || 'book';
  document.getElementById('f-rating').value       = book.rating || '';
  document.getElementById('f-date').value         = book.date_added || '';
  document.getElementById('f-notes').value        = book.notes || '';

  document.getElementById('form-submit-btn').textContent = 'Save Changes';
  showForm('Edit Book');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

async function handleFormSubmit(e) {
  e.preventDefault();

  const ratingVal = document.getElementById('f-rating').value;
  if (!ratingVal) {
    alert('Please select a rating.');
    return;
  }

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

  const submitBtn = document.getElementById('form-submit-btn');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Saving...';

  try {
    const editId = document.getElementById('edit-id').value;
    if (editId) {
      await updateBook(editId, book);
    } else {
      await addBook(book);
    }
    hideForm();
  } catch (err) {
    alert('Error saving: ' + err.message);
    submitBtn.disabled = false;
    submitBtn.textContent = editId ? 'Save Changes' : 'Add Book';
  }
}

/* -------------------------------------------------- */
/* Delete */
/* -------------------------------------------------- */

function promptDelete(id, title) {
  pendingDeleteId = id;
  document.getElementById('delete-msg').textContent = `Delete "${title}"?`;
  document.getElementById('delete-dialog').showModal();
}

async function confirmDelete() {
  if (!pendingDeleteId) return;
  try {
    await deleteBook(pendingDeleteId);
  } catch (err) {
    alert('Error deleting: ' + err.message);
  }
  pendingDeleteId = null;
  document.getElementById('delete-dialog').close();
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
/* Event listeners */
/* -------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
  initSupabase();

  // Form toggle
  document.getElementById('toggle-form-btn').addEventListener('click', () => {
    const form = document.getElementById('book-form');
    if (form.classList.contains('hidden')) {
      showForm();
    } else {
      hideForm();
    }
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

  // Load data
  loadBooks();
});
