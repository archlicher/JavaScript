function solve(args){
    var values = [];
    var stringValues = [];
    var pattern = /<\/td><td>(.*)<\/td><td>(.*)<\/td><td>(.*)<\/td><\/tr>/g;
    for (var str=2;str<args.length-1;str++){
        values[str-2] =[];
        stringValues[str-2]=[];
        var match;
        var value =0;
        while (match = pattern.exec(args[str])){
            if (match[1]!='-') {
                stringValues[str-2].push(match[1])
                value = Number(match[1]);
                values[str-2].push(value);
            }
            if (match[2]!='-') {
                stringValues[str-2].push(match[2])
                value = Number(match[2]);
                values[str-2].push(value);
            }
            if (match[3]!='-') {
                stringValues[str-2].push(match[3])
                value = Number(match[3]);
                values[str-2].push(value);
            }
        }
    }
    var data = false;
    for(var l in values){
        if(values[l].length>0) {
            data =true;
            break;
        }
    }
    var sums =[];
    var index = -1;
    for(var i=0;i<values.length;i++){
        sums[i]=0;
        for(var j=0;j<values[i].length;j++){
            sums[i]+=values[i][j];
        }
    }
    var maxSum = -3000001;
    for (var sum in sums){
        if(sums[sum]>maxSum){
            maxSum=sums[sum];
            index=sum;
        }
    }
    if(data) {
        var output = '' + maxSum + ' = ';
        for (var val in stringValues[index]) {
            output += stringValues[index][val];
            if (val < stringValues[index].length - 1) output += ' + ';
        }
        console.log(output);
    }else console.log('no data');
}