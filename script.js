/* 
1. Lag først et array som har 100 tilfeldige tall i seg (tall mellom 1 og 100000). 
Bruk loop for å generere dette. Dette arrayet brukes videre i oppgaven. 
Du skal med andre ord ikke skrive 100 forskjellige tall selv i et array, men generere det med loops.
*/
//Kode her:

let randomNumbers = [];
for (let i = 0; i < 100; i++) {
  randomNumbers.push(Math.floor(Math.random() * 100000) + 1);
}

console.log(randomNumbers);

/* 
2. lag en funksjon som bruker array metoden .filter til å filtrere ut oddetall og partall. 
funksjonen skal returnere ut et nytt array hvor oddetall og partall er delt opp 
(tips: returner odds og evens som et object).

sånn her burde konsollen se ut (kun brukt 10 tilfeldige tall her for at det ikke skal bli så langt):

{odds: Array(8), evens: Array(2)}
        evens: Array(2)
          0: 63316
          1: 37426
          length: 2
      [[Prototype]]: Array(0)
        odds: Array(8)
          0: 823
          1: 90203
          2: 66723
          3: 81841
          4: 2397
          5: 67267
          6: 29847
          7: 18233
          length: 8
     [[Prototype]]: Array(0)
[[Prototype]]: Object
*/
//Kode her:
let oddsEvens = [
  {
    odds: [
      randomNumbers.filter(function (number) {
        return number % 2 !== 0;
      }),
    ],
    evens: [
      randomNumbers.filter(function (number) {
        return number % 2 === 0;
      }),
    ],
  },
];

console.log(oddsEvens);

/* 
3. konsoll logg antall oddetall og partall med å referere
 til .length. (tips: const {odds, evens} = .......)
*/
//Kode her:
console.log(`odds: ${oddsEvens[0].odds[0].length} 
evens: ${oddsEvens[0].evens[0].length}`);

/* 
4. konsoll logg summen av alle oddetall og konsoll logg summen av alle partall (altså separat)
*/
//Kode her:
function sumOfArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}
console.log(`Sum of odds: ${sumOfArray(oddsEvens[0].odds[0])}`);
console.log(`Sum of evens: ${sumOfArray(oddsEvens[0].evens[0])}`);

/*
5. konsoll log hvilken av de 2 summene i oppgave 4 som er størst
*/
//Kode her:
const largestSum =
  sumOfArray(oddsEvens[0].odds[0]) > sumOfArray(oddsEvens[0].evens[0])
    ? "Sum of odds is largest"
    : "Sum of evens is largest";
console.log(largestSum);

/*
6. finn differansen mellom odds og evens (største - minste). Konsoll logg resultatet
*/
//Kode her:

const sumDiffrence = () => {
  return (
    Math.max(
      sumOfArray(oddsEvens[0].odds[0]),
      sumOfArray(oddsEvens[0].evens[0])
    ) -
    Math.min(
      sumOfArray(oddsEvens[0].odds[0]),
      sumOfArray(oddsEvens[0].evens[0])
    )
  );
};

console.log(`Sum diffrence: ${sumDiffrence()}`);

/*
7.  bruk conditionals for å konsoll logge ut en setning som forteller hvilken 
sum som er størst og hvilken som er minst. Ta med antall odds og even i stringen 
som konsoll logges ut. Eks på hva som kan vises:
*/
//Kode her:

const sumAndLength =
  sumOfArray(oddsEvens[0].odds[0]) > sumOfArray(oddsEvens[0].evens[0])
    ? `Odds is largest with ${sumOfArray(oddsEvens[0].odds[0])} and ${
        oddsEvens[0].odds[0].length
      } numbers`
    : `Evens is largest with ${sumOfArray(oddsEvens[0].evens[0])} and ${
        oddsEvens[0].evens[0].length
      } numbers`;
console.log(sumAndLength);

// 8. Få ut dataene på nettsiden med DOM
const ctx = document.getElementById("sumChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Odds", `Evens`, `Diffrence`],
    datasets: [
      {
        label: "Sum",
        data: [
          sumOfArray(oddsEvens[0].odds[0]),
          sumOfArray(oddsEvens[0].evens[0]),
          sumDiffrence(),
        ],
        backgroundColor: [`rgba(54, 162, 235, 1)`, `rgba(255, 99, 132, 1)`, `rgba(55, 150, 200, 0.8)`],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Sum of odds and evens",
      },
    },
  },
});

const ctx2 = document.getElementById("lengthChart");

new Chart(ctx2, {
  type: "pie",
  data: {
    labels: ["Odds", `Evens`],
    datasets: [
      {
        label: "Length",
        data: [oddsEvens[0].odds[0].length, oddsEvens[0].evens[0].length],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Number of odds and evens",
      },
    },
  },
});
