/* -------------------------------------------------- */
/* Analytics -- chart rendering via Chart.js           */
/* -------------------------------------------------- */

const CHART_INSTANCES = {};

const SCORE_COLORS_MAP = {
  10: '#7a1515',
  9:  '#7a1515',
  8:  '#153a70',
  7:  '#1a5c3a',
  6:  '#7a5500',
  5:  '#4a4a6a',
  4:  '#4a4a4a',
  3:  '#4a4a4a',
  2:  '#4a4a4a',
  1:  '#4a4a4a',
};

const TAG_LABELS_MAP = {
  hooked_immediately: 'Hooked immediately',
  slow_start:         'Slow start, got better',
  couldnt_put_down:   "Couldn't put it down",
  edge_of_seat:       'Edge of my seat',
  funny:              'Funny',
};

// Global Chart.js defaults
Chart.defaults.font.family = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
Chart.defaults.font.size   = 12;
Chart.defaults.color       = '#666';

/* -------------------------------------------------- */
/* Helpers */
/* -------------------------------------------------- */

function destroyChart(key) {
  if (CHART_INSTANCES[key]) {
    CHART_INSTANCES[key].destroy();
    delete CHART_INSTANCES[key];
  }
}

function show(id) { const el = document.getElementById(id); if (el) el.classList.remove('hidden'); }
function hide(id) { const el = document.getElementById(id); if (el) el.classList.add('hidden'); }
function showEl(el) { if (el) el.style.display = ''; }
function hideEl(el) { if (el) el.style.display = 'none'; }

/* -------------------------------------------------- */
/* Entry point */
/* -------------------------------------------------- */

function renderAnalytics(allBooks) {
  const listened = allBooks.filter(b => b.status === 'completed');
  renderScoreChart(listened);
  renderTagsChart(listened);
  renderAuthorsChart(listened);
  renderTimeChart(listened);
  renderReferrerChart(listened);
}

/* -------------------------------------------------- */
/* Score Distribution */
/* -------------------------------------------------- */

function renderScoreChart(books) {
  destroyChart('scores');

  const counts = {};
  for (let i = 1; i <= 10; i++) counts[i] = 0;
  books.forEach(b => {
    if (b.score !== null && b.score !== undefined) {
      const s = Math.round(b.score);
      if (s >= 1 && s <= 10) counts[s]++;
    }
  });

  const labels = Object.keys(counts).map(Number);
  const data   = labels.map(l => counts[l]);
  const colors = labels.map(l => SCORE_COLORS_MAP[l] || '#888');

  const ctx = document.getElementById('chart-scores').getContext('2d');
  CHART_INSTANCES['scores'] = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels.map(String),
      datasets: [{
        data,
        backgroundColor: colors,
        borderRadius: 5,
        borderSkipped: false,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: { label: c => ` ${c.raw} book${c.raw !== 1 ? 's' : ''}` },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: { stepSize: 1, precision: 0 },
          grid: { color: '#f0ece6' },
        },
        x: {
          grid: { display: false },
          title: { display: true, text: 'Score out of 10', color: '#999', font: { size: 11 } },
        },
      },
    },
  });
}

/* -------------------------------------------------- */
/* Experience Tags */
/* -------------------------------------------------- */

function renderTagsChart(books) {
  destroyChart('tags');

  const counts = {};
  Object.keys(TAG_LABELS_MAP).forEach(t => { counts[t] = 0; });
  books.forEach(b => {
    (b.tags || []).forEach(t => { if (counts[t] !== undefined) counts[t]++; });
  });

  const entries = Object.entries(counts)
    .filter(([, v]) => v > 0)
    .sort((a, b) => b[1] - a[1]);

  const wrap = document.getElementById('chart-tags-wrap');
  const note = document.getElementById('chart-tags-note');

  if (entries.length === 0) {
    hideEl(wrap);
    show('chart-tags-note');
    return;
  }

  showEl(wrap);
  hide('chart-tags-note');

  const labels = entries.map(([k]) => TAG_LABELS_MAP[k]);
  const data   = entries.map(([, v]) => v);

  const ctx = document.getElementById('chart-tags').getContext('2d');
  CHART_INSTANCES['tags'] = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        data,
        backgroundColor: '#2a4a8a',
        borderRadius: 5,
        borderSkipped: false,
      }],
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: { label: c => ` ${c.raw} book${c.raw !== 1 ? 's' : ''}` },
        },
      },
      scales: {
        x: {
          beginAtZero: true,
          ticks: { stepSize: 1, precision: 0 },
          grid: { color: '#f0ece6' },
        },
        y: { grid: { display: false } },
      },
    },
  });
}

/* -------------------------------------------------- */
/* Top Authors */
/* -------------------------------------------------- */

function renderAuthorsChart(books) {
  destroyChart('authors');

  const counts = {};
  books.forEach(b => { counts[b.author] = (counts[b.author] || 0) + 1; });

  const entries = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12);

  const labels = entries.map(([k]) => k);
  const data   = entries.map(([, v]) => v);

  // Colour by avg score for that author
  const authorAvg = {};
  books.forEach(b => {
    if (b.score !== null && b.score !== undefined) {
      if (!authorAvg[b.author]) authorAvg[b.author] = [];
      authorAvg[b.author].push(b.score);
    }
  });
  const colors = labels.map(author => {
    const scores = authorAvg[author];
    if (!scores || scores.length === 0) return '#888';
    const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
    if (avg >= 9) return SCORE_COLORS_MAP[9];
    if (avg >= 8) return SCORE_COLORS_MAP[8];
    if (avg >= 7) return SCORE_COLORS_MAP[7];
    if (avg >= 6) return SCORE_COLORS_MAP[6];
    if (avg >= 5) return SCORE_COLORS_MAP[5];
    return SCORE_COLORS_MAP[4];
  });

  const ctx = document.getElementById('chart-authors').getContext('2d');
  CHART_INSTANCES['authors'] = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        data,
        backgroundColor: colors,
        borderRadius: 5,
        borderSkipped: false,
      }],
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: c => {
              const avg = authorAvg[c.label];
              const avgStr = avg
                ? '  avg ' + (avg.reduce((a, b) => a + b, 0) / avg.length).toFixed(1)
                : '';
              return ` ${c.raw} book${c.raw !== 1 ? 's' : ''}${avgStr}`;
            },
          },
        },
      },
      scales: {
        x: {
          beginAtZero: true,
          ticks: { stepSize: 1, precision: 0 },
          grid: { color: '#f0ece6' },
        },
        y: { grid: { display: false } },
      },
    },
  });
}

/* -------------------------------------------------- */
/* Recommendations by Source */
/* -------------------------------------------------- */

function renderReferrerChart(books) {
  destroyChart('referrers');

  const referrerData = {};
  books.forEach(b => {
    if (!b.recommended_by || b.score === null || b.score === undefined) return;
    const key = b.recommended_by.trim();
    if (!key) return;
    if (!referrerData[key]) referrerData[key] = [];
    referrerData[key].push(b.score);
  });

  const entries = Object.entries(referrerData)
    .map(([name, scores]) => ({
      name,
      count: scores.length,
      avg: scores.reduce((a, b) => a + b, 0) / scores.length,
    }))
    .sort((a, b) => b.avg - a.avg);

  const wrap = document.getElementById('chart-referrers-wrap');
  const note = document.getElementById('chart-referrers-note');

  if (entries.length === 0) {
    hideEl(wrap);
    show('chart-referrers-note');
    return;
  }

  showEl(wrap);
  hide('chart-referrers-note');

  const labels = entries.map(e => `${e.name} (${e.count} book${e.count !== 1 ? 's' : ''})`);
  const data   = entries.map(e => parseFloat(e.avg.toFixed(1)));
  const colors = entries.map(e => {
    const avg = e.avg;
    if (avg >= 9) return SCORE_COLORS_MAP[9];
    if (avg >= 8) return SCORE_COLORS_MAP[8];
    if (avg >= 7) return SCORE_COLORS_MAP[7];
    if (avg >= 6) return SCORE_COLORS_MAP[6];
    if (avg >= 5) return SCORE_COLORS_MAP[5];
    return SCORE_COLORS_MAP[4];
  });

  const ctx = document.getElementById('chart-referrers').getContext('2d');
  CHART_INSTANCES['referrers'] = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        data,
        backgroundColor: colors,
        borderRadius: 5,
        borderSkipped: false,
      }],
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: c => ` avg score ${c.raw}`,
          },
        },
      },
      scales: {
        x: {
          beginAtZero: true,
          max: 10,
          ticks: { stepSize: 1, precision: 0 },
          grid: { color: '#f0ece6' },
          title: { display: true, text: 'Avg score out of 10', color: '#999', font: { size: 11 } },
        },
        y: { grid: { display: false } },
      },
    },
  });
}

/* -------------------------------------------------- */
/* Listened Over Time */
/* -------------------------------------------------- */

function renderTimeChart(books) {
  destroyChart('time');

  const withDates = books.filter(b => b.date_added);
  const wrap = document.getElementById('chart-time-wrap');
  const note = document.getElementById('chart-time-note');

  if (withDates.length < 2) {
    hideEl(wrap);
    show('chart-time-note');
    return;
  }

  showEl(wrap);
  hide('chart-time-note');

  // Group by YYYY-MM
  const counts = {};
  withDates.forEach(b => {
    const key = b.date_added.slice(0, 7);
    counts[key] = (counts[key] || 0) + 1;
  });

  // Fill in all months from earliest to today
  const keys  = Object.keys(counts).sort();
  const start = new Date(keys[0] + '-01');
  const end   = new Date();
  const months = [];
  for (const d = new Date(start); d <= end; d.setMonth(d.getMonth() + 1)) {
    months.push(d.toISOString().slice(0, 7));
  }

  const labels = months.map(m => {
    const [y, mo] = m.split('-');
    return new Date(+y, +mo - 1).toLocaleDateString('en-AU', { month: 'short', year: '2-digit' });
  });
  const data = months.map(m => counts[m] || 0);

  const ctx = document.getElementById('chart-time').getContext('2d');
  CHART_INSTANCES['time'] = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: 'Books listened',
        data,
        backgroundColor: '#153a70',
        borderRadius: 5,
        borderSkipped: false,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: { label: c => ` ${c.raw} book${c.raw !== 1 ? 's' : ''}` },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: { stepSize: 1, precision: 0 },
          grid: { color: '#f0ece6' },
        },
        x: { grid: { display: false } },
      },
    },
  });
}
