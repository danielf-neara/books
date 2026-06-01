# Troubleshooting

## How sync works

- Each device stores books locally in `localStorage` (`books` key) and a GitHub PAT (`github_pat` key).
- The `danielf-neara/books` repo is **public**, so reading needs no token. Only **saving** needs a token with write access.
- Edits auto-save to `books-export.json` via the GitHub Contents API ~1.5s after a change (PUT).
- On **page load**, the app pulls the latest from GitHub and overwrites the local copy. It does not pull again while the tab stays open.
- `cache: 'no-store'` is used on loads so a stale cached response can't overwrite recent edits.

## Edits don't save / disappear after refresh

Almost always a dead or missing token. Regenerating a PAT on GitHub revokes the old one, but the app keeps holding the old value until you re-paste it.

1. Open the app, press F12 -> Console, run:
   ```js
   fetch('https://api.github.com/repos/danielf-neara/books/contents/books-export.json',{headers:{Authorization:'Bearer '+localStorage.getItem('github_pat')}}).then(r=>console.log(r.status))
   ```
   - `200` = token valid (problem is elsewhere)
   - `401` = `Bad credentials` -> token is dead/wrong, re-set it
2. Re-set the token cleanly (avoids stray spaces / partial paste):
   ```js
   localStorage.setItem('github_pat', prompt('Paste token:').trim());
   ```
3. Token requirements (fine-grained): Repository access includes `danielf-neara/books`, Repository permissions -> **Contents: Read and write**.

## Phone shows an old version

The phone has its own storage and only pulls from GitHub on page load.

1. Fully close and reopen the app (a backgrounded tab won't re-pull). Wait ~1 min after a Mac edit for GitHub's API to serve the new file.
2. Still stale -> clear the site's cached page (Safari: Settings -> Safari -> Clear History and Website Data; Chrome: clear site data).
3. Added to home screen -> delete and re-add the icon; those caches can be sticky and may serve an old `app.js`.
