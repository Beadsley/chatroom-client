import moment from 'moment';

export const currentTimestamp = (): Date => new Date();

export const timeFormatter = (timestamp: Date): string => {
  return moment(timestamp).format('LT');
};
