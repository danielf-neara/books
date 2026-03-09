# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

See @~/.claude/CLAUDE.md for personal preferences and context.

## Project

A personal book and audiobook tracker with Claude-powered recommendations. Tracks reading/listening history, ratings, and suggests what to read or listen to next based on preferences.

## Repository

- **Remote**: `https://github.com/danielf-neara/books.git`
- **Branch**: `main`

## Purpose

- Log books and audiobooks with ratings: love / like / dislike
- Store metadata: title, author, format (book/audiobook), genre, date finished, notes
- Use Claude to recommend what to read or listen to next, based on past ratings and patterns

## Workflow

- Commit regularly -- don't let changes accumulate. Make small, focused commits.
- Explore first, then plan, then code. Use Plan Mode for non-trivial tasks.
- Use `/clear` between unrelated tasks to keep context clean.

## CLAUDE.md Maintenance

- Keep this file concise. For each line, ask: "Would removing this cause Claude to make mistakes?" If not, cut it.
- Use `.claude/skills/` for domain knowledge only relevant sometimes, rather than bloating this file.
