// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from 'firebase/analytics';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDJtAAF9wOwSgGHwu-W9A3sISXkf-OlNzQ",
    authDomain: "mtsdevsite.firebaseapp.com",
    projectId: "mtsdevsite",
    storageBucket: "mtsdevsite.appspot.com",
    messagingSenderId: "447188906363",
    appId: "1:447188906363:web:ba98d384ed6966f016cdde",
    measurementId: "G-8P2NY3T87E"
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
        var theme = themeToggle.checked ? 'escolheu_tema_claro' : 'escolheu_tema_escuro';
        console.log(theme);
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

const resumeLink = document.getElementById("resume");
if (resumeLink) {
    resumeLink.addEventListener("click", function () {
        logEvent(analytics, 'baixou_resume');
        trackLinkClick('Resume');
    });
} else {
    console.error("Element with ID 'resume' not found.");
}

const curriculoLink = document.getElementById("curriculo");
if (curriculoLink) {
    curriculoLink.addEventListener("click", function () {
        logEvent(analytics, 'baixou_curriculo');
        trackLinkClick('Curriculo');
    });
} else {
    console.error("Element with ID 'curriculo' not found.");
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


// Função para verificar se a seção está visível na janela de visualização
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Função para registrar o evento no Firebase
function logiOSDeveloperViewed() {
    // Verifique se a seção está visível
    var professionalExperienceSection = document.getElementById('ios_developer_visualizado');
    if (isElementInViewport(professionalExperienceSection)) {        
        logEvent(analytics, 'visualizou_ios_developer');
        // Remova o ouvinte de evento para não registrar múltiplas vezes
        window.removeEventListener('scroll', logiOSDeveloperViewed);
    }
}

// Adicione um ouvinte de evento de rolagem para chamar a função quando o usuário rolar
window.addEventListener('scroll', logiOSDeveloperViewed);


// Função para registrar o evento no Firebase
function logComputerTechViewed() {
    // Verifique se a seção está visível
    var professionalExperienceSection = document.getElementById('computer_tech_visualizado');
    if (isElementInViewport(professionalExperienceSection)) {        
        logEvent(analytics, 'visualizou_computer_tech');
        // Remova o ouvinte de evento para não registrar múltiplas vezes
        window.removeEventListener('scroll', logComputerTechViewed);
    }
}

// Adicione um ouvinte de evento de rolagem para chamar a função quando o usuário rolar
window.addEventListener('scroll', logComputerTechViewed);


// Função para registrar o evento no Firebase
function logDesignerViewed() {
    // Verifique se a seção está visível
    var professionalExperienceSection = document.getElementById('uiux_visualizado');
    if (isElementInViewport(professionalExperienceSection)) {     
        logEvent(analytics, 'visualizou_uiux');
        // Remova o ouvinte de evento para não registrar múltiplas vezes
        window.removeEventListener('scroll', logDesignerViewed);
    }
}

// Adicione um ouvinte de evento de rolagem para chamar a função quando o usuário rolar
window.addEventListener('scroll', logDesignerViewed);


// Função para registrar o evento no Firebase
function logConquistasViewed() {
    // Verifique se a seção está visível
    var professionalExperienceSection = document.getElementById('conquistas_visualizadas');
    if (isElementInViewport(professionalExperienceSection)) {  
        logEvent(analytics, 'visualizou_conquistas');
        // Remova o ouvinte de evento para não registrar múltiplas vezes
        window.removeEventListener('scroll', logConquistasViewed);
    }
}

// Adicione um ouvinte de evento de rolagem para chamar a função quando o usuário rolar
window.addEventListener('scroll', logConquistasViewed);



// Função para verificar o scroll e registrar o evento para 100% de rolagem
function verificarScroll100() {
    const alturaDaPagina = document.body.scrollHeight;
    const scrollAtual = window.scrollY;

    // Verifique se o usuário está perto ou no final da página
    if (scrollAtual >= alturaDaPagina - window.innerHeight) {
        console.log("chegou 100");
        logEvent(analytics, 'scrollou_100_porcento');
        // Remova o ouvinte de evento após o registro
        window.removeEventListener("scroll", verificarScroll100);
    }
}

// Adicionar o ouvinte de evento para verificar 100% de rolagem
window.addEventListener("scroll", verificarScroll100);


getUserLocation();