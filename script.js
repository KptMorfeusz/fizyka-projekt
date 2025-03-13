const questions = {
  easy: [
      {
          question: "Jakie jest prawo Ohma?",
          answers: { A: "U = I × R", B: "U = R - I", C: "U = I / R", D: "U = I + R" },
          correct: "A"
      },
      {
          question: "Jaką jednostką mierzymy natężenie prądu?",
          answers: { A: "Amper (A)", B: "Niuton (N)", C: "Joule (J)", D: "Volt (V)" },
          correct: "A"
      },
      {
          question: "Jaką jednostką mierzymy napięcie prądu?",
          answers: { A: "Volt (V)", B: "Wat (W)", C: "Joule (J)", D: "Amper (A)" },
          correct: "A"
      },
      {
          question: "Ile wynosi przyspieszenie ziemskie?",
          answers: { A: "9.8 m/s²", B: "10 m/s²", C: "8.5 m/s²", D: "9.0 m/s²" },
          correct: "A"
      },
      {
          question: "Jaką jednostką mierzymy masę?",
          answers: { A: "Kilogram (kg)", B: "Niuton (N)", C: "Wat (W)", D: "Metr (m)" },
          correct: "A"
      },
      {
          question: "Jak nazywa się zjawisko powstawania cienia za przeszkodą?",
          answers: { A: "Prostoliniowe rozchodzenie się światła", B: "Dyfrakcja", C: "Załamanie", D: "Odbicie" },
          correct: "A"
      },
      {
          question: "Co mierzymy w niutonach (N)?",
          answers: { A: "Siłę", B: "Moc", C: "Pracę", D: "Temperaturę" },
          correct: "A"
      },
      {
        question: "Co to jest siła?",
        answers: { A: "Oddziaływanie, które zmienia ruch ciała", B: "Właściwość ciał do bycia w spoczynku", C: "Ciało, które porusza się", D: "Równanie ruchu" },
        correct: "A"
      },

  ],
  medium: [
      {
          question: "Co to jest praca w fizyce?",
          answers: { A: "Siła razy przemieszczenie", B: "Siła razy czas", C: "Siła razy prędkość", D: "Siła podzielona przez przemieszczenie" },
          correct: "A"
      },
      {
          question: "Jaką jednostką mierzymy moc?",
          answers: { A: "Wat (W)", B: "Niuton (N)", C: "Joule (J)", D: "Pascal (Pa)" },
          correct: "A"
      },
      {
          question: "Jak nazywa się prawo mówiące, że ciśnienie wywierane na ciecz lub gaz rozchodzi się we wszystkich kierunkach jednakowo?",
          answers: { A: "Prawo Pascala", B: "Prawo Archimedesa", C: "Pierwsza zasada dynamiki", D: "Zasada zachowania energii" },
          correct: "A"
      },
      {
        question: "Jaką jednostką mierzymy prędkość?",
        answers: { A: "Metry na sekundę (m/s)", B: "Kilogramy", C: "Metry", D: "Joule" },
        correct: "A"
      },
      {
        question: "Czym jest energia?",
        answers: { A: "Zdolność ciała do wykonywania pracy", B: "Właściwość ciał do poruszania się", C: "Siła działająca na ciało", D: "Czas potrzebny do wykonania pracy" },
        correct: "A"
      },
      {
          question: "Jak brzmi pierwsza zasada dynamiki Newtona?",
          answers: { A: "Ciało pozostaje w spoczynku lub porusza się jednostajnie prostoliniowo, jeśli siły działające na nie się równoważą", B: "Każdej akcji towarzyszy reakcja o równej wartości i przeciwnym kierunku ", C: "Przyspieszenie ciała jest proporcjonalne do siły działającej na nie ", D: "Energia w układzie zamkniętym nie ulega zmianie" },
          correct: "A"
      },
      {
          question: "Która forma energii jest energią kinetyczną?",
          answers: { A: "Energia wiatru poruszającego wiatrak", B: "Energia słoneczna", C: "Energia zawarta w paliwie", D: "Energia elektryczna w baterii" },
          correct: "A"
      },
      {
          question: "Jeśli podwajamy prędkość poruszającego się ciała, jego energia kinetyczna?",
          answers: { A: "zwiększa się 4 razy", B: "zwiększa się 2 razy", C: "nie zmienia się", D: "maleje o połowę" },
          correct: "A"
      },
      {
          question: "Jak nazywa się siła przyciągania ciał przez Ziemię?",
          answers: { A: "siła grawitacji", B: "siła elektrostatyczna", C: "siła wyporu", D: "siła tarcia" },
          correct: "A"
      },
      {
          question: "Co stanie się z ciężarem ciała na Księżycu w porównaniu do Ziemi?",
          answers: { A: "Zmniejszy się 6 razy", B: "Zwiększy się 6 razy", C: "Nie zmieni się", D: "Zmniejszy się 2 razy" },
          correct: "A"
      },
  ],
  hard: [
      {
          question: "Ile wynosi prędkość światła w próżni?",
          answers: { A: "3 × 10⁸ m/s", B: "3 × 10⁷ m/s", C: "1 × 10⁸ m/s", D: "1 × 10⁷ m/s" },
          correct: "A"
      },
      {
          question: "Jakie zjawisko odpowiada za powstawanie tęczy?",
          answers: { A: "Załamanie i odbicie światła", B: "Dyfrakcja", C: "Absorpcja", D: "Rozpraszanie" },
          correct: "A"
      },
      {
          question: "Jakie ciśnienie panuje w próżni?",
          answers: { A: "0 Pa", B: "101,3 kPa", C: "1 atm", D: "760 mm Hg" },
          correct: "A"
      },
      {
          question: "Jaka siła działa na cząstkę obdarzoną ładunkiem elektrycznym, poruszającą się w polu elektromagnetycznym?",
          answers: { A: "Siła Lorentza", B: "Siła grawitacji", C: "Siła wyporu", D: "Siła tarcia" },
          correct: "A"
      },
      {
          question: "Co jest nośnikiem ładunku elektrycznego w metalu?",
          answers: { A: "elektrony", B: "neutrony", C: "jony ujemne", D: "jony dodatnie" },
          correct: "A"
      },
      {
          question: "Co dzieje się z ciałem, gdy zwiększamy jego temperaturę?",
          answers: { A: "Może się rozszerzać lub kurczyć", B: "Zmienia stan skupienia", C: "Zawsze zwiększa swoją objętość", D: "Zawsze zmniejsza swoją objętość" },
          correct: "A"
      },
  ]
};

const prizeLevels = [
  "500 zł", "1 000 zł", "2 000 zł", "5 000 zł",
  "10 000 zł", "20 000 zł", "40 000 zł", "75 000 zł",
  "125 000 zł", "250 000 zł", "500 000 zł", "1 000 000 zł"
];

let currentLevel = 1;
let score = 0;
let usedPhoneAFriend = false;
let currentQuestion = null;

document.addEventListener("DOMContentLoaded", () => {
  createPrizeTable();
  displayQuestion();
});

function createPrizeTable() {
  const table = document.createElement("table");
  table.id = "prize-table";
  table.style.position = "absolute";
  table.style.right = "20px";
  table.style.top = "50px";
  table.style.border = "2px solid black";
  table.style.padding = "10px";
  table.style.backgroundColor = "#f8f9fa";
  table.style.fontFamily = "Arial, sans-serif";
  table.style.fontSize = "25px";
  
  document.body.appendChild(table);

  for (let i = 11; i >= 0; i--) {
      let row = table.insertRow();
      row.id = `level-${i + 1}`;
      let cell = row.insertCell();
      cell.textContent = `Pytanie ${i + 1}: ${prizeLevels[i]}`;
      cell.style.padding = "10px";
      cell.style.borderBottom = "1px solid #ccc";
      cell.style.textAlign = "center";
      cell.style.fontWeight = i === 1 || i === 6 || i === 11 ? "bold" : "normal";
  }
  updatePrizeTable();
}

function updatePrizeTable() {
  for (let i = 1; i <= 12; i++) {
      let row = document.getElementById(`level-${i}`);
      if (row) {
          row.style.backgroundColor = "";
      }
  }
  let currentRow = document.getElementById(`level-${currentLevel}`);
  if (currentRow) {
      currentRow.style.backgroundColor = "lightgreen";
  }
}

function getRandomQuestion(difficulty) {
  const questionsList = questions[difficulty];
  
  // Losowanie pytania i usunięcie go z listy
  const randomIndex = Math.floor(Math.random() * questionsList.length);
  const selectedQuestion = questionsList[randomIndex];
  questions[difficulty].splice(randomIndex, 1); // Usunięcie pytania z listy
  
  return selectedQuestion;
}

function displayQuestion() {
  let difficulty = currentLevel <= 4 ? 'easy' : currentLevel <= 8 ? 'medium' : 'hard';
  currentQuestion = getRandomQuestion(difficulty);
  document.getElementById('question-text').textContent = `Pytanie ${currentLevel}: ${currentQuestion.question}`;
  
  const buttons = document.querySelectorAll('.answer-btn');
  let answerEntries = Object.entries(currentQuestion.answers);
  answerEntries.sort(() => Math.random() - 0.5);
  
  answerEntries.forEach(([key, text], index) => {
      buttons[index].textContent = text;
      buttons[index].onclick = () => checkAnswer(key, currentQuestion.correct);
  });
  updatePrizeTable();
}

function checkAnswer(selectedAnswer, correctAnswer) {
  if (selectedAnswer === correctAnswer) {
      score += 10;
      if (currentLevel < 12) {
          currentLevel++;
          displayQuestion();
      } else {
          endGame();
      }
  } else {
      endGame(false);
  }
}

function endGame(isWin = true) {
  alert(isWin ? `Gratulacje! Wygrałeś ${prizeLevels[11]}!` : `Niestety, przegrałeś. Twój wynik: ${prizeLevels[currentLevel - 2] || '0 zł'}.`);
  document.getElementById('question-container').style.display = 'none';
  document.getElementById('question-text').style.display = 'none';
  document.getElementById('final-result').style.display = 'inline';
  document.getElementById('phoneAFriend').style.display = 'none';
}

function restartGame() {
  currentLevel = 1;
  score = 0;
  usedPhoneAFriend = false;
  location.reload();
}

function usePhoneAFriend() {
  if (usedPhoneAFriend) return;
  usedPhoneAFriend = true;
  alert(`Twój towarzysz sugeruje: ${currentQuestion.answers[currentQuestion.correct]}`);
  document.getElementById('phoneAFriend').disabled = true;
}