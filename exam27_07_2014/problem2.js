function solve(input){
    var output = [];
    for (var str in input){
        output[str]=input[str].split('');
    }
    for (var row =1; row<input.length;row++) {
        var maxCol = Math.min(input[row-1].length-2, input[row].length-3)
        for (var col = 0; col<=maxCol;col++) {
            var a = input[row][col];
            var b = input[row][col+1];
            var c = input[row][col+2];
            var d = input[row-1][col+1];
            if (a==b && b==c && c==d){
                output[row-1][col+1] = '*';
                output[row][col+1] = '*';
                output[row][col] = '*';
                output[row][col+2] = '*';
            }
        }
    }
    for (var outStr in output){
        console.log(output[outStr].join(''));
    }
}