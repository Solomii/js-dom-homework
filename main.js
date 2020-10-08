// Домашка
// 1. створити список з допомогою роботи з домом, пронумерувати
// список та вивести всі його значення.Населення відобразити в млн "40 млн".
// Київ та Україна підсвітити синьо - жовтим кольором.
let сountryList = [
  {
    country: "Україна",

    capital: "Київ",
    count: 40000000,
  },

  {
    country: "Грузія",

    capital: "Тбілісі",

    count: 10000000,
  },

  {
    country: "Великобританія",

    capital: "Лондон",
    count: 100000000,
  },

  {
    country: "США",

    capital: "Вашингтон",

    count: 300000000,
  },
];

let div = document.getElementById("countryId");
let ol = document.createElement("ol");
div.appendChild(ol);
function list() {
  for (let i = 0; i < сountryList.length; i++) {
    let li = document.createElement("li");
    let countryName = document.createElement("p");
    let countryCapital = document.createElement("p");
    const population = document.createElement("p");
    countryName.innerHTML = `${сountryList[i].country}`;
    countryCapital.innerHTML = `${сountryList[i].capital}`;
    population.innerHTML = `${сountryList[i].count / 1000000} млн`;
    ol.appendChild(li);
    li.appendChild(countryName);
    li.appendChild(countryCapital);
    li.appendChild(population);

    if (сountryList[i].country == "Україна") {
      countryName.style.color = "blue";
    }
    if (сountryList[i].capital == "Київ") {
      countryCapital.style.color = "yellow";
    }
  }
}
list();
console.log();

// 2. Створити список в якому можна буде довільно
// змінювати колір для айтемів(палітра мінімум з 5 кольорів).
