/*** Сайдбар для todos ***/
// список фильтров
export type FilterType = 'all' | 'active' | 'done';
export const FILTER_OPTIONS = [
  { value: 'all', label: 'Все' },
  { value: 'active', label: 'Активные' },
  { value: 'done', label: 'Завершенные' },
];

// список сортировки
export type SortType = 'dateAsc' | 'dateDesc' | 'active' | 'done';
export const SORT_OPTIONS = [
  { value: 'dateDesc', label: 'По дате (поздние)' },
  { value: 'dateAsc', label: 'По дате (ранние)' },
  { value: 'active', label: 'Сначала активные' },
  { value: 'done', label: 'Сначала завершенные' },
];

/*** Формат даты ***/
export const DATE = 'DD.MM.YYYY';
export const TIME = 'HH:mm';
