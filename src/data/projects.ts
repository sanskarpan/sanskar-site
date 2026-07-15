// Curated projects. Reorder / edit freely. `featured` ones surface on the homepage.
// TODO(sanskar): double-check every repo URL points where you want.
export interface Project {
  name: string;
  blurb: string;
  stack: string;
  href: string;
  badge?: 'OSS' | 'Go' | 'Python' | 'Systems';
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    name: 'PromptLine',
    blurb:
      'An LLM-evaluation + prompt-optimization pipeline: a calibrated LLM-as-judge, a statistical deploy gate (paired-bootstrap CI + Holm correction), and five optimizers. Published on PyPI as promptline-opt.',
    stack: 'Python · FastAPI · React · LLM-as-judge',
    href: 'https://github.com/sanskarpan/promptline',
    badge: 'OSS',
    featured: true,
  },
  {
    name: 'TAG · Terminal Agent Gateway',
    blurb:
      'An agent-orchestration runtime that routes tasks across 10+ model providers with autonomous loops, tool capabilities, background job queues, and hard budget limits. Published on PyPI + npm as tag-agent.',
    stack: 'Python · agents · OpenRouter · SQLite',
    href: 'https://github.com/sanskarpan',
    badge: 'OSS',
    featured: true,
  },
  {
    name: 'LSM-Tree Storage Engine',
    blurb:
      'A from-scratch LSM-tree in Go: skip-list memtable, Bloom-filtered mmap SSTables, three live-switchable compaction strategies, Raft quorum replication and multi-Raft sharding.',
    stack: 'Go · Raft · Bloom filters · mmap',
    href: 'https://github.com/sanskarpan/lsm-tree-storage',
    badge: 'Go',
    featured: true,
  },
  {
    name: 'B+Tree Storage Engine',
    blurb:
      'A B+Tree storage engine in Go with MVCC snapshot isolation, ARIES-style WAL crash recovery, slotted 4KB pages, a Clock-eviction buffer pool and group commit.',
    stack: 'Go · MVCC · ARIES WAL',
    href: 'https://github.com/sanskarpan/btree-engine',
    badge: 'Go',
    featured: true,
  },
  {
    name: 'Distributed Tracing System',
    blurb:
      'An observability backend ingesting OTLP + native spans with seven pluggable samplers (incl. tail-based/adaptive) and RED metrics over sliding-window histograms.',
    stack: 'Go · OpenTelemetry · SSE · React',
    href: 'https://github.com/sanskarpan/distributed-tracing-system',
    badge: 'Go',
  },
  {
    name: 'PayGate',
    blurb:
      'A multi-tenant payment platform in Go using double-entry ledgering, a transactional outbox, and saga orchestration with explicit per-entity state machines and dead-letter handling.',
    stack: 'Go · PostgreSQL · Saga · Outbox',
    href: 'https://github.com/sanskarpan/PayGate',
    badge: 'Go',
  },
  {
    name: 'DB-Backup',
    blurb:
      'A cross-platform enterprise backup product: Go backend, Next.js web, Rust/Tauri desktop, React Native mobile, and browser extensions, with Terraform IaC and OPA policy-as-code.',
    stack: 'Go · Rust/Tauri · Next.js · Terraform',
    href: 'https://github.com/sanskarpan/DB-Backup-Main',
    badge: 'Systems',
  },
];
