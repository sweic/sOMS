export const convertTime = (original: string, withDay: boolean): string => {
  const originalTime = new Date(original);
  const hour = originalTime.getHours().toString().padStart(2, "0");
  const minute = originalTime.getMinutes().toString().padStart(2, "0");
  const newDate = `${originalTime.getDate()}/${originalTime.getUTCMonth() + 1}`;
  return withDay ? `${newDate} ${hour}:${minute}` : `${hour}:${minute}`;
};
