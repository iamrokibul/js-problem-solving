// https://github.com/rootcoderboy/js-problem-solving

// kilometerToMeter
function kilometerToMeter(km){
    var meter = km * 1000;
    return meter;
}
var result = kilometerToMeter(20);
console.log(result);



// budgetCalculator
function budgetCalculator(watch, mobile, laptop) {
    var watchPrice = 50 * watch;
    var mobilePrice = 100 * mobile;
    var laptopPrice = 500 * laptop;

    var totalPrice = watchPrice + mobilePrice + laptopPrice;
    return totalPrice;
}
var result = budgetCalculator(1, 1, 1);
console.log(result);


// hotelCost
function hotelCost(days){
    var tenDays = 100 * days;
    var twentyDays = 80 * days;
    var afterTwentyDays = 50 * days;
    if(days <= 10){
        return tenDays;
    }
    else if(days <= 20){
        return twentyDays;
    }
    else{
        return afterTwentyDays;
    }
}
var result = hotelCost(5);
console.log(result);



// megaFriend
function megaFriend(name)
  {
    var nameOfPosition = name[0].length;
    var bigName = name[0];
    for (var i = 1; i < name.length; i++) {
        var largeName = name[i].length;
        if (largeName > nameOfPosition) {
            bigName = name[i];
            nameOfPosition = largeName;
        }
    }
    return bigName;
}
var allNames = ["Kalam", "Alam", "Motin", "Rakibul Hasan",  "Maidul", "Zabbar", "Adbul Alim"];
var result = megaFriend(allNames);
console.log(result);
