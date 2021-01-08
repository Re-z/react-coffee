import { format } from 'date-fns';

export const formatDateToString = (date) => {
   return format(date, 'MMMM d, yyyy, H:mm');
}
