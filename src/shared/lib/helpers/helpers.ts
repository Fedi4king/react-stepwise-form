export const marksAmount = [
  { value: 200, label: '200$' },
  { value: 300, label: '300$' },
  { value: 400, label: '400$' },
  { value: 500, label: '500$' },
  { value: 600, label: '600$' },
  { value: 700, label: '700$' },
  { value: 800, label: '800$' },
  { value: 900, label: '900$' },
  { value: 1000, label: '1000$' },
];

export const marksDate = Array.from({ length: 30 }, (_, index) => ({
  value: index + 1,
  label: `${index + 1} days`,
}));
