const traiangleBtn = document.getElementById('traiangleBtn') as HTMLButtonElement;

traiangleBtn.addEventListener('click', (e) => {
  const baseInput = document.getElementById('traiangleB') as HTMLInputElement | null;
  const heightInput = document.getElementById('triangleH') as HTMLInputElement | null;

  if (baseInput && heightInput) {
    const base = parseFloat(baseInput.value);
    const height = parseFloat(heightInput.value);

    if (!isNaN(base) && base > 0 && !isNaN(height) && height > 0) {
      const triangleArea = 0.5 * base * height;
      console.log("Triangle area:", triangleArea);
      // You can display the result to the user here
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
    console.log(rectangleResult)
  }
  else {
    alert('please inter a number!')
  }
})


// Parallelogram
document.getElementById('ParallelogramBtn')?.addEventListener('click', () => {
  const Binput = document.getElementById('parallelogramB') as HTMLInputElement
  const Hinput = document.getElementById('parallelogramH') as HTMLInputElement
  const wValue = parseFloat(Binput.value);
  const IValue = parseFloat(Hinput.value);
  if (wValue > 0 && IValue > 0) {
    const ParallelogramResult = wValue * IValue;
    console.log(ParallelogramResult)
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
    console.log(RhombusResult)
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
    console.log(PentagonResult)
  }
  else {
    alert('please inter a number!')
  }
})

// Ellipse
document.getElementById('EllipseBtn')?.addEventListener('click', () => {
  const ellipseA = document.getElementById('ellipseA') as HTMLInputElement
  const ellipseB = document.getElementById('ellipseB') as HTMLInputElement
  const avalue = parseFloat(ellipseA.value);
  const ellipBvalue = parseFloat(ellipseB.value);
  if (avalue > 0 && ellipBvalue > 0) {
    const Ellipse = 3.1413 * avalue * ellipBvalue;
    console.log(Ellipse)
  }
  else {
    alert('please inter a number!')
  }
})