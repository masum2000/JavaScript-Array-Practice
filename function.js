// function writeSorry(add){
//     for (var i=0; i<10; i++){
//         console.log("Sorry " +add)
//     }
// }
//  writeSorry("Mizan");



// function list(chal,dal,tel){
//        var totalPrice = chal + dal+ tel;
//        return totalPrice;       
// }
// var listPrice = list(100,80,130);
// console.log("Total price of Chal Dal and Tel: ", listPrice );


// function kiloToMile(km){
//     var result = km * 0.62;
//     return result;
// }
//  var miles = kiloToMile(24);
//  console.log(miles);



// function workout(workoutName){
//     var bicepWorkout = ['bicep', 'cable cross', 'bicep forward'];
//     var chestWorkout = ['chest', 'chest fly', 'chest press'];
//     var tricepWorkout = ['tricep', 'cable cross', 'tricep leftside'];
//     if(workoutName == 'bicep'){
//         return bicepWorkout;
//     }
//     else if(workoutName == 'chest'){
//         return chestWorkout;
//     }
//     else if(workoutName == 'tricep'){
//         return tricepWorkout;
//     }
//     else{
//         return 'dont know';
//     }
// }
// var workoutPlan = workout('tricep');
// console.log(workoutPlan);

function hotelCost(myDays){

  var first10Days = 500;
  var second10Days = 300;
  var third10Days = 100;
   if ( myDays <= 10){
    var totalCost = myDays * first10Days;
    return totalCost;
   }
    else if (myDays > 10 && myDays <= 20){
        var first10DaysCost = first10Days * 10;
        remainingDays = myDays - 10;
        var totalDaysCost = remainingDays * second10Days;
        var  second11To2oDaysCost =  totalDaysCost + first10DaysCost;
        return second11To2oDaysCost;
    }
    else{
        var first10DaysCost = first10Days * 10;
        var second11To2oDaysCost = second10Days*10;
        remainingDays = myDays - 20;
        var thirdInfinityDays = remainingDays * 100;
        var totalAbove20DaysCost = first10DaysCost + second11To2oDaysCost + thirdInfinityDays;
        return totalAbove20DaysCost;
    } 
}
 var myDays = hotelCost(10);
 console.log("Sir,Your Total Rent is", myDays, 'BDT');