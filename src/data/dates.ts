const MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

/** "Oct 2022" -> months since year 0, or undefined if it can't be read. */
export function toMonthIndex(value: string): number | undefined {
  const match = /^([a-z]{3})[a-z]*\.?\s+(\d{4})$/i.exec(value.trim());
  if (!match) return undefined;
  const month = MONTHS.indexOf(match[1].toLowerCase());
  if (month === -1) return undefined;
  return Number(match[2]) * 12 + month;
}

function currentMonthIndex() {
  const now = new Date();
  return now.getFullYear() * 12 + now.getMonth();
}

/** Length of a job like LinkedIn shows it ("1 yr 5 mos"), counting both the start and end month. */
export function duration(start: string, end?: string): string | undefined {
  const from = toMonthIndex(start);
  const to = end ? toMonthIndex(end) : currentMonthIndex();
  if (from === undefined || to === undefined || to < from) return undefined;

  const total = to - from + 1;
  const years = Math.floor(total / 12);
  const months = total % 12;
  const parts: string[] = [];
  if (years) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (months) parts.push(`${months} mo${months > 1 ? "s" : ""}`);
  return parts.join(" ");
}

/** Whole years from the earliest of these start dates until now. */
export function yearsSince(starts: string[]): number {
  const indexes = starts.map(toMonthIndex).filter((value): value is number => value !== undefined);
  if (indexes.length === 0) return 0;
  return Math.floor((currentMonthIndex() - Math.min(...indexes)) / 12);
}
