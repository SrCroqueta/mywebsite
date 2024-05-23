document.addEventListener('DOMContentLoaded', () => {
    const botonCookie = document.getElementById("button-cookies");
    const contenedorCookie = document.getElementById("cookies-advice");

    if (sessionStorage.getItem("cookies") !== "aceptadas") {
        contenedorCookie.style.display = "block";
    } else {
        contenedorCookie.style.display = "none";
    }

    botonCookie.addEventListener('click', () => {
        contenedorCookie.style.display = "none";
        sessionStorage.setItem("cookies", "aceptadas");
    });
});
