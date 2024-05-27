document.addEventListener('DOMContentLoaded', () => {
    const botonCookie = document.getElementById("button-cookies");
    const contenedorCookie = document.getElementById("cookies-advice");

    if (sessionStorage.getItem("cookies") === "aceptadas") {
        contenedorCookie.style.display = "none";
    } else {
        contenedorCookie.style.display = "block";
    }

    botonCookie.addEventListener('click', () => {
        contenedorCookie.style.display = "none";
        sessionStorage.setItem("cookies", "aceptadas");
    });
});
