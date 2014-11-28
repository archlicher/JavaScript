function solve(args){
    var bill = args[0];
    var mood = args[1];
    var tip=0;
    if (mood == 'happy') {
        tip = bill/10;
        tip=tip.toFixed(2);
    } else if (mood == 'married'){
        tip = bill/2000;
        tip = tip.toFixed(2);
    } else if (mood == 'drunk'){
        tip = bill*3/20;
        var power = tip.toString()[0];
        power = Number(power);
        tip = Math.pow(tip,power);
        tip = tip.toFixed(2);
    } else {
        tip = bill/20;
        tip = tip.toFixed(2);
    }
    console.log(tip);
}