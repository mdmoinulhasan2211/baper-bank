// handeln deposite button

document.getElementById('Deposit-button').addEventListener('click', function (){
   const depositInput = document.getElementById('Deposit-input');
   const newDepositAmaoundText = depositInput.value;
   const newDepositAmaound = parseFloat(newDepositAmaoundText);

//update deposit

   const depositeTotal = document.getElementById('deposit-total');

   const previoustDepositeText = depositeTotal.innerText;

   const previousDepositAmaound = parseFloat(previoustDepositeText);
   const newDepositeTotal = previousDepositAmaound +  newDepositAmaound;

   //const newDepositeTotal
  depositeTotal.innerText = newDepositeTotal;


  //update balance
 const balanceTotal = document.getElementById('balance-total');

 const balanceTotalText = balanceTotal.innerText;
 const previousBalanceTotal = parseFloat(balanceTotalText);
 const newBalanceTotal = previousBalanceTotal + newDepositAmaound;
 balanceTotal.innerText = newBalanceTotal;

  //clear the input value 
  depositInput.value = '' ;
});


//withdraw stystem 
document.getElementById('Withdraw-buttton').addEventListener('click', function(){
  const withdrawInput = document.getElementById('Withdraw-input');
  const withdrawAmoundText = withdrawInput.value;
  const withdrawAmound = parseFloat(withdrawAmoundText);
 

//set withdraw total
const withdrawTotal = document.getElementById('withdraw-total');
const previousWithddrawTotalText = withdrawTotal.innerText;
const previousWithddrawTotal = parseFloat(previousWithddrawTotalText);
withdrawTotal.innerText = previousWithddrawTotal + withdrawAmound;


//clear withdraw input
withdrawInput.value = '' ;

});



