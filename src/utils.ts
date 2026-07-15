export function formatDate(d: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(d);
}

export function isoDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

/** Rough reading time from raw markdown/body text. */
export function readingMinutes(text: string): number {
  const words = (text || '').trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

/** Two-digit ledger index, e.g. 01, 02. */
export function pad(n: number): string {
  return String(n).padStart(2, '0');
}
