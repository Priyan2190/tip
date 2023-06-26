//  calculateBill()
// increasePeople()
// decreasePeople()
const billtotaldiv = document.getElementById("billtotal");
const tipinputdiv = document.getElementById("tipin");
const numberofpeoplediv = document.getElementById("numberofpeople");
const perPersonTotaldiv = document.getElementById("perPersonTotal");

let numberofpeople = Number(numberofpeoplediv.innerText);
calculateBill = () => {
  const bill = Number(billtotaldiv.value);

  const tipPercentage = Number(tipinputdiv.value) / 100;

  const totaltip = Number(bill * tipPercentage);

  const payable = bill + totaltip;

  const perPerson = Number(payable / numberofpeople);
  console.log({ perPerson });

  perPersonTotaldiv.innerText = `${"Rs." + perPerson}`;
};
 

const increasePeople = () =>{
    numberofpeople +=1
    numberofpeoplediv.innerText = numberofpeople
calculateBill()
}
const decreasePeople = () =>{
    if(numberofpeople <=1){return};
    numberofpeople -=1
    numberofpeoplediv.innerText= numberofpeople
 calculateBill()
}