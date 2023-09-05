import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyABI0DPchWq_FzlCDaBNJv2y4OcZmA16Yc",
    authDomain: "mtsfreitasgithubio.firebaseapp.com",
    projectId: "mtsfreitasgithubio",
    storageBucket: "mtsfreitasgithubio.appspot.com",
    messagingSenderId: "72022015160",
    appId: "1:72022015160:web:c60ed4b94b2d58d13b484d",
    measurementId: "G-BC7R15VCBP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function trackLinkClick(linkName) {
    logEvent(analytics, 'link_click', { link_name: linkName });
}

// Função para obter a localização do usuário
function getUserLocation() {
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    fetch(`https://api.opencagedata.com/geocode/v1/json?key=bb93e953520e4658a9160da4b2022ff0&q=${latitude}+${longitude}`)
        .then(response => response.json())
        .then(data => {
        const city = data.results[0].components.city;

        // Envie a cidade para o Firebase Analytics como um evento personalizado
        logEvent(analytics, 'user_location', { city: city });
        })
        .catch(error => {
        console.error("Erro ao obter a cidade:", error);
        });
    });
}
}

getUserLocation();
