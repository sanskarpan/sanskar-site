// Curated projects. Reorder / edit freely.
//  - `featured` ones surface on the homepage (first 4).
//  - `flat` marks the tighter ~10 shown in the flat-list projects layout.
//  - `theme` groups projects in the themed projects layout (order = THEMES below).
//  - `demo` is a live demo / docs URL; the card shows a "Demo" badge that links to it.
export type Theme =
  | 'Storage & databases'
  | 'Distributed systems'
  | 'Infrastructure & networking'
  | 'Concurrency & OS'
  | 'AI & agents'
  | 'Machine learning & numerics'
  | 'Applications';

export const THEMES: Theme[] = [
  'Storage & databases',
  'Distributed systems',
  'Infrastructure & networking',
  'Concurrency & OS',
  'AI & agents',
  'Machine learning & numerics',
  'Applications',
];

export interface Project {
  name: string;
  blurb: string;
  stack: string;
  href: string;
  theme: Theme;
  demo?: string; // a real, live, interactive app
  docs?: string; // a docs / showcase site (e.g. GitHub Pages)
  badge?: string;
  featured?: boolean;
  flat?: boolean;
}

export const PROJECTS: Project[] = [
  // ── Storage & databases ────────────────────────────────────────────────
  {
    name: 'LSM-Tree Storage Engine',
    blurb:
      'A from-scratch LSM-tree in Go: skip-list memtable, Bloom-filtered mmap SSTables, three live-switchable compaction strategies, and Raft quorum replication with multi-shard rebalancing behind one API.',
    stack: 'Go · LSM · Bloom filters · mmap · Raft',
    href: 'https://github.com/sanskarpan/lsm-tree-storage',
    docs: 'https://sanskarpan.github.io/lsm-tree-storage/',
    theme: 'Storage & databases',
    badge: 'Go',
    featured: true,
    flat: true,
  },
  {
    name: 'B+Tree Storage Engine',
    blurb:
      'A B+Tree engine in Go with MVCC snapshot isolation, ARIES-style WAL crash recovery, slotted 4KB pages, a Clock-eviction buffer pool, and group commit. The low-write-amplification counterpart to the LSM engine.',
    stack: 'Go · MVCC · ARIES WAL · Clock',
    href: 'https://github.com/sanskarpan/btree-engine',
    theme: 'Storage & databases',
    badge: 'Go',
  },
  {
    name: 'SQL Query Engine',
    blurb:
      'A complete SQL engine built end to end: lexer, recursive-descent parser, analyzer, a rule-based optimizer, cost-based join ordering by dynamic programming, and a Volcano-model executor with an interactive plan visualizer.',
    stack: 'Go · RBO · CBO · Volcano iterator',
    href: 'https://github.com/sanskarpan/QueryEngine-Optimiser',
    theme: 'Storage & databases',
    badge: 'Go',
  },
  {
    name: 'Transaction Manager',
    blurb:
      'A transaction engine running 2PL and MVCC side by side: serializable snapshot isolation, ARIES recovery, wait-for-graph deadlock detection, and Raft replication, with a browser playground for reproducing isolation anomalies.',
    stack: 'Go · 2PL · MVCC · SSI · Raft',
    href: 'https://github.com/sanskarpan/TransactionManager',
    docs: 'https://sanskarpan.github.io/TransactionManager/',
    theme: 'Storage & databases',
    badge: 'Go',
    flat: true,
  },

  // ── Distributed systems ────────────────────────────────────────────────
  {
    name: 'Raft Consensus',
    blurb:
      'A replicated key/value store on a from-scratch Raft: linearizable reads via ReadIndex (no log write), streaming snapshots, joint-consensus membership changes, and correctness checked with Porcupine linearizability testing.',
    stack: 'Go · Raft · linearizability · gRPC',
    href: 'https://github.com/sanskarpan/raft-consensus',
    docs: 'https://sanskarpan.github.io/raft-consensus/',
    theme: 'Distributed systems',
    badge: 'Go',
    featured: true,
    flat: true,
  },
  {
    name: 'Vector-Clock Lab',
    blurb:
      'An interactive causality lab: Lamport, vector, and matrix clocks, dotted version vectors, Chandy-Lamport global snapshots, and BSS causal delivery, all rendered as live space-time diagrams with eight failure scenarios.',
    stack: 'Go · vector clocks · Chandy-Lamport · D3',
    href: 'https://github.com/sanskarpan/Vector-Clock',
    docs: 'https://sanskarpan.github.io/Vector-Clock/',
    theme: 'Distributed systems',
    badge: 'Go',
  },
  {
    name: 'Replication Strategies',
    blurb:
      'Single-leader, multi-leader, and leaderless (Dynamo-style) replication in one simulator: tunable N/W/R quorums, read repair, hinted handoff, Merkle anti-entropy, and a linearizability checker over the resulting histories.',
    stack: 'Go · quorums · anti-entropy · React',
    href: 'https://github.com/sanskarpan/Replication-Strategies',
    docs: 'https://sanskarpan.github.io/Replication-Strategies/',
    theme: 'Distributed systems',
    badge: 'Go',
  },
  {
    name: 'Distributed Tracing System',
    blurb:
      'An observability backend ingesting OTLP and native spans with seven pluggable samplers (including tail-based and adaptive) and RED metrics computed over sliding-window histograms, streamed to a React waterfall UI.',
    stack: 'Go · OpenTelemetry · SSE · React',
    href: 'https://github.com/sanskarpan/distributed-tracing-system',
    theme: 'Distributed systems',
    badge: 'Go',
  },

  // ── Infrastructure & networking ────────────────────────────────────────
  {
    name: 'Reverse Proxy + Load Balancer',
    blurb:
      'An HTTP reverse proxy and load balancer in pure stdlib Go: eight balancing algorithms (including peak-EWMA and bounded-load consistent hashing), circuit breaking, request hedging, SNI multi-cert TLS, and live config reload.',
    stack: 'Go (stdlib) · L7 routing · circuit breaker',
    href: 'https://github.com/sanskarpan/reverse-proxy-lb',
    docs: 'https://sanskarpan.github.io/reverse-proxy-lb/',
    theme: 'Infrastructure & networking',
    badge: 'Go',
    flat: true,
  },
  {
    name: 'DAG Scheduler',
    blurb:
      'An Airflow-semantics workflow engine in pure Go, no Python or broker: YAML DAGs, 11 trigger rules, poke/reschedule sensors, cycle detection, hot reload via fsnotify, a dead-letter queue, and a React Flow UI.',
    stack: 'Go · scheduling · React Flow · SQLite',
    href: 'https://github.com/sanskarpan/dag-scheduler',
    docs: 'https://sanskarpan.github.io/dag-scheduler/',
    theme: 'Infrastructure & networking',
    badge: 'Go',
    flat: true,
  },
  {
    name: 'Pennant',
    blurb:
      'A self-hosted feature-flag platform: microsecond local evaluation, real-time SSE flag updates, statistically-sound A/B testing (mSPRT), and Go plus TypeScript SDKs kept in lockstep by 45+ cross-SDK conformance fixtures.',
    stack: 'Go · React · SSE · mSPRT',
    href: 'https://github.com/sanskarpan/pennant',
    docs: 'https://sanskarpan.github.io/pennant/',
    theme: 'Infrastructure & networking',
    badge: 'Go',
  },
  {
    name: 'Rate Limiter + Circuit Breaker',
    blurb:
      'A resilience toolkit with six rate-limiting algorithms (token bucket, GCRA, sliding window, leaky bucket, fixed window, adaptive), plus circuit breaker, bulkhead, and retry budget. Zero-dependency core, optional Redis backend.',
    stack: 'Go · Redis (optional) · HTTP/gRPC middleware',
    href: 'https://github.com/sanskarpan/Rate-Limiter-Circuit-Breaker',
    docs: 'https://sanskarpan.github.io/Rate-Limiter-Circuit-Breaker/',
    theme: 'Infrastructure & networking',
    badge: 'Go',
  },

  // ── Concurrency & OS ───────────────────────────────────────────────────
  {
    name: 'Greenthreads',
    blurb:
      'A userspace M:N fiber scheduler with work-stealing across per-worker run queues, fiber-aware mutexes, channels, and wait groups, priority scheduling with anti-starvation aging, and a live scheduler dashboard.',
    stack: 'Go · work-stealing · atomics · WebSocket',
    href: 'https://github.com/sanskarpan/greenthreads',
    theme: 'Concurrency & OS',
    badge: 'Go',
    flat: true,
  },
  {
    name: 'Lock-Free Structures',
    blurb:
      'Lock-free data structures built directly on CAS: a Treiber stack, Michael-Scott queue, Harris-Michael sorted list, and cache-line-padded SPSC/MPMC ring buffers, with linearizability verified by model-checked tests.',
    stack: 'Go · CAS · linearizability',
    href: 'https://github.com/sanskarpan/lockfree',
    theme: 'Concurrency & OS',
    badge: 'Go',
  },
  {
    name: 'Filesystem Engine',
    blurb:
      'An inode-based filesystem (ext2-like) with ext3-style ordered journaling and crash recovery, a write-back buffer cache with CRC32 commit records, and a real-time SVG block-map visualizer plus a 20-command shell.',
    stack: 'Go · journaling · crash recovery · React',
    href: 'https://github.com/sanskarpan/fs-engine',
    theme: 'Concurrency & OS',
    badge: 'Go',
    flat: true,
  },

  // ── AI & agents ────────────────────────────────────────────────────────
  {
    name: 'TAG · Terminal Agent Gateway',
    blurb:
      'A multi-provider agent orchestrator with autonomous loops, cron, parallel swarms, hard token budgets, and a crash-safe SQLite state store. Recently ported from a Python control plane to a native Go runtime. On PyPI + npm.',
    stack: 'Go · agents · SQLite · multi-provider',
    href: 'https://github.com/sanskarpan/tag-agent',
    theme: 'AI & agents',
    badge: 'Go',
    featured: true,
    flat: true,
  },
  {
    name: 'PromptLine',
    blurb:
      'An LLM-evaluation and prompt-optimization pipeline: a calibrated LLM-as-judge, a statistical deploy gate (paired-bootstrap CI with Holm correction), and five optimizers including a from-scratch GEPA. On PyPI as promptline-opt.',
    stack: 'Python · FastAPI · LLM-as-judge · GEPA',
    href: 'https://github.com/sanskarpan/promptline',
    theme: 'AI & agents',
    badge: 'Python',
    featured: true,
    flat: true,
  },
  {
    name: 'Latexy',
    blurb:
      'A full-stack resume optimizer that rewrites LaTeX against a target job description, streams the compile, and scores ATS keyword coverage with pgvector semantic matching, showing exactly what a parser reads back.',
    stack: 'Next.js · FastAPI · Celery · pgvector',
    href: 'https://github.com/sanskarpan/Latexy',
    theme: 'AI & agents',
    badge: 'Full-stack',
    featured: true,
  },
  {
    name: 'Business Knowledge Platform',
    blurb:
      'A retrieval-augmented knowledge base: a FastAPI backend ingests PDFs, DOCX, and images into Pinecone, and GPT-4 answers questions with citations back to the source chunks. React search and chat UI on top.',
    stack: 'FastAPI · Pinecone · GPT-4 · React',
    href: 'https://github.com/sanskarpan/Business-Knowledge-Platform-BE',
    demo: 'https://business-knowledge-platform-fe.vercel.app',
    theme: 'AI & agents',
    badge: 'Full-stack',
  },

  // ── Machine learning & numerics ────────────────────────────────────────
  {
    name: 'LinearAlgebra',
    blurb:
      'A pure-Python linear algebra library with no NumPy underneath: vectors, matrices, and the decompositions that matter for ML (QR, SVD, Cholesky, eigendecomposition, PCA) plus Gram-Schmidt projection. Phase 0 of a from-scratch ML stack.',
    stack: 'Python · SVD · QR · PCA',
    href: 'https://github.com/sanskarpan/LinearAlgebra',
    theme: 'Machine learning & numerics',
    badge: 'Python',
  },
  {
    name: 'Calculus',
    blurb:
      'Automatic differentiation, symbolic differentiation, numerical integration, and Taylor expansion in pure Python. A small autograd built to understand exactly what a real one is doing.',
    stack: 'Python · autograd · symbolic diff',
    href: 'https://github.com/sanskarpan/Calculus',
    theme: 'Machine learning & numerics',
    badge: 'Python',
  },
  {
    name: 'Prob-and-Stats',
    blurb:
      'Probability and statistics from scratch in pure Python: distributions, MCMC samplers, Bayesian estimation, and information theory, with no SciPy underneath. Part of the same from-scratch ML foundation.',
    stack: 'Python · MCMC · Bayesian',
    href: 'https://github.com/sanskarpan/Prob-and-Stats',
    theme: 'Machine learning & numerics',
    badge: 'Python',
  },
  {
    name: 'Optimization',
    blurb:
      'Gradient-based optimizers, learning-rate schedules, line search, and second-order and constrained methods, implemented in pure Python to watch how each one actually converges.',
    stack: 'Python · optimizers · line search',
    href: 'https://github.com/sanskarpan/Optimization',
    theme: 'Machine learning & numerics',
    badge: 'Python',
  },
  {
    name: 'Music Genre + Mashup DL',
    blurb:
      'A five-milestone deep-learning project for music genre classification and mashup detection: audio feature pipelines, CNN and RNN models, evaluation, and a Flask deployment.',
    stack: 'Python · CNN/RNN · audio · Flask',
    href: 'https://github.com/sanskarpan/DL-GenAI-P',
    theme: 'Machine learning & numerics',
    badge: 'ML',
  },

  // ── Applications ───────────────────────────────────────────────────────
  {
    name: 'PayGate',
    blurb:
      'A multi-tenant payment platform in Go using double-entry ledgering, a transactional outbox, and saga orchestration with explicit per-entity state machines, three-way reconciliation, and dead-letter handling.',
    stack: 'Go · PostgreSQL · Saga · Outbox',
    href: 'https://github.com/sanskarpan/PayGate',
    theme: 'Applications',
    badge: 'Go',
    featured: true,
    flat: true,
  },
  {
    name: 'DB-Backup',
    blurb:
      'A cross-platform enterprise backup product: Go backend, Next.js web, Rust/Tauri desktop, React Native mobile, and browser extensions, with Ansible and Helm deployment and OPA policy-as-code.',
    stack: 'Go · Rust/Tauri · Next.js · Helm',
    href: 'https://github.com/sanskarpan/DB-Backup-Main',
    theme: 'Applications',
    badge: 'Systems',
  },
  {
    name: 'CallLogCleaner',
    blurb:
      'A macOS app that decrypts encrypted iPhone backups (PBKDF2, AES-256-CBC, RFC 3394 key unwrap), edits the call-history SQLite store non-destructively with rollback, and visualizes call patterns. No jailbreak.',
    stack: 'Swift · SwiftUI · CommonCrypto',
    href: 'https://github.com/sanskarpan/CallLogCleaner',
    theme: 'Applications',
    badge: 'Swift',
  },
  {
    name: 'File-Share',
    blurb:
      'A high-performance P2P file-sharing CLI in C++17: an epoll event loop handling 200+ concurrent peers, a custom binary protocol with CRC32 validation, resumable transfers, and a worker thread pool.',
    stack: 'C++17 · epoll · pthreads',
    href: 'https://github.com/sanskarpan/File-Share',
    theme: 'Applications',
    badge: 'C++',
  },
  {
    name: 'GeoVision',
    blurb:
      'A geospatial analysis chatbot on Next.js wiring Google Earth Engine, Vertex AI, and Supabase: RAG over map data, live MapLibre rendering, vector uploads, land-cover mapping, and change detection.',
    stack: 'Next.js · Earth Engine · Vertex AI · Supabase',
    href: 'https://github.com/sanskarpan/GeoVision',
    theme: 'Applications',
    badge: 'Full-stack',
  },
  {
    name: 'ViralGen',
    blurb:
      'A full-stack AI ad generator: scrape a product URL, generate a GPT-driven script, and render a 9:16 vertical video with FFmpeg. FastAPI backend with a React and Vite front end.',
    stack: 'FastAPI · React · FFmpeg · GPT',
    href: 'https://github.com/sanskarpan/ViralGenAD',
    theme: 'Applications',
    badge: 'Full-stack',
  },
  {
    name: 'Malware Scanner',
    blurb:
      'A real-time malware scanner pairing a Chrome extension with a Flask backend and the VirusTotal API, with an encrypted quarantine store, a management dashboard, and email alerts.',
    stack: 'Python · Flask · Chrome extension · VirusTotal',
    href: 'https://github.com/sanskarpan/malware-scanner-sanskar-pandey',
    theme: 'Applications',
    badge: 'Python',
  },
];
