const questions = {
  level_one: [
    {
      question: "Jaką jednostką mierzymy natężenie prądu?",
      answers: {
        A: "Amper (A)",
        B: "Niuton (N)",
        C: "Joule (J)",
        D: "Volt (V)",
      },
      correct: "A",
    },
    {
      question: "Jaką jednostką mierzymy napięcie prądu?",
      answers: { A: "Volt (V)", B: "Wat (W)", C: "Joule (J)", D: "Amper (A)" },
      correct: "A",
    },
    {
      question: "Ile wynosi przyspieszenie ziemskie?",
      answers: { A: "9.8 m/s²", B: "10 m/s²", C: "8.5 m/s²", D: "9.0 m/s²" },
      correct: "A",
    },
    {
      question: "Jak nazywa się zjawisko powstawania cienia za przeszkodą?",
      answers: {
        A: "Prostoliniowe rozchodzenie się światła",
        B: "Dyfrakcja",
        C: "Załamanie",
        D: "Odbicie",
      },
      correct: "A",
    },
    {
      question: "Co mierzymy w niutonach (N)?",
      answers: { A: "Siłę", B: "Moc", C: "Pracę", D: "Temperaturę" },
      correct: "A",
    },
    {
      question: "Co to jest siła?",
      answers: {
        A: "Oddziaływanie, które zmienia ruch ciała",
        B: "Właściwość ciał do bycia w spoczynku",
        C: "Ciało, które porusza się",
        D: "Równanie ruchu",
      },
      correct: "A",
    },
    {
      question: "Jaka jest jednostka masy w układzie SI?",
      answers: {
        A: "Gram",
        B: "Kilogram",
        C: "Funt",
        D: "Newton",
      },
      correct: "B",
    },
    {
      question: "Jaka jest jednostka siły w układzie SI?",
      answers: {
        A: "Joule",
        B: "Newton",
        C: "Kilogram",
        D: "Watt",
      },
      correct: "B",
    },
    {
      question: "Jaka jest jednostka prędkości w układzie SI?",
      answers: {
        A: "Metry na sekundę",
        B: "Kilometry na godzinę",
        C: "Metry",
        D: "Sekundy",
      },
      correct: "A",
    },
    {
      question: "Czym jest przyspieszenie?",
      answers: {
        A: "Zmiana prędkości w jednostce czasu",
        B: "Zmiana kierunku ruchu",
        C: "Siła działająca na ciało",
        D: "Szybkość ruchu ciała",
      },
      correct: "A",
    },
    {
      question: "Czym jest prędkość średnia?",
      answers: {
        A: "Całkowita droga podzielona przez czas",
        B: "Zmiana drogi w jednostce czasu",
        C: "Prędkość, z jaką porusza się ciało w danej chwili",
        D: "Całkowita droga pokonana przez ciało",
      },
      correct: "A",
    },
    {
      question: "Co to jest ruch jednostajny?",
      answers: {
        A: "Ruch, w którym ciało porusza się z równą prędkością",
        B: "Ruch, w którym przyspieszenie jest stałe",
        C: "Ruch, w którym siła jest stała",
        D: "Ruch, w którym zmienia się kierunek",
      },
      correct: "A",
    },
    {
      question: "Czym jest energia kinetyczna?",
      answers: {
        A: "Energia związana z ruchem ciała",
        B: "Energia związana z temperaturą ciała",
        C: "Energia zgromadzona w ciele",
        D: "Energia wydzielająca się podczas reakcji chemicznych",
      },
      correct: "A",
    },
    {
      question: "Czym jest gęstość?",
      answers: {
        A: "Ilość masy w jednostce objętości",
        B: "Ilość energii w jednostce masy",
        C: "Ilość ciepła w jednostce objętości",
        D: "Ilość materii obiektu fizycznego",
      },
      correct: "A",
    },
    {
      question: "Jaka jednostka gęstości w układzie SI?",
      answers: {
        A: "Kg",
        B: "m³",
        C: "kg/m³",
        D: "N",
      },
      correct: "C",
    },
    {
      question: "Co to jest ciepło?",
      answers: {
        A: "Energia, która przechodzi z jednego ciała do drugiego w wyniku różnicy temperatur",
        B: "Właściwość ciał, która zależy od ich masy",
        C: "Siła działająca na ciało",
        D: "Właściwość ciał, która powoduje ich ruch",
      },
      correct: "A",
    },
    {
      question: "Czym jest praca w fizyce?",
      answers: {
        A: "Energia przekazana ciału lub od niego odebrana w wyniku działania na ciało siłą",
        B: "Energia zgromadzona w ciele",
        C: "Prędkość ciała w jednostce czasu",
        D: "Siła działająca na ciało",
      },
      correct: "A",
    },
    {
      question: "Jaka jest jednostka pracy w układzie SI?",
      answers: {
        A: "Kilogram",
        B: "Joule",
        C: "Newton",
        D: "Watt",
      },
      correct: "B",
    },
    {
      question: "Czym jest moc?",
      answers: {
        A: "Ilość pracy wykonanej w jednostce czasu",
        B: "Ilość energii zgromadzonej w jednostce masy",
        C: "Ilość ciepła przepływającego przez ciało",
        D: "Ilość siły w jednostce objętości",
      },
      correct: "A",
    },
    {
      question: "Jaka jest jednostka mocy w układzie SI?",
      answers: {
        A: "Joule",
        B: "Watt",
        C: "Newton",
        D: "Kilogram",
      },
      correct: "B",
    },
    {
      question: "Czym jest zjawisko załamania światła?",
      answers: {
        A: "Zmiana prędkości światła podczas przechodzenia przez różne ośrodki",
        B: "Odbicie światła od powierzchni",
        C: "Rozpraszanie światła w różnych kierunkach",
        D: "Zmiana kierunku fal",
      },
      correct: "A",
    },
  ],
  level_two: [
    {
      question: "Czym jest amplituda fali?",
      answers: {
        A: "Zasięg fali w przestrzeni",
        B: "Największa odległość, jaką cząsteczki osiągają od pozycji równowagi",
        C: "Czas trwania fali",
        D: "Częstotliwość fali",
      },
      correct: "B",
    },
    {
      question: "Co to jest częstotliwość fali?",
      answers: {
        A: "Liczba drgań w jednostce czasu",
        B: "Odległość między dwoma kolejnymi szczytami fali",
        C: "Siła generująca falę",
        D: "Prędkość fali w ośrodku",
      },
      correct: "A",
    },
    {
      question: "Co to jest rezystancja?",
      answers: {
        A: "Opór, który ciała stawiają przepływowi prądu",
        B: "Napięcie między końcami przewodnika",
        C: "Energia potrzebna do przepływu prądu",
        D: "Moc urządzenia",
      },
      correct: "A",
    },
    {
      question: "Jakie jest prawo Ohma?",
      answers: {
        A: "U = I × R",
        B: "U = R - I",
        C: "U = I / R",
        D: "U = I + R",
      },
      correct: "A",
    },
    {
      question: "Co to jest praca w fizyce?",
      answers: {
        A: "Siła razy przemieszczenie",
        B: "Siła razy czas",
        C: "Siła razy prędkość",
        D: "Siła podzielona przez przemieszczenie",
      },
      correct: "A",
    },
    {
      question:
        "Jak nazywa się prawo mówiące, że ciśnienie wywierane na ciecz lub gaz rozchodzi się we wszystkich kierunkach jednakowo?",
      answers: {
        A: "Prawo Pascala",
        B: "Prawo Archimedesa",
        C: "Pierwsza zasada dynamiki",
        D: "Zasada zachowania energii",
      },
      correct: "A",
    },
    {
      question: "Czym jest energia?",
      answers: {
        A: "Zdolność ciała do wykonywania pracy",
        B: "Właściwość ciał do poruszania się",
        C: "Siła działająca na ciało",
        D: "Czas potrzebny do wykonania pracy",
      },
      correct: "A",
    },
    {
      question: "Jak brzmi pierwsza zasada dynamiki Newtona?",
      answers: {
        A: "Ciało pozostaje w spoczynku lub porusza się jednostajnie prostoliniowo, jeśli siły działające na nie się równoważą",
        B: "Każdej akcji towarzyszy reakcja o równej wartości i przeciwnym kierunku ",
        C: "Przyspieszenie ciała jest proporcjonalne do siły działającej na nie ",
        D: "Energia w układzie zamkniętym nie ulega zmianie",
      },
      correct: "A",
    },
    {
      question: "Która forma energii jest energią kinetyczną?",
      answers: {
        A: "Energia wiatru poruszającego wiatrak",
        B: "Energia słoneczna",
        C: "Energia zawarta w paliwie",
        D: "Energia elektryczna w baterii",
      },
      correct: "A",
    },
    {
      question:
        "Jeśli podwajamy prędkość poruszającego się ciała, jego energia kinetyczna?",
      answers: {
        A: "zwiększa się 4 razy",
        B: "zwiększa się 2 razy",
        C: "nie zmienia się",
        D: "maleje o połowę",
      },
      correct: "A",
    },
    {
      question: "Jak nazywa się siła przyciągania ciał przez Ziemię?",
      answers: {
        A: "siła grawitacji",
        B: "siła elektrostatyczna",
        C: "siła wyporu",
        D: "siła tarcia",
      },
      correct: "A",
    },
    {
      question:
        "Co stanie się z ciężarem ciała na Księżycu w porównaniu do Ziemi?",
      answers: {
        A: "Zmniejszy się 6 razy",
        B: "Zwiększy się 6 razy",
        C: "Nie zmieni się",
        D: "Zmniejszy się 2 razy",
      },
      correct: "A",
    },
    {
      question:
        "Jeśli masa ciała wynosi 10 kg, a jego objętość 2 m³, to jego gęstość wynosi:",
      answers: {
        A: "5 kg/m³",
        B: "2 kg/m³",
        C: "10 kg/m³",
        D: "20 kg/m³",
      },
      correct: "A",
    },
    {
      question: "Jeśli ciało ma gęstość mniejszą niż gęstość wody, to:",
      answers: {
        A: "Ciało zatonie",
        B: "Ciało będzie się unosić",
        C: "Ciało będzie w połowie zanurzone",
        D: "Ciało utonie natychmiast",
      },
      correct: "B",
    },
    {
      question:
        "Jeśli napięcie wynosi 12 V, a opór 6 Ω, to natężenie prądu wynosi:",
      answers: {
        A: "2 A",
        B: "6 A",
        C: "12 A",
        D: "18 A",
      },
      correct: "A",
    },
    {
      question: "Jakie ciśnienie panuje w próżni?",
      answers: { A: "0 Pa", B: "101,3 kPa", C: "1 atm", D: "760 mm Hg" },
      correct: "A",
    },
  ],
  level_three: [
    {
      question: "Ile wynosi prędkość światła w próżni?",
      answers: {
        A: "3 × 10⁸ m/s",
        B: "3 × 10⁷ m/s",
        C: "1 × 10⁸ m/s",
        D: "1 × 10⁷ m/s",
      },
      correct: "A",
    },
    {
      question: "Jakie zjawisko odpowiada za powstawanie tęczy?",
      answers: {
        A: "Załamanie i odbicie światła",
        B: "Dyfrakcja",
        C: "Absorpcja",
        D: "Rozpraszanie",
      },
      correct: "A",
    },
    {
      question:
        "Jaka siła działa na cząstkę obdarzoną ładunkiem elektrycznym, poruszającą się w polu elektromagnetycznym?",
      answers: {
        A: "Siła Lorentza",
        B: "Siła grawitacji",
        C: "Siła wyporu",
        D: "Siła tarcia",
      },
      correct: "A",
    },
    {
      question: "Co jest nośnikiem ładunku elektrycznego w metalu?",
      answers: {
        A: "elektrony",
        B: "neutrony",
        C: "jony ujemne",
        D: "jony dodatnie",
      },
      correct: "A",
    },
    {
      question: "Ile księżyców ma Wenus?",
      answers: {
        A: "0",
        B: "3",
        C: "7",
        D: "15",
      },
      correct: "A",
    },
    {
      question: "Czym różni się energia potencjalna od kinetycznej?",
      answers: {
        A: "Energia potencjalna dotyczy ruchu, a kinetyczna położenia",
        B: "Energia potencjalna dotyczy położenia, a kinetyczna ruchu",
        C: "Są to te same rodzaje energii",
        D: "Energia potencjalna jest związana z siłą",
      },
      correct: "B",
    },
    {
      question: "Który element elektroniczny wzmacnia sygnał elektryczny?",
      answers: { A: "Tranzystor", B: "Rezystor", C: "Kondensator", D: "Dioda" },
      correct: "A",
    },
  ],
  level_four: [
    {
      question: "Jaka jednostka odpowiada za pojemność kondensatora?",
      answers: { A: "F (farad)", B: "Ω (om)", C: "H (henr)", D: "T (tesla)" },
      correct: "A",
    },
    {
      question: "Jakie cząstki elementarne budują protony i neutrony?",
      answers: { A: "Kwarki", B: "Elektrony", C: "Neutrina", D: "Fermiony" },
      correct: "A",
    },
    {
      question:
        "Jak nazywa się zjawisko powstawania siły elektromotorycznej w przewodniku poruszającym się w polu magnetycznym?",
      answers: {
        A: "Indukcja elektromagnetyczna",
        B: "Efekt Halla",
        C: "Efekt fotoelektryczny",
        D: "Zjawisko Meissnera",
      },
      correct: "A",
    },
    {
      question: "Jak nazywa się jednostka strumienia magnetycznego?",
      answers: {
        A: "Wb (weber)",
        B: "T (tesla)",
        C: "H (henr)",
        D: "A (amper)",
      },
      correct: "A",
    },
    {
      question: "Co określa pierwsza zasada termodynamiki?",
      answers: {
        A: "Zasady zachowania energii",
        B: "Zależność przyspieszenia od siły",
        C: "Zależność napięcia od natężenia",
        D: "Zasady elektromagnetyzmu",
      },
      correct: "A",
    },
  ],
};

const prizeLevels = [
  "500 zł",
  "1 000 zł",
  "2 000 zł",
  "5 000 zł",
  "10 000 zł",
  "20 000 zł",
  "40 000 zł",
  "75 000 zł",
  "125 000 zł",
  "250 000 zł",
  "500 000 zł",
  "1 000 000 zł",
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
    currentRow.style.backgroundColor = "#e2aa28";
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
  let difficulty =
    currentLevel <= 4
      ? "level_one"
      : currentLevel > 4 && currentLevel <= 8
      ? "level_two"
      : currentLevel > 8 && currentLevel <= 10
      ? "level_three"
      : "level_four";
  currentQuestion = getRandomQuestion(difficulty);
  document.getElementById(
    "question-text"
  ).textContent = `Pytanie ${currentLevel}: ${currentQuestion.question}`;

  const buttons = document.querySelectorAll(".answer-btn");
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
  alert(
    isWin
      ? `Gratulacje! Wygrałeś ${prizeLevels[11]}!`
      : `Niestety, przegrałeś. Twój wynik: ${
          prizeLevels[currentLevel - 2] || "0 zł"
        }.`
  );
  document.getElementById("question-container").style.display = "none";
  document.getElementById("question-text").style.display = "none";
  document.getElementById("final-result").style.display = "inline";
  document.getElementById("phoneAFriend").style.display = "none";
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
  alert(
    `Twój towarzysz sugeruje: ${
      currentQuestion.answers[currentQuestion.correct]
    }`
  );
  document.getElementById("phoneAFriend").disabled = true;
}
