let allWords = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  // "Austrian Empire",
  "Azerbaijan",
  "Baden",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Bavaria",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bolivia",
  "Bosnia",
  "Botswana",
  "Brazil",
  "Brunei",
  "Brunswick",
  "Bulgaria",
  // "Burkina Faso",
  "Burma",
  "Burundi",
  // Cabo Verde
  "Cambodia",
  "Cameroon",
  "Canada",
  // Central African Republic (CAR)
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  // Congo, Democratic Republic of the
  // Congo, Republic of the
  // Costa Rica
  // Cote d'Ivoire
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia",
  "Denmark",
  "Djibouti",
  "Dominica",
  // Dominican Republic
  "Ecuador",
  "Egypt",
  "Salvador",
  // Equatorial Guinea
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  // Guinea-Bissau
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  // Liechtenstein
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  // Marshall Islands
  // Mauritania
  "Mauritius",
  "Mexico",
  // Micronesia
  "Moldova",
  "Monaco",
  "Mongolia",
  // Montenegro
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  // Netherlands
  // New Zealand
  // Nicaragua
  "Niger",
  "Nigeria",
  // North Korea
  // North Macedonia
  "Norway",

  "Oman",

  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  // Papua New Guinea
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",

  "Qatar",

  "Romania",
  "Russia",
  "Rwanda",

  // "Saint Kitts",
  // "Saint Lucia",
  // "Saint Vincent "
  "Samoa",
  // San Marino
  // Sao Tome and Principe
  "Saudi",
  "Senegal",
  "Serbia",
  "Seychelles",
  // "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon",
  "Somalia",
  "Africa",
  "Korea",
  "Sudan",
  "Spain",
  "SriLanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",

  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  // "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",

  "Uganda",
  "Ukraine",
  "UAE",
  "UK",
  "USA",
  "Uruguay",
  "Uzbekistan",

  "Vanuatu",
  "Vatican",
  "Venezuela",
  "Vietnam",

  "Yemen",
  "Zambia",
  "Zimbabwe"
];

let word = allWords[Math.floor(Math.random() * allWords.length)].toUpperCase();
let chance = 6;
let count = 0;
let con = document.getElementById("box-one");
let attemptsLeft = document.getElementById("box4");
// let img = document.getElementById("image");
let win = null;

for (let i = 0; i < word.length; i++) {
  let blankSpace = document.createElement("div");
  blankSpace.setAttribute("id", "letter_" + i);
  blankSpace.className = "blank";
  blankSpace.innerHTML = "<p>&nbsp___&nbsp<p>";
  con.appendChild(blankSpace);
}

let board1 = "QWERTYUIOP";
let board2 = "ASDFGHJKL";
let board3 = "ZXCVBNM";

let key_board1 = document.getElementById("k_board1");
for (let i = 0; i < board1.length; i++) {
  let row1 = document.createElement("div");
  row1.id = board1[i];
  row1.className = "board1";
  row1.innerHTML = board1[i] + " ";
  row1.addEventListener("click", (event) => handleClick(board1[i]));
  key_board1.appendChild(row1);
}

let key_board2 = document.getElementById("k_board2");

for (let i = 0; i < board2.length; i++) {
  let row2 = document.createElement("div");
  row2.id = board2[i];
  row2.className = "board2";
  row2.innerHTML = board2[i] + " ";
  row2.addEventListener("click", (event) => handleClick(board2[i]));
  key_board2.appendChild(row2);
}

let key_board3 = document.getElementById("k_board3");

for (let i = 0; i < board3.length; i++) {
  let row3 = document.createElement("div");
  row3.id = board3[i];
  row3.className = "board3";
  row3.innerHTML = board3[i] + " ";
  row3.addEventListener("click", (event) => handleClick(board3[i]));
  key_board3.appendChild(row3);
}

const handleClick = (el) => {
  //console.log(el);
  if (count === word.length) {
    return;
  }
  let found = false;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === el) {
      let update_blank = document.getElementById("letter_" + i);
      update_blank.innerText = word[i];
      count++;
      let foundLetter = word[i];
      let foundInner = document.getElementById(foundLetter);

      foundInner.classList.add("hide");
      found = true;
    }
    if (word[i] !== el) {
      let foundLetter = el;
      let foundInner = document.getElementById(foundLetter);
      //foundInner.setAttribute("onclick", "");
      foundInner.classList.add("hide");
    }
  }
  if (found === false) {
    chance--;

    attemptsLeft.innerHTML = `LIVES LEFT: ${chance}`;
  }
  if (chance <= 0) {
    attemptsLeft.innerHTML = `Correct Word: ${word}`;
    win = false;
    count = word.length;
  }
  if (count === word.length) {
    if (win === false) {
      return;
    }
    attemptsLeft.innerHTML = `You won!`;
  }
};
