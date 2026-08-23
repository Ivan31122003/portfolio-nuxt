export const getYearDeclension = (year: number): string => {
  if (year < 1) throw new Error('Лет не может быть меньше 1');
  if (year % 1 !== 0) throw new Error('Год должен быть целым числом');
  if (year > 3000) throw new Error('Лет не может быть больше 100');
  if (year >= 5 && year <= 20) return 'лет';
  if (year % 10 === 1) return 'год';
  if (year % 10 === 0 || (year % 10 >= 2 && year % 10 <= 4)) return 'года';
  return 'лет';
};

export const getMonthDeclension = (month: number): string => {
  if (month < 1) throw new Error('Месяцев не может быть меньше 1');
  if (month % 1 !== 0) throw new Error('Месяц должен быть целым числом');
  if (month > 12) throw new Error('Месяцев не может быть больше 12');
  if (month === 1) return 'месяц';
  if (month <= 4) return 'месяца';
  return 'месяцев';
};
