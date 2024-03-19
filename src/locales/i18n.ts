import { init, getLocaleFromNavigator, addMessages, locale } from 'svelte-i18n';

import en from './en.json'
import es from './es.json'
import pt from './pt.json'

addMessages('en', en);
addMessages('es', es);
addMessages('pt', pt);

const fallbackLocale = 'en'
const lngs = [fallbackLocale, 'es', 'pt']

locale.subscribe((lng) => {
    if (lng) localStorage.setItem('svelte-i18n-locale', lng)
})

let initialLocale: string
const detectedLocale = localStorage.getItem('svelte-i18n-locale') || getLocaleFromNavigator()
if (lngs.indexOf(detectedLocale) > -1) initialLocale = detectedLocale
if (!initialLocale && detectedLocale.indexOf('-') > 0) {
    const foundLng = lngs.find((l) => detectedLocale.indexOf(l + '-') === 0)
    if (foundLng) initialLocale = foundLng
}
if (!initialLocale) initialLocale = fallbackLocale


init({
    fallbackLocale,
    initialLocale,
});

