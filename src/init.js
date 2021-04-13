import i18next from 'i18next';
import ru from './locales/ru';

export default async () => {
  await i18next.init({
    lng: 'ru',
    debug: true,
    resources: {
      ru,
    },
  });
}
