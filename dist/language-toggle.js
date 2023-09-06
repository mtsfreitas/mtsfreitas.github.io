document.addEventListener("DOMContentLoaded", function () {
    const languageToggle = document.getElementById("language-toggle");

    if (languageToggle) {
        // Verifica se a URL atual é a página em português
        if (window.location.pathname.includes("index_ptbr.html")) {
            // Define o toggle como marcado (ativado)
            languageToggle.checked = true;
        }

        // Adiciona um evento de clique ao toggle
        languageToggle.addEventListener("click", toggleLanguage);
    }

    function toggleLanguage() {
        // Verifica se o toggle está marcado (ativado)
        if (languageToggle.checked) {
            // Redireciona para a versão em português
            window.location.href = "index_ptbr.html";

            // Registre o evento de mudança de idioma no Firebase Analytics
            // Dispare um evento personalizado 'language_toggle_click' com os detalhes necessários
            const languageToggleEvent = new CustomEvent("language_toggle_click", {
                detail: { linkName: 'pt-BR' }
            });
            languageToggle.dispatchEvent(languageToggleEvent);
        } else {
            // Redireciona para a versão em inglês
            window.location.href = "index.html";
            
            // Registre o evento de mudança de idioma no Firebase Analytics
            // Dispare um evento personalizado 'language_toggle_click' com os detalhes necessários
            const languageToggleEvent = new CustomEvent("language_toggle_click", {
                detail: { linkName: 'en-US' }
            });
            languageToggle.dispatchEvent(languageToggleEvent);
        }
    }
});
