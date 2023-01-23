import { DateTime } from './luxon.js';
const dateTimeDiv = document.getElementById('current-time');
export const date = () => {
    const dt = DateTime.now();
    dateTimeDiv.innerHTML = dt.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  }

