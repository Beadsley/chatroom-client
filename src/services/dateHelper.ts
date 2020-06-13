import moment from 'moment';

export const timeFormatter = (timestamp: Date): string => {
  return moment(timestamp).format('LT');
};
