const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

export const weatherConditions: Record<number, { icon: string; label: string; gradient: string }> = {
  0:  { icon: 'sun',        label: 'Céu limpo',          gradient: 'linear-gradient(135deg, #f5af19, #f12711)' },
  1:  { icon: 'sun',        label: 'Predomínio de sol',  gradient: 'linear-gradient(135deg, #f5af19, #f12711)' },
  2:  { icon: 'cloud-sun',  label: 'Parcialmente nublado',gradient: 'linear-gradient(135deg, #89cff0, #f5af19)' },
  3:  { icon: 'cloud',      label: 'Nublado',            gradient: 'linear-gradient(135deg, #6b7b8d, #c0c8d0)' },
  45: { icon: 'fog',        label: 'Nevoeiro',           gradient: 'linear-gradient(135deg, #8e9eab, #eef2f3)' },
  48: { icon: 'fog',        label: 'Nevoeiro',           gradient: 'linear-gradient(135deg, #8e9eab, #eef2f3)' },
  51: { icon: 'drizzle',    label: 'Chuva leve',         gradient: 'linear-gradient(135deg, #4b6cb7, #6b93d6)' },
  53: { icon: 'drizzle',    label: 'Chuva moderada',     gradient: 'linear-gradient(135deg, #3a5a9f, #5a7fc0)' },
  55: { icon: 'rain',       label: 'Chuva forte',        gradient: 'linear-gradient(135deg, #2a4a8f, #4a6fb0)' },
  61: { icon: 'rain',       label: 'Chuva',              gradient: 'linear-gradient(135deg, #2a4a8f, #4a6fb0)' },
  63: { icon: 'rain',       label: 'Chuva moderada',     gradient: 'linear-gradient(135deg, #1a3a7f, #3a5fa0)' },
  65: { icon: 'rain-heavy', label: 'Chuva forte',        gradient: 'linear-gradient(135deg, #0a2a6f, #2a4f90)' },
  71: { icon: 'snow',       label: 'Neve',               gradient: 'linear-gradient(135deg, #b8c6db, #f5f7fa)' },
  80: { icon: 'rain',       label: 'Pancadas de chuva',  gradient: 'linear-gradient(135deg, #2a4a8f, #6b93d6)' },
  95: { icon: 'storm',      label: 'Tempestade',         gradient: 'linear-gradient(135deg, #141e30, #243b55)' },
};

export function getWeather(code: number) {
  return weatherConditions[code] || weatherConditions[0];
}

export const weatherSvgIcons: Record<string, string> = {
  sun: `<circle cx="32" cy="32" r="14" fill="#FFD700" stroke="#FFA500" stroke-width="2"/><g stroke="#FFD700" stroke-width="3" stroke-linecap="round"><line x1="32" y1="4" x2="32" y2="12"/><line x1="32" y1="52" x2="32" y2="60"/><line x1="60" y1="32" x2="52" y2="32"/><line x1="12" y1="32" x2="4" y2="32"/><line x1="48.5" y1="15.5" x2="42.5" y2="21.5"/><line x1="21.5" y1="42.5" x2="15.5" y2="48.5"/><line x1="48.5" y1="48.5" x2="42.5" y2="42.5"/><line x1="21.5" y1="21.5" x2="15.5" y2="15.5"/></g>`,
  'cloud-sun': `<circle cx="26" cy="24" r="9" fill="#FFD700" stroke="#FFA500" stroke-width="2"/><path d="M16 44h32a10 10 0 0 0 0-20h-3a14 14 0 0 0-26-4h-1a9 9 0 0 0 0 18h0z" fill="#E0E8F0" stroke="#B0C0D0" stroke-width="2"/>`,
  cloud: `<path d="M14 44h36a10 10 0 0 0 0-20h-3a14 14 0 0 0-26-4h-1a9 9 0 0 0 0 18h0z" fill="#D0D8E0" stroke="#A0B0C0" stroke-width="2"/>`,
  fog: `<g stroke="#B0C0D0" stroke-width="3" stroke-linecap="round"><line x1="12" y1="24" x2="52" y2="24"/><line x1="16" y1="32" x2="48" y2="32"/><line x1="12" y1="40" x2="52" y2="40"/></g>`,
  drizzle: `<path d="M16 36h32a10 10 0 0 0 0-20h-3a14 14 0 0 0-26-4h-1a9 9 0 0 0 0 18h0z" fill="#C0D0E0" stroke="#90A8C0" stroke-width="2"/><g stroke="#4A8AFF" stroke-width="2" stroke-linecap="round"><line x1="22" y1="42" x2="20" y2="48"/><line x1="32" y1="42" x2="30" y2="48"/><line x1="42" y1="42" x2="40" y2="48"/></g>`,
  rain: `<path d="M16 34h32a10 10 0 0 0 0-20h-3a14 14 0 0 0-26-4h-1a9 9 0 0 0 0 18h0z" fill="#A0B8D0" stroke="#7090B0" stroke-width="2"/><g stroke="#4A7AFF" stroke-width="2" stroke-linecap="round"><line x1="20" y1="40" x2="16" y2="50"/><line x1="30" y1="40" x2="26" y2="50"/><line x1="40" y1="40" x2="36" y2="50"/><line x1="50" y1="40" x2="46" y2="50"/></g>`,
  'rain-heavy': `<path d="M16 34h32a10 10 0 0 0 0-20h-3a14 14 0 0 0-26-4h-1a9 9 0 0 0 0 18h0z" fill="#8098B0" stroke="#507090" stroke-width="2"/><g stroke="#3A6AEF" stroke-width="3" stroke-linecap="round"><line x1="20" y1="40" x2="14" y2="52"/><line x1="30" y1="40" x2="24" y2="52"/><line x1="40" y1="40" x2="34" y2="52"/><line x1="50" y1="40" x2="44" y2="52"/></g>`,
  snow: `<path d="M16 34h32a10 10 0 0 0 0-20h-3a14 14 0 0 0-26-4h-1a9 9 0 0 0 0 18h0z" fill="#E8EEF4" stroke="#C0D0E0" stroke-width="2"/><g fill="#B0C8E0"><circle cx="20" cy="42" r="2"/><circle cx="30" cy="48" r="2"/><circle cx="40" cy="42" r="2"/><circle cx="50" cy="48" r="2"/></g>`,
  storm: `<path d="M16 34h32a10 10 0 0 0 0-20h-3a14 14 0 0 0-26-4h-1a9 9 0 0 0 0 18h0z" fill="#506080" stroke="#304060" stroke-width="2"/><g stroke="#FFD700" stroke-width="2"><polyline points="34,36 28,44 36,44 28,52" fill="#FFD700"/></g>`,
};

export function renderWeatherIcon(iconName: string) {
  const content = weatherSvgIcons[iconName] || weatherSvgIcons.sun;
  return `<svg viewBox="0 0 64 64" fill="none" class="weather-svg-icon">${content}</svg>`;
}

export function getWindDirection(degrees: number) {
  const directions = ['N','NNE','NE','ENE','E','ESE','SE','SSE','S','SSW','SW','WSW','W','WNW','NW','NNW'];
  return directions[Math.round(degrees / 22.5) % 16];
}

export function getUVLabel(index: number) {
  if (index >= 8) return 'Extremo';
  if (index >= 6) return 'Alto';
  if (index >= 3) return 'Moderado';
  return 'Baixo';
}

export function getDayName(dateString: string) {
  return days[new Date(dateString).getDay()];
}

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  return `${String(date.getDate()).padStart(2, '0')} ${months[date.getMonth()]}`;
}

export function buildCurrentWeather(current: any, today: any) {
  const weather = getWeather(current.weathercode);
  return `
    <div class="weather-current-section" style="--weather-gradient: ${weather.gradient}">
      <div class="weather-current-section__overlay"></div>
      <div class="weather-current-main">
        <div class="weather-current-icon-wrapper">${renderWeatherIcon(weather.icon)}</div>
        <div class="weather-current-info">
          <div class="weather-current-temperature">${current.temperature_2m}°C</div>
          <div class="weather-current-feels-like">Sensação ${current.apparent_temperature}°C</div>
          <div class="weather-current-condition">${weather.label}</div>
          <div class="weather-current-location">Pindobaçu, BA</div>
        </div>
      </div>
      <div class="weather-current-details">
        <div class="weather-detail">
          <span class="weather-detail__label">Umidade</span>
          <span class="weather-detail__value">${current.relative_humidity_2m}%</span>
        </div>
        <div class="weather-detail">
          <span class="weather-detail__label">Vento</span>
          <span class="weather-detail__value">${current.wind_speed_10m} <small>km/h</small></span>
          <span class="weather-detail__sub">${getWindDirection(current.wind_direction_10m)}</span>
        </div>
        <div class="weather-detail">
          <span class="weather-detail__label">UV</span>
          <span class="weather-detail__value">${current.uv_index}</span>
          <span class="weather-detail__sub">${getUVLabel(current.uv_index)}</span>
        </div>
        <div class="weather-detail">
          <span class="weather-detail__label">Máx / Mín</span>
          <span class="weather-detail__value">${today.maxTemp}° / ${today.minTemp}°</span>
        </div>
      </div>
    </div>`;
}

export function buildHourlyForecast(hourlyData: any[]) {
  if (!hourlyData.length) return '';
  return `
    <div class="weather-hourly-section">
      ${hourlyData.map(h => {
        const weather = getWeather(h.code);
        return `
          <div class="weather-hourly-item">
            <span class="weather-hourly-item__time">${h.time}</span>
            ${renderWeatherIcon(weather.icon)}
            <span class="weather-hourly-item__temp">${h.temperature}°</span>
            <span class="weather-hourly-item__rain">${h.rainChance}%</span>
          </div>`;
      }).join('')}
    </div>`;
}

export function buildDailyForecast(forecastData: any[]) {
  return `
    <div class="weather-daily-grid">
      ${forecastData.map((day, index) => {
        const weather = getWeather(day.code);
        const isToday = index === 0;
        return `
          <div class="weather-daily-card ${isToday ? 'weather-daily-card--today' : ''}">
            <span class="weather-daily-card__name">${isToday ? 'Hoje' : day.dayName}</span>
            <span class="weather-daily-card__date">${day.date}</span>
            <div class="weather-daily-card__icon">${renderWeatherIcon(weather.icon)}</div>
            <span class="weather-daily-card__condition">${weather.label}</span>
            <div class="weather-daily-card__temps">
              <span class="weather-daily-card__temp-max">${day.maxTemp}°</span>
              <span class="weather-daily-card__temp-sep">/</span>
              <span class="weather-daily-card__temp-min">${day.minTemp}°</span>
            </div>
            <div class="weather-daily-card__extras">
              <span class="weather-daily-card__rain ${day.rainChance > 0 ? 'weather-daily-card__rain--active' : ''}">
                <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor"><path d="M4 6a4 4 0 1 1 8 0c0 2.5-2 5-4 7-2-2-4-4.5-4-7z"/></svg>
                ${day.rainChance}%
              </span>
              <span class="weather-daily-card__wind">
                <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor"><path d="M1 8h11.5a2.5 2.5 0 0 0 0-5h-.5m-4 10h5.5a2.5 2.5 0 0 0 0-5H13"/></svg>
                ${day.windSpeed} ${day.windDirection}
              </span>
            </div>
          </div>`;
      }).join('')}
    </div>`;
}
