import siteLogo from '../logo.svg';
import Homepage from '../components/pages/Homepage';

export const siteMeta = {
    title: 'Moviepedia',
    logo: siteLogo,
    desc: 'watched Movies...',
    keyw: 'movie, film, cinema',
    author: 'Armağan Bayraktar'
};

export const siteMenus = {

    homepage: {
        title: 'Home',
        path: '/',
        component: Homepage
    }
}