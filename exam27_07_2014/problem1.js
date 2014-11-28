function solve(input){
    var start = Number(input[0]);
    var end = Number(input[1]);
    fiboNums = calcArrayFibo(end);
    var output = '<table>\n<tr><th>Num</th><th>Square</th><th>Fib</th></tr>';
    console.log(output);
    for(var num = start;num<=end;num++) {
        var isFib = fiboNums[num]? 'yes':'no';
        printTable(num,isFib);
    }
    output = '</table>';
    console.log(output);
    function calcArrayFibo(maxNum){
        var fiboNums = {1:true};
        var f1 = 1;
        var f2 = 1;
        while (true) {
            var f3 = f1+f2;
            if(f3>maxNum){
                return fiboNums
            }
            fiboNums[f3]=true;
            f1=f2;
            f2=f3;
        }
    }
    function printTable(number,isFibona){
        output='<tr><td>'+number+'</td><td>'+Math.pow(number,2)+'</td><td>'+isFibona+'</td></tr>';
        console.log(output);
    }
}