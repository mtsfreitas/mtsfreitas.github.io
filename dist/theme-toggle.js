document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.querySelector(".switch__input");
    const body = document.body;
    const moonSymbol = document.querySelector(".moon-symbol");
    const sunSymbol = document.querySelector(".sun-symbol");

    // Inicialmente, ocultar o símbolo do Sol
    sunSymbol.style.display = "none";

    toggleSwitch.addEventListener("change", function () {
        if (toggleSwitch.checked) {
            // Se o switch estiver ativado (modo Light)
            body.classList.add("light-mode");
            body.classList.remove("dark-mode");
            sunSymbol.style.display = "inline";
            moonSymbol.style.display = "none";
            
            // Registre o evento de mudança de tema no Firebase Analytics
            // Emita o evento personalizado de mudança de tema
            const themeToggleEvent = new CustomEvent("theme_toggle_click", {
                detail: { linkName: 'LightTheme' }
            });
            toggleSwitch.dispatchEvent(themeToggleEvent);
        } else {
            // Se o switch estiver desativado (modo Dark)
            body.classList.add("dark-mode");
            body.classList.remove("light-mode");
            moonSymbol.style.display = "inline";
            sunSymbol.style.display = "none";
            
            // Registre o evento de mudança de tema no Firebase Analytics
            // Emita o evento personalizado de mudança de tema
            const themeToggleEvent = new CustomEvent("theme_toggle_click", {
                detail: { linkName: 'DarkTheme' }
            });
            toggleSwitch.dispatchEvent(themeToggleEvent);
        }
    });
});
