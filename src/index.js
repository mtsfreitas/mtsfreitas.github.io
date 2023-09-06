// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from 'firebase/analytics';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
    console.log('clicouuuuu', linkName);
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
            const city = data.results[0].components.village;
            const state = data.results[0].components.state;
            const country = data.results[0].components.country;
            
            // Envie a cidade para o Firebase Analytics como um evento personalizado
            logEvent(analytics, 'user_location', {
                city: city,
                state: state,
                country: country
                });
            })
            .catch(error => {
            console.error("Erro ao obter a cidade:", error);
            });
        });
    }
}
// evento personalizado do JavaScript para transmitir a ação do clique no elemento language-toggle para outros módulos, em vez de importar diretamente a função do Firebase.
// Adicione um ouvinte de eventos personalizados para o elemento 'language-toggle'
const languageToggle = document.getElementById("language-toggle");
if (languageToggle) {
    languageToggle.addEventListener("language_toggle_click", function (e) {
        trackLinkClick(e.detail.linkName);
    });
}

// Adicione um ouvinte de eventos personalizados para o elemento 'theme-toggle'
const themeToggle = document.getElementById("toggleSwitch");
if (themeToggle) {
    themeToggle.addEventListener("theme_toggle_click", function (e) {
        trackLinkClick(e.detail.linkName);
    });
}

// Add event listener for the email link
const emailLink = document.getElementById("email");
if (emailLink) {
    emailLink.addEventListener("click", function () {
        trackLinkClick('Email');
    });
} else {
    console.error("Element with ID 'email' not found.");
}

// Add event listener for the whatsapp link
const whatsappLink = document.getElementById("whatsapp");
if (whatsappLink) {
    whatsappLink.addEventListener("click", function () {
        trackLinkClick('Whatsapp');
    });
} else {
    console.error("Element with ID 'whatsapp' not found.");
}

// Add event listener for the linkedin link
const linkedinLink = document.getElementById("linkedin");
if (linkedinLink) {
    linkedinLink.addEventListener("click", function () {
        trackLinkClick('LinkedIn');
    });
} else {
    console.error("Element with ID 'linkedin' not found.");
}

// Add event listener for the github link
const githubLink = document.getElementById("github");
if (githubLink) {
    githubLink.addEventListener("click", function () {
        trackLinkClick('Github');
    });
} else {
    console.error("Element with ID 'github' not found.");
}

getUserLocation();