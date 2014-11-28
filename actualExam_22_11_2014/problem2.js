function solve(args){
    var matrix = [args.length];
    var result = [args.length];
    for (var i=0;i<args.length;i++){
        matrix[i]=args[i].toLowerCase().split('');
        result[i]=args[i].split('');
    }
    for (var r=1;r<matrix.length-1;r++){
        for (var col=1;col<matrix[r].length;col++){
            var a = matrix[r-1][col-1];
            var b = matrix[r-1][col+1];
            var c = matrix[r][col];
            var d = matrix[r+1][col-1];
            var e = matrix[r+1][col+1];
            if(a==b && b==c && c==d && d==e){
                result[r-1][col-1] = '';
                result[r-1][col+1] = '';
                result[r][col] = '';
                result[r+1][col-1] = '';
                result[r+1][col+1] = '';
            }
        }
    }
    for (var i in result) {
        console.log(result[i].join(''));
    }
}