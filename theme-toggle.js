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
        } else {
            // Se o switch estiver desativado (modo Dark)
            body.classList.add("dark-mode");
            body.classList.remove("light-mode");
            moonSymbol.style.display = "inline";
            sunSymbol.style.display = "none";
        }
    });
});
