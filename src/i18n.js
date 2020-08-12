import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
    resources: {
        eng: {
            translations:{
                home: 'HOME',
                sell: 'SELL',
                host: 'HOST',
                aboutUs: 'ABOUT US',
                support: 'SUPPORT'
            }
        },
        deu: {
            translations:{
                home: 'HAUS',
                sell: 'VERKAUFEN',
                host: 'GASTGEBER',
                aboutUs: 'ÜBER UNS',
                support: 'UNTERSTÜTZUNG'
            }
        },
        spa: {
            translations:{
                home: 'HOGAR',
                sell: 'VENDER',
                host: 'ANFITRIÓN',
                aboutUs: 'SOBRE NOSOTROS',
                support: 'APOYO'
            }
        },
        fra: {
            translations:{
                home: 'ACCUEIL',
                sell: 'VENDRE',
                host: 'HÔTE',
                aboutUs: 'À PROPOS DE NOUS',
                support: 'SOUTIEN'
            }
        },
        rus: {
            translations:{
                home: 'ДОМОЙ',
                sell: 'КУПИТЬ',
                host: 'ХОСТ',
                aboutUs: 'О НАС',
                support: 'ПОДДЕРЖКА'
            }
        },
    },
    fallbackLng: "eng",
});

export default i18n;