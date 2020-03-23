
let buttonElement = document.getElementById("buttonCalculate");

buttonElement.addEventListener("click", depositCounter);

function depositCounter() {
  let initialDeposit = +document.getElementById("deposit").value;
  let addReplenishment = +document.getElementById("monthlyAdd").value;
  let interestRate = +document.getElementById("interest").value;
  let depositTerm = +document.getElementById("term").value;

  let n = document.getElementById("selectTerm").options.selectedIndex;

  if (n == 0) {
    // when selected Monthly replenishment
    let month = Math.trunc(depositTerm / 30);
    if (
      (initialDeposit >= 0) &
      (addReplenishment >= 0) &
      (interestRate > 0) &
      (interestRate <= 100)
    ) {
      for (let i = 0; i < month; i++) {
        initialDeposit *= 1 + (interestRate * 30) / (100 * 360);
        initialDeposit += addReplenishment;
      }
      let result = initialDeposit.toFixed(2);
      let depositObject = {
        "Deposit amount at the end of term": result,
        "Sum of replenishment": addReplenishment * month,
        "Sum of interest rate": (interestRate / 12) * month
      };
      alert(result);
      console.log(depositObject);
    } else {
      document.getElementById("error").innerHTML =
        "Please try with correct numbers";
      document.getElementById("error").style.visibility = "visible";
      console.log(NaN);
    }
  } else if (n == 1) {
    // when selected Quarterly replenishment
    let month = Math.trunc(depositTerm / 90);
    if (
      (initialDeposit >= 0) &
      (addReplenishment >= 0) &
      (interestRate > 0) &
      (interestRate <= 100)
    ) {
      for (let i = 0; i < month; i++) {
        initialDeposit *= 1 + (interestRate * 30) / (100 * 360);
        initialDeposit += addReplenishment;
      }
      let result = initialDeposit.toFixed(2);
      let depositObject = {
        "Deposit amount at the end of term": result,
        "Sum of replenishment": addReplenishment * month,
        "Sum of interest rate": (interestRate / 12) * month
      };
      alert(result);
      console.log(depositObject);
    } else {
      document.getElementById("error").innerHTML =
        "Please try with correct numbers";
      document.getElementById("error").style.visibility = "visible";
      console.log(NaN);
    }
  } else if (n == 2) {
    // when selected Yearly replenishment
    let month = Math.trunc(depositTerm / 360);
    if (
      (initialDeposit >= 0) &
      (addReplenishment >= 0) &
      (interestRate > 0) &
      (interestRate <= 100)
    ) {
      for (let i = 0; i < month; i++) {
        initialDeposit *= 1 + (interestRate * 30) / (100 * 360);
        initialDeposit += addReplenishment;
      }
      let result = initialDeposit.toFixed(2);
      let depositObject = {
        "Deposit amount at the end of term": result,
        "Sum of replenishment": addReplenishment * month,
        "Sum of interest rate": (interestRate / 12) * month
      };
      alert(result);
      console.log(depositObject);
    } else {
      document.getElementById("error").innerHTML =
        "Please try with correct numbers";
      document.getElementById("error").style.visibility = "visible";
      console.log(NaN);
    }
  }
}
