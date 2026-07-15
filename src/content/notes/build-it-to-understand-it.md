---
title: Build it to understand it
description: The only reliable way I've found to actually understand a system.
date: 2026-07-01
stage: sapling
tags: ['learning', 'systems']
---

A running list of things I've built from scratch specifically to understand them, not to ship, just to stop hand-waving:

- a **B+Tree** engine (MVCC, ARIES WAL): to understand how a database survives a crash
- an **LSM-tree** (Raft replication): to understand write-heavy storage
- a **Raft** implementation: to understand consensus by getting it wrong first
- a **distributed tracing** backend: to understand sampling and RED metrics
- an **MCP server** (twice): to understand how agents actually *do* things
- an **LLM-eval pipeline** ([PromptLine](https://github.com/sanskarpan/promptline)): to understand what "good evals vs noise" means

The pattern: reading gives you *vocabulary*, building gives you *intuition*. You can talk about compaction after reading a blog post. You only *feel* write amplification after your own tree grinds to a halt.

The cost is time, and most of these never leave my machine. Worth it every time. This note is a sapling; I'll keep tending the list.
