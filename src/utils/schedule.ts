export interface ScheduleItem {
  time: string;
  program: string;
  presenter?: string;
  presenters?: string[];
  days: string;
  description: string;
}

export interface ScheduleWithCurrent extends ScheduleItem {
  start: number;
  end: number;
  isCurrent: boolean;
  presenterLabel: string;
}

const DAY_NAMES: Record<string, number> = {
  'Dom': 0, 'Seg': 1, 'Ter': 2, 'Qua': 3, 'Qui': 4, 'Sex': 5, 'Sáb': 6,
};

function parseMinutes(timeStr: string): number {
  const [h, m] = timeStr.split(':').map(Number);
  return h * 60 + m;
}

function dayMatches(days: string, now: Date): boolean {
  if (days === 'Todos os dias') return true;
  const today = now.getDay();
  if (days.includes(' a ')) {
    const [start, end] = days.split(' a ');
    const startNum = DAY_NAMES[start];
    const endNum = DAY_NAMES[end];
    return today >= startNum && today <= endNum;
  }
  if (days.includes(' e ')) {
    return days.split(' e ').some(d => DAY_NAMES[d.trim()] === today);
  }
  return DAY_NAMES[days] === today;
}

export function getCurrentProgram(schedule: ScheduleItem[], now: Date = new Date()): ScheduleItem | undefined {
  const currentTime = now.getHours() * 60 + now.getMinutes();
  for (const item of schedule) {
    if (!dayMatches(item.days, now)) continue;
    const [startStr, endStr] = item.time.split(' - ');
    const start = parseMinutes(startStr);
    const end = parseMinutes(endStr);
    if (currentTime >= start && currentTime < end) {
      return item;
    }
  }
  const todayItems = schedule.filter(i => dayMatches(i.days, now));
  return todayItems[0];
}

export function enrichSchedule(schedule: ScheduleItem[], now: Date = new Date()): ScheduleWithCurrent[] {
  const currentTime = now.getHours() * 60 + now.getMinutes();
  return schedule
    .filter(item => dayMatches(item.days, now))
    .map((item) => {
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
