type Theme = 'dark' | 'light';

export const useTheme = () => {
  const theme = useState<Theme>('theme', () => 'dark');

  const apply = (value: Theme) => {
    theme.value = value;
    if (import.meta.client) {
      localStorage.setItem('theme', value);
    }
  };

  const toggle = () => {
    apply(theme.value === 'dark' ? 'light' : 'dark');
  };

  onMounted(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') apply(saved);
  });

  return { theme, toggle, apply };
};
