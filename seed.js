/**
 * seed.js -- import existing book list into Supabase
 *
 * Prerequisites:
 *   1. Create the books table in Supabase (SQL below)
 *   2. Copy .env.example to .env and fill in credentials
 *   3. Run: npm install @supabase/supabase-js dotenv
 *   4. Run: node seed.js
 *
 * Supabase table SQL (run in SQL Editor):
 * -----------------------------------------------
 * create table books (
 *   id           uuid primary key default gen_random_uuid(),
 *   title        text not null,
 *   author       text not null,
 *   series       text,
 *   series_order int,
 *   format       text not null default 'book',
 *   rating       text not null,
 *   notes        text,
 *   finished     boolean not null default true,
 *   date_added   date default current_date
 * );
 *
 * -- Allow public access (personal app, no auth)
 * alter table books enable row level security;
 * create policy "Allow all" on books for all using (true) with check (true);
 * -----------------------------------------------
 */

require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// Rating mapping used:
//   loved / amazing / LOVED  → loved
//   great                    → great
//   very good                → very_good
//   liked / decent           → decent
//   average                  → average
//   sucked / disliked        → disliked
//   DNF                      → dnf, finished: false

const books = [

  // Don Winslow -- City Trilogy (loved)
  { title: 'City on Fire',    author: 'Don Winslow', series: 'City Trilogy', series_order: 1, format: 'book', rating: 'loved', finished: true },
  { title: 'City of Dreams',  author: 'Don Winslow', series: 'City Trilogy', series_order: 2, format: 'book', rating: 'loved', finished: true },
  { title: 'City in Ruins',   author: 'Don Winslow', series: 'City Trilogy', series_order: 3, format: 'book', rating: 'loved', finished: true },

  // Dan Brown -- Robert Langdon (very good)
  { title: 'Angels and Demons', author: 'Dan Brown', series: 'Robert Langdon', series_order: 1, format: 'book', rating: 'very_good', finished: true },
  { title: 'The Da Vinci Code', author: 'Dan Brown', series: 'Robert Langdon', series_order: 2, format: 'book', rating: 'very_good', finished: true },
  { title: 'The Lost Symbol',   author: 'Dan Brown', series: 'Robert Langdon', series_order: 3, format: 'book', rating: 'very_good', finished: true },

  // Matthew Reilly -- Jack West Jr / Huntsman series (loved)
  { title: 'Seven Ancient Wonders',       author: 'Matthew Reilly', series: 'Jack West Jr', series_order: 1, format: 'book', rating: 'loved', finished: true },
  { title: 'Six Sacred Stones',           author: 'Matthew Reilly', series: 'Jack West Jr', series_order: 2, format: 'book', rating: 'loved', finished: true },
  { title: 'The Five Greatest Warriors',  author: 'Matthew Reilly', series: 'Jack West Jr', series_order: 3, format: 'book', rating: 'loved', finished: true },
  { title: 'The Four Legendary Kingdoms', author: 'Matthew Reilly', series: 'Jack West Jr', series_order: 4, format: 'book', rating: 'loved', finished: true },
  { title: 'The Three Secret Cities',     author: 'Matthew Reilly', series: 'Jack West Jr', series_order: 5, format: 'book', rating: 'loved', finished: true },
  { title: 'The Two Lost Mountains',      author: 'Matthew Reilly', series: 'Jack West Jr', series_order: 6, format: 'book', rating: 'loved', finished: true },
  { title: 'The One Impossible Labyrinth',author: 'Matthew Reilly', series: 'Jack West Jr', series_order: 7, format: 'book', rating: 'loved', finished: true },

  // Matthew Reilly -- Scarecrow series (liked → decent)
  { title: 'Ice Station',                       author: 'Matthew Reilly', series: 'Scarecrow', series_order: 1, format: 'book', rating: 'decent', finished: true },
  { title: 'Area 7',                            author: 'Matthew Reilly', series: 'Scarecrow', series_order: 2, format: 'book', rating: 'decent', finished: true },
  { title: 'Scarecrow',                         author: 'Matthew Reilly', series: 'Scarecrow', series_order: 3, format: 'book', rating: 'decent', finished: true },
  { title: 'Hell Island',                       author: 'Matthew Reilly', series: 'Scarecrow', series_order: 4, format: 'book', rating: 'decent', finished: true },
  { title: 'Scarecrow and the Army of Thieves', author: 'Matthew Reilly', series: 'Scarecrow', series_order: 5, format: 'book', rating: 'decent', finished: true },

  // Eli Sharabi (very good)
  { title: 'Hostage', author: 'Eli Sharabi', format: 'book', rating: 'very_good', finished: true },

  // Terry Hayes (amazing → loved)
  { title: 'I Am Pilgrim', author: 'Terry Hayes', format: 'book', rating: 'loved', finished: true },

  // Ernest Cline -- Ready Player series
  { title: 'Ready Player One', author: 'Ernest Cline', series: 'Ready Player', series_order: 1, format: 'book', rating: 'loved',   finished: true },
  { title: 'Ready Player Two', author: 'Ernest Cline', series: 'Ready Player', series_order: 2, format: 'book', rating: 'average', finished: true },

  // Jeffrey Archer (amazing → loved, decent → decent)
  { title: 'Kane and Abel',    author: 'Jeffrey Archer', format: 'book', rating: 'loved',  finished: true },
  { title: 'The Fourth Estate',author: 'Jeffrey Archer', format: 'book', rating: 'decent', finished: true },

  // Matthew McConaughey (loved)
  { title: 'Greenlights', author: 'Matthew McConaughey', format: 'book', rating: 'loved', finished: true, notes: 'Raucous Stories and Outlaw Wisdom' },

  // John Grisham (great)
  { title: 'The Firm', author: 'John Grisham', format: 'book', rating: 'great', finished: true },

  // Lara Love Hardin (very good)
  { title: 'The Many Lives of Mama Love', author: 'Lara Love Hardin', format: 'book', rating: 'very_good', finished: true },

  // George R.R. Martin (decent)
  { title: 'A Knight of the Seven Kingdoms', author: 'George R.R. Martin', format: 'book', rating: 'decent', finished: true },

  // Seth Rogen (great)
  { title: 'Yearbook', author: 'Seth Rogen', format: 'book', rating: 'great', finished: true, notes: 'Hilarious' },

  // Pierce Brown (disliked)
  { title: 'Red Rising', author: 'Pierce Brown', series: 'Red Rising', series_order: 1, format: 'book', rating: 'disliked', finished: true },

  // Richard North Patterson (loved)
  { title: 'Exile', author: 'Richard North Patterson', format: 'book', rating: 'loved', finished: true },

  // DNF
  { title: 'Sandstorm',        author: 'James Rollins', format: 'book', rating: 'dnf', finished: false },
  { title: 'The Templar Legacy', author: 'Steve Berry', format: 'book', rating: 'dnf', finished: false, notes: '28% complete' },

];

async function seed() {
  console.log(`Inserting ${books.length} books...`);

  const { data, error } = await supabase.from('books').insert(books).select();

  if (error) {
    console.error('Insert failed:', error.message);
    process.exit(1);
  }

  console.log(`Done. Inserted ${data.length} books.`);
}

seed();
