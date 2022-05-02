//Question 1:
//Given array
const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

//1a. Function generates new array which doubles quantity & price
function doubleArray(lst) {
  const doubledArray = [];
  for (let i = 0; i < lst.length; i++) {
    let tmp = {};
    let doubleQ = lst[i].quantity * 2;
    let doubleP = lst[i].price * 2;
    tmp["quantity"] = doubleQ;
    tmp["price"] = doubleP;
    doubledArray.push(tmp);
  }
  return doubledArray;
}

//console.log("Doubled quantity & price array: ");
//console.log(doubleArray(itemsObject));

//---------------------------------------------------------------------------------------

//1b. Function generates new array which contains item quantity > 2 & price > 300 only
function conditional(lst) {
  const conditionalArray = [];

  for (let i = 0; i < lst.length; i++) {
    if (lst[i].quantity > 2 && lst[i].price > 300) {
      conditionalArray.push(lst[i]);
    }
  }
  return conditionalArray;
}

//console.log("Higher quantity & price array: ");
//console.log(conditional(itemsObject));

//--------------------------------------------------------------------------------------

//1c. Function calculates total value of the items
function totalVal(lst) {
  let totalValue = 0;
  for (let i = 0; i < lst.length; i++) {
    totalValue += lst[i].quantity * lst[i].price;
  }
  return totalValue;
}

//console.log("Total Value= $" + totalVal(itemsObject));

//--------------------------------------------------------------------------------------
//Question 2:
//Given string; remove all non-alphabet chars, spaces and convert to lowercase
const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";

function modString(str) {
  const newString = str
    .split("   ")
    .join(" ")
    .split("  ")
    .join(" ")
    .split("-")
    .join(" ")
    .toLowerCase();
  return newString;
}

console.log(string);
console.log("Modified string: " + modString(string));
