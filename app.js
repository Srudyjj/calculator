const calculator = () => {
    const display = document.querySelector(".display");  
    const keys = document.getElementById("keys");
    let formula = [];

    keys.addEventListener("click", (e) => {       
        if (e.target.id === "calculate") {
            const result = eval(formula.join("")) || NaN;
            display.innerHTML = `${result}`;
            formula = [];
            formula.push(result);
        } else if (e.target.id === "clear") {
            display.innerHTML = 0;
            formula = [];
        } else if (e.target.classList.contains("key") && !e.target.classList.contains("equals")) {
            formula.push(e.target.id);
            const result = formula.join("");
            display.innerHTML = `${result}`;  
        };
    })
}


window.onload = calculator();
