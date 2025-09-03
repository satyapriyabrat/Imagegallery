let display = document.getElementById("display");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// ✅ Keyboard support
document.addEventListener("keydown", (event) => {
  if (!isNaN(event.key) || "+-*/.%".includes(event.key)) {
    append(event.key);
  } else if (event.key === "Enter") {
    calculate();
  } else if (event.key === "Backspace") {
    backspace();
  } else if (event.key === "Escape") {
    clearDisplay();
  }
});
