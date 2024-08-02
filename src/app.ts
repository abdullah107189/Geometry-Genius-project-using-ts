const traiangleBtn = document.getElementById('traiangleBtn') as HTMLButtonElement;

traiangleBtn.addEventListener('click', (e) => {
  const baseInput = document.getElementById('traiangleB') as HTMLInputElement | null;
  const heightInput = document.getElementById('triangleH') as HTMLInputElement | null;
  const tbody = document.getElementById('tbody') as HTMLTableSectionElement | null;

  if (baseInput && heightInput && tbody) {
    const base = parseFloat(baseInput.value);
    const height = parseFloat(heightInput.value);

    if (!isNaN(base) && base > 0 && !isNaN(height) && height > 0) {
      const triangleArea = 0.5 * base * height;
      output('Triangle', triangleArea)
      // baseInput.value = ""
      // heightInput.value = ""
    } else {
      alert("Error: Please enter valid numbers for base and height.");
    }
  } else {
    console.error("Error: Input elements not found");
    // Display an error message to the user
  }
});

// rectangle result 
document.getElementById('rectangleBtn')?.addEventListener('click', () => {
  const Binput = document.getElementById('rectangleW') as HTMLInputElement
  const Hinput = document.getElementById('rectangleI') as HTMLInputElement
  const wValue = parseFloat(Binput.value);
  const IValue = parseFloat(Hinput.value);
  if (wValue > 0 && IValue > 0) {
    const rectangleResult = wValue * IValue;
    output('Rectangle', rectangleResult)
    Binput.value = ""
    Hinput.value = ""
  }
  else {
    alert('please inter a number!')
  }
})


// Parallelogram
document.getElementById('ParallelogramBtn')?.addEventListener('click', () => {
  const paraBInput = document.getElementById('parallelogramB') as HTMLInputElement
  const paraHInput = document.getElementById('parallelogramH') as HTMLInputElement
  const wValue = parseFloat(paraBInput.value);
  const IValue = parseFloat(paraHInput.value);
  if (wValue > 0 && IValue > 0) {
    const ParallelogramResult = wValue * IValue;
    output("Parallelogram", ParallelogramResult)
    paraBInput.value = ""
    paraHInput.value = ""
  }
  else {
    alert('please inter a number!')
  }
})
// Rhombus
document.getElementById('RhombusBtn')?.addEventListener('click', () => {
  const d1input = document.getElementById('rhombusd1') as HTMLInputElement
  const d2input = document.getElementById('rhombusd2') as HTMLInputElement
  const d1value = parseFloat(d1input.value);
  const d2value = parseFloat(d2input.value);
  if (d1value > 0 && d2value > 0) {
    const RhombusResult = 0.5 * d1value * d2value;
    output('Rhombus', RhombusResult)
    d1input.value = ''
    d2input.value = ''
  }
  else {
    alert('please inter a number!')
  }
})

// Pentagon
document.getElementById('PentagonBtn')?.addEventListener('click', () => {
  const pInput = document.getElementById('pentagonP') as HTMLInputElement
  const bInput = document.getElementById('pentagonB') as HTMLInputElement
  const pvalue = parseFloat(pInput.value);
  const bvalue = parseFloat(bInput.value);
  if (pvalue > 0 && bvalue > 0) {
    const PentagonResult = 0.5 * pvalue * bvalue;
    output('Rhombus', PentagonResult)
    pInput.value = ""
    bInput.value = ""
  }
  else {
    alert('please inter a number!')
  }
})

// Ellipse
document.getElementById('EllipseBtn')?.addEventListener('click', () => {
  const ellipseA = document.getElementById('ellipseA') as HTMLInputElement
  const ellipseB = document.getElementById('ellipseB') as HTMLInputElement
  let avalue = parseFloat(ellipseA.value);
  let ellipBvalue = parseFloat(ellipseB.value);
  if (avalue > 0 && ellipBvalue > 0) {
    const Ellipse = 3.1413 * avalue * ellipBvalue;
    output('Rhombus', Ellipse)
    ellipseA.value = ''
    ellipseB.value = ''
  }
  else {
    alert('please inter a number!')
  }
})

const output = (name: string, result: number) => {
  const resultRow = document.createElement('tr')
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
  document.getElementById('tbody')?.appendChild(resultRow)
}