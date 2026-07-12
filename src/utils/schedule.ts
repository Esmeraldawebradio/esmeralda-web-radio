export interface ScheduleItem {
  time: string;
  program: string;
  presenter?: string;
  presenters?: string[];
  description: string;
}

export interface ScheduleWithCurrent extends ScheduleItem {
  start: number;
  end: number;
  isCurrent: boolean;
  presenterLabel: string;
}

function parseMinutes(timeStr: string): number {
  const [h, m] = timeStr.split(':').map(Number);
  return h * 60 + m;
}

export function getCurrentProgram(schedule: ScheduleItem[], now: Date = new Date()): ScheduleItem {
  const currentTime = now.getHours() * 60 + now.getMinutes();
  for (const item of schedule) {
    const [startStr, endStr] = item.time.split(' - ');
    const start = parseMinutes(startStr);
    const end = parseMinutes(endStr);
    if (currentTime >= start && currentTime < end) {
      return item;
    }
  }
  return schedule[0];
}

export function enrichSchedule(schedule: ScheduleItem[], now: Date = new Date()): ScheduleWithCurrent[] {
  const currentTime = now.getHours() * 60 + now.getMinutes();
  return schedule.map((item) => {
    const [startStr, endStr] = item.time.split(' - ');
    const start = parseMinutes(startStr);
    const end = parseMinutes(endStr);
    const isCurrent = currentTime >= start && currentTime < end;
    const presenterLabel = formatPresenter(item);
    return { ...item, start, end, isCurrent, presenterLabel };
  });
}

export function formatPresenter(item: ScheduleItem): string {
  if (Array.isArray(item.presenters)) return item.presenters.join(', ');
  if (item.presenter) return item.presenter;
  return '';
}
