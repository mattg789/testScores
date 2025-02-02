
var futureValue;
    
// get user entries
var investment = prompt("Enter investment amount as xxxxx.xx");
investment = parseFloat(investment);
var rate = prompt("Enter interest rate as xx.x");
rate = parseFloat(rate);
var years = prompt("Enter number of years");
years = parseInt(years);
    
    // calulate future value
futureValue = investment;
for (var i = 1; i <= years; i++ ) {
      futureValue = futureValue + (futureValue * rate / 100);
    }
    futureValue = parseInt(futureValue);
    document.write("Investment amount = " + investment);
    document.write(" Interest rate = " + rate);
    document.write(" Years = " + years);
    document.write(" Future Value is " + futureValue + "<br><br>");    
