function solve(args){
    var message = args[0];
    while(message.search(/[^\d|]/)!=-1){
        message=message.replace(/[^\d|]/,'|');
    }
    var numbersStr = message.split('|');
    var numbers = [];
    var index = 0;
    for (var n in numbersStr){
        if(numbersStr[n]!=''){
            numbers[index]= Number(numbersStr[n]);
            index++;
        }
    }
    index = 0;
    var resultNumAsHex= [];
    for(index in numbers){
        resultNumAsHex[index]=numbers[index].toString(16).toUpperCase();
        while(resultNumAsHex[index].length<4){
            resultNumAsHex[index]='0'+resultNumAsHex[index];
        }
        resultNumAsHex[index]='0x'+resultNumAsHex[index];
    }

    console.log(resultNumAsHex.join('-'));
}