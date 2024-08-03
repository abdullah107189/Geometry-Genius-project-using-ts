"use strict";
var _a, _b, _c, _d, _e;
const traiangleBtn = document.getElementById('traiangleBtn');
traiangleBtn.addEventListener('click', (e) => {
    const baseInput = document.getElementById('traiangleB');
    const heightInput = document.getElementById('triangleH');
    const tbody = document.getElementById('tbody');
    if (baseInput && heightInput && tbody) {
        const base = parseFloat(baseInput.value);
        const height = parseFloat(heightInput.value);
        if (!isNaN(base) && base > 0 && !isNaN(height) && height > 0) {
            const triangleArea = 0.5 * base * height;
            output('Triangle', triangleArea);
            baseInput.value = "";
            heightInput.value = "";
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
        output('Rectangle', rectangleResult);
        Binput.value = "";
        Hinput.value = "";
    }
    else {
        alert('please inter a number!');
    }
});
// Parallelogram
(_b = document.getElementById('ParallelogramBtn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
    const paraBInput = document.getElementById('parallelogramB');
    const paraHInput = document.getElementById('parallelogramH');
    const wValue = parseFloat(paraBInput.value);
    const IValue = parseFloat(paraHInput.value);
    if (wValue > 0 && IValue > 0) {
        const ParallelogramResult = wValue * IValue;
        output("Parallelogram", ParallelogramResult);
        paraBInput.value = "";
        paraHInput.value = "";
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
        output('Rhombus', RhombusResult);
        d1input.value = '';
        d2input.value = '';
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
        output('Rhombus', PentagonResult);
        pInput.value = "";
        bInput.value = "";
    }
    else {
        alert('please inter a number!');
    }
});
// Ellipse
(_e = document.getElementById('EllipseBtn')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', () => {
    const ellipseA = document.getElementById('ellipseA');
    const ellipseB = document.getElementById('ellipseB');
    let avalue = parseFloat(ellipseA.value);
    let ellipBvalue = parseFloat(ellipseB.value);
    if (avalue > 0 && ellipBvalue > 0) {
        const Ellipse = 3.1413 * avalue * ellipBvalue;
        output('Rhombus', Ellipse);
        ellipseA.value = '';
        ellipseB.value = '';
    }
    else {
        alert('please inter a number!');
    }
});
const output = (name, result) => {
    var _a;
    const resultRow = document.createElement('tr');
    resultRow.innerHTML = `
      <td class="border md:p-1 p-2">${name}</td>
      <td class="border md:p-1 p-2">${result}cm<sup>2</sup></td>
      <td class="border md:p-1 p-2" onclick="m2()"><button class="px-1 rounded-md border-0 bg-sky-500 text-white w-full">m<sup>2</sup></button></td>
      <td class="flex justify-center items-center border border-l-0 border-t-0 p-2">
        <button class="p-1 rounded-full hover:bg-sky-600 hover:text-white flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </td>
  `;
    (_a = document.getElementById('tbody')) === null || _a === void 0 ? void 0 : _a.appendChild(resultRow);
};
// random color generate 
const generateColor = () => {
    const r = Math.floor(Math.random() * 256); // Generate a random number between 0 and 255
    const g = Math.floor(Math.random() * 256); // Generate a random number between 0 and 255
    const b = Math.floor(Math.random() * 256); // Generate a random number between 0 and 255
    return (`rgb(${r},${g},${b})`);
};
const cards = document.querySelectorAll('.geometry-card');
cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.backgroundColor = generateColor();
    });
    card.addEventListener('mouseout', () => {
        card.style.backgroundColor = '';
    });
});
