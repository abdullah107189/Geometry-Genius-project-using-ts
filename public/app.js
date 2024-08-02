"use strict";
var _a, _b, _c, _d, _e;
const traiangleBtn = document.getElementById('traiangleBtn');
traiangleBtn.addEventListener('click', (e) => {
    const baseInput = document.getElementById('traiangleB');
    const heightInput = document.getElementById('triangleH');
    if (baseInput && heightInput) {
        const base = parseFloat(baseInput.value);
        const height = parseFloat(heightInput.value);
        if (!isNaN(base) && base > 0 && !isNaN(height) && height > 0) {
            const triangleArea = 0.5 * base * height;
            console.log("Triangle area:", triangleArea);
            // You can display the result to the user here
        }
        else {
            alert("Error: Please enter valid numbers for base and height.");
        }
    }
    else {
        console.error("Error: Input elements not found");
        // Display an error message to the user
    }
});
// rectangle result 
(_a = document.getElementById('rectangleBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    const Binput = document.getElementById('rectangleW');
    const Hinput = document.getElementById('rectangleI');
    const wValue = parseFloat(Binput.value);
    const IValue = parseFloat(Hinput.value);
    if (wValue > 0 && IValue > 0) {
        const rectangleResult = wValue * IValue;
        console.log(rectangleResult);
    }
    else {
        alert('please inter a number!');
    }
});
// Parallelogram
(_b = document.getElementById('ParallelogramBtn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
    const Binput = document.getElementById('parallelogramB');
    const Hinput = document.getElementById('parallelogramH');
    const wValue = parseFloat(Binput.value);
    const IValue = parseFloat(Hinput.value);
    if (wValue > 0 && IValue > 0) {
        const ParallelogramResult = wValue * IValue;
        console.log(ParallelogramResult);
    }
    else {
        alert('please inter a number!');
    }
});
// Rhombus
(_c = document.getElementById('RhombusBtn')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => {
    const d1input = document.getElementById('rhombusd1');
    const d2input = document.getElementById('rhombusd2');
    const d1value = parseFloat(d1input.value);
    const d2value = parseFloat(d2input.value);
    if (d1value > 0 && d2value > 0) {
        const RhombusResult = 0.5 * d1value * d2value;
        console.log(RhombusResult);
    }
    else {
        alert('please inter a number!');
    }
});
// Pentagon
(_d = document.getElementById('PentagonBtn')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', () => {
    const pInput = document.getElementById('pentagonP');
    const bInput = document.getElementById('pentagonB');
    const pvalue = parseFloat(pInput.value);
    const bvalue = parseFloat(bInput.value);
    if (pvalue > 0 && bvalue > 0) {
        const PentagonResult = 0.5 * pvalue * bvalue;
        console.log(PentagonResult);
    }
    else {
        alert('please inter a number!');
    }
});
// Ellipse
(_e = document.getElementById('EllipseBtn')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', () => {
    const ellipseA = document.getElementById('ellipseA');
    const ellipseB = document.getElementById('ellipseB');
    const avalue = parseFloat(ellipseA.value);
    const ellipBvalue = parseFloat(ellipseB.value);
    if (avalue > 0 && ellipBvalue > 0) {
        const Ellipse = 3.1413 * avalue * ellipBvalue;
        console.log(Ellipse);
    }
    else {
        alert('please inter a number!');
    }
});
