function solve(args){
    var output = {};
    var result ={};
    var calcRank ={};
    for(var i in args){
        var line = args[i].split('|');
        if(!result[line[0]]) result[line[0]] = {'age':'','name':'','opponents':[],'rank':''};
        if(!calcRank[line[0]]) calcRank[line[0]]=[];
        if(line[1]=='win') {
            calcRank[line[0]].push('win');
            result[line[0]].opponents.push(line[2]);
        }
        else if(line[1]=='loss') {
            calcRank[line[0]].push('loss');
            result[line[0]].opponents.push(line[2]);
        }
        else if(line[1]=='age') result[line[0]].age = line[2];
        else if(line[1]=='name') result[line[0]].name = line[2];
    }
    var countWin = 0;
    var countLoss = 0;
    var rank = 0;
    for(var ra in calcRank){
        for(var st in calcRank[ra]){
            if(calcRank[ra][st]=='win') countWin++;
            else countLoss++;
        }
        rank = (countWin+1)/(countLoss+1);
        rank = rank.toFixed(2);
        result[ra].rank = rank.toString();
        countWin = 0;
        countLoss = 0;
        rank=0;
    }
    for(var color in result)result[color].opponents.sort();
    result = sortObj(result);
    function sortObj(obj){
        var sortedObj ={};
        var keysSorted = Object.keys(obj).sort();
        for(var key in keysSorted){
            sortedObj[keysSorted[key]] = obj[keysSorted[key]];
        }
        return sortedObj;
    }
    for (var color in result){
        if(result[color].name!='' && result[color].age!=''){
            output[color] = {};
            output[color] = result[color];
        }
    }
    console.log(JSON.stringify(output));
}