import { formatDuration, intervalToDuration } from 'date-fns';
import { fr } from 'date-fns/locale';

export const formatHoursAndMinutes = (duration: number) => {
  return formatDuration(intervalToDuration({ start: 0, end: duration * 1000 }), {
    locale: fr,
    format: ['hours', 'minutes'],
  })
    .replace('heures', 'h')
    .replace('heure', 'h')
    .replace('minutes', 'min')
    .replace('minute', 'min')
    .replaceAll(' ', '');
};
