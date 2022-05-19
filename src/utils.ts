import { formatDuration, intervalToDuration, isEqual } from 'date-fns';
import { fr } from 'date-fns/locale';

export const formatHoursAndMinutes = (duration: number, options: Record<string, any> = {}): string => {
  return formatDuration(intervalToDuration({ start: 0, end: duration * 1000 }), {
    locale: fr,
    format: ['hours', 'minutes'],
    ...options,
  })
    .replace('heures', 'h')
    .replace('heure', 'h')
    .replace('minutes', 'min')
    .replace('minute', 'min')
    .replaceAll(' ', '');
};

export const convertToPercent = (numerator: number, denominateur: number): number => {
  return Math.round((numerator * 100) / denominateur);
};

export const formatCo2 = (total_gCO2: number) =>
  `${String(total_gCO2 / 1000)
    .replace('.', ',')
    .slice(0, 4)} Kg CO2`;

export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const areTravelsCategoryEqual = (travel1: Travel | undefined, travel2: Travel | undefined) => {
  if (!travel1 || !travel2 || travel1.category.length !== travel2.category.length) {
    return false;
  }

  let isEqual = true;
  travel1.category.forEach((category, i) => {
    if (category !== travel2.category[i]) {
      isEqual = false;
    }
  });

  return isEqual;
};
