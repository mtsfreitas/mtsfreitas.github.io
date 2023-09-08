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
            logEvent(analytics, country);
            logEvent(analytics, city);
            logEvent(analytics, state);

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
        var language = languageToggle === "pt-BR" ? 'escolheu_portugues' : 'escolheu_ingles';
        logEvent(analytics, language);
        trackLinkClick(e.detail.linkName);
    });
}

// Adicione um ouvinte de eventos personalizados para o elemento 'theme-toggle'
const themeToggle = document.getElementById("toggleSwitch");
if (themeToggle) {
    themeToggle.addEventListener("theme_toggle_click", function (e) {
        var theme = themeToggle === "LightTheme" ? 'escolheu_tema_claro' : 'escolheu_tema_escuro';
        logEvent(analytics, theme);
        trackLinkClick(e.detail.linkName);
    });
}

// Add event listener for the email link
const emailLink = document.getElementById("email");
if (emailLink) {
    emailLink.addEventListener("click", function () {
        logEvent(analytics, 'clicou_no_email');
        trackLinkClick('Email');
    });
} else {
    console.error("Element with ID 'email' not found.");
}

// Add event listener for the whatsapp link
const whatsappLink = document.getElementById("whatsapp");
if (whatsappLink) {
    whatsappLink.addEventListener("click", function () {
        logEvent(analytics, 'clicou_no_whatsapp');
        trackLinkClick('Whatsapp');
    });
} else {
    console.error("Element with ID 'whatsapp' not found.");
}

// Add event listener for the linkedin link
const linkedinLink = document.getElementById("linkedin");
if (linkedinLink) {
    linkedinLink.addEventListener("click", function () {
        logEvent(analytics, 'clicou_no_linkedin');
        trackLinkClick('LinkedIn');
    });
} else {
    console.error("Element with ID 'linkedin' not found.");
}

// Add event listener for the github link
const githubLink = document.getElementById("github");
if (githubLink) {
    githubLink.addEventListener("click", function () {
        logEvent(analytics, 'clicou_no_github');
        trackLinkClick('Github');
    });
} else {
    console.error("Element with ID 'github' not found.");
}

// Add event listener for the meeting link
const meetingLink = document.getElementById("meeting");
if (meetingLink) {
    meetingLink.addEventListener("click", function () {
        logEvent(analytics, 'clicou_no_meeting');
        trackLinkClick('Meeting');
    });
} else {
    console.error("Element with ID 'meeting' not found.");
}

// Add event listener for the innovative link
const innovativeLink = document.getElementById("innovative");
if (innovativeLink) {
    innovativeLink.addEventListener("click", function () {
        logEvent(analytics, 'clicou_no_innovative');
    });
} else {
    console.error("Element with ID 'innovative' not found.");
}

// Add event listener for the Team Highlight link
const highlightLink = document.getElementById("highlight");
if (highlightLink) {
    highlightLink.addEventListener("click", function () {
        logEvent(analytics, 'clicou_no_team_highlight');
    });
} else {
    console.error("Element with ID 'highlight' not found.");
}

// Add event listener for the yourock link
const yourockLink = document.getElementById("yourock");
if (yourockLink) {
    yourockLink.addEventListener("click", function () {
        logEvent(analytics, 'clicou_no_yourock');
    });
} else {
    console.error("Element with ID 'yourock' not found.");
}

// Add event listener for the mission1 link
const mission1Link = document.getElementById("mission1");
if (mission1Link) {
    mission1Link.addEventListener("click", function () {
        logEvent(analytics, 'clicou_no_primeiro_mission');
    });
} else {
    console.error("Element with ID 'mission1' not found.");
}

// Add event listener for the mission1 link
const mission2Link = document.getElementById("mission2");
if (mission2Link) {
    mission2Link.addEventListener("click", function () {
        logEvent(analytics, 'clicou_no_segundo_mission');
    });
} else {
    console.error("Element with ID 'mission2' not found.");
}

// Função para verificar o scroll e registrar o evento para 50% de rolagem
function verificarScroll50() {
    const alturaDaPagina = document.body.scrollHeight;
    const scrollAtual = window.scrollY;
    const percentagem50 = (scrollAtual / alturaDaPagina) * 100;

    if (percentagem50 >= 50) {
        logEvent(analytics, 'scrollou_50_porcento');
        // Remova o ouvinte de evento após o registro
        window.removeEventListener("scroll", verificarScroll50);
    }
}

// Função para verificar o scroll e registrar o evento para 80% de rolagem
function verificarScroll80() {
    const alturaDaPagina = document.body.scrollHeight;
    const scrollAtual = window.scrollY;
    const percentagem80 = (scrollAtual / alturaDaPagina) * 100;

    if (percentagem80 >= 80) {
        logEvent(analytics, 'scrollou_80_porcento');
        // Remova o ouvinte de evento após o registro
        window.removeEventListener("scroll", verificarScroll80);
    }
}

// Função para verificar o scroll e registrar o evento para 100% de rolagem
function verificarScroll100() {
    const alturaDaPagina = document.body.scrollHeight;
    const scrollAtual = window.scrollY;
    const percentagem100 = (scrollAtual / alturaDaPagina) * 100;

    if (percentagem100 >= 100) {
        logEvent(analytics, 'scrollou_100_porcento');
        // Remova o ouvinte de evento após o registro
        window.removeEventListener("scroll", verificarScroll100);
    }
}

// Adicionar listeners de evento para cada função de verificação de rolagem
window.addEventListener("scroll", verificarScroll50);
window.addEventListener("scroll", verificarScroll80);
window.addEventListener("scroll", verificarScroll100);

getUserLocation();