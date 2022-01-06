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

  return `La moda es el número ${mode[0]}, se repite ${mode[1]} veces`;
}

// Media aritmetica ponderada
function ponderedArithmeticMeanCalculator(data) {
  const weight = notes.map((notes) => notes.note * notes.credit);

  const weightSum = weight.reduce((acc, el) => acc + el, 0);

  const credits = notes.map((notes) => notes.credit);

  const creditsSum = credits.reduce((acc, el) => acc + el, 0);

  const ponderedMean = weightSum / creditsSum;

  return ponderedMean;
}

const notes = [
  {
    course: "Educacion Fisica",
    note: 10,
    credit: 2,
  },
  {
    course: "Programación",
    note: 8,
    credit: 5,
  },
  {
    course: "Finanzas Personales",
    note: 7,
    credit: 5,
  },
];

//Media armónica (Velocidad)
function harmonicMeanCalculator(data) {
  const n = Object.keys(data).length;

  const reverse = Object.values(data).map((el) => 1 / el);

  const reverseSum = reverse.reduce((acc, el) => acc + el, 0);

  const h = n / reverseSum;

  return h;
}

const workGroup = {
  worker1: 10, // 10 min per toy
  worker2: 6,
  worker3: 15,
  worker4: 4,
};

//Media cuadratica(la media mas grande)
function cuadraticMeanCalculator(data) {
  const n = data.length;

  const squared = data.map((el) => el ** 2);

  const squaredSum = squared.reduce((acc, el) => acc + el, 0);

  const division = squaredSum / n;

  const squareMean = Math.sqrt(division);

  return squareMean;
}

//Media Geometrica(Valoracion de porcentajes y frecuencias relativas"finanzas")
function geometricMeanCalculator(data) {
  const n = data.length;

  const mult = data.reduce((acc, el) => acc * el);

  const root = 1 / n;

  const geometricMean = mult ** root;

  return geometricMean;
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

// function getData() {
//   class Notes {
//     constructor(course, note, credit) {
//       this.course = course;
//       this.note = note;
//       this.credit = credit;
//     }
//   }

//   let course = document.getElementById("courseInput").value;
//   let note = document.getElementById("noteInput").value;
//   let credit = document.getElementById("creditInput").value;

//   newNotes = new Notes(course, note, credit);

//   addData();

//   document.getElementById("courseInput").value = "";
//   document.getElementById("noteInput").value = "";
//   document.getElementById("creditInput").value = "";
// }

// function addData() {
//   let notesData = [];
//   notesData.push(newNotes);
//   document.getElementById("table").innerHTML +=
//     "<tbody><td>" +
//     newNotes.course +
//     "</td><td>" +
//     newNotes.note +
//     "</td><td>" +
//     newNotes.credit +
//     "</td></tbody>";
// }

// function ponderedArithmeticMean() {
//   result = ponderedArithmeticMeanCalculator(notesData);
//   document.getElementById("ponderedArithmeticMeanResult");
//   result.textContent = result;
// }

f;
