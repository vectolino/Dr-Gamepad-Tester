// script.js
window.addEventListener("gamepadconnected", (event) => {
    const gamepad = event.gamepad;
    document.getElementById("status").innerText = `Gamepad conectado: ${gamepad.id}`;
    updateGamepadInfo(gamepad);
});

window.addEventListener("gamepaddisconnected", () => {
    document.getElementById("status").innerText = "Gamepad desconectado.";
});

function updateGamepadInfo(gamepad) {
    const buttonsList = document.getElementById("buttons");
    const axesList = document.getElementById("axes");

    function renderGamepadState() {
        const gamepad = navigator.getGamepads()[gamepad.index];

        // Mostrar botones
        buttonsList.innerHTML = '';
        gamepad.buttons.forEach((button, index) => {
            const li = document.createElement('li');
            li.textContent = `Botón ${index}: ${button.pressed ? 'Presionado' : 'Liberado'} (Valor: ${button.value.toFixed(2)})`;
            li.style.backgroundColor = button.pressed ? '#4caf50' : '#ddd';
            buttonsList.appendChild(li);
        });

        // Mostrar ejes (joysticks)
        axesList.innerHTML = '';
        gamepad.axes.forEach((axis, index) => {
            const li = document.createElement('li');
            li.textContent = `Eje ${index}: ${axis.toFixed(2)}`;
            li.style.backgroundColor = Math.abs(axis) > 0.1 ? '#4caf50' : '#ddd';
            axesList.appendChild(li);
        });

        requestAnimationFrame(renderGamepadState);
    }

    renderGamepadState();
}
