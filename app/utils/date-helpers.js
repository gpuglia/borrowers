import moment from 'npm:moment';

export function formatDate(date, format) {
  return moment(date).format(format);
}
