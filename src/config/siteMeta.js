import siteLogo from '../logo.svg';
import homePage from '../components/pages/homePage';
import moviesPage from '../components/pages/moviesPage';
import addMoviePage from '../components/pages/addMoviePage';

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
        component: homePage
    },
    moviespage: {
        title: 'Movies',
        path: '/movies',
        component: moviesPage
    },
    addmoviepage: {
        title: 'Add Movie',
        path: '/movies/addmovie',
        component: addMoviePage
    }
}