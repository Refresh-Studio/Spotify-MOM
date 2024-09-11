export const scrollIntoView = (id: string): void => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'start' });
  }
};

export const formatGoogleCalendarDate = (date: string, time: string): string => {
  const combinedDate: Date = new Date(`${date}T${time ?? '18:00'}+02:00`);

  const pad = (number: number) => (number < 10 ? '0' + number : number);

  const year = combinedDate.getUTCFullYear();
  const month = pad(combinedDate.getUTCMonth() + 1);
  const day = pad(combinedDate.getUTCDate());
  const hours = pad(combinedDate.getUTCHours());
  const minutes = pad(combinedDate.getUTCMinutes());
  const seconds = pad(combinedDate.getUTCSeconds());

  return `${year}${month}${day}T${hours}${minutes}${seconds}Z`;
};

export const noOp = (): void => {};
