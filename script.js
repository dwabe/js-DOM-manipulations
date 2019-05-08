// Tworzymy zmienną do której pobieramy obiekt

var zmieniamy = document.querySelector('h1') ;

// Dokonujemy zmiany wielkości fontów pierwszego h1

zmieniamy.style.fontSize = '52px';

zmieniamy.style.color = 'red';

zmieniamy.style.fontFamily = 'Arial';

zmieniamy.style.borderStyle = "solid";

zmieniamy.style.borderColor = 'green';

var istniejacyElement = document.querySelector('ul');

istniejacyElement.innerHTML += '<li>Pierwszy nowy element listy </li><li>Drugi nowy element listy </li>';

// Pobieram kawałek listy istniejacyElement - substring(0,28) - pobierze 28 pierwszych znaków

var pobieram = istniejacyElement.innerHTML.substring(0,28);

// Dodaję pobrany kawałek listy pobieram do istniejacyElement

istniejacyElement.innerHTML += pobieram;

// Tworzenie nowego elementu na stronie www

// 'element' = document.createElement('typ') - nie spowoduje to dodanie nowego elementu na stronie, tylko stworzenie nowego elementu na stronie i jeszcze trzeba będzie go dodać

// Tworzę nowy element na stronie

var nowyElement = document.createElement('li');

// Tworzę nową zawartość tekstową przypisaną do nowego elementu na stronie

nowyElement.textContent = 'To jest new element stworzony poprzez document.createElement()';

// Teraz czas na dodanie stworzonego elementu do strony, wykorzystując metodę appendChild()

istniejacyElement.appendChild(nowyElement);

// I jeszcze raz to sam, ale dodam li przed istniejącym li

var wewnElement = document.createElement('li');

wewnElement.textContent = 'To jest nowy punkt, wstawiony za pomocą createElement() do innego punktu';

// wstawionyElement = elementRodzic.insertBefore(nowyElement,danyElement)

// Pobieramy tablicę obiektów - li

var istniejaceElemnty = document.getElementsByTagName('li');

// Określam gdzie chcę wstawić nowy element - wykonuję referencję do pozycji listy o indexie 5

var referencjaDoistniejacyElement = istniejaceElemnty[5];

// Dodaję przez określoną referencję nowy elementFromPoint

istniejacyElement.insertBefore(wewnElement, referencjaDoistniejacyElement);

// Powstało za dużo punktów, jednego usunę. Mamy już

// var istniejacyElement = document.querySelector('ul');

// Brakuje mi referencji do li

var referencjaLi = document.querySelector('li');
// Usunę dzięki JavaScript pierwszy li - pierwszy punkt właśnie zniknął :)

istniejacyElement.removeChild(referencjaLi);

// Usuną jeszcze drugi punkt

var referencjaLi = document.querySelector('li');
istniejacyElement.removeChild(referencjaLi);

// Usuńmy teraz pierwszy nagłówek h1

var referencjaH1 = document.querySelector('h1');

referencjaH1.parentElement.removeChild(referencjaH1);

// Może jednak przyda się usunięty nagłówek? Skoro tak - trzeba by go dodać :)

// Tworzę referencję do p i dołączam do p jako "dziecko"-child nagłówek

var referdoP = document.querySelector('p');

referdoP.appendChild(referencjaH1);

// var referdoDiv = document.querySelector('div');

// referdoDiv.appendChild(referencjaH1);

// Dostęp do elementów - do podejrzenia w konsoli JS

var writting1 = istniejacyElement.childNodes;
console.log(writting1);

console.log(istniejacyElement.lastChild);

console.log(istniejacyElement.firstChild);

console.log(istniejacyElement.lastElementChild);

console.log(istniejacyElement.firstElementChild);

console.log(istniejacyElement.firstElementChild);
console.log(istniejacyElement.children[2]);

console.log(istniejacyElement.children[5]);

console.log(istniejacyElement.nextSibling);

console.log(istniejacyElement.previousSibling);

console.log(istniejacyElement.nextElementSibling);
console.log(istniejacyElement.previousElementSibling);

// Napisało [object NodeList] czyli pobraliśmy coś?