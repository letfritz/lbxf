import moment from 'moment';
import 'moment/locale/pt-br';
import 'moment/locale/es';
import 'moment/locale/fr';

const setMomentLocale = (language: string) => {
  switch (language) {
    case 'pt-br':
      moment.locale('pt-br');
      break;
    case 'en':
      moment.locale('en');
      break;
    case 'es':
      moment.locale('es');
      break;
    case 'fr':
      moment.locale('fr');
      break;
    default:
      moment.locale('pt-br'); // Fallback para português se o idioma não for suportado
      break;
  }
};

export { setMomentLocale, moment as momentInstance };
