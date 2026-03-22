// Configura la fecha objetivo (Año, Mes [0-11], Día, Hora, Min, Seg)
const countdownDate = new Date("May 30, 2026 00:00:00").getTime();

const updateTimer = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Cálculos de tiempo para Días, Horas, Minutos y Segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Seleccionamos los números dentro de las cajas del contador
    const timerNumbers = document.querySelectorAll(".time-box span");
    
    if (timerNumbers.length >= 4) {
        timerNumbers[0].innerText = days;
        timerNumbers[1].innerText = hours;
        timerNumbers[2].innerText = minutes;
        timerNumbers[3].innerText = seconds;
    }

    // Si el tiempo se agota
    if (distance < 0) {
        clearInterval(updateTimer);
        document.querySelector(".countdown").innerHTML = "<h3>¡PROYECTO LANZADO!</h3>";
    }
}, 1000);