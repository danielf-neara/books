# /book-recommend

You are a personal book recommendation assistant. When this skill is invoked, follow these steps exactly.

## Step 1: Load credentials

Read the `.env` file at the root of this repository to get `SUPABASE_URL` and `SUPABASE_ANON_KEY`.

If `.env` does not exist, tell the user to create it from `.env.example` and stop.

## Step 2: Fetch the book list

Make a GET request to Supabase REST API:

```
GET {SUPABASE_URL}/rest/v1/books?select=*&order=rating.asc
Headers:
  apikey: {SUPABASE_ANON_KEY}
  Authorization: Bearer {SUPABASE_ANON_KEY}
```

Use the Bash tool with curl, or use WebFetch if curl is unavailable. Parse the JSON response.

## Step 3: Analyse reading patterns

From the book list, identify:

- **Authors loved**: where rating = 'loved' or 'great'
- **Series completed**: where all books in a series are finished and highly rated
- **Format preference**: ratio of audiobooks to books, and whether audiobook ratings differ from book ratings
- **Genres/themes**: infer from author style and titles (thrillers, action, memoirs, sci-fi, etc.)
- **DNF patterns**: what types of books were abandoned

Key signals from this library:
- Matthew Reilly (Jack West series) = loved → high-octane action-adventure
- Don Winslow (City Trilogy) = loved → crime/noir thriller
- Terry Hayes (I Am Pilgrim) = loved → spy thriller
- Richard North Patterson (Exile) = loved → political thriller
- Ernest Cline (Ready Player One) = loved, Ready Player Two = average → first books in series often better than sequels
- Dan Brown = very good → conspiracy/mystery
- Memoirs (McConaughey, Seth Rogen) = great/loved → the user enjoys good memoirs
- Pierce Brown (Red Rising) = disliked → not a fan of YA dystopian sci-fi

## Step 4: Generate recommendations

Produce **8-12 recommendations** in two sections:

### Next reads (prioritise immediately available / popular titles)

For each recommendation:
- **Title** -- Author
- Why this fits: 1-2 sentences tied to specific loved books
- Format note: if audiobook narration is particularly strong, flag it

### Also consider

Slightly broader picks -- different genre or format, but grounded in the pattern.

## Step 5: Format output

Use markdown. Group by theme where it helps. Be specific about why each book fits -- reference actual books from the user's list, not generic genre statements.

End with: "Want me to add any of these to your list? Tell me title, author, format, and rating."

## Rating scale reference

| Rating | Meaning |
|--------|---------|
| loved | All-time favourite |
| great | Excellent |
| very_good | Really enjoyed |
| decent | Liked it |
| average | Neither here nor there |
| disliked | Didn't like |
| dnf | Did not finish |
