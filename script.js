// Promedio / Media aritmetica
function arithmeticMeanCalculator(data) {
  const arraySum = data.reduce((acc, el) => acc + el, 0); //acc = 0
  const average = arraySum / data.length;
  return average;
}

// Mediana
function medianCalculator(data) {
  function isEven(num) {
    if (num % 2 === 0) {
      return true;
    } else {
      return false;
      //¿Por que no funciona con ternary?
    }
  }

  const orderedData = data.sort((a, b) => a - b);

  const arrayHalf = parseInt(orderedData.length / 2);

  if (isEven(data.length)) {
    const el1 = orderedData[arrayHalf - 1];
    const el2 = orderedData[arrayHalf];

    const el1andel2Average = arithmeticMeanCalculator([el1, el2]);

    return el1andel2Average;
  } else {
    return data[arrayHalf];
  }
}

// Moda
function modeCalculator(data) {
  const countedData = {};
  data.map((el) => {
    if (countedData[el]) {
      countedData[el] += 1;
    } else {
      countedData[el] = 1;
    }
  });

  console.log(countedData);

  const newArray = Object.entries(countedData).sort(
    (elA, elB) => elA[1] - elB[1]
  );

  console.log(newArray);

  const mode = newArray[newArray.length - 1];

  console.log(mode);

  return `El ${mode[0]}, se repite ${mode[1]} veces`;
}

//-----HTML CONNECTION-------

function mean() {
  const input = document.getElementById("meanInput");
  const inputToString = input.value;
  const inputToArray = inputToString.split(",").map((n) => {
    return parseInt(n);
  });
  const meanCalculation = arithmeticMeanCalculator(inputToArray);
  const result = document.getElementById("meanResult");

  result.textContent = meanCalculation;
}

function meadian() {
  const input = document.getElementById("medianInput");
  const inputToString = input.value;
  const inputToArray = inputToString.split(",").map((n) => {
    return parseInt(n);
  });
  const medianCalculation = medianCalculator(inputToArray);
  const result = document.getElementById("medianResult");

  result.textContent = medianCalculation;
}

function mode() {
  const input = document.getElementById("modeInput");
  const inputToString = input.value;
  console.log(inputToString);
  const inputToArray = inputToString.split(","); /*.map((n) => {
  //   return parseInt(n);
  // });*/
  const modeCalculation = modeCalculator(inputToArray);
  const result = document.getElementById("modeResult");

  result.textContent = modeCalculation;
}
