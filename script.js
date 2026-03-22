// 1. Configura la fecha objetivo (Año, Mes [0-11], Día, Hora, Min, Seg)
const countdownDate = new Date("May 30, 2026 00:00:00").getTime();

const updateTimer = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // 2. Cálculos de tiempo
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // 3. Seleccionamos los números (Usamos la clase .time-box span que está en tu HTML)
    const timerNumbers = document.querySelectorAll(".time-box span");
    
    // 4. Verificamos que existan los elementos y actualizamos
    if (timerNumbers.length >= 4) {
        timerNumbers[0].innerText = days;
        timerNumbers[1].innerText = hours;
        timerNumbers[2].innerText = minutes;
        timerNumbers[3].innerText = seconds;
    }

    // 5. Si el tiempo se agota
    if (distance < 0) {
        clearInterval(updateTimer);
        const countdownContainer = document.querySelector(".countdown");
        if(countdownContainer) {
            countdownContainer.innerHTML = "<h3 style='color:var(--accent);'>¡PROYECTO LANZADO!</h3>";
        }
    }
}, 1000);