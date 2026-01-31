const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";
let resultDisplayed = false;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        handleInput(button.dataset.value);
    });
});

function handleInput(value) {
    if (value === "C") {
        currentInput = "";
        display.innerText = "0";
        return;
    }

    if (value === "=") {
        try {
            currentInput = eval(currentInput).toString();
            display.innerText = currentInput;
            resultDisplayed = true;
        } catch {
            display.innerText = "Error";
            currentInput = "";
        }
        return;
    }

    if (resultDisplayed) {
        currentInput = "";
        resultDisplayed = false;
    }

    currentInput += value;
    display.innerText = currentInput;
}

/* Keyboard Support */
document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (
        (key >= "0" && key <= "9") ||
        key === "+" || key === "-" ||
        key === "*" || key === "/" ||
        key === "."
    ) {
        handleInput(key);
    }

    if (key === "Enter") {
        handleInput("=");
    }

    if (key === "Backspace") {
        currentInput = currentInput.slice(0, -1);
        display.innerText = currentInput || "0";
    }

    if (key.toLowerCase() === "c") {
        handleInput("C");
    }
});
