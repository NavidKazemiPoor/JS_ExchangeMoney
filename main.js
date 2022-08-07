const btnSwap = document.getElementById("swap");
let amountOne = document.getElementById("amount-one");
let amountTwo = document.getElementById("amount-two");
let currencyOne = document.getElementById("currency-one");
let currencyTwo = document.getElementById("currency-two");

const fetchData = async () => {
  const url = `https://open.exchangerate-api.com/v6/latest/${currencyOne.value}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const { rates } = data;
    calculate(rates[currencyTwo.value]);
  } catch (error) {
    console.log(error);
  }
};
const calculate = (rate) => {
  amountTwo.value = (amountOne.value * rate).toFixed(2);
  
};
const changeSelect = () => {
  fetchData();
};
currencyOne.addEventListener("change", changeSelect);
currencyTwo.addEventListener('change',changeSelect);
btnSwap.addEventListener('click',()=>{
  let temp = currencyTwo.value;
  currencyTwo.value =  currencyOne.value;
  currencyOne.value = temp;
    fetchData();
});

amountOne.addEventListener("input", () => {
  fetchData();
});

fetchData();
